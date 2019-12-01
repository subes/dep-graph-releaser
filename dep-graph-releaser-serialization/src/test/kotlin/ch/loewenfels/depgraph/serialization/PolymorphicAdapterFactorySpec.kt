package ch.loewenfels.depgraph.serialization

import ch.loewenfels.depgraph.data.ProjectId
import ch.loewenfels.depgraph.data.serialization.PolymorphSerializable
import ch.loewenfels.depgraph.serialization.PolymorphicAdapterFactory.Companion.PAYLOAD
import ch.loewenfels.depgraph.serialization.PolymorphicAdapterFactory.Companion.TYPE
import ch.tutteli.atrium.api.cc.en_GB.*
import ch.tutteli.atrium.assert
import ch.tutteli.atrium.expect
import com.squareup.moshi.JsonDataException
import com.squareup.moshi.JsonReader
import com.squareup.moshi.Moshi
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import org.spekframework.spek2.Spek
import org.spekframework.spek2.style.specification.describe
import java.io.EOFException

object PolymorphicAdapterFactorySpec : Spek({

    val testee = PolymorphicAdapterFactory(ProjectId::class.java, listOf(DummyProjectIdTypeIdMapper()))
    val moshi = Moshi.Builder()
        .add(KotlinJsonAdapterFactory())
        .build()
    @Suppress("UNCHECKED_CAST")
    val adapter = testee.create(ProjectId::class.java, mutableSetOf(), moshi) as NonNullJsonAdapter<ProjectId>
    val notType = "notType"
    val typeDummy = """"$TYPE":"${DummyProjectId.TYPE_ID}""""

    describe("Adapter creation") {

        describe("validation errors") {
            context("not an interface nor an abstract class passed into the constructor") {
                class Dummy(override val typeId: String) : PolymorphSerializable

                it("throws an IllegalArgumentException containing the wrong type") {
                    expect {
                        PolymorphicAdapterFactory(Dummy::class.java, listOf())
                    }.toThrow<IllegalArgumentException> {
                        messageContains(Dummy::class.java.name)
                    }
                }
            }
        }

        context("another type") {
            it("returns `null`") {
                val result = testee.create(PolymorphicAdapterFactorySpec::class.java, mutableSetOf(), moshi)
                assert(result).toBe(null)
            }
        }

        context("the correct type") {
            it("returns an adapter") {
                val result = testee.create(ProjectId::class.java, mutableSetOf(), moshi)
                assert(result).notToBeNull {}
            }
        }
    }

    describe("serialization") {
        describe("validation errors") {

            context("anonymous class") {
                it("throws an IllegalArgumentException") {
                    val value = object : ProjectId {
                        override val typeId = "anon"
                        override val identifier = "test"
                    }
                    expect {
                        adapter.toJson(value)
                    }.toThrow<IllegalArgumentException> {
                        message { contains(value::class.java.name) }
                    }
                }
            }
        }

        context("serialize ${DummyProjectId::class.java.simpleName}") {
            val result = adapter.toJson(DummyProjectId("test"))
            it("contains $typeDummy") {
                assert(result).contains(typeDummy)
            }
            it("contains ${DummyProjectId::identifier.name}") {
                assert(result).contains(""""identifier":"test"""")
            }
        }
    }

    describe("deserialization") {
        describe("validation errors") {

            context("empty string") {
                it("throws an EOFException") {
                    expect {
                        adapter.fromJson("")
                    }.toThrow<EOFException> {}
                }
            }

            context("json with top-level array instead of object") {
                it("throws an EOFException") {
                    expect {
                        adapter.fromJson("""[{$typeDummy, "$PAYLOAD": "asdf"}]""")
                    }.toThrow<JsonDataException> {
                        message { contains(JsonReader.Token.BEGIN_OBJECT.name) }
                    }
                }
            }

            listOf(PAYLOAD, notType).forEach { wrongType ->
                context("json with field `$wrongType` as first field instead of `$TYPE`") {
                    it("throws an IllegalArgumentException containing expected and given field name") {
                        expect {
                            adapter.fromJson("""{"$wrongType": 1, "$PAYLOAD": "bla"}""")
                        }.toThrow<IllegalArgumentException> {
                            message { contains("Expected: $TYPE", "Given: $wrongType") }
                        }
                    }
                }
            }

            listOf(TYPE, notType).forEach { wrongType ->
                context("json with field `$wrongType` as second field instead of `$PAYLOAD`") {
                    it("throws an IllegalArgumentException containing expected and given field name") {
                        expect {
                            adapter.fromJson("""{$typeDummy, "$wrongType": 1}""")
                        }.toThrow<IllegalArgumentException> {
                            message { contains("Expected: $PAYLOAD", "Given: $wrongType") }
                        }
                    }
                }
            }

            context("json with unknown typeId as $TYPE") {
                it("throws an IllegalStateException") {
                    val typeId = """AnUnknownTypeId"""
                    expect {
                        adapter.fromJson("""{"$TYPE": "$typeId"}""")
                    }.toThrow<IllegalStateException> { messageContains("No TypeIdMapper found for entity with type id $typeId") }
                }
            }

            context("json with empty $PAYLOAD") {
                it("throws a JsonDataException") {
                    expect {
                        adapter.fromJson("""{$typeDummy, "$PAYLOAD":{}}""")
                    }.toThrow<JsonDataException> {
                        message { contains("Required value 'identifier' missing at \$.$PAYLOAD") }
                    }
                }
            }

            context("json with incomplete type (not all required fields are set)") {
                it("throws a JsonDataException") {
                    expect {
                        adapter.fromJson("""{$typeDummy, "$PAYLOAD":{"version":"1.0"}}""")
                    }.toThrow<JsonDataException> {
                        message { contains("Required value 'identifier' missing") }
                    }
                }
            }
        }

        val identifier = """com.example:example"""
        val version = "2.0"
        mapOf(
            "expected order" to """"identifier":"$identifier", "version": "$version"""",
            "flipped order" to """"version": "$version", "identifier":"$identifier""""
        ).forEach { (order, fields) ->
            context("deserialize ${DummyProjectId::class.java.simpleName} fields in $order") {

                val result = adapter.fromJson("""{$typeDummy, "$PAYLOAD": {$fields}}""")

                it("is not `null` and identifier is set") {
                    assert(result).notToBeNull {
                        property(subject::identifier).toBe(identifier)
                    }
                }
            }
        }
    }

    describe("serialize and deserialize (round-trip)") {
        val original = DummyProjectId("test")
        val json = adapter.toJson(original)
        val result = adapter.fromJson(json)
        context("serialize and deserialize") {
            it("it is an equal object") {
                assert(result).notToBeNull { toBe(original) }
            }
            it("it is twice the same JSON if serialized again") {
                val jsonResult = adapter.toJson(result)
                assert(jsonResult).toBe(json)
            }
        }
    }
})
