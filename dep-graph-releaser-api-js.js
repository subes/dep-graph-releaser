if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'dep-graph-releaser-api-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dep-graph-releaser-api-js'.");
}
this['dep-graph-releaser-api-js'] = function (_, Kotlin) {
  'use strict';
  var equals = Kotlin.equals;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getKClass = Kotlin.getKClass;
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var Unit = Kotlin.kotlin.Unit;
  var Iterator = Kotlin.kotlin.collections.Iterator;
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
  CommandState$InProgress.prototype = Object.create(CommandState.prototype);
  CommandState$InProgress.prototype.constructor = CommandState$InProgress;
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
  function hasNextOnTheSameLevel($receiver, level) {
    return $receiver.hasNext() && level === $receiver.peek().level;
  }
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
    ConfigKey$REMOTE_JOB_instance = new ConfigKey('REMOTE_JOB', 2, 'remoteJob');
    ConfigKey$REMOTE_REGEX_instance = new ConfigKey('REMOTE_REGEX', 3, 'remoteRegex');
    ConfigKey$DRY_RUN_JOB_instance = new ConfigKey('DRY_RUN_JOB', 4, 'dryRunJob');
    ConfigKey$REGEX_PARAMS_instance = new ConfigKey('REGEX_PARAMS', 5, 'regexParams');
    ConfigKey$JOB_MAPPING_instance = new ConfigKey('JOB_MAPPING', 6, 'jobMapping');
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
  var ConfigKey$REMOTE_JOB_instance;
  function ConfigKey$REMOTE_JOB_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$REMOTE_JOB_instance;
  }
  var ConfigKey$REMOTE_REGEX_instance;
  function ConfigKey$REMOTE_REGEX_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$REMOTE_REGEX_instance;
  }
  var ConfigKey$DRY_RUN_JOB_instance;
  function ConfigKey$DRY_RUN_JOB_getInstance() {
    ConfigKey_initFields();
    return ConfigKey$DRY_RUN_JOB_instance;
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
    return [ConfigKey$COMMIT_PREFIX_getInstance(), ConfigKey$UPDATE_DEPENDENCY_JOB_getInstance(), ConfigKey$REMOTE_JOB_getInstance(), ConfigKey$REMOTE_REGEX_getInstance(), ConfigKey$DRY_RUN_JOB_getInstance(), ConfigKey$REGEX_PARAMS_getInstance(), ConfigKey$JOB_MAPPING_getInstance()];
  }
  ConfigKey.values = ConfigKey$values;
  function ConfigKey$valueOf(name) {
    switch (name) {
      case 'COMMIT_PREFIX':
        return ConfigKey$COMMIT_PREFIX_getInstance();
      case 'UPDATE_DEPENDENCY_JOB':
        return ConfigKey$UPDATE_DEPENDENCY_JOB_getInstance();
      case 'REMOTE_JOB':
        return ConfigKey$REMOTE_JOB_getInstance();
      case 'REMOTE_REGEX':
        return ConfigKey$REMOTE_REGEX_getInstance();
      case 'DRY_RUN_JOB':
        return ConfigKey$DRY_RUN_JOB_getInstance();
      case 'REGEX_PARAMS':
        return ConfigKey$REGEX_PARAMS_getInstance();
      case 'JOB_MAPPING':
        return ConfigKey$JOB_MAPPING_getInstance();
      default:throwISE('No enum constant ch.loewenfels.depgraph.ConfigKey.' + name);
    }
  }
  ConfigKey.valueOf_61zpoe$ = ConfigKey$valueOf;
  function Command() {
  }
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
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
    var tmp$;
    if (!(this !== CommandState$Disabled_getInstance())) {
      var message = 'Cannot transition to any state if current state is ' + toString(getKClass(CommandState$Disabled).simpleName) + '.';
      throw IllegalStateException_init(message.toString());
    }
    if (!!((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(newState)) : null)) {
      var message_0 = CommandState$checkTransitionAllowed$lambda(this, newState)();
      throw IllegalStateException_init(message_0.toString());
    }
    if (equals(newState, CommandState$ReadyToReTrigger_getInstance()))
      this.checkNewState_fityb6$_0(newState, [getKClass(CommandState$Failed)]);
    else if (equals(newState, CommandState$Ready_getInstance())) {
      this.checkNewState_fityb6$_0(newState, [getKClass(CommandState$Waiting)]);
      if (Kotlin.isType(this, CommandState$Waiting)) {
        if (!this.dependencies.isEmpty()) {
          var message_1 = 'Can only change from ' + toString(getKClass(CommandState$Waiting).simpleName) + ' to ' + toString(getKClass(CommandState$Ready).simpleName) + ' ' + 'if there are not any dependencies left which we need to wait for.' + ('\n' + 'State was: ' + getToStringRepresentation(this));
          throw IllegalStateException_init(message_1.toString());
        }
      }
    }
     else if (equals(newState, CommandState$Queueing_getInstance()))
      this.checkNewState_fityb6$_0(newState, [getKClass(CommandState$Ready), getKClass(CommandState$ReadyToReTrigger)]);
    else if (equals(newState, CommandState$InProgress_getInstance()))
      this.checkNewState_fityb6$_0(newState, [getKClass(CommandState$Queueing)]);
    else if (equals(newState, CommandState$Succeeded_getInstance()))
      this.checkNewState_fityb6$_0(newState, [getKClass(CommandState$InProgress)]);
    return newState;
  };
  function CommandState$checkNewState$lambda(closure$newState, this$CommandState) {
    return function () {
      return 'Cannot transition to ' + toString(Kotlin.getKClassFromExpression(closure$newState).simpleName) + ' because ' + ('current state is ' + toString(getKClass(CommandState$Deactivated).simpleName) + ', can only transition to its previous state.') + ('\n' + 'Deactivated.previous was: ' + getToStringRepresentation(this$CommandState.previous));
    };
  }
  function CommandState$checkNewState$lambda$lambda(it) {
    return ensureNotNull(Kotlin.getKClassFromExpression(it).simpleName);
  }
  CommandState.prototype.checkNewState_fityb6$_0 = function (newState, requiredState) {
    var tmp$;
    if (Kotlin.isType(this, CommandState$Deactivated)) {
      if (!((tmp$ = Kotlin.getKClassFromExpression(newState)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(this.previous)) : null)) {
        var message = CommandState$checkNewState$lambda(newState, this)();
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
          tmp$_1 = Kotlin.getKClassFromExpression(requiredState[0]).simpleName;
        }
         else {
          tmp$_1 = 'one of: ' + joinToString(requiredState, void 0, void 0, void 0, void 0, void 0, CommandState$checkNewState$lambda$lambda);
        }
        var states = tmp$_1;
        var message_0 = 'Cannot transition to ' + toString(Kotlin.getKClassFromExpression(newState).simpleName) + ' because state is not ' + toString(states) + '.' + ('\n' + 'State was: ' + getToStringRepresentation(this));
        throw IllegalStateException_init(message_0.toString());
      }
    }
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
  function ReleasePlan(releaseId, state, rootProjectId, projects, submodules, dependents, warnings, infos, config) {
    this.releaseId = releaseId;
    this.state = state;
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
    return new ReleasePlan$ReleasePlanIterator(this, this.rootProjectId);
  };
  ReleasePlan.prototype.iterator_lljhqa$ = function (entryPoint) {
    return new ReleasePlan$ReleasePlanIterator(this, entryPoint);
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
  ReleasePlan.prototype.getAllProjects = function () {
    return this.projects_0;
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
  function ReleasePlan$ReleasePlanIterator(releasePlan, entryPoint) {
    this.releasePlan_0 = releasePlan;
    this.levelIterator_0 = new LevelIterator(to(entryPoint, this.releasePlan_0.getProject_lljhqa$(entryPoint)));
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
    ReleasePlan.call($this, releasePlan.releaseId, releasePlan.state, releasePlan.rootProjectId, projects, releasePlan.submodules_0, releasePlan.dependents_0, releasePlan.warnings, releasePlan.infos, releasePlan.config);
    return $this;
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function ReleasePlan_init_0(publishId, rootProjectId, projects, submodulesOfProject, dependents, $this) {
    $this = $this || Object.create(ReleasePlan.prototype);
    ReleasePlan.call($this, publishId, ReleaseState$Ready_getInstance(), rootProjectId, projects, submodulesOfProject, dependents, emptyList(), emptyList(), emptyMap());
    return $this;
  }
  ReleasePlan.prototype.component1 = function () {
    return this.releaseId;
  };
  ReleasePlan.prototype.component2 = function () {
    return this.state;
  };
  ReleasePlan.prototype.component3 = function () {
    return this.rootProjectId;
  };
  ReleasePlan.prototype.component4_0 = function () {
    return this.projects_0;
  };
  ReleasePlan.prototype.component5_0 = function () {
    return this.submodules_0;
  };
  ReleasePlan.prototype.component6_0 = function () {
    return this.dependents_0;
  };
  ReleasePlan.prototype.component7 = function () {
    return this.warnings;
  };
  ReleasePlan.prototype.component8 = function () {
    return this.infos;
  };
  ReleasePlan.prototype.component9 = function () {
    return this.config;
  };
  ReleasePlan.prototype.copy_wzjb64$ = function (releaseId, state, rootProjectId, projects, submodules, dependents, warnings, infos, config) {
    return new ReleasePlan(releaseId === void 0 ? this.releaseId : releaseId, state === void 0 ? this.state : state, rootProjectId === void 0 ? this.rootProjectId : rootProjectId, projects === void 0 ? this.projects_0 : projects, submodules === void 0 ? this.submodules_0 : submodules, dependents === void 0 ? this.dependents_0 : dependents, warnings === void 0 ? this.warnings : warnings, infos === void 0 ? this.infos : infos, config === void 0 ? this.config : config);
  };
  ReleasePlan.prototype.toString = function () {
    return 'ReleasePlan(releaseId=' + Kotlin.toString(this.releaseId) + (', state=' + Kotlin.toString(this.state)) + (', rootProjectId=' + Kotlin.toString(this.rootProjectId)) + (', projects=' + Kotlin.toString(this.projects_0)) + (', submodules=' + Kotlin.toString(this.submodules_0)) + (', dependents=' + Kotlin.toString(this.dependents_0)) + (', warnings=' + Kotlin.toString(this.warnings)) + (', infos=' + Kotlin.toString(this.infos)) + (', config=' + Kotlin.toString(this.config)) + ')';
  };
  ReleasePlan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.releaseId) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
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
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.releaseId, other.releaseId) && Kotlin.equals(this.state, other.state) && Kotlin.equals(this.rootProjectId, other.rootProjectId) && Kotlin.equals(this.projects_0, other.projects_0) && Kotlin.equals(this.submodules_0, other.submodules_0) && Kotlin.equals(this.dependents_0, other.dependents_0) && Kotlin.equals(this.warnings, other.warnings) && Kotlin.equals(this.infos, other.infos) && Kotlin.equals(this.config, other.config)))));
  };
  function ReleaseState(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ReleaseState_initFields() {
    ReleaseState_initFields = function () {
    };
    ReleaseState$Ready_instance = new ReleaseState('Ready', 0);
    ReleaseState$InProgress_instance = new ReleaseState('InProgress', 1);
    ReleaseState$Succeeded_instance = new ReleaseState('Succeeded', 2);
    ReleaseState$Failed_instance = new ReleaseState('Failed', 3);
  }
  var ReleaseState$Ready_instance;
  function ReleaseState$Ready_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$Ready_instance;
  }
  var ReleaseState$InProgress_instance;
  function ReleaseState$InProgress_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$InProgress_instance;
  }
  var ReleaseState$Succeeded_instance;
  function ReleaseState$Succeeded_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$Succeeded_instance;
  }
  var ReleaseState$Failed_instance;
  function ReleaseState$Failed_getInstance() {
    ReleaseState_initFields();
    return ReleaseState$Failed_instance;
  }
  ReleaseState.prototype.checkTransitionAllowed_g1wt0g$ = function (newState) {
    switch (newState.name) {
      case 'Ready':
        if (!false) {
          this.getErrorMessage_ownq0r$_0(newState, 'there is no way to transition to ' + toString(Kotlin.getKClassFromExpression(ReleaseState$Ready_getInstance()).simpleName));
          var message = Unit;
          throw IllegalStateException_init(message.toString());
        }

        break;
      case 'InProgress':
        if (!(this === ReleaseState$Ready_getInstance() || this === ReleaseState$Failed_getInstance())) {
          this.getErrorMessage_ownq0r$_0(newState, 'state was neither ' + toString(Kotlin.getKClassFromExpression(ReleaseState$Ready_getInstance()).simpleName) + ' nor ' + toString(Kotlin.getKClassFromExpression(ReleaseState$Failed_getInstance()).simpleName));
          var message_0 = Unit;
          throw IllegalStateException_init(message_0.toString());
        }

        break;
      case 'Succeeded':
        this.checkNewState_s9yn6r$_0(newState, ReleaseState$InProgress_getInstance());
        break;
      case 'Failed':
        this.checkNewState_s9yn6r$_0(newState, ReleaseState$InProgress_getInstance());
        break;
    }
    return newState;
  };
  ReleaseState.prototype.checkNewState_s9yn6r$_0 = function (newState, expectedState) {
    if (!(this === expectedState)) {
      this.getErrorMessage_ownq0r$_0(newState, 'state is not ' + toString(Kotlin.getKClassFromExpression(expectedState).simpleName));
      var message = Unit;
      throw IllegalStateException_init(message.toString());
    }
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
    return [ReleaseState$Ready_getInstance(), ReleaseState$InProgress_getInstance(), ReleaseState$Succeeded_getInstance(), ReleaseState$Failed_getInstance()];
  }
  ReleaseState.values = ReleaseState$values;
  function ReleaseState$valueOf(name) {
    switch (name) {
      case 'Ready':
        return ReleaseState$Ready_getInstance();
      case 'InProgress':
        return ReleaseState$InProgress_getInstance();
      case 'Succeeded':
        return ReleaseState$Succeeded_getInstance();
      case 'Failed':
        return ReleaseState$Failed_getInstance();
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
    CommandStateJson$State$Waiting_instance = new CommandStateJson$State('Waiting', 0);
    CommandStateJson$State$Ready_instance = new CommandStateJson$State('Ready', 1);
    CommandStateJson$State$ReadyToReTrigger_instance = new CommandStateJson$State('ReadyToReTrigger', 2);
    CommandStateJson$State$Queueing_instance = new CommandStateJson$State('Queueing', 3);
    CommandStateJson$State$InProgress_instance = new CommandStateJson$State('InProgress', 4);
    CommandStateJson$State$Succeeded_instance = new CommandStateJson$State('Succeeded', 5);
    CommandStateJson$State$Failed_instance = new CommandStateJson$State('Failed', 6);
    CommandStateJson$State$Deactivated_instance = new CommandStateJson$State('Deactivated', 7);
    CommandStateJson$State$Disabled_instance = new CommandStateJson$State('Disabled', 8);
  }
  var CommandStateJson$State$Waiting_instance;
  function CommandStateJson$State$Waiting_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$Waiting_instance;
  }
  var CommandStateJson$State$Ready_instance;
  function CommandStateJson$State$Ready_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$Ready_instance;
  }
  var CommandStateJson$State$ReadyToReTrigger_instance;
  function CommandStateJson$State$ReadyToReTrigger_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$ReadyToReTrigger_instance;
  }
  var CommandStateJson$State$Queueing_instance;
  function CommandStateJson$State$Queueing_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$Queueing_instance;
  }
  var CommandStateJson$State$InProgress_instance;
  function CommandStateJson$State$InProgress_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$InProgress_instance;
  }
  var CommandStateJson$State$Succeeded_instance;
  function CommandStateJson$State$Succeeded_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$Succeeded_instance;
  }
  var CommandStateJson$State$Failed_instance;
  function CommandStateJson$State$Failed_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$Failed_instance;
  }
  var CommandStateJson$State$Deactivated_instance;
  function CommandStateJson$State$Deactivated_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$Deactivated_instance;
  }
  var CommandStateJson$State$Disabled_instance;
  function CommandStateJson$State$Disabled_getInstance() {
    CommandStateJson$State_initFields();
    return CommandStateJson$State$Disabled_instance;
  }
  CommandStateJson$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: [Enum]
  };
  function CommandStateJson$State$values() {
    return [CommandStateJson$State$Waiting_getInstance(), CommandStateJson$State$Ready_getInstance(), CommandStateJson$State$ReadyToReTrigger_getInstance(), CommandStateJson$State$Queueing_getInstance(), CommandStateJson$State$InProgress_getInstance(), CommandStateJson$State$Succeeded_getInstance(), CommandStateJson$State$Failed_getInstance(), CommandStateJson$State$Deactivated_getInstance(), CommandStateJson$State$Disabled_getInstance()];
  }
  CommandStateJson$State.values = CommandStateJson$State$values;
  function CommandStateJson$State$valueOf(name) {
    switch (name) {
      case 'Waiting':
        return CommandStateJson$State$Waiting_getInstance();
      case 'Ready':
        return CommandStateJson$State$Ready_getInstance();
      case 'ReadyToReTrigger':
        return CommandStateJson$State$ReadyToReTrigger_getInstance();
      case 'Queueing':
        return CommandStateJson$State$Queueing_getInstance();
      case 'InProgress':
        return CommandStateJson$State$InProgress_getInstance();
      case 'Succeeded':
        return CommandStateJson$State$Succeeded_getInstance();
      case 'Failed':
        return CommandStateJson$State$Failed_getInstance();
      case 'Deactivated':
        return CommandStateJson$State$Deactivated_getInstance();
      case 'Disabled':
        return CommandStateJson$State$Disabled_getInstance();
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
  function fromJson(json) {
    var tmp$, tmp$_0;
    switch (json.state.name) {
      case 'Waiting':
        return new CommandState$Waiting((tmp$ = json.dependencies) != null ? tmp$ : throwIllegal('dependencies', 'Waiting'));
      case 'Ready':
        return CommandState$Ready_getInstance();
      case 'ReadyToReTrigger':
        return CommandState$ReadyToReTrigger_getInstance();
      case 'Queueing':
        return CommandState$Queueing_getInstance();
      case 'InProgress':
        return CommandState$InProgress_getInstance();
      case 'Succeeded':
        return CommandState$Succeeded_getInstance();
      case 'Failed':
        return CommandState$Failed_getInstance();
      case 'Deactivated':
        return new CommandState$Deactivated(fromJson((tmp$_0 = json.previous) != null ? tmp$_0 : throwIllegal('previous', 'Deactivated')));
      case 'Disabled':
        return CommandState$Disabled_getInstance();
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function throwIllegal(fieldName, stateName) {
    throw IllegalArgumentException_init(fieldName + ' must be defined for state ' + stateName);
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
  var package$ch = _.ch || (_.ch = {});
  var package$loewenfels = package$ch.loewenfels || (package$ch.loewenfels = {});
  var package$depgraph = package$loewenfels.depgraph || (package$loewenfels.depgraph = {});
  package$depgraph.hasNextOnTheSameLevel_r88oei$ = hasNextOnTheSameLevel;
  Object.defineProperty(ConfigKey, 'COMMIT_PREFIX', {
    get: ConfigKey$COMMIT_PREFIX_getInstance
  });
  Object.defineProperty(ConfigKey, 'UPDATE_DEPENDENCY_JOB', {
    get: ConfigKey$UPDATE_DEPENDENCY_JOB_getInstance
  });
  Object.defineProperty(ConfigKey, 'REMOTE_JOB', {
    get: ConfigKey$REMOTE_JOB_getInstance
  });
  Object.defineProperty(ConfigKey, 'REMOTE_REGEX', {
    get: ConfigKey$REMOTE_REGEX_getInstance
  });
  Object.defineProperty(ConfigKey, 'DRY_RUN_JOB', {
    get: ConfigKey$DRY_RUN_JOB_getInstance
  });
  Object.defineProperty(ConfigKey, 'REGEX_PARAMS', {
    get: ConfigKey$REGEX_PARAMS_getInstance
  });
  Object.defineProperty(ConfigKey, 'JOB_MAPPING', {
    get: ConfigKey$JOB_MAPPING_getInstance
  });
  Object.defineProperty(ConfigKey, 'Companion', {
    get: ConfigKey$Companion_getInstance
  });
  package$depgraph.ConfigKey = ConfigKey;
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
  Object.defineProperty(CommandState, 'InProgress', {
    get: CommandState$InProgress_getInstance
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
  package$data.ReleasePlan_init_up7prm$ = ReleasePlan_init_0;
  package$data.ReleasePlan = ReleasePlan;
  Object.defineProperty(ReleaseState, 'Ready', {
    get: ReleaseState$Ready_getInstance
  });
  Object.defineProperty(ReleaseState, 'InProgress', {
    get: ReleaseState$InProgress_getInstance
  });
  Object.defineProperty(ReleaseState, 'Succeeded', {
    get: ReleaseState$Succeeded_getInstance
  });
  Object.defineProperty(ReleaseState, 'Failed', {
    get: ReleaseState$Failed_getInstance
  });
  package$data.ReleaseState = ReleaseState;
  Object.defineProperty(CommandStateJson$State, 'Waiting', {
    get: CommandStateJson$State$Waiting_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'Ready', {
    get: CommandStateJson$State$Ready_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'ReadyToReTrigger', {
    get: CommandStateJson$State$ReadyToReTrigger_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'Queueing', {
    get: CommandStateJson$State$Queueing_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'InProgress', {
    get: CommandStateJson$State$InProgress_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'Succeeded', {
    get: CommandStateJson$State$Succeeded_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'Failed', {
    get: CommandStateJson$State$Failed_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'Deactivated', {
    get: CommandStateJson$State$Deactivated_getInstance
  });
  Object.defineProperty(CommandStateJson$State, 'Disabled', {
    get: CommandStateJson$State$Disabled_getInstance
  });
  CommandStateJson.State = CommandStateJson$State;
  var package$serialization = package$data.serialization || (package$data.serialization = {});
  package$serialization.CommandStateJson_init_cxr8t7$ = CommandStateJson_init;
  package$serialization.CommandStateJson_init_gvqfhq$ = CommandStateJson_init_0;
  package$serialization.CommandStateJson_init_cka4jb$ = CommandStateJson_init_1;
  package$serialization.CommandStateJson = CommandStateJson;
  package$serialization.fromJson_v4rmea$ = fromJson;
  package$depgraph.LevelIterator = LevelIterator;
  ReleaseCommand.prototype.asDeactivated = Command.prototype.asDeactivated;
  ReleaseCommand.prototype.asDisabled = Command.prototype.asDisabled;
  Kotlin.defineModule('dep-graph-releaser-api-js', _);
  return _;
}(typeof this['dep-graph-releaser-api-js'] === 'undefined' ? {} : this['dep-graph-releaser-api-js'], kotlin);
