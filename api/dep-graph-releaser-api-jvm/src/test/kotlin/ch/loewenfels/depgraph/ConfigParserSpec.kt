package ch.loewenfels.depgraph

import ch.tutteli.atrium.api.cc.en_GB.*
import ch.tutteli.atrium.assert
import ch.tutteli.atrium.expect
import org.jetbrains.spek.api.Spek
import org.jetbrains.spek.api.dsl.context
import org.jetbrains.spek.api.dsl.describe
import org.jetbrains.spek.api.dsl.given
import org.jetbrains.spek.api.dsl.it
import java.util.regex.PatternSyntaxException
import kotlin.reflect.KFunction1

class ConfigParserSpec : Spek({
    val fns = listOf<KFunction1<String, List<Pair<Regex, *>>>>(
        ::parseRemoteRegex,
        ::parseRegexParams,
        ::parseBuildWithParamJobs
    )

    describe("empty string") {
        fns.forEach { fn ->
            context(fn.name) {
                it("returns an empty list") {
                    assert(fn("")).isEmpty()
                }
            }
        }
    }

    describe("common validation errors in regex") {
        listOf<(String) -> Any>(
            ::parseRemoteRegex,
            ::parseRegexParams,
            ::parseBuildWithParamJobs
        ).forEach { fn ->
            given("empty regex") {
                it("throws an IllegalArgumentException") {
                    expect {
                        fn("#")
                    }.toThrow<IllegalArgumentException> { messageContains("regex requires at least one character") }
                }
            }

            given("# missing") {
                it("throws an IllegalArgumentException mentioning # is missing") {
                    expect {
                        fn(".*test")
                    }.toThrow<IllegalArgumentException> { messageContains("You forgot to separate regex from the rest with #") }
                }
            }

            given("open bracket") {
                it("throws a PatternSyntaxException") {
                    expect {
                        fn("[#")
                    }.toThrow<PatternSyntaxException> {}
                }
            }
        }
    }

    describe("fun parseRemoteRegex") {
        describe("validation errors") {

            given("no url defined") {
                it("throws an IllegalArgumentException mentioning url required") {
                    expect {
                        parseRemoteRegex(".*#")
                    }.toThrow<IllegalArgumentException> { messageContains("remoteRegex requires") }
                }
            }
            given("blank url defined") {
                it("throws an IllegalArgumentException mentioning url required") {
                    expect {
                        parseRemoteRegex(".*#   ")
                    }.toThrow<IllegalArgumentException> { messageContains("remoteRegex requires") }
                }
            }

            given("url starts with http://") {
                it("throws an IllegalArgumentException mentioning url requires https") {
                    expect {
                        parseRemoteRegex(".*#http://example.com")
                    }.toThrow<IllegalArgumentException> { messageContains("remoteRegex requires", "https") }
                }
            }

            given("second config value does not have a #") {
                it("throws an IllegalArgumentException mentioning # is missing") {
                    expect {
                        parseRemoteRegex(".*#https://test.com\n.*https://test2.com")
                    }.toThrow<IllegalArgumentException> { messageContains("You forgot to separate regex from the rest with #") }
                }
            }
        }

        describe("regex with newline, whitespace and tabs") {
            it("removes them from resulting regex") {
                val result = parseRemoteRegex("\nhello\t  sister#https://example.com")
                assert(result).hasSize(1)
                val (regex, _) = result[0]
                assert(regex.pattern).toBe("hellosister")
            }
        }

        describe("url with whitespace and tabs") {
            it("they remain in the url") {
                val expectedUrl = "https://example.com/\thello  sister"
                val result = parseRemoteRegex(".*#$expectedUrl")
                assert(result).hasSize(1)
                val (_, url) = result[0]
                assert(url).toBe(expectedUrl)
            }
        }

        describe("newline and whitespace at the beginning and at the end") {
            it("white space and newline is removed") {
                val result = parseRemoteRegex("\n              hello\t  sister#https://example.com\n            ")
                assert(result).hasSize(1)
                val (regex, _) = result[0]
                assert(regex.pattern).toBe("hellosister")
            }
        }

        describe("two config separated by newline") {
            it("returns list with two pairs") {
                val result = parseRemoteRegex("a#https://example.com\nb#https://example2.com")
                //TODO simplify if Atrium provides shortcut accessors for first, second
                assert(result).containsExactly(
                    {
                        first.property(Regex::pattern).toBe("a")
                        second.toBe("https://example.com")
                    },
                    {
                        first.property(Regex::pattern).toBe("b")
                        second.toBe("https://example2.com")
                    }
                )
            }
        }
    }

    describe("fun parseRegexParams") {
        describe("validation errors") {
            listOf("", ".*#a=b\n").forEach { prefix ->
                context("first regex is `$prefix`") {
                    given("no parameters defined") {
                        it("throws an IllegalArgumentException mentioning parameters required") {
                            expect {
                                parseRegexParams("$prefix.*#")
                            }.toThrow<IllegalArgumentException> { messageContains("A regexParam requires at least one parameter") }
                        }
                    }
                    given("one parameter defined but without name") {
                        it("throws an IllegalArgumentException mentioning parameters required") {
                            expect {
                                parseRegexParams("$prefix.*#=a")
                            }.toThrow<IllegalArgumentException> { messageContains("Parameter without name") }
                        }
                    }
                    given("one parameter defined but without value") {
                        it("throws an IllegalArgumentException mentioning parameters required") {
                            expect {
                                parseRegexParams("$prefix.*#a")
                            }.toThrow<IllegalArgumentException> { messageContains("regexParam does not have a value") }
                        }
                    }
                    given("second parameter without name") {
                        it("throws an IllegalArgumentException mentioning parameters required") {
                            expect {
                                parseRegexParams("$prefix.*#a=b;=c")
                            }.toThrow<IllegalArgumentException> { messageContains("Parameter without name") }
                        }
                    }
                    given("second parameter without value") {
                        it("throws an IllegalArgumentException mentioning parameters required") {
                            expect {
                                parseRegexParams("$prefix.*#a=b;c")
                            }.toThrow<IllegalArgumentException> { messageContains("regexParam does not have a value") }
                        }
                    }
                    given("second parameter without name and value") {
                        it("throws an IllegalArgumentException mentioning parameters required") {
                            expect {
                                parseRegexParams("$prefix.*#a=b;;c=d")
                            }.toThrow<IllegalArgumentException> { messageContains("Param without name and value") }
                        }
                    }
                }
            }
        }
    }
})
