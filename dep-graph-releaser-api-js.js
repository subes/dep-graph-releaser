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
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var splitToSequence = Kotlin.kotlin.text.splitToSequence_o64adg$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getKClass = Kotlin.getKClass;
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var asSequence_0 = Kotlin.kotlin.sequences.asSequence_35ci02$;
  var drop = Kotlin.kotlin.sequences.drop_wuwhe2$;
  var sorted = Kotlin.kotlin.sequences.sorted_gtzq52$;
  var joinToString_0 = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
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
    ConfigKey$INITIAL_RELEASE_JSON_instance = new ConfigKey('INITIAL_RELEASE_JSON', 9, 'initialJson');
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
    return [ConfigKey$COMMIT_PREFIX_getInstance(), ConfigKey$UPDATE_DEPENDENCY_JOB_getInstance(), ConfigKey$DRY_RUN_JOB_getInstance(), ConfigKey$REMOTE_REGEX_getInstance(), ConfigKey$RELATIVE_PATH_EXCLUDE_PROJECT_REGEX_getInstance(), ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REGEX_getInstance(), ConfigKey$RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT_getInstance(), ConfigKey$REGEX_PARAMS_getInstance(), ConfigKey$JOB_MAPPING_getInstance(), ConfigKey$INITIAL_RELEASE_JSON_getInstance()];
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
      case 'INITIAL_RELEASE_JSON':
        return ConfigKey$INITIAL_RELEASE_JSON_getInstance();
      default:throwISE('No enum constant ch.loewenfels.depgraph.ConfigKey.' + name);
    }
  }
  ConfigKey.valueOf_61zpoe$ = ConfigKey$valueOf;
  function parseRemoteRegex(releasePlan) {
    return parseRemoteRegex_0(releasePlan.getConfig_udzor3$(ConfigKey$REMOTE_REGEX_getInstance()));
  }
  function parseRemoteRegex_0(regex) {
    return parseRegex(regex, 59, 'remoteRegex', getCallableRef('checkUrlDefined', function (jenkinsBaseUrl, remoteRegex) {
      return checkUrlDefined(jenkinsBaseUrl, remoteRegex), Unit;
    }));
  }
  function parseRegexParameters(releasePlan) {
    return parseRegexParameters_0(releasePlan.getConfig_udzor3$(ConfigKey$REGEX_PARAMS_getInstance()));
  }
  function parseRegexParameters_0(regex) {
    return parseRegex(regex, 36, 'regexParameters', getCallableRef('checkAtLeastOneParameter', function (pair, regexParameters) {
      return checkAtLeastOneParameter(pair, regexParameters), Unit;
    }));
  }
  function parseRegex$lambda(closure$name, closure$configValue, closure$checkRightSide) {
    return function (pair) {
      var index = checkRegexNotEmpty(pair, closure$name, closure$configValue);
      var startIndex = index + 1 | 0;
      var rightSide = pair.substring(startIndex);
      closure$checkRightSide(rightSide, closure$configValue);
      return to(Regex_init(pair.substring(0, index)), rightSide);
    };
  }
  function parseRegex(configValue, splitChar, name, checkRightSide) {
    var tmp$;
    if (configValue.length > 0) {
      tmp$ = toList(map(splitToSequence(configValue, Kotlin.charArrayOf(splitChar)), parseRegex$lambda(name, configValue, checkRightSide)));
    }
     else {
      tmp$ = emptyList();
    }
    return tmp$;
  }
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  function checkRegexNotEmpty(pair, name, input) {
    var index = indexOf(pair, 35);
    if (!(index > 0)) {
      var message = 'regex requires at least one character.' + '\n' + name + ': ' + input;
      throw IllegalStateException_init(message.toString());
    }
    return index;
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function checkUrlDefined(jenkinsBaseUrl, remoteRegex) {
    if (!!isBlank(jenkinsBaseUrl)) {
      var message = 'A remoteRegex requires a related jenkins base url.' + '\r' + 'emoteRegex: ' + remoteRegex;
      throw IllegalStateException_init(message.toString());
    }
  }
  function checkAtLeastOneParameter(pair, regexParameters) {
    var index = indexOf(pair, 61);
    if (!(index > 0)) {
      var message = 'A regexParam requires at least one parameter.' + '\n' + 'regexParameters: ' + regexParameters;
      throw IllegalStateException_init(message.toString());
    }
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
    interfaces: []
  };
  function CommandState() {
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
    if (Kotlin.isType(newState, CommandState$ReadyToReTrigger))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Failed)]);
    else if (Kotlin.isType(newState, CommandState$Ready)) {
      this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Waiting)]);
      if (Kotlin.isType(this, CommandState$Waiting)) {
        if (!this.dependencies.isEmpty()) {
          var message_1 = 'Can only change from ' + toString(getKClass(CommandState$Waiting).simpleName) + ' to ' + toString(getKClass(CommandState$Ready).simpleName) + ' ' + 'if there are not any dependencies left which we need to wait for.' + ('\n' + 'State was: ' + getToStringRepresentation(this));
          throw IllegalStateException_init(message_1.toString());
        }
      }
      tmp$_0 = newState;
    }
     else if (Kotlin.isType(newState, CommandState$Queueing))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Ready), getKClass(CommandState$ReadyToReTrigger)]);
    else if (Kotlin.isType(newState, CommandState$StillQueueing))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Queueing)]);
    else if (Kotlin.isType(newState, CommandState$InProgress))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$Queueing)]);
    else if (Kotlin.isType(newState, CommandState$RePolling))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$InProgress)]);
    else if (Kotlin.isType(newState, CommandState$Succeeded))
      tmp$_0 = this.checkNewStateIsAfter_jb7wuq$_0(newState, [getKClass(CommandState$InProgress), getKClass(CommandState$RePolling)]);
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
    return ensureNotNull(it.simpleName);
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
        var message_0 = 'Cannot transition to ' + toString(Kotlin.getKClassFromExpression(newState).simpleName) + ' because state is not ' + toString(states) + '.' + ('\n' + 'State was: ' + getToStringRepresentation(this));
        throw IllegalStateException_init(message_0.toString());
      }
    }
    return newState;
  };
  CommandState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommandState',
    interfaces: []
  };
  function getToStringRepresentation($receiver) {
    var representation = $receiver.toString();
    return equals(representation, '[object Object]') ? ensureNotNull(Kotlin.getKClassFromExpression($receiver).simpleName) : representation;
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
    interfaces: []
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
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  ReleasePlan.prototype.collectDependentsInclDependentsOfAllSubmodules_lljhqa$ = function (multiModuleId) {
    var projectIds = HashSet_init();
    var projectsToVisit = mutableListOf([multiModuleId]);
    do {
      var projectId = projectsToVisit.removeAt_za3lpa$(0);
      var $receiver = this.getDependents_lljhqa$(projectId);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
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
    CommandStateJson$State$QUEUEING_instance = new CommandStateJson$State('QUEUEING', 3);
    CommandStateJson$State$STILL_QUEUEING_instance = new CommandStateJson$State('STILL_QUEUEING', 4);
    CommandStateJson$State$IN_PROGRESS_instance = new CommandStateJson$State('IN_PROGRESS', 5);
    CommandStateJson$State$RE_POLLING_instance = new CommandStateJson$State('RE_POLLING', 6);
    CommandStateJson$State$SUCCEEDED_instance = new CommandStateJson$State('SUCCEEDED', 7);
    CommandStateJson$State$FAILED_instance = new CommandStateJson$State('FAILED', 8);
    CommandStateJson$State$DEACTIVATED_instance = new CommandStateJson$State('DEACTIVATED', 9);
    CommandStateJson$State$DISABLED_instance = new CommandStateJson$State('DISABLED', 10);
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
    return [CommandStateJson$State$WAITING_getInstance(), CommandStateJson$State$READY_getInstance(), CommandStateJson$State$READY_TO_RE_TRIGGER_getInstance(), CommandStateJson$State$QUEUEING_getInstance(), CommandStateJson$State$STILL_QUEUEING_getInstance(), CommandStateJson$State$IN_PROGRESS_getInstance(), CommandStateJson$State$RE_POLLING_getInstance(), CommandStateJson$State$SUCCEEDED_getInstance(), CommandStateJson$State$FAILED_getInstance(), CommandStateJson$State$DEACTIVATED_getInstance(), CommandStateJson$State$DISABLED_getInstance()];
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
    else if (Kotlin.isType(state, CommandState$Deactivated))
      return CommandStateJson_init_1(CommandStateJson$State$DEACTIVATED_getInstance(), toJson(state.previous));
    else if (Kotlin.isType(state, CommandState$Disabled))
      return CommandStateJson_init(CommandStateJson$State$DISABLED_getInstance());
    else
      return Kotlin.noWhenBranchMatched();
  }
  function fromJson(json) {
    var tmp$, tmp$_0;
    switch (json.state.name) {
      case 'WAITING':
        return new CommandState$Waiting((tmp$ = json.dependencies) != null ? tmp$ : throwIllegal('dependencies', CommandStateJson$State$WAITING_getInstance().name));
      case 'READY':
        return CommandState$Ready_getInstance();
      case 'READY_TO_RE_TRIGGER':
        return CommandState$ReadyToReTrigger_getInstance();
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
      case 'DEACTIVATED':
        return new CommandState$Deactivated(fromJson((tmp$_0 = json.previous) != null ? tmp$_0 : throwIllegal('previous', CommandStateJson$State$DEACTIVATED_getInstance().name)));
      case 'DISABLED':
        return CommandState$Disabled_getInstance();
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function throwIllegal(fieldName, stateName) {
    throw IllegalArgumentException_init(fieldName + ' must be defined for state ' + stateName);
  }
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
    if (this.itemsToVisit_0.isEmpty()) {
      throw new NoSuchElementException('No item left; starting point was ' + this.startingPoint_0);
    }
    this.cleanupCurrentLevel_0();
    var itemsOnTheSameLevel = this.itemsToVisit_0.get_za3lpa$(0);
    return ensureNotNull(itemsOnTheSameLevel.remove_11rb$(itemsOnTheSameLevel.entries.iterator().next().key));
  };
  LevelIterator.prototype.addToCurrentLevel_ew669y$ = function (pair) {
    var $receiver = this.itemsToVisit_0.get_za3lpa$(0);
    var key = pair.first;
    var value = pair.second;
    $receiver.put_xwzc9p$(key, value);
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  LevelIterator.prototype.addToNextLevel_ew669y$ = function (pair) {
    if (this.itemsToVisit_0.size <= 1) {
      this.itemsToVisit_0.add_11rb$(LinkedHashMap_init());
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
  var noneOrSomeChars;
  var someChars;
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
  package$depgraph.parseRemoteRegex_429wai$ = parseRemoteRegex;
  package$depgraph.parseRemoteRegex_61zpoe$ = parseRemoteRegex_0;
  package$depgraph.parseRegexParameters_429wai$ = parseRegexParameters;
  package$depgraph.parseRegexParameters_61zpoe$ = parseRegexParameters_0;
  var package$data = package$depgraph.data || (package$depgraph.data = {});
  package$data.Command = Command;
  CommandState.Waiting = CommandState$Waiting;
  Object.defineProperty(CommandState, 'Ready', {
    get: CommandState$Ready_getInstance
  });
  Object.defineProperty(CommandState, 'ReadyToReTrigger', {
    get: CommandState$ReadyToReTrigger_getInstance
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
  CommandState.Deactivated = CommandState$Deactivated;
  Object.defineProperty(CommandState, 'Disabled', {
    get: CommandState$Disabled_getInstance
  });
  package$data.CommandState = CommandState;
  package$data.getToStringRepresentation_s8jyvk$ = getToStringRepresentation;
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
  package$depgraph.LevelIterator = LevelIterator;
  package$depgraph.hasNextOnTheSameLevel_r88oei$ = hasNextOnTheSameLevel;
  var package$regex = package$depgraph.regex || (package$depgraph.regex = {});
  Object.defineProperty(package$regex, 'noneOrSomeChars', {
    get: function () {
      return noneOrSomeChars;
    }
  });
  Object.defineProperty(package$regex, 'someChars', {
    get: function () {
      return someChars;
    }
  });
  ReleaseCommand.prototype.asDeactivated = Command.prototype.asDeactivated;
  ReleaseCommand.prototype.asDisabled = Command.prototype.asDisabled;
  noneOrSomeChars = '[\\S\\s]*?';
  someChars = '[\\S\\s]+?';
  Kotlin.defineModule('dep-graph-releaser-api-js', _);
  return _;
}));

//# sourceMappingURL=dep-graph-releaser-api-js.js.map
