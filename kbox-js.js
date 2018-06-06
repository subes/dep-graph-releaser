if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kbox-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kbox-js'.");
}
this['kbox-js'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var equals = Kotlin.equals;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toString = Kotlin.toString;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var mapIndexed = Kotlin.kotlin.sequences.mapIndexed_b7yuyq$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var appendToStringBuilder = defineInlineFunction('kbox-js.ch.tutteli.kbox.appendToStringBuilder_d2zxro$', wrapFunction(function () {
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    return function ($receiver, sb, separator, append) {
      var $receiver_0 = asList($receiver);
      var tmp$;
      var size = $receiver_0.size;
      if (size > 0) {
        append($receiver_0.get_za3lpa$(0));
      }
      tmp$ = size - 1 | 0;
      for (var i = 1; i < tmp$; i++) {
        sb.append_gw00v9$(separator);
        append($receiver_0.get_za3lpa$(i));
      }
      if (size > 1) {
        sb.append_gw00v9$(separator);
        append($receiver_0.get_za3lpa$(size - 1 | 0));
      }
    };
  }));
  var appendToStringBuilder_0 = defineInlineFunction('kbox-js.ch.tutteli.kbox.appendToStringBuilder_ic12ii$', wrapFunction(function () {
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    return function ($receiver, sb, separator, lastSeparator, append) {
      var $receiver_0 = asList($receiver);
      var tmp$;
      var size = $receiver_0.size;
      if (size > 0) {
        append($receiver_0.get_za3lpa$(0));
      }
      tmp$ = size - 1 | 0;
      for (var i = 1; i < tmp$; i++) {
        sb.append_gw00v9$(separator);
        append($receiver_0.get_za3lpa$(i));
      }
      if (size > 1) {
        sb.append_gw00v9$(lastSeparator);
        append($receiver_0.get_za3lpa$(size - 1 | 0));
      }
    };
  }));
  var appendToStringBuilder_1 = defineInlineFunction('kbox-js.ch.tutteli.kbox.appendToStringBuilder_76lgll$', function ($receiver, sb, separator, append) {
    var itr = $receiver.iterator();
    if (itr.hasNext()) {
      append(itr.next());
    }
    while (itr.hasNext()) {
      sb.append_gw00v9$(separator);
      append(itr.next());
    }
  });
  var appendToStringBuilder_2 = defineInlineFunction('kbox-js.ch.tutteli.kbox.appendToStringBuilder_1pmqlz$', function ($receiver, sb, separator, lastSeparator, append) {
    var tmp$;
    var size = $receiver.size;
    if (size > 0) {
      append($receiver.get_za3lpa$(0));
    }
    tmp$ = size - 1 | 0;
    for (var i = 1; i < tmp$; i++) {
      sb.append_gw00v9$(separator);
      append($receiver.get_za3lpa$(i));
    }
    if (size > 1) {
      sb.append_gw00v9$(lastSeparator);
      append($receiver.get_za3lpa$(size - 1 | 0));
    }
  });
  var appendToStringBuilder_3 = defineInlineFunction('kbox-js.ch.tutteli.kbox.appendToStringBuilder_910eph$', function ($receiver, sb, separator, append) {
    var itr = $receiver.iterator();
    if (itr.hasNext()) {
      append(itr.next());
    }
    while (itr.hasNext()) {
      sb.append_gw00v9$(separator);
      append(itr.next());
    }
  });
  var appendToStringBuilder_4 = defineInlineFunction('kbox-js.ch.tutteli.kbox.appendToStringBuilder_29uhhf$', function ($receiver, sb, separator, append) {
    var itr = $receiver.iterator();
    if (itr.hasNext()) {
      append(itr.next());
    }
    while (itr.hasNext()) {
      sb.append_gw00v9$(separator);
      append(itr.next());
    }
  });
  var forEachIn = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_bl86ll$', function (arr1, arr2, action) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== arr1.length; ++tmp$) {
      var element = arr1[tmp$];
      action(element);
    }
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== arr2.length; ++tmp$_0) {
      var element_0 = arr2[tmp$_0];
      action(element_0);
    }
  });
  var forEachIn_0 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_cdudal$', function (arr1, arr2, arr3, action) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== arr1.length; ++tmp$) {
      var element = arr1[tmp$];
      action(element);
    }
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== arr2.length; ++tmp$_0) {
      var element_0 = arr2[tmp$_0];
      action(element_0);
    }
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== arr3.length; ++tmp$_1) {
      var element_1 = arr3[tmp$_1];
      action(element_1);
    }
  });
  var forEachIn_1 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_o7dffm$', wrapFunction(function () {
    return function (arr1, arr2, arr3, arrays, action) {
      var tmp$;
      for (tmp$ = 0; tmp$ !== arr1.length; ++tmp$) {
        var element = arr1[tmp$];
        action(element);
      }
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== arr2.length; ++tmp$_0) {
        var element_0 = arr2[tmp$_0];
        action(element_0);
      }
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== arr3.length; ++tmp$_1) {
        var element_1 = arr3[tmp$_1];
        action(element_1);
      }
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== arrays.length; ++tmp$_2) {
        var element_2 = arrays[tmp$_2];
        var tmp$_3;
        for (tmp$_3 = 0; tmp$_3 !== element_2.length; ++tmp$_3) {
          var element_3 = element_2[tmp$_3];
          action(element_3);
        }
      }
    };
  }));
  var forEachIn_2 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_qjnnnf$', function (iterable1, iterable2, action) {
    var tmp$;
    tmp$ = iterable1.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    var tmp$_0;
    tmp$_0 = iterable2.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      action(element_0);
    }
  });
  var forEachIn_3 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_z4gltk$', function (iterable1, iterable2, iterable3, action) {
    var tmp$;
    tmp$ = iterable1.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    var tmp$_0;
    tmp$_0 = iterable2.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      action(element_0);
    }
    var tmp$_1;
    tmp$_1 = iterable3.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      action(element_1);
    }
  });
  var forEachIn_4 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_oqujxs$', wrapFunction(function () {
    return function (iterable1, iterable2, iterable3, iterables, action) {
      var tmp$;
      tmp$ = iterable1.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        action(element);
      }
      var tmp$_0;
      tmp$_0 = iterable2.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        action(element_0);
      }
      var tmp$_1;
      tmp$_1 = iterable3.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        action(element_1);
      }
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== iterables.length; ++tmp$_2) {
        var element_2 = iterables[tmp$_2];
        var tmp$_3;
        tmp$_3 = element_2.iterator();
        while (tmp$_3.hasNext()) {
          var element_3 = tmp$_3.next();
          action(element_3);
        }
      }
    };
  }));
  var forEachIn_5 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_aoy8fd$', function (sequence1, sequence2, action) {
    var tmp$;
    tmp$ = sequence1.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    var tmp$_0;
    tmp$_0 = sequence2.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      action(element_0);
    }
  });
  var forEachIn_6 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_cdffny$', function (sequence1, sequence2, sequence3, action) {
    var tmp$;
    tmp$ = sequence1.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    var tmp$_0;
    tmp$_0 = sequence2.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      action(element_0);
    }
    var tmp$_1;
    tmp$_1 = sequence3.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      action(element_1);
    }
  });
  var forEachIn_7 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forEachIn_ieikpg$', wrapFunction(function () {
    return function (sequence1, sequence2, sequence3, sequences, action) {
      var tmp$;
      tmp$ = sequence1.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        action(element);
      }
      var tmp$_0;
      tmp$_0 = sequence2.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        action(element_0);
      }
      var tmp$_1;
      tmp$_1 = sequence3.iterator();
      while (tmp$_1.hasNext()) {
        var element_1 = tmp$_1.next();
        action(element_1);
      }
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== sequences.length; ++tmp$_2) {
        var element_2 = sequences[tmp$_2];
        var tmp$_3;
        tmp$_3 = element_2.iterator();
        while (tmp$_3.hasNext()) {
          var element_3 = tmp$_3.next();
          action(element_3);
        }
      }
    };
  }));
  var forThisAndForEachIn = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_rg995e$', function ($receiver, iterable, action) {
    action($receiver);
    var tmp$;
    for (tmp$ = 0; tmp$ !== iterable.length; ++tmp$) {
      var element = iterable[tmp$];
      action(element);
    }
  });
  var forThisAndForEachIn_0 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_97au7i$', function ($receiver, arr1, arr2, action) {
    action($receiver);
    var tmp$;
    for (tmp$ = 0; tmp$ !== arr1.length; ++tmp$) {
      var element = arr1[tmp$];
      action(element);
    }
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== arr2.length; ++tmp$_0) {
      var element_0 = arr2[tmp$_0];
      action(element_0);
    }
  });
  var forThisAndForEachIn_1 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_gotknx$', wrapFunction(function () {
    return function ($receiver, arr1, arr2, arrays, action) {
      action($receiver);
      var tmp$;
      for (tmp$ = 0; tmp$ !== arr1.length; ++tmp$) {
        var element = arr1[tmp$];
        action(element);
      }
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== arr2.length; ++tmp$_0) {
        var element_0 = arr2[tmp$_0];
        action(element_0);
      }
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== arrays.length; ++tmp$_1) {
        var element_1 = arrays[tmp$_1];
        var tmp$_2;
        for (tmp$_2 = 0; tmp$_2 !== element_1.length; ++tmp$_2) {
          var element_2 = element_1[tmp$_2];
          action(element_2);
        }
      }
    };
  }));
  var forThisAndForEachIn_2 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_rurr6x$', function ($receiver, iterable, action) {
    action($receiver);
    var tmp$;
    tmp$ = iterable.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
  });
  var forThisAndForEachIn_3 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_ujsfh8$', function ($receiver, iterable1, iterable2, action) {
    action($receiver);
    var tmp$;
    tmp$ = iterable1.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    var tmp$_0;
    tmp$_0 = iterable2.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      action(element_0);
    }
  });
  var forThisAndForEachIn_4 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_tyj73g$', wrapFunction(function () {
    return function ($receiver, iterable1, iterable2, iterables, action) {
      action($receiver);
      var tmp$;
      tmp$ = iterable1.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        action(element);
      }
      var tmp$_0;
      tmp$_0 = iterable2.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        action(element_0);
      }
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== iterables.length; ++tmp$_1) {
        var element_1 = iterables[tmp$_1];
        var tmp$_2;
        tmp$_2 = element_1.iterator();
        while (tmp$_2.hasNext()) {
          var element_2 = tmp$_2.next();
          action(element_2);
        }
      }
    };
  }));
  var forThisAndForEachIn_5 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_v3a4px$', function ($receiver, sequence, action) {
    action($receiver);
    var tmp$;
    tmp$ = sequence.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
  });
  var forThisAndForEachIn_6 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_gtsg3k$', function ($receiver, sequence1, sequence2, action) {
    action($receiver);
    var tmp$;
    tmp$ = sequence1.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
    var tmp$_0;
    tmp$_0 = sequence2.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      action(element_0);
    }
  });
  var forThisAndForEachIn_7 = defineInlineFunction('kbox-js.ch.tutteli.kbox.forThisAndForEachIn_3jqtyy$', wrapFunction(function () {
    return function ($receiver, sequence1, sequence2, sequences, action) {
      action($receiver);
      var tmp$;
      tmp$ = sequence1.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        action(element);
      }
      var tmp$_0;
      tmp$_0 = sequence2.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        action(element_0);
      }
      var tmp$_1;
      for (tmp$_1 = 0; tmp$_1 !== sequences.length; ++tmp$_1) {
        var element_1 = sequences[tmp$_1];
        var tmp$_2;
        tmp$_2 = element_1.iterator();
        while (tmp$_2.hasNext()) {
          var element_2 = tmp$_2.next();
          action(element_2);
        }
      }
    };
  }));
  var ifWithinBound = defineInlineFunction('kbox-js.ch.tutteli.kbox.ifWithinBound_he0xn9$', function ($receiver, index, thenBlock, elseBlock) {
    if (index < $receiver.size)
      return thenBlock();
    else
      return elseBlock();
  });
  var ifWithinBound_0 = defineInlineFunction('kbox-js.ch.tutteli.kbox.ifWithinBound_t8wkhe$', function ($receiver, index, thenBlock, elseBlock) {
    if (index < $receiver.length)
      return thenBlock();
    else
      return elseBlock();
  });
  var joinToString_0 = defineInlineFunction('kbox-js.ch.tutteli.kbox.joinToString_z0mrh4$', wrapFunction(function () {
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
    return function ($receiver, separator, append) {
      var $receiver_0 = asList($receiver);
      var sb = StringBuilder_init($receiver_0.size * 4 | 0);
      var tmp$;
      var size = $receiver_0.size;
      if (size > 0) {
        append($receiver_0.get_za3lpa$(0), sb);
      }
      tmp$ = size - 1 | 0;
      for (var i = 1; i < tmp$; i++) {
        sb.append_gw00v9$(separator);
        append($receiver_0.get_za3lpa$(i), sb);
      }
      if (size > 1) {
        sb.append_gw00v9$(separator);
        append($receiver_0.get_za3lpa$(size - 1 | 0), sb);
      }
      return sb.toString();
    };
  }));
  var joinToString_1 = defineInlineFunction('kbox-js.ch.tutteli.kbox.joinToString_aac1vq$', wrapFunction(function () {
    var asList = Kotlin.kotlin.collections.asList_us0mfu$;
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
    return function ($receiver, separator, lastSeparator, append) {
      var $receiver_0 = asList($receiver);
      var sb = StringBuilder_init($receiver_0.size * 4 | 0);
      var tmp$;
      var size = $receiver_0.size;
      if (size > 0) {
        append($receiver_0.get_za3lpa$(0), sb);
      }
      tmp$ = size - 1 | 0;
      for (var i = 1; i < tmp$; i++) {
        sb.append_gw00v9$(separator);
        append($receiver_0.get_za3lpa$(i), sb);
      }
      if (size > 1) {
        sb.append_gw00v9$(lastSeparator);
        append($receiver_0.get_za3lpa$(size - 1 | 0), sb);
      }
      return sb.toString();
    };
  }));
  var joinToString_2 = defineInlineFunction('kbox-js.ch.tutteli.kbox.joinToString_ozw64r$', wrapFunction(function () {
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder;
    return function ($receiver, separator, append) {
      var sb = new StringBuilder_init();
      var itr = $receiver.iterator();
      if (itr.hasNext()) {
        append(itr.next(), sb);
      }
      while (itr.hasNext()) {
        sb.append_gw00v9$(separator);
        append(itr.next(), sb);
      }
      return sb.toString();
    };
  }));
  var joinToString_3 = defineInlineFunction('kbox-js.ch.tutteli.kbox.joinToString_scvx2b$', wrapFunction(function () {
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
    return function ($receiver, separator, lastSeparator, append) {
      var sb = StringBuilder_init($receiver.size * 4 | 0);
      var tmp$;
      var size = $receiver.size;
      if (size > 0) {
        append($receiver.get_za3lpa$(0), sb);
      }
      tmp$ = size - 1 | 0;
      for (var i = 1; i < tmp$; i++) {
        sb.append_gw00v9$(separator);
        append($receiver.get_za3lpa$(i), sb);
      }
      if (size > 1) {
        sb.append_gw00v9$(lastSeparator);
        append($receiver.get_za3lpa$(size - 1 | 0), sb);
      }
      return sb.toString();
    };
  }));
  var joinToString_4 = defineInlineFunction('kbox-js.ch.tutteli.kbox.joinToString_b5nhi7$', wrapFunction(function () {
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder;
    return function ($receiver, separator, append) {
      var sb = new StringBuilder_init();
      var itr = $receiver.iterator();
      if (itr.hasNext()) {
        append(itr.next(), sb);
      }
      while (itr.hasNext()) {
        sb.append_gw00v9$(separator);
        append(itr.next(), sb);
      }
      return sb.toString();
    };
  }));
  var joinToString_5 = defineInlineFunction('kbox-js.ch.tutteli.kbox.joinToString_euw1ht$', wrapFunction(function () {
    var StringBuilder_init = Kotlin.kotlin.text.StringBuilder;
    return function ($receiver, separator, append) {
      var sb = new StringBuilder_init();
      var itr = $receiver.iterator();
      if (itr.hasNext()) {
        append(itr.next(), sb);
      }
      while (itr.hasNext()) {
        sb.append_gw00v9$(separator);
        append(itr.next(), sb);
      }
      return sb.toString();
    };
  }));
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function mapParents($receiver, child, failIfCyclic) {
    if (failIfCyclic === void 0)
      failIfCyclic = false;
    var set = LinkedHashSet_init();
    var parent = $receiver.get_11rb$(child);
    while (parent != null) {
      if (equals(parent, child) || set.contains_11rb$(parent)) {
        if (failIfCyclic) {
          var steps = set.isEmpty() ? '->' : joinToString(set, ' -> ', '-> ', ' ->');
          throw IllegalStateException_init('cycle detected: ' + child + ' ' + steps + ' ' + toString(parent));
        }
        break;
      }
      set.add_11rb$(parent);
      parent = $receiver.get_11rb$(parent);
    }
    return set;
  }
  function mapRemaining($receiver, transform) {
    var mutableList = ArrayList_init();
    while ($receiver.hasNext()) {
      mutableList.add_11rb$(transform($receiver.next()));
    }
    return mutableList;
  }
  function mapRemainingWithCounter($receiver, transform) {
    var mutableList = ArrayList_init();
    var counter = 0;
    while ($receiver.hasNext()) {
      mutableList.add_11rb$(transform(counter, $receiver.next()));
      counter = counter + 1 | 0;
    }
    return mutableList;
  }
  function mapWithIndex($receiver) {
    var destination = ArrayList_init($receiver.length);
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(new WithIndex((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
    }
    return destination;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function mapWithIndex_0($receiver) {
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new WithIndex((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
    }
    return destination;
  }
  function mapWithIndex$lambda(index, t) {
    return new WithIndex(index, t);
  }
  function mapWithIndex_1($receiver) {
    return mapIndexed($receiver, mapWithIndex$lambda);
  }
  function toPeekingIterator($receiver) {
    return new PeekingIterator($receiver);
  }
  function PeekingIteratorUnsynchronized(itr) {
    this.itr_0 = itr;
    this.peek_0 = null;
  }
  PeekingIteratorUnsynchronized.prototype.hasNext = function () {
    return this.peek_0 != null || this.itr_0.hasNext();
  };
  PeekingIteratorUnsynchronized.prototype.next = function () {
    var tmp$;
    var peeked = this.peek_0;
    if (peeked != null) {
      this.peek_0 = null;
      tmp$ = peeked;
    }
     else {
      tmp$ = this.itr_0.next();
    }
    return tmp$;
  };
  PeekingIteratorUnsynchronized.prototype.peek = function () {
    if (this.peek_0 == null) {
      this.peek_0 = this.itr_0.next();
    }
    return ensureNotNull(this.peek_0);
  };
  PeekingIteratorUnsynchronized.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PeekingIteratorUnsynchronized',
    interfaces: [Iterator]
  };
  function varargToList(arg, otherArgs) {
    var list = ArrayList_init(otherArgs.length + 1 | 0);
    list.add_11rb$(arg);
    addAll(list, otherArgs);
    return list;
  }
  var glue = defineInlineFunction('kbox-js.ch.tutteli.kbox.glue_hvgbba$', wrapFunction(function () {
    var varargToList = _.ch.tutteli.kbox.varargToList_r59i0z$;
    return function ($receiver, otherArgs) {
      return varargToList($receiver, otherArgs);
    };
  }));
  function WithIndex(index, value) {
    this.index = index;
    this.value = value;
  }
  WithIndex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WithIndex',
    interfaces: []
  };
  WithIndex.prototype.component1 = function () {
    return this.index;
  };
  WithIndex.prototype.component2 = function () {
    return this.value;
  };
  WithIndex.prototype.copy_wxm5ur$ = function (index, value) {
    return new WithIndex(index === void 0 ? this.index : index, value === void 0 ? this.value : value);
  };
  WithIndex.prototype.toString = function () {
    return 'WithIndex(index=' + Kotlin.toString(this.index) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  WithIndex.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  WithIndex.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.value, other.value)))));
  };
  function PeekingIterator(itr) {
    this.itr_0 = new PeekingIteratorUnsynchronized(itr);
  }
  PeekingIterator.prototype.hasNext = function () {
    return this.itr_0.hasNext();
  };
  PeekingIterator.prototype.next = function () {
    return this.itr_0.next();
  };
  PeekingIterator.prototype.peek = function () {
    return this.itr_0.peek();
  };
  PeekingIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PeekingIterator',
    interfaces: [Iterator]
  };
  var package$ch = _.ch || (_.ch = {});
  var package$tutteli = package$ch.tutteli || (package$ch.tutteli = {});
  var package$kbox = package$tutteli.kbox || (package$tutteli.kbox = {});
  package$kbox.appendToStringBuilder_1pmqlz$ = appendToStringBuilder_2;
  $$importsForInline$$['kbox-js'] = _;
  package$kbox.appendToStringBuilder_d2zxro$ = appendToStringBuilder;
  package$kbox.appendToStringBuilder_ic12ii$ = appendToStringBuilder_0;
  package$kbox.appendToStringBuilder_910eph$ = appendToStringBuilder_3;
  package$kbox.appendToStringBuilder_76lgll$ = appendToStringBuilder_1;
  package$kbox.appendToStringBuilder_29uhhf$ = appendToStringBuilder_4;
  package$kbox.forEachIn_bl86ll$ = forEachIn;
  package$kbox.forEachIn_cdudal$ = forEachIn_0;
  package$kbox.forEachIn_o7dffm$ = forEachIn_1;
  package$kbox.forEachIn_qjnnnf$ = forEachIn_2;
  package$kbox.forEachIn_z4gltk$ = forEachIn_3;
  package$kbox.forEachIn_oqujxs$ = forEachIn_4;
  package$kbox.forEachIn_aoy8fd$ = forEachIn_5;
  package$kbox.forEachIn_cdffny$ = forEachIn_6;
  package$kbox.forEachIn_ieikpg$ = forEachIn_7;
  package$kbox.forThisAndForEachIn_rg995e$ = forThisAndForEachIn;
  package$kbox.forThisAndForEachIn_97au7i$ = forThisAndForEachIn_0;
  package$kbox.forThisAndForEachIn_gotknx$ = forThisAndForEachIn_1;
  package$kbox.forThisAndForEachIn_rurr6x$ = forThisAndForEachIn_2;
  package$kbox.forThisAndForEachIn_ujsfh8$ = forThisAndForEachIn_3;
  package$kbox.forThisAndForEachIn_tyj73g$ = forThisAndForEachIn_4;
  package$kbox.forThisAndForEachIn_v3a4px$ = forThisAndForEachIn_5;
  package$kbox.forThisAndForEachIn_gtsg3k$ = forThisAndForEachIn_6;
  package$kbox.forThisAndForEachIn_3jqtyy$ = forThisAndForEachIn_7;
  package$kbox.ifWithinBound_he0xn9$ = ifWithinBound;
  package$kbox.ifWithinBound_t8wkhe$ = ifWithinBound_0;
  package$kbox.joinToString_scvx2b$ = joinToString_3;
  package$kbox.joinToString_z0mrh4$ = joinToString_0;
  package$kbox.joinToString_aac1vq$ = joinToString_1;
  package$kbox.joinToString_b5nhi7$ = joinToString_4;
  package$kbox.joinToString_ozw64r$ = joinToString_2;
  package$kbox.joinToString_euw1ht$ = joinToString_5;
  package$kbox.mapParents_vk0q5f$ = mapParents;
  package$kbox.mapRemaining_s72g0g$ = mapRemaining;
  package$kbox.mapRemainingWithCounter_h4g43w$ = mapRemainingWithCounter;
  package$kbox.mapWithIndex_4b5429$ = mapWithIndex;
  package$kbox.mapWithIndex_7wnvza$ = mapWithIndex_0;
  package$kbox.mapWithIndex_veqyi0$ = mapWithIndex_1;
  package$kbox.toPeekingIterator_35ci02$ = toPeekingIterator;
  package$kbox.PeekingIteratorUnsynchronized = PeekingIteratorUnsynchronized;
  package$kbox.varargToList_r59i0z$ = varargToList;
  package$kbox.glue_hvgbba$ = glue;
  package$kbox.WithIndex = WithIndex;
  package$kbox.PeekingIterator = PeekingIterator;
  Kotlin.defineModule('kbox-js', _);
  return _;
}(typeof this['kbox-js'] === 'undefined' ? {} : this['kbox-js'], kotlin);
