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
  function JenkinsMavenReleasePlugin(state, nextDevVersion, buildUrl) {
    if (buildUrl === void 0)
      buildUrl = null;
    this.state_xzjl4t$_0 = state;
    this.nextDevVersion_yi0962$_0 = nextDevVersion;
    this.buildUrl_utzx4x$_0 = buildUrl;
  }
  Object.defineProperty(JenkinsMavenReleasePlugin.prototype, 'state', {
    get: function () {
      return this.state_xzjl4t$_0;
    }
  });
  Object.defineProperty(JenkinsMavenReleasePlugin.prototype, 'nextDevVersion', {
    get: function () {
      return this.nextDevVersion_yi0962$_0;
    }
  });
  Object.defineProperty(JenkinsMavenReleasePlugin.prototype, 'buildUrl', {
    get: function () {
      return this.buildUrl_utzx4x$_0;
    }
  });
  JenkinsMavenReleasePlugin.prototype.asNewState_m86w84$ = function (newState) {
    return new JenkinsMavenReleasePlugin(newState, this.nextDevVersion, this.buildUrl);
  };
  JenkinsMavenReleasePlugin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JenkinsMavenReleasePlugin',
    interfaces: [M2ReleaseCommand]
  };
  JenkinsMavenReleasePlugin.prototype.component1 = function () {
    return this.state;
  };
  JenkinsMavenReleasePlugin.prototype.component2 = function () {
    return this.nextDevVersion;
  };
  JenkinsMavenReleasePlugin.prototype.component3 = function () {
    return this.buildUrl;
  };
  JenkinsMavenReleasePlugin.prototype.copy_6qg0fz$ = function (state, nextDevVersion, buildUrl) {
    return new JenkinsMavenReleasePlugin(state === void 0 ? this.state : state, nextDevVersion === void 0 ? this.nextDevVersion : nextDevVersion, buildUrl === void 0 ? this.buildUrl : buildUrl);
  };
  JenkinsMavenReleasePlugin.prototype.toString = function () {
    return 'JenkinsMavenReleasePlugin(state=' + Kotlin.toString(this.state) + (', nextDevVersion=' + Kotlin.toString(this.nextDevVersion)) + (', buildUrl=' + Kotlin.toString(this.buildUrl)) + ')';
  };
  JenkinsMavenReleasePlugin.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextDevVersion) | 0;
    result = result * 31 + Kotlin.hashCode(this.buildUrl) | 0;
    return result;
  };
  JenkinsMavenReleasePlugin.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.nextDevVersion, other.nextDevVersion) && Kotlin.equals(this.buildUrl, other.buildUrl)))));
  };
  function JenkinsMultiMavenReleasePlugin(state, nextDevVersion, buildUrl) {
    if (buildUrl === void 0)
      buildUrl = null;
    this.state_2r8i6k$_0 = state;
    this.nextDevVersion_f6wc9z$_0 = nextDevVersion;
    this.buildUrl_2bcr3i$_0 = buildUrl;
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
  JenkinsMultiMavenReleasePlugin.prototype.asNewState_m86w84$ = function (newState) {
    return new JenkinsMultiMavenReleasePlugin(newState, this.nextDevVersion, this.buildUrl);
  };
  JenkinsMultiMavenReleasePlugin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JenkinsMultiMavenReleasePlugin',
    interfaces: [M2ReleaseCommand]
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
  function JenkinsUpdateDependency(state, projectId, buildUrl) {
    if (buildUrl === void 0)
      buildUrl = null;
    this.state_n6f9ha$_0 = state;
    this.projectId = projectId;
    this.buildUrl_sx81es$_0 = buildUrl;
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
  JenkinsUpdateDependency.prototype.asNewState_m86w84$ = function (newState) {
    return new JenkinsUpdateDependency(newState, this.projectId, this.buildUrl);
  };
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
  function M2ReleaseCommand() {
  }
  M2ReleaseCommand.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'M2ReleaseCommand',
    interfaces: [JenkinsCommand, ReleaseCommand]
  };
  function MavenProjectId(groupId, artifactId) {
    this.groupId = groupId;
    this.artifactId = artifactId;
    this.identifier_t89duj$_0 = this.groupId + ':' + this.artifactId;
  }
  Object.defineProperty(MavenProjectId.prototype, 'identifier', {
    get: function () {
      return this.identifier_t89duj$_0;
    }
  });
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
  package$jenkins.JenkinsMavenReleasePlugin = JenkinsMavenReleasePlugin;
  package$jenkins.JenkinsMultiMavenReleasePlugin = JenkinsMultiMavenReleasePlugin;
  package$jenkins.JenkinsUpdateDependency = JenkinsUpdateDependency;
  package$jenkins.M2ReleaseCommand = M2ReleaseCommand;
  package$maven.MavenProjectId = MavenProjectId;
  JenkinsCommand.prototype.asDeactivated = Command.prototype.asDeactivated;
  JenkinsCommand.prototype.asDisabled = Command.prototype.asDisabled;
  M2ReleaseCommand.prototype.asDeactivated = ReleaseCommand.prototype.asDeactivated;
  M2ReleaseCommand.prototype.asDisabled = ReleaseCommand.prototype.asDisabled;
  JenkinsMavenReleasePlugin.prototype.asDeactivated = M2ReleaseCommand.prototype.asDeactivated;
  JenkinsMavenReleasePlugin.prototype.asDisabled = M2ReleaseCommand.prototype.asDisabled;
  JenkinsMultiMavenReleasePlugin.prototype.asDeactivated = M2ReleaseCommand.prototype.asDeactivated;
  JenkinsMultiMavenReleasePlugin.prototype.asDisabled = M2ReleaseCommand.prototype.asDisabled;
  JenkinsUpdateDependency.prototype.asDeactivated = JenkinsCommand.prototype.asDeactivated;
  JenkinsUpdateDependency.prototype.asDisabled = JenkinsCommand.prototype.asDisabled;
  Kotlin.defineModule('dep-graph-releaser-maven-api-js', _);
  return _;
}));

//# sourceMappingURL=dep-graph-releaser-maven-api-js.js.map
