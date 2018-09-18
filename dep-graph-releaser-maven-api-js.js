(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'dep-graph-releaser-api-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('dep-graph-releaser-api-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-maven-api-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dep-graph-releaser-maven-api-js'.");
    }
    if (typeof this['dep-graph-releaser-api-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-maven-api-js'. Its dependency 'dep-graph-releaser-api-js' was not found. Please, check whether 'dep-graph-releaser-api-js' is loaded prior to 'dep-graph-releaser-maven-api-js'.");
    }
    root['dep-graph-releaser-maven-api-js'] = factory(typeof this['dep-graph-releaser-maven-api-js'] === 'undefined' ? {} : this['dep-graph-releaser-maven-api-js'], kotlin, this['dep-graph-releaser-api-js']);
  }
}(this, function (_, Kotlin, $module$dep_graph_releaser_api_js) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Command = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.Command;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReleaseCommand = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleaseCommand;
  var ProjectId = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ProjectId;
  function JenkinsCommand() {
  }
  JenkinsCommand.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JenkinsCommand',
    interfaces: [Command]
  };
  function JenkinsMultiMavenReleasePlugin(state, nextDevVersion, buildUrl) {
    JenkinsMultiMavenReleasePlugin$Companion_getInstance();
    if (buildUrl === void 0)
      buildUrl = null;
    this.state_2r8i6k$_0 = state;
    this.nextDevVersion_f6wc9z$_0 = nextDevVersion;
    this.buildUrl_2bcr3i$_0 = buildUrl;
    this.typeId_2udkwq$_0 = JenkinsMultiMavenReleasePlugin$Companion_getInstance().TYPE_ID;
  }
  Object.defineProperty(JenkinsMultiMavenReleasePlugin.prototype, 'state', {
    get: function () {
      return this.state_2r8i6k$_0;
    }
  });
  Object.defineProperty(JenkinsMultiMavenReleasePlugin.prototype, 'nextDevVersion', {
    get: function () {
      return this.nextDevVersion_f6wc9z$_0;
    }
  });
  Object.defineProperty(JenkinsMultiMavenReleasePlugin.prototype, 'buildUrl', {
    get: function () {
      return this.buildUrl_2bcr3i$_0;
    }
  });
  Object.defineProperty(JenkinsMultiMavenReleasePlugin.prototype, 'typeId', {
    get: function () {
      return this.typeId_2udkwq$_0;
    }
  });
  JenkinsMultiMavenReleasePlugin.prototype.asNewState_m86w84$ = function (newState) {
    return new JenkinsMultiMavenReleasePlugin(newState, this.nextDevVersion, this.buildUrl);
  };
  function JenkinsMultiMavenReleasePlugin$Companion() {
    JenkinsMultiMavenReleasePlugin$Companion_instance = this;
    this.TYPE_ID = 'JenkinsMultiMavenRelease';
  }
  JenkinsMultiMavenReleasePlugin$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JenkinsMultiMavenReleasePlugin$Companion_instance = null;
  function JenkinsMultiMavenReleasePlugin$Companion_getInstance() {
    if (JenkinsMultiMavenReleasePlugin$Companion_instance === null) {
      new JenkinsMultiMavenReleasePlugin$Companion();
    }
    return JenkinsMultiMavenReleasePlugin$Companion_instance;
  }
  JenkinsMultiMavenReleasePlugin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JenkinsMultiMavenReleasePlugin',
    interfaces: [JenkinsNextDevReleaseCommand]
  };
  JenkinsMultiMavenReleasePlugin.prototype.component1 = function () {
    return this.state;
  };
  JenkinsMultiMavenReleasePlugin.prototype.component2 = function () {
    return this.nextDevVersion;
  };
  JenkinsMultiMavenReleasePlugin.prototype.component3 = function () {
    return this.buildUrl;
  };
  JenkinsMultiMavenReleasePlugin.prototype.copy_6qg0fz$ = function (state, nextDevVersion, buildUrl) {
    return new JenkinsMultiMavenReleasePlugin(state === void 0 ? this.state : state, nextDevVersion === void 0 ? this.nextDevVersion : nextDevVersion, buildUrl === void 0 ? this.buildUrl : buildUrl);
  };
  JenkinsMultiMavenReleasePlugin.prototype.toString = function () {
    return 'JenkinsMultiMavenReleasePlugin(state=' + Kotlin.toString(this.state) + (', nextDevVersion=' + Kotlin.toString(this.nextDevVersion)) + (', buildUrl=' + Kotlin.toString(this.buildUrl)) + ')';
  };
  JenkinsMultiMavenReleasePlugin.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextDevVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.buildUrl) | 0;
    return result;
  };
  JenkinsMultiMavenReleasePlugin.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.nextDevVersion, other.nextDevVersion) && Kotlin.equals(this.buildUrl, other.buildUrl)))));
  };
  function JenkinsNextDevReleaseCommand() {
  }
  JenkinsNextDevReleaseCommand.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JenkinsNextDevReleaseCommand',
    interfaces: [JenkinsCommand, ReleaseCommand]
  };
  function JenkinsSingleMavenReleaseCommand(state, nextDevVersion, buildUrl) {
    JenkinsSingleMavenReleaseCommand$Companion_getInstance();
    if (buildUrl === void 0)
      buildUrl = null;
    this.state_ls9ss5$_0 = state;
    this.nextDevVersion_mnssfs$_0 = nextDevVersion;
    this.buildUrl_8zirv1$_0 = buildUrl;
    this.typeId_hp3kxz$_0 = JenkinsSingleMavenReleaseCommand$Companion_getInstance().TYPE_ID;
  }
  Object.defineProperty(JenkinsSingleMavenReleaseCommand.prototype, 'state', {
    get: function () {
      return this.state_ls9ss5$_0;
    }
  });
  Object.defineProperty(JenkinsSingleMavenReleaseCommand.prototype, 'nextDevVersion', {
    get: function () {
      return this.nextDevVersion_mnssfs$_0;
    }
  });
  Object.defineProperty(JenkinsSingleMavenReleaseCommand.prototype, 'buildUrl', {
    get: function () {
      return this.buildUrl_8zirv1$_0;
    }
  });
  Object.defineProperty(JenkinsSingleMavenReleaseCommand.prototype, 'typeId', {
    get: function () {
      return this.typeId_hp3kxz$_0;
    }
  });
  JenkinsSingleMavenReleaseCommand.prototype.asNewState_m86w84$ = function (newState) {
    return new JenkinsSingleMavenReleaseCommand(newState, this.nextDevVersion, this.buildUrl);
  };
  function JenkinsSingleMavenReleaseCommand$Companion() {
    JenkinsSingleMavenReleaseCommand$Companion_instance = this;
    this.TYPE_ID = 'JenkinsSingleMavenRelease';
  }
  JenkinsSingleMavenReleaseCommand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JenkinsSingleMavenReleaseCommand$Companion_instance = null;
  function JenkinsSingleMavenReleaseCommand$Companion_getInstance() {
    if (JenkinsSingleMavenReleaseCommand$Companion_instance === null) {
      new JenkinsSingleMavenReleaseCommand$Companion();
    }
    return JenkinsSingleMavenReleaseCommand$Companion_instance;
  }
  JenkinsSingleMavenReleaseCommand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JenkinsSingleMavenReleaseCommand',
    interfaces: [JenkinsNextDevReleaseCommand]
  };
  JenkinsSingleMavenReleaseCommand.prototype.component1 = function () {
    return this.state;
  };
  JenkinsSingleMavenReleaseCommand.prototype.component2 = function () {
    return this.nextDevVersion;
  };
  JenkinsSingleMavenReleaseCommand.prototype.component3 = function () {
    return this.buildUrl;
  };
  JenkinsSingleMavenReleaseCommand.prototype.copy_6qg0fz$ = function (state, nextDevVersion, buildUrl) {
    return new JenkinsSingleMavenReleaseCommand(state === void 0 ? this.state : state, nextDevVersion === void 0 ? this.nextDevVersion : nextDevVersion, buildUrl === void 0 ? this.buildUrl : buildUrl);
  };
  JenkinsSingleMavenReleaseCommand.prototype.toString = function () {
    return 'JenkinsSingleMavenReleaseCommand(state=' + Kotlin.toString(this.state) + (', nextDevVersion=' + Kotlin.toString(this.nextDevVersion)) + (', buildUrl=' + Kotlin.toString(this.buildUrl)) + ')';
  };
  JenkinsSingleMavenReleaseCommand.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextDevVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.buildUrl) | 0;
    return result;
  };
  JenkinsSingleMavenReleaseCommand.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.nextDevVersion, other.nextDevVersion) && Kotlin.equals(this.buildUrl, other.buildUrl)))));
  };
  function JenkinsUpdateDependency(state, projectId, buildUrl) {
    JenkinsUpdateDependency$Companion_getInstance();
    if (buildUrl === void 0)
      buildUrl = null;
    this.state_n6f9ha$_0 = state;
    this.projectId = projectId;
    this.buildUrl_sx81es$_0 = buildUrl;
    this.typeId_phlspc$_0 = JenkinsUpdateDependency$Companion_getInstance().TYPE_ID;
  }
  Object.defineProperty(JenkinsUpdateDependency.prototype, 'state', {
    get: function () {
      return this.state_n6f9ha$_0;
    },
    set: function (state) {
      this.state_n6f9ha$_0 = state;
    }
  });
  Object.defineProperty(JenkinsUpdateDependency.prototype, 'buildUrl', {
    get: function () {
      return this.buildUrl_sx81es$_0;
    }
  });
  Object.defineProperty(JenkinsUpdateDependency.prototype, 'typeId', {
    get: function () {
      return this.typeId_phlspc$_0;
    }
  });
  JenkinsUpdateDependency.prototype.asNewState_m86w84$ = function (newState) {
    return new JenkinsUpdateDependency(newState, this.projectId, this.buildUrl);
  };
  function JenkinsUpdateDependency$Companion() {
    JenkinsUpdateDependency$Companion_instance = this;
    this.TYPE_ID = 'JenkinsUpdateDependency';
  }
  JenkinsUpdateDependency$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JenkinsUpdateDependency$Companion_instance = null;
  function JenkinsUpdateDependency$Companion_getInstance() {
    if (JenkinsUpdateDependency$Companion_instance === null) {
      new JenkinsUpdateDependency$Companion();
    }
    return JenkinsUpdateDependency$Companion_instance;
  }
  JenkinsUpdateDependency.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JenkinsUpdateDependency',
    interfaces: [JenkinsCommand]
  };
  JenkinsUpdateDependency.prototype.component1 = function () {
    return this.state;
  };
  JenkinsUpdateDependency.prototype.component2 = function () {
    return this.projectId;
  };
  JenkinsUpdateDependency.prototype.component3 = function () {
    return this.buildUrl;
  };
  JenkinsUpdateDependency.prototype.copy_fraxa3$ = function (state, projectId, buildUrl) {
    return new JenkinsUpdateDependency(state === void 0 ? this.state : state, projectId === void 0 ? this.projectId : projectId, buildUrl === void 0 ? this.buildUrl : buildUrl);
  };
  JenkinsUpdateDependency.prototype.toString = function () {
    return 'JenkinsUpdateDependency(state=' + Kotlin.toString(this.state) + (', projectId=' + Kotlin.toString(this.projectId)) + (', buildUrl=' + Kotlin.toString(this.buildUrl)) + ')';
  };
  JenkinsUpdateDependency.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectId) | 0;
    result = result * 31 + Kotlin.hashCode(this.buildUrl) | 0;
    return result;
  };
  JenkinsUpdateDependency.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.projectId, other.projectId) && Kotlin.equals(this.buildUrl, other.buildUrl)))));
  };
  function MavenProjectId(groupId, artifactId) {
    MavenProjectId$Companion_getInstance();
    this.groupId = groupId;
    this.artifactId = artifactId;
    this.typeId_6y3ynb$_0 = MavenProjectId$Companion_getInstance().TYPE_ID;
    this.identifier_t89duj$_0 = this.groupId + ':' + this.artifactId;
  }
  Object.defineProperty(MavenProjectId.prototype, 'typeId', {
    get: function () {
      return this.typeId_6y3ynb$_0;
    }
  });
  Object.defineProperty(MavenProjectId.prototype, 'identifier', {
    get: function () {
      return this.identifier_t89duj$_0;
    }
  });
  function MavenProjectId$Companion() {
    MavenProjectId$Companion_instance = this;
    this.TYPE_ID = 'MavenProjectId';
  }
  MavenProjectId$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MavenProjectId$Companion_instance = null;
  function MavenProjectId$Companion_getInstance() {
    if (MavenProjectId$Companion_instance === null) {
      new MavenProjectId$Companion();
    }
    return MavenProjectId$Companion_instance;
  }
  MavenProjectId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MavenProjectId',
    interfaces: [ProjectId]
  };
  MavenProjectId.prototype.component1 = function () {
    return this.groupId;
  };
  MavenProjectId.prototype.component2 = function () {
    return this.artifactId;
  };
  MavenProjectId.prototype.copy_puj7f4$ = function (groupId, artifactId) {
    return new MavenProjectId(groupId === void 0 ? this.groupId : groupId, artifactId === void 0 ? this.artifactId : artifactId);
  };
  MavenProjectId.prototype.toString = function () {
    return 'MavenProjectId(groupId=' + Kotlin.toString(this.groupId) + (', artifactId=' + Kotlin.toString(this.artifactId)) + ')';
  };
  MavenProjectId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.groupId) | 0;
    result = result * 31 + Kotlin.hashCode(this.artifactId) | 0;
    return result;
  };
  MavenProjectId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.groupId, other.groupId) && Kotlin.equals(this.artifactId, other.artifactId)))));
  };
  var package$ch = _.ch || (_.ch = {});
  var package$loewenfels = package$ch.loewenfels || (package$ch.loewenfels = {});
  var package$depgraph = package$loewenfels.depgraph || (package$loewenfels.depgraph = {});
  var package$data = package$depgraph.data || (package$depgraph.data = {});
  var package$maven = package$data.maven || (package$data.maven = {});
  var package$jenkins = package$maven.jenkins || (package$maven.jenkins = {});
  package$jenkins.JenkinsCommand = JenkinsCommand;
  Object.defineProperty(JenkinsMultiMavenReleasePlugin, 'Companion', {
    get: JenkinsMultiMavenReleasePlugin$Companion_getInstance
  });
  package$jenkins.JenkinsMultiMavenReleasePlugin = JenkinsMultiMavenReleasePlugin;
  package$jenkins.JenkinsNextDevReleaseCommand = JenkinsNextDevReleaseCommand;
  Object.defineProperty(JenkinsSingleMavenReleaseCommand, 'Companion', {
    get: JenkinsSingleMavenReleaseCommand$Companion_getInstance
  });
  package$jenkins.JenkinsSingleMavenReleaseCommand = JenkinsSingleMavenReleaseCommand;
  Object.defineProperty(JenkinsUpdateDependency, 'Companion', {
    get: JenkinsUpdateDependency$Companion_getInstance
  });
  package$jenkins.JenkinsUpdateDependency = JenkinsUpdateDependency;
  Object.defineProperty(MavenProjectId, 'Companion', {
    get: MavenProjectId$Companion_getInstance
  });
  package$maven.MavenProjectId = MavenProjectId;
  JenkinsCommand.prototype.asDeactivated = Command.prototype.asDeactivated;
  JenkinsCommand.prototype.asDisabled = Command.prototype.asDisabled;
  JenkinsNextDevReleaseCommand.prototype.asDeactivated = ReleaseCommand.prototype.asDeactivated;
  JenkinsNextDevReleaseCommand.prototype.asDisabled = ReleaseCommand.prototype.asDisabled;
  JenkinsMultiMavenReleasePlugin.prototype.asDeactivated = JenkinsNextDevReleaseCommand.prototype.asDeactivated;
  JenkinsMultiMavenReleasePlugin.prototype.asDisabled = JenkinsNextDevReleaseCommand.prototype.asDisabled;
  JenkinsSingleMavenReleaseCommand.prototype.asDeactivated = JenkinsNextDevReleaseCommand.prototype.asDeactivated;
  JenkinsSingleMavenReleaseCommand.prototype.asDisabled = JenkinsNextDevReleaseCommand.prototype.asDisabled;
  JenkinsUpdateDependency.prototype.asDeactivated = JenkinsCommand.prototype.asDeactivated;
  JenkinsUpdateDependency.prototype.asDisabled = JenkinsCommand.prototype.asDisabled;
  Kotlin.defineModule('dep-graph-releaser-maven-api-js', _);
  return _;
}));

//# sourceMappingURL=dep-graph-releaser-maven-api-js.js.map
