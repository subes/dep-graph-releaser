(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kbox-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kbox-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-api-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dep-graph-releaser-api-js'.");
    }
    if (typeof this['kbox-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-api-js'. Its dependency 'kbox-js' was not found. Please, check whether 'kbox-js' is loaded prior to 'dep-graph-releaser-api-js'.");
    }
    root['dep-graph-releaser-api-js'] = factory(typeof this['dep-graph-releaser-api-js'] === 'undefined' ? {} : this['dep-graph-releaser-api-js'], kotlin, this['kbox-js']);
  }
}(this, function (_, Kotlin, $module$kbox_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var equals = Kotlin.equals;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var indexOf_0 = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getKClass = Kotlin.getKClass;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var asSequence_0 = Kotlin.kotlin.sequences.asSequence_35ci02$;
  var drop = Kotlin.kotlin.sequences.drop_wuwhe2$;
  var sorted = Kotlin.kotlin.sequences.sorted_gtzq52$;
  var joinToString_0 = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  ConfigKey.prototype = Object.create(Enum.prototype);
  ConfigKey.prototype.constructor = ConfigKey;
  CommandState$Waiting.prototype = Object.create(CommandState.prototype);
  CommandState$Waiting.prototype.constructor = CommandState$Waiting;
  CommandState$Ready.prototype = Object.create(CommandState.prototype);
  CommandState$Ready.prototype.constructor = CommandState$Ready;
  CommandState$ReadyToReTrigger.prototype = Object.create(CommandState.prototype);
  CommandState$ReadyToReTrigger.prototype.constructor = CommandState$ReadyToReTrigger;
  CommandState$ReadyToRePoll.prototype = Object.create(CommandState.prototype);
  CommandState$ReadyToRePoll.prototype.constructor = CommandState$ReadyToRePoll;
  CommandState$Queueing.prototype = Object.create(CommandState.prototype);
  CommandState$Queueing.prototype.constructor = CommandState$Queueing;
  CommandState$StillQueueing.prototype = Object.create(CommandState.prototype);
  CommandState$StillQueueing.prototype.constructor = CommandState$StillQueueing;
  CommandState$InProgress.prototype = Object.create(CommandState.prototype);
  CommandState$InProgress.prototype.constructor = CommandState$InProgress;
  CommandState$RePolling.prototype = Object.create(CommandState.prototype);
  CommandState$RePolling.prototype.constructor = CommandState$RePolling;
  CommandState$Succeeded.prototype = Object.create(CommandState.prototype);
  CommandState$Succeeded.prototype.constructor = CommandState$Succeeded;
  CommandState$Failed.prototype = Object.create(CommandState.prototype);
  CommandState$Failed.prototype.constructor = CommandState$Failed;
  CommandState$Timeout.prototype = Object.create(CommandState.prototype);
  CommandState$Timeout.prototype.constructor = CommandState$Timeout;
  CommandState$Deactivated.prototype = Object.create(CommandState.prototype);
  CommandState$Deactivated.prototype.constructor = CommandState$Deactivated;
  CommandState$Disabled.prototype = Object.create(CommandState.prototype);
  CommandState$Disabled.prototype.constructor = CommandState$Disabled;
  ReleaseState.prototype = Object.create(Enum.prototype);
  ReleaseState.prototype.constructor = ReleaseState;
  CommandStateJson$State.prototype = Object.create(Enum.prototype);
  CommandStateJson$State.prototype.constructor = CommandStateJson$State;
  TypeOfRun.prototype = Object.create(Enum.prototype);
  TypeOfRun.prototype.constructor = TypeOfRun;
  BuildWithParamFormat$Query.prototype = Object.create(BuildWithParamFormat.prototype);
  BuildWithParamFormat$Query.prototype.constructor = BuildWithParamFormat$Query;
  BuildWithParamFormat$Maven.prototype = Object.create(BuildWithParamFormat.prototype);
  BuildWithParamFormat$Maven.prototype.constructor = BuildWithParamFormat$Maven;
  function ConfigKey(name, ordinal, key) {
    Enum.call(this);
    this.key_c1gzzu$_0 = key;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ConfigKey_initFields() {
    ConfigKey_initFields = function () {
    };
    ConfigKey$COMMIT_PREFIX_instance = new ConfigKey('COMMIT_PREFIX', 0, 'commitPrefix');
    ConfigKey$UPDATE_DEPENDENCY_JOB_instance = new ConfigKey('UPDATE_DEPENDENCY_JOB', 1, 'updateDependencyJob');
    ConfigKey$DRY_RUN_JOB_instance = new ConfigKey('DRY_RUN_JOB', 2, 'dryRunJob');
    ConfigKey$REMOTE_REGEX_instance = new ConfigKey('REMOTE_REGEX', 3, 'remoteRegex');
    ConfigKey$RELATIVE_PATH_EXCLUDE_PROJECT_REGEX_instance = new ConfigKey('RELATIVE_PATH_EXCLUDE_PROJECT_REGEX', 4, 'relativePathExcludeProjectsRegex');
    ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REGEX_instance = new ConfigKey('RELATIVE_PATH_TO_GIT_REPO_REGEX', 5, 'relativePathToGitRepoRegex');
    ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT_instance = new ConfigKey('RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT', 6, 'relativePathToGitRepoReplacement');
    ConfigKey$REGEX_PARAMS_instance = new ConfigKey('REGEX_PARAMS', 7, 'regexParams');
    ConfigKey$JOB_MAPPING_instance = new ConfigKey('JOB_MAPPING', 8, 'jobMapping');
    ConfigKey$BUILD_WITH_PARAM_JOBS_instance = new ConfigKey('BUILD_WITH_PARAM_JOBS', 9, 'buildWithParamJobs');
    ConfigKey$INITIAL_RELEASE_JSON_instance = new ConfigKey('INITIAL_RELEASE_JSON', 10, 'initialJson');
    ConfigKey$Companion_getInstance();
  }
  var ConfigKey$COMMIT_PREFIX_instance;
  function ConfigKey$COMMIT_PREFIX_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$COMMIT_PREFIX_instance;
  }
  var ConfigKey$UPDATE_DEPENDENCY_JOB_instance;
  function ConfigKey$UPDATE_DEPENDENCY_JOB_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$UPDATE_DEPENDENCY_JOB_instance;
  }
  var ConfigKey$DRY_RUN_JOB_instance;
  function ConfigKey$DRY_RUN_JOB_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$DRY_RUN_JOB_instance;
  }
  var ConfigKey$REMOTE_REGEX_instance;
  function ConfigKey$REMOTE_REGEX_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$REMOTE_REGEX_instance;
  }
  var ConfigKey$RELATIVE_PATH_EXCLUDE_PROJECT_REGEX_instance;
  function ConfigKey$RELATIVE_PATH_EXCLUDE_PROJECT_REGEX_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$RELATIVE_PATH_EXCLUDE_PROJECT_REGEX_instance;
  }
  var ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REGEX_instance;
  function ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REGEX_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REGEX_instance;
  }
  var ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT_instance;
  function ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT_instance;
  }
  var ConfigKey$REGEX_PARAMS_instance;
  function ConfigKey$REGEX_PARAMS_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$REGEX_PARAMS_instance;
  }
  var ConfigKey$JOB_MAPPING_instance;
  function ConfigKey$JOB_MAPPING_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$JOB_MAPPING_instance;
  }
  var ConfigKey$BUILD_WITH_PARAM_JOBS_instance;
  function ConfigKey$BUILD_WITH_PARAM_JOBS_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$BUILD_WITH_PARAM_JOBS_instance;
  }
  var ConfigKey$INITIAL_RELEASE_JSON_instance;
  function ConfigKey$INITIAL_RELEASE_JSON_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$INITIAL_RELEASE_JSON_instance;
  }
  ConfigKey.prototype.asString = function () {
    return this.key_c1gzzu$_0;
  };
  function ConfigKey$Companion() {
    ConfigKey$Companion_instance = this;
  }
  ConfigKey$Companion.prototype.fromString_61zpoe$ = function (key) {
    var $receiver = ConfigKey$values();
    var first$result;
    first$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.asString(), key)) {
          first$result = element;
          break first$break;
        }
      }
      throw new NoSuchElementException('Array contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  };
  ConfigKey$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ConfigKey$Companion_instance = null;
  function ConfigKey$Companion_getInstance() {
    ConfigKey_initFields();
    if (ConfigKey$Companion_instance === null) {
      new ConfigKey$Companion();
    }
    return ConfigKey$Companion_instance;
  }
  ConfigKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConfigKey',
    interfaces: [Enum]
  };
  function ConfigKey$values() {
    return [ConfigKey$COMMIT_PREFIX_getInstance(), ConfigKey$UPDATE_DEPENDENCY_JOB_getInstance(), ConfigKey$DRY_RUN_JOB_getInstance(), ConfigKey$REMOTE_REGEX_getInstance(), ConfigKey$RELATIVE_PATH_EXCLUDE_PROJECT_REGEX_getInstance(), ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REGEX_getInstance(), ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT_getInstance(), ConfigKey$REGEX_PARAMS_getInstance(), ConfigKey$JOB_MAPPING_getInstance(), ConfigKey$BUILD_WITH_PARAM_JOBS_getInstance(), ConfigKey$INITIAL_RELEASE_JSON_getInstance()];
  }
  ConfigKey.values = ConfigKey$values;
  function ConfigKey$valueOf(name) {
    switch (name) {
      case 'COMMIT_PREFIX':
        return ConfigKey$COMMIT_PREFIX_getInstance();
      case 'UPDATE_DEPENDENCY_JOB':
        return ConfigKey$UPDATE_DEPENDENCY_JOB_getInstance();
      case 'DRY_RUN_JOB':
        return ConfigKey$DRY_RUN_JOB_getInstance();
      case 'REMOTE_REGEX':
        return ConfigKey$REMOTE_REGEX_getInstance();
      case 'RELATIVE_PATH_EXCLUDE_PROJECT_REGEX':
        return ConfigKey$RELATIVE_PATH_EXCLUDE_PROJECT_REGEX_getInstance();
      case 'RELATIVE_PATH_TO_GIT_REPO_REGEX':
        return ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REGEX_getInstance();
      case 'RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT':
        return ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT_getInstance();
      case 'REGEX_PARAMS':
        return ConfigKey$REGEX_PARAMS_getInstance();
      case 'JOB_MAPPING':
        return ConfigKey$JOB_MAPPING_getInstance();
      case 'BUILD_WITH_PARAM_JOBS':
        return ConfigKey$BUILD_WITH_PARAM_JOBS_getInstance();
      case 'INITIAL_RELEASE_JSON':
        return ConfigKey$INITIAL_RELEASE_JSON_getInstance();
      default:throwISE('No enum constant ch.loewenfels.depgraph.ConfigKey.' + name);
    }
  }
  ConfigKey.valueOf_61zpoe$ = ConfigKey$valueOf;
  function parseJobMapping(releasePlan) {
    return parseJobMapping_0(releasePlan.getConfig_udzor3$(ConfigKey$JOB_MAPPING_getInstance()));
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function parseJobMapping_0(mapping) {
    var tmp$;
    var $receiver = split(trim(Kotlin.isCharSequence(tmp$ = mapping) ? tmp$ : throwCCE()).toString(), ['\n']);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var index = indexOf(element, 61);
      if (!(index > 0)) {
        var message = 'At least one mapping has no groupId and artifactId defined.' + '\n' + 'jobMapping: ' + mapping;
        throw IllegalArgumentException_init(message.toString());
      }
      var groupIdAndArtifactId = element.substring(0, index);
      if (!contains(groupIdAndArtifactId, 58)) {
        var message_0 = 'At least one groupId and artifactId is erroneous, does not contain a `:`.' + '\n' + 'jobMapping: ' + mapping;
        throw IllegalArgumentException_init(message_0.toString());
      }
      var startIndex = index + 1 | 0;
      var jobName = element.substring(startIndex);
      if (!!isBlank(jobName)) {
        var message_1 = 'At least one groupId and artifactId is erroneous, has no job name defined.' + '\n' + 'jobMapping: ' + mapping;
        throw IllegalArgumentException_init(message_1.toString());
      }
      var pair = to(groupIdAndArtifactId, jobName);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    return destination;
  }
  function parseRemoteRegex(releasePlan) {
    return parseRemoteRegex_0(releasePlan.getConfig_udzor3$(ConfigKey$REMOTE_REGEX_getInstance()));
  }
  function parseRemoteRegex$lambda(it) {
    return it;
  }
  function parseRemoteRegex_0(regex) {
    return parseRegex(regex, 'remoteRegex', getCallableRef('requireHttpsDefined', function (jenkinsBaseUrl, remoteRegex) {
      return requireHttpsDefined(jenkinsBaseUrl, remoteRegex), Unit;
    }), parseRemoteRegex$lambda);
  }
  function parseRegexParams(releasePlan) {
    return parseRegexParams_0(releasePlan.getConfig_udzor3$(ConfigKey$REGEX_PARAMS_getInstance()));
  }
  function parseRegexParams$lambda(params) {
    return split_0(params, Kotlin.charArrayOf(59));
  }
  function parseRegexParams_0(regex) {
    return parseRegex(regex, 'regexParams', getCallableRef('requireAtLeastOneParameter', function (pair, regexParams) {
      return requireAtLeastOneParameter(pair, regexParams), Unit;
    }), parseRegexParams$lambda);
  }
  function parseBuildWithParamJobs(releasePlan) {
    return parseBuildWithParamJobs_0(releasePlan.getConfig_udzor3$(ConfigKey$BUILD_WITH_PARAM_JOBS_getInstance()));
  }
  function parseBuildWithParamJobs_0(regex) {
    return parseRegex(regex, 'buildWithParamJobs', getCallableRef('requireFormatAndNames', function (formatAndNames, buildWithParamJobs) {
      return requireFormatAndNames(formatAndNames, buildWithParamJobs), Unit;
    }), getCallableRef('createBuildWithParamFormat', function (formatAndNames) {
      return createBuildWithParamFormat(formatAndNames);
    }));
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function parseRegex(configValue, name, requireRightSideToBe, rightSideConverter) {
    var tmp$;
    var tmp$_0;
    var trimmedValue = trim(Kotlin.isCharSequence(tmp$_0 = configValue) ? tmp$_0 : throwCCE()).toString();
    if (trimmedValue.length > 0) {
      var mutableList = ArrayList_init();
      var startIndex = 0;
      var endRegex = indexOf(trimmedValue, 35, startIndex);
      checkEntryHasHash(endRegex, name, trimmedValue);
      while (endRegex >= 0) {
        checkRegexNotEmpty(endRegex, name, trimmedValue);
        var regex = getUnescapedRegex(trimmedValue, startIndex, endRegex);
        var tmp$_1 = getRightSide(trimmedValue, endRegex);
        var endRightSide = tmp$_1.component1()
        , rightSide = tmp$_1.component2();
        requireRightSideToBe(rightSide, trimmedValue);
        mutableList.add_11rb$(to(regex, rightSideConverter(rightSide)));
        startIndex = endRightSide + 1 | 0;
        endRegex = indexOf(trimmedValue, 35, startIndex);
        if (startIndex < trimmedValue.length) {
          var tmp$_2 = endRegex;
          var startIndex_0 = startIndex;
          checkEntryHasHash(tmp$_2, name, trimmedValue.substring(startIndex_0));
        }
      }
      tmp$ = mutableList;
    }
     else {
      tmp$ = emptyList();
    }
    return tmp$;
  }
  function checkEntryHasHash(endRegex, name, configValue) {
    if (!(endRegex >= 0)) {
      var message = 'You forgot to separate regex from the rest with #' + '\n' + name + ': ' + configValue;
      throw IllegalArgumentException_init(message.toString());
    }
  }
  function getUnescapedRegex(value, startIndex, endRegex) {
    var regexEscaped = value.substring(startIndex, endRegex);
    return Regex_init(Regex_init('([ \t\n])').replace_x2uqeu$(regexEscaped, ''));
  }
  function getRightSide(value, endRegex) {
    var indexOf = indexOf_0(value, '\n', endRegex);
    var endRightSide = indexOf < 0 ? value.length : indexOf;
    var startIndex = endRegex + 1 | 0;
    var rightSide = value.substring(startIndex, endRightSide);
    return to(endRightSide, rightSide);
  }
  function checkRegexNotEmpty(index, name, input) {
    if (!(index > 0)) {
      var message = 'regex requires at least one character.' + '\n' + name + ': ' + input;
      throw IllegalArgumentException_init(message.toString());
    }
  }
  function requireHttpsDefined(jenkinsBaseUrl, remoteRegex) {
    if (!startsWith(jenkinsBaseUrl, 'https')) {
      var message = 'A remoteRegex requires a related jenkins base url which starts with https.' + '\n' + 'remoteRegex: ' + remoteRegex;
      throw IllegalArgumentException_init(message.toString());
    }
  }
  function requireAtLeastOneParameter(pair, regexParams) {
    if (!(pair.length > 0)) {
      var message = 'A regexParam requires at least one parameter.' + '\n' + 'regexParams: ' + regexParams;
      throw IllegalArgumentException_init(message.toString());
    }
    var tmp$;
    tmp$ = split_0(pair, Kotlin.charArrayOf(59)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!(element.length > 0)) {
        var message_0 = 'Param without name and value in regexParam.' + '\n' + 'regexParams: ' + regexParams;
        throw IllegalArgumentException_init(message_0.toString());
      }
      var index = indexOf(element, 61);
      if (!(index !== 0)) {
        var message_1 = 'Parameter without name in regexParam.' + '\n' + 'regexParams: ' + regexParams;
        throw IllegalArgumentException_init(message_1.toString());
      }
      if (!(index > 0)) {
        var message_2 = 'Parameter ' + element + ' in regexParam does not have a value (separated by =).' + '\n' + 'regexParams: ' + regexParams;
        throw IllegalArgumentException_init(message_2.toString());
      }
    }
  }
  function requireFormatAndNames(formatAndNames, buildWithParamJobs) {
    var tmp$;
    var tmp$_0 = split_0(formatAndNames, Kotlin.charArrayOf(35));
    var format = tmp$_0.get_za3lpa$(0);
    var namesAsString = tmp$_0.get_za3lpa$(1);
    switch (format) {
      case 'query':
        tmp$ = 2;
        break;
      case 'maven':
        tmp$ = 3;
        break;
      default:throw IllegalArgumentException_init('Illegal format `' + format + '` provided, only `query` and `maven` supported.' + ('\n' + 'buildWithParamJobs: ' + buildWithParamJobs));
    }
    var numOfNames = tmp$;
    var names = split_0(namesAsString, Kotlin.charArrayOf(59));
    if (!(names.size === numOfNames)) {
      var message = 'Format `' + format + '` requires ' + numOfNames + ' names, ' + names.size + ' given.' + '\n' + 'buildWithParamJobs: ' + buildWithParamJobs;
      throw IllegalArgumentException_init(message.toString());
    }
  }
  function createBuildWithParamFormat(formatAndNames) {
    var tmp$;
    var tmp$_0 = split_0(formatAndNames, Kotlin.charArrayOf(35));
    var format = tmp$_0.get_za3lpa$(0);
    var namesAsString = tmp$_0.get_za3lpa$(1);
    switch (format) {
      case 'query':
        var tmp$_1 = split_0(namesAsString, Kotlin.charArrayOf(59));
        var releaseVersion = tmp$_1.get_za3lpa$(0);
        var nextDevVersion = tmp$_1.get_za3lpa$(1);
        tmp$ = new BuildWithParamFormat$Query(releaseVersion, nextDevVersion);
        break;
      case 'maven':
        var tmp$_2 = split_0(namesAsString, Kotlin.charArrayOf(59));
        var releaseVersion_0 = tmp$_2.get_za3lpa$(0);
        var nextDevVersion_0 = tmp$_2.get_za3lpa$(1);
        var parameterName = tmp$_2.get_za3lpa$(2);
        tmp$ = new BuildWithParamFormat$Maven(releaseVersion_0, nextDevVersion_0, parameterName);
        break;
      default:throw IllegalArgumentException_init('Illegal format ' + format);
    }
    return tmp$;
  }
  function getToStringRepresentation($receiver) {
    var representation = $receiver.toString();
    return equals(representation, '[object Object]') ? get_simpleNameNonNull(Kotlin.getKClassFromExpression($receiver)) : representation;
  }
  function Command() {
  }
  Command.prototype.asDeactivated = function () {
    if (!!Kotlin.isType(this.state, CommandState$Deactivated)) {
      var message = 'Cannot deactivate an already deactivated command: ' + this;
      throw IllegalStateException_init(message.toString());
    }
    return this.asNewState_m86w84$(new CommandState$Deactivated(this.state));
  };
  Command.prototype.asDisabled = function () {
    if (!(this.state !== CommandState$Disabled_getInstance())) {
      var message = 'Cannot disable an already disabled command: ' + this;
      throw IllegalStateException_init(message.toString());
    }
    return this.asNewState_m86w84$(CommandState$Disabled_getInstance());
  };
  Command.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Command',
    interfaces: [PolymorphSerializable]
  };
  function CommandState() {
    CommandState$Companion_getInstance();
  }
  function CommandState$Waiting(dependencies) {
    CommandState.call(this);
    this.dependencies = dependencies;
  }
  CommandState$Waiting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Waiting',
    interfaces: [CommandState]
  };
  CommandState$Waiting.prototype.component1 = function () {
    return this.dependencies;
  };
  CommandState$Waiting.prototype.copy_taorhn$ = function (dependencies) {
    return new CommandState$Waiting(dependencies === void 0 ? this.dependencies : dependencies);
  };
  CommandState$Waiting.prototype.toString = function () {
    return 'Waiting(dependencies=' + Kotlin.toString(this.dependencies) + ')';
  };
  CommandState$Waiting.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dependencies) | 0;
    return result;
  };
  CommandState$Waiting.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dependencies, other.dependencies))));
  };
  function CommandState$Ready() {
    CommandState$Ready_instance = this;
    CommandState.call(this);
  }
  CommandState$Ready.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Ready',
    interfaces: [CommandState]
  };
  var CommandState$Ready_instance = null;
  function CommandState$Ready_getInstance() {
    if (CommandState$Ready_instance === null) {
      new CommandState$Ready();
    }
    return CommandState$Ready_instance;
  }
  function CommandState$ReadyToReTrigger() {
    CommandState$ReadyToReTrigger_instance = this;
    CommandState.call(this);
  }
  CommandState$ReadyToReTrigger.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReadyToReTrigger',
    interfaces: [CommandState]
  };
  var CommandState$ReadyToReTrigger_instance = null;
  function CommandState$ReadyToReTrigger_getInstance() {
    if (CommandState$ReadyToReTrigger_instance === null) {
      new CommandState$ReadyToReTrigger();
    }
    return CommandState$ReadyToReTrigger_instance;
  }
  function CommandState$ReadyToRePoll() {
    CommandState$ReadyToRePoll_instance = this;
    CommandState.call(this);
  }
  CommandState$ReadyToRePoll.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReadyToRePoll',
    interfaces: [CommandState]
  };
  var CommandState$ReadyToRePoll_instance = null;
  function CommandState$ReadyToRePoll_getInstance() {
    if (CommandState$ReadyToRePoll_instance === null) {
      new CommandState$ReadyToRePoll();
    }
    return CommandState$ReadyToRePoll_instance;
  }
  function CommandState$Queueing() {
    CommandState$Queueing_instance = this;
    CommandState.call(this);
  }
  CommandState$Queueing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Queueing',
    interfaces: [CommandState]
  };
  var CommandState$Queueing_instance = null;
  function CommandState$Queueing_getInstance() {
    if (CommandState$Queueing_instance === null) {
      new CommandState$Queueing();
    }
    return CommandState$Queueing_instance;
  }
  function CommandState$StillQueueing() {
    CommandState$StillQueueing_instance = this;
    CommandState.call(this);
  }
  CommandState$StillQueueing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StillQueueing',
    interfaces: [CommandState]
  };
  var CommandState$StillQueueing_instance = null;
  function CommandState$StillQueueing_getInstance() {
    if (CommandState$StillQueueing_instance === null) {
      new CommandState$StillQueueing();
    }
    return CommandState$StillQueueing_instance;
  }
  function CommandState$InProgress() {
    CommandState$InProgress_instance = this;
    CommandState.call(this);
  }
  CommandState$InProgress.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InProgress',
    interfaces: [CommandState]
  };
  var CommandState$InProgress_instance = null;
  function CommandState$InProgress_getInstance() {
    if (CommandState$InProgress_instance === null) {
      new CommandState$InProgress();
    }
    return CommandState$InProgress_instance;
  }
  function CommandState$RePolling() {
    CommandState$RePolling_instance = this;
    CommandState.call(this);
  }
  CommandState$RePolling.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RePolling',
    interfaces: [CommandState]
  };
  var CommandState$RePolling_instance = null;
  function CommandState$RePolling_getInstance() {
    if (CommandState$RePolling_instance === null) {
      new CommandState$RePolling();
    }
    return CommandState$RePolling_instance;
  }
  function CommandState$Succeeded() {
    CommandState$Succeeded_instance = this;
    CommandState.call(this);
  }
  CommandState$Succeeded.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Succeeded',
    interfaces: [CommandState]
  };
  var CommandState$Succeeded_instance = null;
  function CommandState$Succeeded_getInstance() {
    if (CommandState$Succeeded_instance === null) {
      new CommandState$Succeeded();
    }
    return CommandState$Succeeded_instance;
  }
  function CommandState$Failed() {
    CommandState$Failed_instance = this;
    CommandState.call(this);
  }
  CommandState$Failed.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Failed',
    interfaces: [CommandState]
  };
  var CommandState$Failed_instance = null;
  function CommandState$Failed_getInstance() {
    if (CommandState$Failed_instance === null) {
      new CommandState$Failed();
    }
    return CommandState$Failed_instance;
  }
  function CommandState$Timeout(previous) {
    CommandState.call(this);
    this.previous = previous;
  }
  CommandState$Timeout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timeout',
    interfaces: [CommandState]
  };
  CommandState$Timeout.prototype.component1 = function () {
    return this.previous;
  };
  CommandState$Timeout.prototype.copy_m86w84$ = function (previous) {
    return new CommandState$Timeout(previous === void 0 ? this.previous : previous);
  };
  CommandState$Timeout.prototype.toString = function () {
    return 'Timeout(previous=' + Kotlin.toString(this.previous) + ')';
  };
  CommandState$Timeout.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.previous) | 0;
    return result;
  };
  CommandState$Timeout.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.previous, other.previous))));
  };
  function CommandState$Deactivated(previous) {
    CommandState.call(this);
    this.previous = previous;
  }
  CommandState$Deactivated.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Deactivated',
    interfaces: [CommandState]
  };
  CommandState$Deactivated.prototype.component1 = function () {
    return this.previous;
  };
  CommandState$Deactivated.prototype.copy_m86w84$ = function (previous) {
    return new CommandState$Deactivated(previous === void 0 ? this.previous : previous);
  };
  CommandState$Deactivated.prototype.toString = function () {
    return 'Deactivated(previous=' + Kotlin.toString(this.previous) + ')';
  };
  CommandState$Deactivated.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.previous) | 0;
    return result;
  };
  CommandState$Deactivated.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.previous, other.previous))));
  };
  function CommandState$Disabled() {
    CommandState$Disabled_instance = this;
    CommandState.call(this);
  }
  CommandState$Disabled.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Disabled',
    interfaces: [CommandState]
  };
  var CommandState$Disabled_instance = null;
  function CommandState$Disabled_getInstance() {
    if (CommandState$Disabled_instance === null) {
      new CommandState$Disabled();
    }
    return CommandState$Disabled_instance;
  }
  function CommandState$checkTransitionAllowed$lambda(this$CommandState, closure$newState) {
    return function () {
      return 'Cannot transition to the same state as the current.' + ('\n' + 'Current: ' + getToStringRepresentation(this$CommandState)) + ('\n' + 'New: ' + getToStringRepresentation(closure$newState));
    };
  }
  CommandState.prototype.checkTransitionAllowed_m86w84$ = function (newState) {
    var tmp$, tmp$_0;
    if (!(this !== CommandState$Disabled_getInstance())) {
      var message = 'Cannot transition to any state if current state is ' + toString(getKClass(CommandState$Disabled).simpleName) + '.';
      throw IllegalStateException_init(message.toString());
    }
    if (!!((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(newState)) : null)) {
      var message_0 = CommandState$checkTransitionAllowed$lambda(this, newState)();
      throw IllegalStateException_init(message_0.toString());
    }
    if (Kotlin.isType(newState, CommandState$ReadyToRePoll))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Timeout)]);
    else if (Kotlin.isType(newState, CommandState$ReadyToReTrigger))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Failed), getKClass(CommandState$Timeout)]);
    else if (Kotlin.isType(newState, CommandState$Ready))
      tmp$_0 = this.checkNewStateIsAfterWaitingAndNoDependencies_82bbhz$_0(newState);
    else if (Kotlin.isType(newState, CommandState$Queueing))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Ready), getKClass(CommandState$ReadyToReTrigger)]);
    else if (Kotlin.isType(newState, CommandState$StillQueueing))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Queueing), getKClass(CommandState$Timeout)]);
    else if (Kotlin.isType(newState, CommandState$InProgress))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Queueing), getKClass(CommandState$StillQueueing)]);
    else if (Kotlin.isType(newState, CommandState$RePolling))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$ReadyToRePoll)]);
    else if (Kotlin.isType(newState, CommandState$Succeeded))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$InProgress), getKClass(CommandState$RePolling)]);
    else if (Kotlin.isType(newState, CommandState$Timeout))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Queueing), getKClass(CommandState$InProgress), getKClass(CommandState$RePolling)]);
    else if (Kotlin.isType(newState, CommandState$Waiting) || Kotlin.isType(newState, CommandState$Failed) || Kotlin.isType(newState, CommandState$Deactivated) || Kotlin.isType(newState, CommandState$Disabled))
      tmp$_0 = newState;
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    return tmp$_0;
  };
  function CommandState$checkNewStateIsAfter$lambda(closure$newState, this$CommandState) {
    return function () {
      return 'Cannot transition to ' + toString(Kotlin.getKClassFromExpression(closure$newState).simpleName) + ' because ' + ('current state is ' + toString(getKClass(CommandState$Deactivated).simpleName) + ', can only transition to its previous state.') + ('\n' + 'Deactivated.previous was: ' + getToStringRepresentation(this$CommandState.previous));
    };
  }
  function CommandState$checkNewStateIsAfter$lambda$lambda(it) {
    return get_simpleNameNonNull(it);
  }
  CommandState.prototype.checkNewStateIsAfter_jb7wuq$_0 = function (newState, requiredState) {
    var tmp$;
    if (Kotlin.isType(this, CommandState$Deactivated)) {
      if (!((tmp$ = Kotlin.getKClassFromExpression(newState)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(this.previous)) : null)) {
        var message = CommandState$checkNewStateIsAfter$lambda(newState, this)();
        throw IllegalStateException_init(message.toString());
      }
    }
     else {
      var any$result;
      any$break: do {
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== requiredState.length; ++tmp$_0) {
          var element = requiredState[tmp$_0];
          if (element.isInstance_s8jyv4$(this)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (!any$result) {
        var tmp$_1;
        if (requiredState.length === 1) {
          tmp$_1 = requiredState[0].simpleName;
        }
         else {
          tmp$_1 = 'one of: ' + joinToString(requiredState, void 0, void 0, void 0, void 0, void 0, CommandState$checkNewStateIsAfter$lambda$lambda);
        }
        var states = tmp$_1;
        var message_0 = 'Cannot transition to ' + get_simpleNameNonNull(Kotlin.getKClassFromExpression(newState)) + ' because state is not ' + toString(states) + '.' + ('\n' + 'State was: ' + getToStringRepresentation(this));
        throw IllegalStateException_init(message_0.toString());
      }
    }
    return newState;
  };
  CommandState.prototype.checkNewStateIsAfterWaitingAndNoDependencies_82bbhz$_0 = function (newState) {
    this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Waiting)]);
    if (Kotlin.isType(this, CommandState$Waiting)) {
      if (!this.dependencies.isEmpty()) {
        var message = 'Can only change from ' + toString(getKClass(CommandState$Waiting).simpleName) + ' to ' + toString(getKClass(CommandState$Ready).simpleName) + ' ' + 'if there are not any dependencies left which we need to wait for.' + ('\n' + 'State was: ' + getToStringRepresentation(this));
        throw IllegalStateException_init(message.toString());
      }
    }
    return newState;
  };
  function CommandState$Companion() {
    CommandState$Companion_instance = this;
  }
  CommandState$Companion.prototype.isFailureState_m86w84$ = function (state) {
    return state === CommandState$Failed_getInstance() || Kotlin.isType(state, CommandState$Timeout);
  };
  CommandState$Companion.prototype.isEndState_m86w84$ = function (state) {
    return state === CommandState$Succeeded_getInstance() || this.isFailureState_m86w84$(state);
  };
  CommandState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CommandState$Companion_instance = null;
  function CommandState$Companion_getInstance() {
    if (CommandState$Companion_instance === null) {
      new CommandState$Companion();
    }
    return CommandState$Companion_instance;
  }
  CommandState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandState',
    interfaces: []
  };
  function get_simpleNameNonNull($receiver) {
    var tmp$;
    return (tmp$ = $receiver.simpleName) != null ? tmp$ : '<simpleName absent>';
  }
  function Project(id, isSubmodule, currentVersion, releaseVersion, level, commands, relativePath) {
    this.id = id;
    this.isSubmodule = isSubmodule;
    this.currentVersion = currentVersion;
    this.releaseVersion = releaseVersion;
    this.level = level;
    this.commands = commands;
    this.relativePath = relativePath;
  }
  Project.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Project',
    interfaces: []
  };
  function Project_init(project, commands, $this) {
    $this = $this || Object.create(Project.prototype);
    Project.call($this, project.id, project.isSubmodule, project.currentVersion, project.releaseVersion, project.level, commands, project.relativePath);
    return $this;
  }
  function Project_init_0(project, level, $this) {
    $this = $this || Object.create(Project.prototype);
    Project.call($this, project.id, project.isSubmodule, project.currentVersion, project.releaseVersion, level, project.commands, project.relativePath);
    return $this;
  }
  Project.prototype.component1 = function () {
    return this.id;
  };
  Project.prototype.component2 = function () {
    return this.isSubmodule;
  };
  Project.prototype.component3 = function () {
    return this.currentVersion;
  };
  Project.prototype.component4 = function () {
    return this.releaseVersion;
  };
  Project.prototype.component5 = function () {
    return this.level;
  };
  Project.prototype.component6 = function () {
    return this.commands;
  };
  Project.prototype.component7 = function () {
    return this.relativePath;
  };
  Project.prototype.copy_cwned9$ = function (id, isSubmodule, currentVersion, releaseVersion, level, commands, relativePath) {
    return new Project(id === void 0 ? this.id : id, isSubmodule === void 0 ? this.isSubmodule : isSubmodule, currentVersion === void 0 ? this.currentVersion : currentVersion, releaseVersion === void 0 ? this.releaseVersion : releaseVersion, level === void 0 ? this.level : level, commands === void 0 ? this.commands : commands, relativePath === void 0 ? this.relativePath : relativePath);
  };
  Project.prototype.toString = function () {
    return 'Project(id=' + Kotlin.toString(this.id) + (', isSubmodule=' + Kotlin.toString(this.isSubmodule)) + (', currentVersion=' + Kotlin.toString(this.currentVersion)) + (', releaseVersion=' + Kotlin.toString(this.releaseVersion)) + (', level=' + Kotlin.toString(this.level)) + (', commands=' + Kotlin.toString(this.commands)) + (', relativePath=' + Kotlin.toString(this.relativePath)) + ')';
  };
  Project.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.isSubmodule) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.releaseVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.commands) | 0;
    result = result * 31 + Kotlin.hashCode(this.relativePath) | 0;
    return result;
  };
  Project.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.isSubmodule, other.isSubmodule) && Kotlin.equals(this.currentVersion, other.currentVersion) && Kotlin.equals(this.releaseVersion, other.releaseVersion) && Kotlin.equals(this.level, other.level) && Kotlin.equals(this.commands, other.commands) && Kotlin.equals(this.relativePath, other.relativePath)))));
  };
  function ProjectId() {
  }
  ProjectId.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ProjectId',
    interfaces: [PolymorphSerializable]
  };
  function Relation(id, currentVersion, isDependencyVersionSelfManaged) {
    this.id = id;
    this.currentVersion = currentVersion;
    this.isDependencyVersionSelfManaged = isDependencyVersionSelfManaged;
  }
  Relation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Relation',
    interfaces: []
  };
  Relation.prototype.component1 = function () {
    return this.id;
  };
  Relation.prototype.component2 = function () {
    return this.currentVersion;
  };
  Relation.prototype.component3 = function () {
    return this.isDependencyVersionSelfManaged;
  };
  Relation.prototype.copy_96c7k7$ = function (id, currentVersion, isDependencyVersionSelfManaged) {
    return new Relation(id === void 0 ? this.id : id, currentVersion === void 0 ? this.currentVersion : currentVersion, isDependencyVersionSelfManaged === void 0 ? this.isDependencyVersionSelfManaged : isDependencyVersionSelfManaged);
  };
  Relation.prototype.toString = function () {
    return 'Relation(id=' + Kotlin.toString(this.id) + (', currentVersion=' + Kotlin.toString(this.currentVersion)) + (', isDependencyVersionSelfManaged=' + Kotlin.toString(this.isDependencyVersionSelfManaged)) + ')';
  };
  Relation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.isDependencyVersionSelfManaged) | 0;
    return result;
  };
  Relation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.currentVersion, other.currentVersion) && Kotlin.equals(this.isDependencyVersionSelfManaged, other.isDependencyVersionSelfManaged)))));
  };
  function ReleaseCommand() {
  }
  ReleaseCommand.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReleaseCommand',
    interfaces: [Command]
  };
  function ReleasePlan(releaseId, state, typeOfRun, rootProjectId, projects, submodules, dependents, warnings, infos, config) {
    this.releaseId = releaseId;
    this.state = state;
    this.typeOfRun = typeOfRun;
    this.rootProjectId = rootProjectId;
    this.projects_0 = projects;
    this.submodules_0 = submodules;
    this.dependents_0 = dependents;
    this.warnings = warnings;
    this.infos = infos;
    this.config = config;
  }
  ReleasePlan.prototype.getRootProject = function () {
    return this.getProject_lljhqa$(this.rootProjectId);
  };
  ReleasePlan.prototype.getProject_lljhqa$ = function (projectId) {
    var tmp$;
    tmp$ = this.projects_0.get_11rb$(projectId);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Could not find the project with id ' + projectId);
    }
    return tmp$;
  };
  ReleasePlan.prototype.hasSubmodules_lljhqa$ = function (projectId) {
    return !this.getSubmodules_lljhqa$(projectId).isEmpty();
  };
  ReleasePlan.prototype.getSubmodules_lljhqa$ = function (projectId) {
    var tmp$;
    tmp$ = this.submodules_0.get_11rb$(projectId);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Could not find submodules for project with id ' + projectId);
    }
    return tmp$;
  };
  ReleasePlan.prototype.getDependents_lljhqa$ = function (projectId) {
    var tmp$;
    tmp$ = this.dependents_0.get_11rb$(projectId);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Could not find dependents for project with id ' + projectId);
    }
    return tmp$;
  };
  ReleasePlan.prototype.getConfig_udzor3$ = function (configKey) {
    var tmp$;
    tmp$ = this.config.get_11rb$(configKey);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Unknown config key: ' + configKey);
    }
    return tmp$;
  };
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  ReleasePlan.prototype.collectDependentsInclDependentsOfAllSubmodules_lljhqa$ = function (multiModuleId) {
    var projectIds = HashSet_init();
    var projectsToVisit = mutableListOf([multiModuleId]);
    do {
      var projectId = projectsToVisit.removeAt_za3lpa$(0);
      var $receiver = this.getDependents_lljhqa$(projectId);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(to(projectId, item));
      }
      projectIds.addAll_brywnq$(destination);
      projectsToVisit.addAll_brywnq$(this.getSubmodules_lljhqa$(projectId));
      var isNotEmpty$result;
      isNotEmpty$result = !projectsToVisit.isEmpty();
    }
     while (isNotEmpty$result);
    return projectIds;
  };
  ReleasePlan.prototype.iterator = function () {
    return new ReleasePlan$ReleasePlanIterator(this);
  };
  ReleasePlan.prototype.getProjectIds = function () {
    return this.projects_0.keys;
  };
  ReleasePlan.prototype.getProjects = function () {
    return this.projects_0.values;
  };
  ReleasePlan.prototype.getNumberOfProjects = function () {
    return this.projects_0.size;
  };
  ReleasePlan.prototype.getNumberOfDependents = function () {
    return this.dependents_0.size;
  };
  ReleasePlan.prototype.getAllDependents = function () {
    return this.dependents_0;
  };
  ReleasePlan.prototype.getAllSubmodules = function () {
    return this.submodules_0;
  };
  function ReleasePlan$ReleasePlanIterator(releasePlan) {
    this.releasePlan_0 = releasePlan;
    this.levelIterator_0 = new LevelIterator(to(this.releasePlan_0.rootProjectId, this.releasePlan_0.getRootProject()));
    this.visitedProjects_0 = HashSet_init();
  }
  ReleasePlan$ReleasePlanIterator.prototype.hasNext = function () {
    return this.levelIterator_0.hasNext();
  };
  function ReleasePlan$ReleasePlanIterator$next$lambda(this$ReleasePlanIterator) {
    return function (it) {
      return !this$ReleasePlanIterator.visitedProjects_0.contains_11rb$(it);
    };
  }
  function ReleasePlan$ReleasePlanIterator$next$lambda_0(this$ReleasePlanIterator) {
    return function (it) {
      return this$ReleasePlanIterator.releasePlan_0.getProject_lljhqa$(it);
    };
  }
  function ReleasePlan$ReleasePlanIterator$next$lambda_1(closure$project) {
    return function (it) {
      return it.level === (closure$project.level + 1 | 0) || (it.isSubmodule && it.level === closure$project.level);
    };
  }
  ReleasePlan$ReleasePlanIterator.prototype.next = function () {
    var project = this.levelIterator_0.next();
    this.visitedProjects_0.add_11rb$(project.id);
    var tmp$;
    tmp$ = filter(map(filter(asSequence(this.releasePlan_0.getDependents_lljhqa$(project.id)), ReleasePlan$ReleasePlanIterator$next$lambda(this)), ReleasePlan$ReleasePlanIterator$next$lambda_0(this)), ReleasePlan$ReleasePlanIterator$next$lambda_1(project)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.level === project.level) {
        this.levelIterator_0.addToCurrentLevel_ew669y$(to(element.id, element));
      }
       else {
        this.levelIterator_0.addToNextLevel_ew669y$(to(element.id, element));
      }
    }
    return project;
  };
  ReleasePlan$ReleasePlanIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReleasePlanIterator',
    interfaces: [Iterator]
  };
  ReleasePlan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReleasePlan',
    interfaces: []
  };
  function ReleasePlan_init(releasePlan, projects, $this) {
    $this = $this || Object.create(ReleasePlan.prototype);
    ReleasePlan.call($this, releasePlan.releaseId, releasePlan.state, releasePlan.typeOfRun, releasePlan.rootProjectId, projects, releasePlan.submodules_0, releasePlan.dependents_0, releasePlan.warnings, releasePlan.infos, releasePlan.config);
    return $this;
  }
  ReleasePlan.prototype.component1 = function () {
    return this.releaseId;
  };
  ReleasePlan.prototype.component2 = function () {
    return this.state;
  };
  ReleasePlan.prototype.component3 = function () {
    return this.typeOfRun;
  };
  ReleasePlan.prototype.component4 = function () {
    return this.rootProjectId;
  };
  ReleasePlan.prototype.component5_0 = function () {
    return this.projects_0;
  };
  ReleasePlan.prototype.component6_0 = function () {
    return this.submodules_0;
  };
  ReleasePlan.prototype.component7_0 = function () {
    return this.dependents_0;
  };
  ReleasePlan.prototype.component8 = function () {
    return this.warnings;
  };
  ReleasePlan.prototype.component9 = function () {
    return this.infos;
  };
  ReleasePlan.prototype.component10 = function () {
    return this.config;
  };
  ReleasePlan.prototype.copy_5udup0$ = function (releaseId, state, typeOfRun, rootProjectId, projects, submodules, dependents, warnings, infos, config) {
    return new ReleasePlan(releaseId === void 0 ? this.releaseId : releaseId, state === void 0 ? this.state : state, typeOfRun === void 0 ? this.typeOfRun : typeOfRun, rootProjectId === void 0 ? this.rootProjectId : rootProjectId, projects === void 0 ? this.projects_0 : projects, submodules === void 0 ? this.submodules_0 : submodules, dependents === void 0 ? this.dependents_0 : dependents, warnings === void 0 ? this.warnings : warnings, infos === void 0 ? this.infos : infos, config === void 0 ? this.config : config);
  };
  ReleasePlan.prototype.toString = function () {
    return 'ReleasePlan(releaseId=' + Kotlin.toString(this.releaseId) + (', state=' + Kotlin.toString(this.state)) + (', typeOfRun=' + Kotlin.toString(this.typeOfRun)) + (', rootProjectId=' + Kotlin.toString(this.rootProjectId)) + (', projects=' + Kotlin.toString(this.projects_0)) + (', submodules=' + Kotlin.toString(this.submodules_0)) + (', dependents=' + Kotlin.toString(this.dependents_0)) + (', warnings=' + Kotlin.toString(this.warnings)) + (', infos=' + Kotlin.toString(this.infos)) + (', config=' + Kotlin.toString(this.config)) + ')';
  };
  ReleasePlan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.releaseId) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.typeOfRun) | 0;
    result = result * 31 + Kotlin.hashCode(this.rootProjectId) | 0;
    result = result * 31 + Kotlin.hashCode(this.projects_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.submodules_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.dependents_0) | 0;
    result = result * 31 + Kotlin.hashCode(this.warnings) | 0;
    result = result * 31 + Kotlin.hashCode(this.infos) | 0;
    result = result * 31 + Kotlin.hashCode(this.config) | 0;
    return result;
  };
  ReleasePlan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.releaseId, other.releaseId) && Kotlin.equals(this.state, other.state) && Kotlin.equals(this.typeOfRun, other.typeOfRun) && Kotlin.equals(this.rootProjectId, other.rootProjectId) && Kotlin.equals(this.projects_0, other.projects_0) && Kotlin.equals(this.submodules_0, other.submodules_0) && Kotlin.equals(this.dependents_0, other.dependents_0) && Kotlin.equals(this.warnings, other.warnings) && Kotlin.equals(this.infos, other.infos) && Kotlin.equals(this.config, other.config)))));
  };
  function ReleaseState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ReleaseState_initFields() {
    ReleaseState_initFields = function () {
    };
    ReleaseState$READY_instance = new ReleaseState('READY', 0);
    ReleaseState$IN_PROGRESS_instance = new ReleaseState('IN_PROGRESS', 1);
    ReleaseState$SUCCEEDED_instance = new ReleaseState('SUCCEEDED', 2);
    ReleaseState$FAILED_instance = new ReleaseState('FAILED', 3);
    ReleaseState$WATCHING_instance = new ReleaseState('WATCHING', 4);
  }
  var ReleaseState$READY_instance;
  function ReleaseState$READY_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$READY_instance;
  }
  var ReleaseState$IN_PROGRESS_instance;
  function ReleaseState$IN_PROGRESS_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$IN_PROGRESS_instance;
  }
  var ReleaseState$SUCCEEDED_instance;
  function ReleaseState$SUCCEEDED_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$SUCCEEDED_instance;
  }
  var ReleaseState$FAILED_instance;
  function ReleaseState$FAILED_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$FAILED_instance;
  }
  var ReleaseState$WATCHING_instance;
  function ReleaseState$WATCHING_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$WATCHING_instance;
  }
  ReleaseState.prototype.checkTransitionAllowed_g1wt0g$ = function (newState) {
    var tmp$;
    switch (newState.name) {
      case 'READY':
        tmp$ = this.checkNewState_s9yn6r$_0(newState, ReleaseState$SUCCEEDED_getInstance());
        break;
      case 'IN_PROGRESS':
        if (!(this === ReleaseState$READY_getInstance() || this === ReleaseState$FAILED_getInstance())) {
          this.getErrorMessage_ownq0r$_0(newState, 'state was neither ' + toString(Kotlin.getKClassFromExpression(ReleaseState$READY_getInstance()).simpleName) + ' nor ' + toString(Kotlin.getKClassFromExpression(ReleaseState$FAILED_getInstance()).simpleName));
          var message = Unit;
          throw IllegalStateException_init(message.toString());
        }

        tmp$ = newState;
        break;
      case 'SUCCEEDED':
        tmp$ = this.checkNewState_s9yn6r$_0(newState, ReleaseState$IN_PROGRESS_getInstance());
        break;
      case 'FAILED':
        tmp$ = this.checkNewState_s9yn6r$_0(newState, ReleaseState$IN_PROGRESS_getInstance());
        break;
      case 'WATCHING':
        tmp$ = newState;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  ReleaseState.prototype.checkNewState_s9yn6r$_0 = function (newState, expectedState) {
    if (!(this === expectedState)) {
      this.getErrorMessage_ownq0r$_0(newState, 'state is not ' + toString(Kotlin.getKClassFromExpression(expectedState).simpleName));
      var message = Unit;
      throw IllegalStateException_init(message.toString());
    }
    return newState;
  };
  ReleaseState.prototype.getErrorMessage_ownq0r$_0 = function (newState, reason) {
    'Cannot transition to ' + toString(Kotlin.getKClassFromExpression(newState).simpleName) + ' because ' + reason + '.' + ('\n' + 'State was: ' + getToStringRepresentation(this));
  };
  ReleaseState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReleaseState',
    interfaces: [Enum]
  };
  function ReleaseState$values() {
    return [ReleaseState$READY_getInstance(), ReleaseState$IN_PROGRESS_getInstance(), ReleaseState$SUCCEEDED_getInstance(), ReleaseState$FAILED_getInstance(), ReleaseState$WATCHING_getInstance()];
  }
  ReleaseState.values = ReleaseState$values;
  function ReleaseState$valueOf(name) {
    switch (name) {
      case 'READY':
        return ReleaseState$READY_getInstance();
      case 'IN_PROGRESS':
        return ReleaseState$IN_PROGRESS_getInstance();
      case 'SUCCEEDED':
        return ReleaseState$SUCCEEDED_getInstance();
      case 'FAILED':
        return ReleaseState$FAILED_getInstance();
      case 'WATCHING':
        return ReleaseState$WATCHING_getInstance();
      default:throwISE('No enum constant ch.loewenfels.depgraph.data.ReleaseState.' + name);
    }
  }
  ReleaseState.valueOf_61zpoe$ = ReleaseState$valueOf;
  function CommandStateJson(state, dependencies, previous) {
    this.state = state;
    this.dependencies = dependencies;
    this.previous = previous;
  }
  function CommandStateJson$State(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CommandStateJson$State_initFields() {
    CommandStateJson$State_initFields = function () {
    };
    CommandStateJson$State$WAITING_instance = new CommandStateJson$State('WAITING', 0);
    CommandStateJson$State$READY_instance = new CommandStateJson$State('READY', 1);
    CommandStateJson$State$READY_TO_RE_TRIGGER_instance = new CommandStateJson$State('READY_TO_RE_TRIGGER', 2);
    CommandStateJson$State$READY_TO_RE_POLL_instance = new CommandStateJson$State('READY_TO_RE_POLL', 3);
    CommandStateJson$State$QUEUEING_instance = new CommandStateJson$State('QUEUEING', 4);
    CommandStateJson$State$STILL_QUEUEING_instance = new CommandStateJson$State('STILL_QUEUEING', 5);
    CommandStateJson$State$IN_PROGRESS_instance = new CommandStateJson$State('IN_PROGRESS', 6);
    CommandStateJson$State$RE_POLLING_instance = new CommandStateJson$State('RE_POLLING', 7);
    CommandStateJson$State$SUCCEEDED_instance = new CommandStateJson$State('SUCCEEDED', 8);
    CommandStateJson$State$FAILED_instance = new CommandStateJson$State('FAILED', 9);
    CommandStateJson$State$TIMEOUT_instance = new CommandStateJson$State('TIMEOUT', 10);
    CommandStateJson$State$DEACTIVATED_instance = new CommandStateJson$State('DEACTIVATED', 11);
    CommandStateJson$State$DISABLED_instance = new CommandStateJson$State('DISABLED', 12);
  }
  var CommandStateJson$State$WAITING_instance;
  function CommandStateJson$State$WAITING_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$WAITING_instance;
  }
  var CommandStateJson$State$READY_instance;
  function CommandStateJson$State$READY_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$READY_instance;
  }
  var CommandStateJson$State$READY_TO_RE_TRIGGER_instance;
  function CommandStateJson$State$READY_TO_RE_TRIGGER_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$READY_TO_RE_TRIGGER_instance;
  }
  var CommandStateJson$State$READY_TO_RE_POLL_instance;
  function CommandStateJson$State$READY_TO_RE_POLL_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$READY_TO_RE_POLL_instance;
  }
  var CommandStateJson$State$QUEUEING_instance;
  function CommandStateJson$State$QUEUEING_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$QUEUEING_instance;
  }
  var CommandStateJson$State$STILL_QUEUEING_instance;
  function CommandStateJson$State$STILL_QUEUEING_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$STILL_QUEUEING_instance;
  }
  var CommandStateJson$State$IN_PROGRESS_instance;
  function CommandStateJson$State$IN_PROGRESS_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$IN_PROGRESS_instance;
  }
  var CommandStateJson$State$RE_POLLING_instance;
  function CommandStateJson$State$RE_POLLING_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$RE_POLLING_instance;
  }
  var CommandStateJson$State$SUCCEEDED_instance;
  function CommandStateJson$State$SUCCEEDED_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$SUCCEEDED_instance;
  }
  var CommandStateJson$State$FAILED_instance;
  function CommandStateJson$State$FAILED_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$FAILED_instance;
  }
  var CommandStateJson$State$TIMEOUT_instance;
  function CommandStateJson$State$TIMEOUT_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$TIMEOUT_instance;
  }
  var CommandStateJson$State$DEACTIVATED_instance;
  function CommandStateJson$State$DEACTIVATED_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$DEACTIVATED_instance;
  }
  var CommandStateJson$State$DISABLED_instance;
  function CommandStateJson$State$DISABLED_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$DISABLED_instance;
  }
  CommandStateJson$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [Enum]
  };
  function CommandStateJson$State$values() {
    return [CommandStateJson$State$WAITING_getInstance(), CommandStateJson$State$READY_getInstance(), CommandStateJson$State$READY_TO_RE_TRIGGER_getInstance(), CommandStateJson$State$READY_TO_RE_POLL_getInstance(), CommandStateJson$State$QUEUEING_getInstance(), CommandStateJson$State$STILL_QUEUEING_getInstance(), CommandStateJson$State$IN_PROGRESS_getInstance(), CommandStateJson$State$RE_POLLING_getInstance(), CommandStateJson$State$SUCCEEDED_getInstance(), CommandStateJson$State$FAILED_getInstance(), CommandStateJson$State$TIMEOUT_getInstance(), CommandStateJson$State$DEACTIVATED_getInstance(), CommandStateJson$State$DISABLED_getInstance()];
  }
  CommandStateJson$State.values = CommandStateJson$State$values;
  function CommandStateJson$State$valueOf(name) {
    switch (name) {
      case 'WAITING':
        return CommandStateJson$State$WAITING_getInstance();
      case 'READY':
        return CommandStateJson$State$READY_getInstance();
      case 'READY_TO_RE_TRIGGER':
        return CommandStateJson$State$READY_TO_RE_TRIGGER_getInstance();
      case 'READY_TO_RE_POLL':
        return CommandStateJson$State$READY_TO_RE_POLL_getInstance();
      case 'QUEUEING':
        return CommandStateJson$State$QUEUEING_getInstance();
      case 'STILL_QUEUEING':
        return CommandStateJson$State$STILL_QUEUEING_getInstance();
      case 'IN_PROGRESS':
        return CommandStateJson$State$IN_PROGRESS_getInstance();
      case 'RE_POLLING':
        return CommandStateJson$State$RE_POLLING_getInstance();
      case 'SUCCEEDED':
        return CommandStateJson$State$SUCCEEDED_getInstance();
      case 'FAILED':
        return CommandStateJson$State$FAILED_getInstance();
      case 'TIMEOUT':
        return CommandStateJson$State$TIMEOUT_getInstance();
      case 'DEACTIVATED':
        return CommandStateJson$State$DEACTIVATED_getInstance();
      case 'DISABLED':
        return CommandStateJson$State$DISABLED_getInstance();
      default:throwISE('No enum constant ch.loewenfels.depgraph.data.serialization.CommandStateJson.State.' + name);
    }
  }
  CommandStateJson$State.valueOf_61zpoe$ = CommandStateJson$State$valueOf;
  CommandStateJson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandStateJson',
    interfaces: []
  };
  function CommandStateJson_init(state, $this) {
    $this = $this || Object.create(CommandStateJson.prototype);
    CommandStateJson.call($this, state, null, null);
    return $this;
  }
  function CommandStateJson_init_0(state, dependencies, $this) {
    $this = $this || Object.create(CommandStateJson.prototype);
    CommandStateJson.call($this, state, dependencies, null);
    return $this;
  }
  function CommandStateJson_init_1(state, previous, $this) {
    $this = $this || Object.create(CommandStateJson.prototype);
    CommandStateJson.call($this, state, null, previous);
    return $this;
  }
  CommandStateJson.prototype.component1 = function () {
    return this.state;
  };
  CommandStateJson.prototype.component2 = function () {
    return this.dependencies;
  };
  CommandStateJson.prototype.component3 = function () {
    return this.previous;
  };
  CommandStateJson.prototype.copy_e5qeea$ = function (state, dependencies, previous) {
    return new CommandStateJson(state === void 0 ? this.state : state, dependencies === void 0 ? this.dependencies : dependencies, previous === void 0 ? this.previous : previous);
  };
  CommandStateJson.prototype.toString = function () {
    return 'CommandStateJson(state=' + Kotlin.toString(this.state) + (', dependencies=' + Kotlin.toString(this.dependencies)) + (', previous=' + Kotlin.toString(this.previous)) + ')';
  };
  CommandStateJson.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.dependencies) | 0;
    result = result * 31 + Kotlin.hashCode(this.previous) | 0;
    return result;
  };
  CommandStateJson.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.dependencies, other.dependencies) && Kotlin.equals(this.previous, other.previous)))));
  };
  function toJson(state) {
    if (Kotlin.isType(state, CommandState$Waiting))
      return CommandStateJson_init_0(CommandStateJson$State$WAITING_getInstance(), state.dependencies);
    else if (Kotlin.isType(state, CommandState$Ready))
      return CommandStateJson_init(CommandStateJson$State$READY_getInstance());
    else if (Kotlin.isType(state, CommandState$ReadyToReTrigger))
      return CommandStateJson_init(CommandStateJson$State$READY_TO_RE_TRIGGER_getInstance());
    else if (Kotlin.isType(state, CommandState$ReadyToRePoll))
      return CommandStateJson_init(CommandStateJson$State$READY_TO_RE_POLL_getInstance());
    else if (Kotlin.isType(state, CommandState$Queueing))
      return CommandStateJson_init(CommandStateJson$State$QUEUEING_getInstance());
    else if (Kotlin.isType(state, CommandState$StillQueueing))
      return CommandStateJson_init(CommandStateJson$State$STILL_QUEUEING_getInstance());
    else if (Kotlin.isType(state, CommandState$InProgress))
      return CommandStateJson_init(CommandStateJson$State$IN_PROGRESS_getInstance());
    else if (Kotlin.isType(state, CommandState$RePolling))
      return CommandStateJson_init(CommandStateJson$State$RE_POLLING_getInstance());
    else if (Kotlin.isType(state, CommandState$Succeeded))
      return CommandStateJson_init(CommandStateJson$State$SUCCEEDED_getInstance());
    else if (Kotlin.isType(state, CommandState$Failed))
      return CommandStateJson_init(CommandStateJson$State$FAILED_getInstance());
    else if (Kotlin.isType(state, CommandState$Timeout))
      return CommandStateJson_init_1(CommandStateJson$State$TIMEOUT_getInstance(), toJson(state.previous));
    else if (Kotlin.isType(state, CommandState$Deactivated))
      return CommandStateJson_init_1(CommandStateJson$State$DEACTIVATED_getInstance(), toJson(state.previous));
    else if (Kotlin.isType(state, CommandState$Disabled))
      return CommandStateJson_init(CommandStateJson$State$DISABLED_getInstance());
    else
      return Kotlin.noWhenBranchMatched();
  }
  function fromJson(json) {
    var tmp$, tmp$_0, tmp$_1;
    switch (json.state.name) {
      case 'WAITING':
        return new CommandState$Waiting((tmp$ = json.dependencies) != null ? tmp$ : throwIllegal('dependencies', CommandStateJson$State$WAITING_getInstance().name));
      case 'READY':
        return CommandState$Ready_getInstance();
      case 'READY_TO_RE_TRIGGER':
        return CommandState$ReadyToReTrigger_getInstance();
      case 'READY_TO_RE_POLL':
        return CommandState$ReadyToRePoll_getInstance();
      case 'QUEUEING':
        return CommandState$Queueing_getInstance();
      case 'STILL_QUEUEING':
        return CommandState$StillQueueing_getInstance();
      case 'IN_PROGRESS':
        return CommandState$InProgress_getInstance();
      case 'RE_POLLING':
        return CommandState$RePolling_getInstance();
      case 'SUCCEEDED':
        return CommandState$Succeeded_getInstance();
      case 'FAILED':
        return CommandState$Failed_getInstance();
      case 'TIMEOUT':
        return new CommandState$Timeout(fromJson((tmp$_0 = json.previous) != null ? tmp$_0 : throwIllegal('previous', CommandStateJson$State$TIMEOUT_getInstance().name)));
      case 'DEACTIVATED':
        return new CommandState$Deactivated(fromJson((tmp$_1 = json.previous) != null ? tmp$_1 : throwIllegal('previous', CommandStateJson$State$DEACTIVATED_getInstance().name)));
      case 'DISABLED':
        return CommandState$Disabled_getInstance();
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function throwIllegal(fieldName, stateName) {
    throw IllegalArgumentException_init(fieldName + ' must be defined for state ' + stateName);
  }
  function CommandTypeIdMapper() {
  }
  CommandTypeIdMapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommandTypeIdMapper',
    interfaces: [TypeIdMapper]
  };
  function PolymorphSerializable() {
  }
  PolymorphSerializable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PolymorphSerializable',
    interfaces: []
  };
  function ProjectIdTypeIdMapper() {
  }
  ProjectIdTypeIdMapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ProjectIdTypeIdMapper',
    interfaces: [TypeIdMapper]
  };
  function TypeIdMapper() {
  }
  TypeIdMapper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TypeIdMapper',
    interfaces: []
  };
  function TypeOfRun(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TypeOfRun_initFields() {
    TypeOfRun_initFields = function () {
    };
    TypeOfRun$EXPLORE_instance = new TypeOfRun('EXPLORE', 0);
    TypeOfRun$DRY_RUN_instance = new TypeOfRun('DRY_RUN', 1);
    TypeOfRun$RELEASE_instance = new TypeOfRun('RELEASE', 2);
  }
  var TypeOfRun$EXPLORE_instance;
  function TypeOfRun$EXPLORE_getInstance() {
    TypeOfRun_initFields();
    return TypeOfRun$EXPLORE_instance;
  }
  var TypeOfRun$DRY_RUN_instance;
  function TypeOfRun$DRY_RUN_getInstance() {
    TypeOfRun_initFields();
    return TypeOfRun$DRY_RUN_instance;
  }
  var TypeOfRun$RELEASE_instance;
  function TypeOfRun$RELEASE_getInstance() {
    TypeOfRun_initFields();
    return TypeOfRun$RELEASE_instance;
  }
  TypeOfRun.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeOfRun',
    interfaces: [Enum]
  };
  function TypeOfRun$values() {
    return [TypeOfRun$EXPLORE_getInstance(), TypeOfRun$DRY_RUN_getInstance(), TypeOfRun$RELEASE_getInstance()];
  }
  TypeOfRun.values = TypeOfRun$values;
  function TypeOfRun$valueOf(name) {
    switch (name) {
      case 'EXPLORE':
        return TypeOfRun$EXPLORE_getInstance();
      case 'DRY_RUN':
        return TypeOfRun$DRY_RUN_getInstance();
      case 'RELEASE':
        return TypeOfRun$RELEASE_getInstance();
      default:throwISE('No enum constant ch.loewenfels.depgraph.data.TypeOfRun.' + name);
    }
  }
  TypeOfRun.valueOf_61zpoe$ = TypeOfRun$valueOf;
  function toProcessName($receiver) {
    switch ($receiver.name) {
      case 'EXPLORE':
        return 'Explore Release Order';
      case 'DRY_RUN':
        return 'Dry Run';
      case 'RELEASE':
        return 'Release';
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function generateListOfDependentsWithoutSubmoduleAndExcluded$lambda(it) {
    return it.id.identifier;
  }
  function generateListOfDependentsWithoutSubmoduleAndExcluded(releasePlan, excludeRegex) {
    return joinToString_0(sorted(map(projectsWithoutSubmodulesAndExcluded(drop(asSequence_0(releasePlan.iterator()), 1), excludeRegex), generateListOfDependentsWithoutSubmoduleAndExcluded$lambda)), '\n');
  }
  function generateGitCloneCommands(releasePlan, excludeRegex, relativePathTransformerRegex, relativePathTransformerReplacement) {
    return generateGitCloneCommands_0(asSequence_0(releasePlan.iterator()), excludeRegex, relativePathTransformerRegex, relativePathTransformerReplacement);
  }
  function generateGitCloneCommands$lambda(it) {
    return 'git clone ' + it;
  }
  function generateGitCloneCommands_0(projectsAsSequence, excludeRegex, relativePathTransformerRegex, relativePathTransformerReplacement) {
    return joinToString_0(gitRepoUrlsOfProjects(projectsAsSequence, excludeRegex, relativePathTransformerRegex, relativePathTransformerReplacement), '\n', void 0, void 0, void 0, void 0, generateGitCloneCommands$lambda);
  }
  function generateEclipsePsf(releasePlan, excludeRegex, relativePathTransformerRegex, relativePathTransformerReplacement) {
    var sb = new StringBuilder(trimMargin('<?xml version="1.0" encoding="UTF-8"?>\n        |<psf version="2.0">\n        |  <provider id="org.eclipse.egit.core.GitProvider">\n        |\n        '));
    var itr = gitRepoUrlsOfProjects(asSequence_0(releasePlan.iterator()), excludeRegex, relativePathTransformerRegex, relativePathTransformerReplacement).iterator();
    if (itr.hasNext()) {
      var gitRepoUrl = itr.next();
      sb.append_gw00v9$('    <project reference="1.0,').append_gw00v9$(gitRepoUrl).append_gw00v9$(',master,."/>');
    }
    while (itr.hasNext()) {
      sb.append_gw00v9$('\n');
      var gitRepoUrl_0 = itr.next();
      sb.append_gw00v9$('    <project reference="1.0,').append_gw00v9$(gitRepoUrl_0).append_gw00v9$(',master,."/>');
    }
    sb.append_gw00v9$('\n  <\/provider>\n<\/psf>');
    return sb.toString();
  }
  function gitRepoUrlsOfProjects$lambda(closure$relativePathTransformerRegex, closure$relativePathTransformerReplacement) {
    return function (it) {
      return turnIntoGitRepoUrl(it, closure$relativePathTransformerRegex, closure$relativePathTransformerReplacement);
    };
  }
  function gitRepoUrlsOfProjects(projectsAsSequence, excludeRegex, relativePathTransformerRegex, relativePathTransformerReplacement) {
    return sorted(map(projectsWithoutSubmodulesAndExcluded(projectsAsSequence, excludeRegex), gitRepoUrlsOfProjects$lambda(relativePathTransformerRegex, relativePathTransformerReplacement)));
  }
  function projectsWithoutSubmodulesAndExcluded$lambda(it) {
    return !it.isSubmodule;
  }
  function projectsWithoutSubmodulesAndExcluded$lambda_0(closure$excludeRegex) {
    return function (it) {
      return !closure$excludeRegex.matches_6bul2c$(it.relativePath);
    };
  }
  function projectsWithoutSubmodulesAndExcluded(sequence, excludeRegex) {
    return filter(filter(sequence, projectsWithoutSubmodulesAndExcluded$lambda), projectsWithoutSubmodulesAndExcluded$lambda_0(excludeRegex));
  }
  function turnIntoGitRepoUrl($receiver, relativePathTransformerRegex, relativePathTransformerReplacement) {
    return relativePathTransformerRegex.replace_x2uqeu$($receiver.relativePath, relativePathTransformerReplacement);
  }
  function BuildWithParamFormat(releaseVersionName, nextDevVersionName) {
    this.releaseVersionName = releaseVersionName;
    this.nextDevVersionName = nextDevVersionName;
  }
  function BuildWithParamFormat$Query(releaseVersionName, nextDevVersionName) {
    BuildWithParamFormat.call(this, releaseVersionName, nextDevVersionName);
  }
  BuildWithParamFormat$Query.prototype.format_puj7f4$ = function (releaseVersion, nextDevVersion) {
    return mapOf([to(this.releaseVersionName, releaseVersion), to(this.nextDevVersionName, nextDevVersion)]);
  };
  BuildWithParamFormat$Query.prototype.toString = function () {
    return 'BuildWithParamFormat.Query[rel: ' + this.releaseVersionName + ', dev: ' + this.nextDevVersionName + ']';
  };
  BuildWithParamFormat$Query.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Query',
    interfaces: [BuildWithParamFormat]
  };
  function BuildWithParamFormat$Maven(releaseVersionName, nextDevVersionName, parameterName) {
    BuildWithParamFormat.call(this, releaseVersionName, nextDevVersionName);
    this.parameterName_0 = parameterName;
  }
  BuildWithParamFormat$Maven.prototype.format_puj7f4$ = function (releaseVersion, nextDevVersion) {
    return mapOf_0(to(this.parameterName_0, '-D' + this.releaseVersionName + '=' + releaseVersion + ' -D' + this.nextDevVersionName + '=' + nextDevVersion));
  };
  BuildWithParamFormat$Maven.prototype.toString = function () {
    return 'BuildWithParamFormat.Maven[rel: ' + this.releaseVersionName + ', dev: ' + this.nextDevVersionName + ', paramName: ' + this.parameterName_0 + ']';
  };
  BuildWithParamFormat$Maven.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Maven',
    interfaces: [BuildWithParamFormat]
  };
  BuildWithParamFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildWithParamFormat',
    interfaces: []
  };
  function LevelIterator(startingPoint) {
    this.startingPoint_0 = startingPoint;
    this.itemsToVisit_0 = mutableListOf([linkedMapOf([this.startingPoint_0])]);
  }
  LevelIterator.prototype.hasNext = function () {
    this.cleanupCurrentLevel_0();
    return !this.itemsToVisit_0.isEmpty();
  };
  LevelIterator.prototype.cleanupCurrentLevel_0 = function () {
    if (!this.itemsToVisit_0.isEmpty() && this.itemsToVisit_0.get_za3lpa$(0).isEmpty()) {
      this.itemsToVisit_0.removeAt_za3lpa$(0);
    }
  };
  LevelIterator.prototype.next = function () {
    var tmp$;
    if (this.itemsToVisit_0.isEmpty()) {
      throw new NoSuchElementException('No item left; starting point was ' + this.startingPoint_0);
    }
    this.cleanupCurrentLevel_0();
    var itemsOnTheSameLevel = this.itemsToVisit_0.get_za3lpa$(0);
    tmp$ = itemsOnTheSameLevel.remove_11rb$(itemsOnTheSameLevel.entries.iterator().next().key);
    if (tmp$ == null) {
      throw IllegalStateException_init('Could not remove the next item, this class is not thread safe.');
    }
    return tmp$;
  };
  LevelIterator.prototype.addToCurrentLevel_ew669y$ = function (pair) {
    var $receiver = this.itemsToVisit_0.get_za3lpa$(0);
    var key = pair.first;
    var value = pair.second;
    $receiver.put_xwzc9p$(key, value);
  };
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  LevelIterator.prototype.addToNextLevel_ew669y$ = function (pair) {
    if (this.itemsToVisit_0.size <= 1) {
      this.itemsToVisit_0.add_11rb$(LinkedHashMap_init_0());
    }
    var nextLevelProjects = last(this.itemsToVisit_0);
    var key = pair.first;
    var value = pair.second;
    nextLevelProjects.put_xwzc9p$(key, value);
  };
  LevelIterator.prototype.removeIfOnSameLevelAndReAddOnNext_ew669y$ = function (pair) {
    var itemsOnTheSameLevel = this.itemsToVisit_0.get_za3lpa$(0);
    itemsOnTheSameLevel.remove_11rb$(pair.first);
    this.addToNextLevel_ew669y$(pair);
  };
  LevelIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LevelIterator',
    interfaces: [Iterator]
  };
  function hasNextOnTheSameLevel($receiver, level) {
    return $receiver.hasNext() && level === $receiver.peek().level;
  }
  var NONE_OR_SOME_CHARS;
  var SOME_CHARS;
  Object.defineProperty(ConfigKey, 'COMMIT_PREFIX', {
    get: ConfigKey$COMMIT_PREFIX_getInstance
  });
  Object.defineProperty(ConfigKey, 'UPDATE_DEPENDENCY_JOB', {
    get: ConfigKey$UPDATE_DEPENDENCY_JOB_getInstance
  });
  Object.defineProperty(ConfigKey, 'DRY_RUN_JOB', {
    get: ConfigKey$DRY_RUN_JOB_getInstance
  });
  Object.defineProperty(ConfigKey, 'REMOTE_REGEX', {
    get: ConfigKey$REMOTE_REGEX_getInstance
  });
  Object.defineProperty(ConfigKey, 'RELATIVE_PATH_EXCLUDE_PROJECT_REGEX', {
    get: ConfigKey$RELATIVE_PATH_EXCLUDE_PROJECT_REGEX_getInstance
  });
  Object.defineProperty(ConfigKey, 'RELATIVE_PATH_TO_GIT_REPO_REGEX', {
    get: ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REGEX_getInstance
  });
  Object.defineProperty(ConfigKey, 'RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT', {
    get: ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT_getInstance
  });
  Object.defineProperty(ConfigKey, 'REGEX_PARAMS', {
    get: ConfigKey$REGEX_PARAMS_getInstance
  });
  Object.defineProperty(ConfigKey, 'JOB_MAPPING', {
    get: ConfigKey$JOB_MAPPING_getInstance
  });
  Object.defineProperty(ConfigKey, 'BUILD_WITH_PARAM_JOBS', {
    get: ConfigKey$BUILD_WITH_PARAM_JOBS_getInstance
  });
  Object.defineProperty(ConfigKey, 'INITIAL_RELEASE_JSON', {
    get: ConfigKey$INITIAL_RELEASE_JSON_getInstance
  });
  Object.defineProperty(ConfigKey, 'Companion', {
    get: ConfigKey$Companion_getInstance
  });
  var package$ch = _.ch || (_.ch = {});
  var package$loewenfels = package$ch.loewenfels || (package$ch.loewenfels = {});
  var package$depgraph = package$loewenfels.depgraph || (package$loewenfels.depgraph = {});
  package$depgraph.ConfigKey = ConfigKey;
  package$depgraph.parseJobMapping_429wai$ = parseJobMapping;
  package$depgraph.parseJobMapping_61zpoe$ = parseJobMapping_0;
  package$depgraph.parseRemoteRegex_429wai$ = parseRemoteRegex;
  package$depgraph.parseRemoteRegex_61zpoe$ = parseRemoteRegex_0;
  package$depgraph.parseRegexParams_429wai$ = parseRegexParams;
  package$depgraph.parseRegexParams_61zpoe$ = parseRegexParams_0;
  package$depgraph.parseBuildWithParamJobs_429wai$ = parseBuildWithParamJobs;
  package$depgraph.parseBuildWithParamJobs_61zpoe$ = parseBuildWithParamJobs_0;
  var package$data = package$depgraph.data || (package$depgraph.data = {});
  package$data.getToStringRepresentation_s8jyvk$ = getToStringRepresentation;
  package$data.Command = Command;
  CommandState.Waiting = CommandState$Waiting;
  Object.defineProperty(CommandState, 'Ready', {
    get: CommandState$Ready_getInstance
  });
  Object.defineProperty(CommandState, 'ReadyToReTrigger', {
    get: CommandState$ReadyToReTrigger_getInstance
  });
  Object.defineProperty(CommandState, 'ReadyToRePoll', {
    get: CommandState$ReadyToRePoll_getInstance
  });
  Object.defineProperty(CommandState, 'Queueing', {
    get: CommandState$Queueing_getInstance
  });
  Object.defineProperty(CommandState, 'StillQueueing', {
    get: CommandState$StillQueueing_getInstance
  });
  Object.defineProperty(CommandState, 'InProgress', {
    get: CommandState$InProgress_getInstance
  });
  Object.defineProperty(CommandState, 'RePolling', {
    get: CommandState$RePolling_getInstance
  });
  Object.defineProperty(CommandState, 'Succeeded', {
    get: CommandState$Succeeded_getInstance
  });
  Object.defineProperty(CommandState, 'Failed', {
    get: CommandState$Failed_getInstance
  });
  CommandState.Timeout = CommandState$Timeout;
  CommandState.Deactivated = CommandState$Deactivated;
  Object.defineProperty(CommandState, 'Disabled', {
    get: CommandState$Disabled_getInstance
  });
  Object.defineProperty(CommandState, 'Companion', {
    get: CommandState$Companion_getInstance
  });
  package$data.CommandState = CommandState;
  package$data.get_simpleNameNonNull_lr8r8q$ = get_simpleNameNonNull;
  package$data.Project_init_grjrm5$ = Project_init;
  package$data.Project_init_xgsuvp$ = Project_init_0;
  package$data.Project = Project;
  package$data.ProjectId = ProjectId;
  package$data.Relation = Relation;
  package$data.ReleaseCommand = ReleaseCommand;
  package$data.ReleasePlan_init_nhmys$ = ReleasePlan_init;
  package$data.ReleasePlan = ReleasePlan;
  Object.defineProperty(ReleaseState, 'READY', {
    get: ReleaseState$READY_getInstance
  });
  Object.defineProperty(ReleaseState, 'IN_PROGRESS', {
    get: ReleaseState$IN_PROGRESS_getInstance
  });
  Object.defineProperty(ReleaseState, 'SUCCEEDED', {
    get: ReleaseState$SUCCEEDED_getInstance
  });
  Object.defineProperty(ReleaseState, 'FAILED', {
    get: ReleaseState$FAILED_getInstance
  });
  Object.defineProperty(ReleaseState, 'WATCHING', {
    get: ReleaseState$WATCHING_getInstance
  });
  package$data.ReleaseState = ReleaseState;
  Object.defineProperty(CommandStateJson$State, 'WAITING', {
    get: CommandStateJson$State$WAITING_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'READY', {
    get: CommandStateJson$State$READY_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'READY_TO_RE_TRIGGER', {
    get: CommandStateJson$State$READY_TO_RE_TRIGGER_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'READY_TO_RE_POLL', {
    get: CommandStateJson$State$READY_TO_RE_POLL_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'QUEUEING', {
    get: CommandStateJson$State$QUEUEING_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'STILL_QUEUEING', {
    get: CommandStateJson$State$STILL_QUEUEING_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'IN_PROGRESS', {
    get: CommandStateJson$State$IN_PROGRESS_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'RE_POLLING', {
    get: CommandStateJson$State$RE_POLLING_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'SUCCEEDED', {
    get: CommandStateJson$State$SUCCEEDED_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'FAILED', {
    get: CommandStateJson$State$FAILED_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'TIMEOUT', {
    get: CommandStateJson$State$TIMEOUT_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'DEACTIVATED', {
    get: CommandStateJson$State$DEACTIVATED_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'DISABLED', {
    get: CommandStateJson$State$DISABLED_getInstance
  });
  CommandStateJson.State = CommandStateJson$State;
  var package$serialization = package$data.serialization || (package$data.serialization = {});
  package$serialization.CommandStateJson_init_cxr8t7$ = CommandStateJson_init;
  package$serialization.CommandStateJson_init_gvqfhq$ = CommandStateJson_init_0;
  package$serialization.CommandStateJson_init_cka4jb$ = CommandStateJson_init_1;
  package$serialization.CommandStateJson = CommandStateJson;
  package$serialization.toJson_m86w84$ = toJson;
  package$serialization.fromJson_v4rmea$ = fromJson;
  package$serialization.CommandTypeIdMapper = CommandTypeIdMapper;
  package$serialization.PolymorphSerializable = PolymorphSerializable;
  package$serialization.ProjectIdTypeIdMapper = ProjectIdTypeIdMapper;
  package$serialization.TypeIdMapper = TypeIdMapper;
  Object.defineProperty(TypeOfRun, 'EXPLORE', {
    get: TypeOfRun$EXPLORE_getInstance
  });
  Object.defineProperty(TypeOfRun, 'DRY_RUN', {
    get: TypeOfRun$DRY_RUN_getInstance
  });
  Object.defineProperty(TypeOfRun, 'RELEASE', {
    get: TypeOfRun$RELEASE_getInstance
  });
  package$data.TypeOfRun = TypeOfRun;
  package$data.toProcessName_ncdm8l$ = toProcessName;
  package$depgraph.generateListOfDependentsWithoutSubmoduleAndExcluded_4w9fpd$ = generateListOfDependentsWithoutSubmoduleAndExcluded;
  package$depgraph.generateGitCloneCommands_xx51qy$ = generateGitCloneCommands;
  package$depgraph.generateGitCloneCommands_z81nd8$ = generateGitCloneCommands_0;
  $$importsForInline$$['kbox-js'] = $module$kbox_js;
  package$depgraph.generateEclipsePsf_xx51qy$ = generateEclipsePsf;
  package$depgraph.turnIntoGitRepoUrl_gfn6d5$ = turnIntoGitRepoUrl;
  BuildWithParamFormat.Query = BuildWithParamFormat$Query;
  BuildWithParamFormat.Maven = BuildWithParamFormat$Maven;
  var package$jobexecution = package$depgraph.jobexecution || (package$depgraph.jobexecution = {});
  package$jobexecution.BuildWithParamFormat = BuildWithParamFormat;
  package$depgraph.LevelIterator = LevelIterator;
  package$depgraph.hasNextOnTheSameLevel_r88oei$ = hasNextOnTheSameLevel;
  var package$regex = package$depgraph.regex || (package$depgraph.regex = {});
  Object.defineProperty(package$regex, 'NONE_OR_SOME_CHARS', {
    get: function () {
      return NONE_OR_SOME_CHARS;
    }
  });
  Object.defineProperty(package$regex, 'SOME_CHARS', {
    get: function () {
      return SOME_CHARS;
    }
  });
  ReleaseCommand.prototype.asDeactivated = Command.prototype.asDeactivated;
  ReleaseCommand.prototype.asDisabled = Command.prototype.asDisabled;
  NONE_OR_SOME_CHARS = '[\\S\\s]*?';
  SOME_CHARS = '[\\S\\s]+?';
  Kotlin.defineModule('dep-graph-releaser-api-js', _);
  return _;
}));

//# sourceMappingURL=dep-graph-releaser-api-js.js.map
