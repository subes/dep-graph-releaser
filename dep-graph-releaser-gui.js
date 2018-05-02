(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'dep-graph-releaser-api-js', 'dep-graph-releaser-maven-api-js', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('dep-graph-releaser-api-js'), require('dep-graph-releaser-maven-api-js'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    if (typeof this['dep-graph-releaser-api-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'dep-graph-releaser-api-js' was not found. Please, check whether 'dep-graph-releaser-api-js' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    if (typeof this['dep-graph-releaser-maven-api-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'dep-graph-releaser-maven-api-js' was not found. Please, check whether 'dep-graph-releaser-maven-api-js' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    root['dep-graph-releaser-gui'] = factory(typeof this['dep-graph-releaser-gui'] === 'undefined' ? {} : this['dep-graph-releaser-gui'], kotlin, this['dep-graph-releaser-api-js'], this['dep-graph-releaser-maven-api-js'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$dep_graph_releaser_api_js, $module$dep_graph_releaser_maven_api_js, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_j4ogox$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var equals = Kotlin.equals;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var getCallableRef = Kotlin.getCallableRef;
  var Error_0 = Kotlin.kotlin.Error;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var Triple = Kotlin.kotlin.Triple;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var ConfigKey = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.ConfigKey;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var CommandState$Deactivated = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.CommandState.Deactivated;
  var CommandState$Waiting = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.CommandState.Waiting;
  var MavenProjectId = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.MavenProjectId;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var ReleasePlan = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleasePlan;
  var ReleaseState = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleaseState;
  var ReleaseState$valueOf = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleaseState.valueOf_61zpoe$;
  var Project = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.Project;
  var JenkinsMavenReleasePlugin = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMavenReleasePlugin;
  var JenkinsMultiMavenReleasePlugin = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMultiMavenReleasePlugin;
  var JenkinsUpdateDependency = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsUpdateDependency;
  var fromJson = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.serialization.fromJson_v4rmea$;
  var toHashSet = Kotlin.kotlin.collections.toHashSet_7wnvza$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ensureNotNull = Kotlin.ensureNotNull;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var toPeekingIterator = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.toPeekingIterator_35ci02$;
  var hasNextOnTheSameLevel = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.hasNextOnTheSameLevel_wvkvts$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var JenkinsCommand = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsCommand;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var textInput = $module$kotlinx_html_js.kotlinx.html.textInput_ap9uf6$;
  var textArea = $module$kotlinx_html_js.kotlinx.html.textArea_b1tfd9$;
  var ReleaseCommand = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleaseCommand;
  var CommandState = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.CommandState;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var checkBoxInput = $module$kotlinx_html_js.kotlinx.html.checkBoxInput_ap9uf6$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var toShort = Kotlin.toShort;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Exception = Kotlin.kotlin.Exception;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var div_1 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var split_0 = Kotlin.kotlin.text.split_ip8yn$;
  var get_br = $module$kotlinx_html_js.kotlinx.html.get_br_6s7ubj$;
  var substringBefore_0 = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var unboxChar = Kotlin.unboxChar;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var toHashSet_0 = Kotlin.kotlin.sequences.toHashSet_veqyi0$;
  var mapIndexed = Kotlin.kotlin.sequences.mapIndexed_b7yuyq$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var M2ReleaseCommand = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.M2ReleaseCommand;
  var joinToString_0 = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var splitToSequence = Kotlin.kotlin.text.splitToSequence_ip8yn$;
  var toList_0 = Kotlin.kotlin.sequences.toList_veqyi0$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var contains_0 = Kotlin.kotlin.text.contains_sgbm27$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException_init;
  var sequenceOf = Kotlin.kotlin.sequences.sequenceOf_i5x0yv$;
  var plus = Kotlin.kotlin.sequences.plus_v0iwhp$;
  JenkinsJobExecutor$PollException.prototype = Object.create(RuntimeException.prototype);
  JenkinsJobExecutor$PollException.prototype.constructor = JenkinsJobExecutor$PollException;
  Releaser$ReleaseFailure.prototype = Object.create(RuntimeException.prototype);
  Releaser$ReleaseFailure.prototype.constructor = Releaser$ReleaseFailure;
  function App() {
    App$Companion_getInstance();
    this.publishJobUrl_0 = null;
    this.jenkinsUrl_0 = null;
    this.menu_0 = null;
    var tmp$;
    this.switchLoader_0('loaderJs', 'loaderApiToken');
    var jsonUrl = this.determineJsonUrl_0();
    this.publishJobUrl_0 = this.determinePublishJob_0();
    this.jenkinsUrl_0 = (tmp$ = this.publishJobUrl_0) != null ? substringBefore(tmp$, '/job/') : null;
    this.menu_0 = new Menu();
    this.start_0(jsonUrl);
  }
  App.prototype.determinePublishJob_0 = function () {
    var tmp$;
    if (contains(window.location.hash, App$Companion_getInstance().PUBLISH_JOB)) {
      tmp$ = this.getJobUrl_0(substringAfter(window.location.hash, App$Companion_getInstance().PUBLISH_JOB));
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  };
  App.prototype.getJobUrl_0 = function (possiblyRelativePublishJobUrl) {
    var tmp$;
    if (!(!contains(possiblyRelativePublishJobUrl, '://') || startsWith(possiblyRelativePublishJobUrl, 'http'))) {
      var message = 'The publish job URL does not start with http but contains ://';
      throw IllegalArgumentException_init(message.toString());
    }
    var prefix = window.location.protocol + '//' + window.location.hostname + '/';
    if (contains(possiblyRelativePublishJobUrl, '://')) {
      tmp$ = possiblyRelativePublishJobUrl;
    }
     else {
      tmp$ = prefix + possiblyRelativePublishJobUrl;
    }
    var tmpUrl = tmp$;
    return endsWith(tmpUrl, '/') ? tmpUrl : tmpUrl + '/';
  };
  App.prototype.determineJsonUrl_0 = function () {
    var tmp$;
    if (!equals(window.location.hash, '')) {
      tmp$ = substringBefore(window.location.hash.substring(1), '&');
    }
     else {
      tmp$ = showThrowableAndThrow(IllegalStateException_init('You need to specify a release.json.' + ('\n' + 'Append the path with preceding # to the url, e.g., ' + window.location + '#release.json')));
    }
    return tmp$;
  };
  function App$start$lambda$lambda(it) {
    throw new Error_0('Could not load json.', it);
  }
  function App$start$lambda$lambda_0(this$App, closure$usernameToken) {
    return function (body) {
      this$App.switchLoader_0('loaderApiToken', 'loaderJson');
      var modifiableJson = new ModifiableJson(body);
      var dependencies = App$Companion_getInstance().createDependencies_vgvz8r$(this$App.jenkinsUrl_0, this$App.publishJobUrl_0, closure$usernameToken, modifiableJson, this$App.menu_0);
      var releasePlan = deserialize(body);
      this$App.menu_0.initDependencies_xts1bw$(releasePlan, new Downloader(modifiableJson), dependencies, modifiableJson);
      (new Gui(releasePlan, this$App.menu_0)).load();
      this$App.switchLoaderJsonWithPipeline_0();
      return Unit;
    };
  }
  function App$start$lambda$lambda_1(it) {
    return showThrowableAndThrow(it);
  }
  function App$start$lambda(closure$jsonUrl, this$App) {
    return function (usernameToken) {
      display('gui', 'block');
      var $receiver = this$App.loadJson_0(closure$jsonUrl, usernameToken).then(getCallableRef('checkStatusOk', function (response) {
        return checkStatusOk(response);
      })).catch(App$start$lambda$lambda);
      var onFulfilled = App$start$lambda$lambda_0(this$App, usernameToken);
      return $receiver.then(onFulfilled).catch(App$start$lambda$lambda_1);
    };
  }
  App.prototype.start_0 = function (jsonUrl) {
    this.retrieveUserAndApiToken_0().then(App$start$lambda(jsonUrl, this));
  };
  function App$retrieveUserAndApiToken$lambda(this$App) {
    return function (body) {
      if (body == null) {
        var info = 'You need to log in if you want to use other functionality than Download.';
        this$App.menu_0.disableButtonsDueToNoAuth_puj7f4$(info, info + '\n' + toString(this$App.jenkinsUrl_0) + '/login?from=' + toString(window.location));
        return null;
      }
       else {
        var tmp$ = this$App.extractNameAndApiToken_0(body);
        var username = tmp$.component1()
        , name = tmp$.component2()
        , apiToken = tmp$.component3();
        this$App.menu_0.setVerifiedUser_puj7f4$(username, name);
        return new UsernameToken(username, apiToken);
      }
    };
  }
  App.prototype.retrieveUserAndApiToken_0 = function () {
    var tmp$, tmp$_0;
    if (this.jenkinsUrl_0 == null) {
      this.menu_0.disableButtonsDueToNoPublishUrl();
      tmp$_0 = Promise.resolve((tmp$ = null) == null || Kotlin.isType(tmp$, UsernameToken) ? tmp$ : throwCCE());
    }
     else {
      tmp$_0 = window.fetch(toString(this.jenkinsUrl_0) + '/me/configure', createFetchInitWithCredentials()).then(getCallableRef('checkStatusOkOr403', function (response) {
        return checkStatusOkOr403(response);
      })).then(App$retrieveUserAndApiToken$lambda(this));
    }
    return tmp$_0;
  };
  App.prototype.extractNameAndApiToken_0 = function (body) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = App$Companion_getInstance().usernameRegex_0.find_905azu$(body);
    if (tmp$ == null) {
      throw IllegalStateException_init('Could not find username');
    }
    var usernameMatch = tmp$;
    tmp$_0 = App$Companion_getInstance().fullNameRegex_0.find_905azu$(body);
    if (tmp$_0 == null) {
      throw IllegalStateException_init("Could not find user's name");
    }
    var fullNameMatch = tmp$_0;
    tmp$_1 = App$Companion_getInstance().apiTokenRegex_0.find_905azu$(body);
    if (tmp$_1 == null) {
      throw IllegalStateException_init('Could not find API token');
    }
    var apiTokenMatch = tmp$_1;
    return new Triple(usernameMatch.groupValues.get_za3lpa$(1), fullNameMatch.groupValues.get_za3lpa$(1), apiTokenMatch.groupValues.get_za3lpa$(1));
  };
  App.prototype.loadJson_0 = function (jsonUrl, usernameToken) {
    var init = createFetchInitWithCredentials();
    var headers = {};
    if (usernameToken != null) {
      addAuthentication(headers, usernameToken);
    }
    init.headers = headers;
    return window.fetch(jsonUrl, init);
  };
  App.prototype.switchLoaderJsonWithPipeline_0 = function () {
    display('loaderJson', 'none');
    display('pipeline', 'table');
  };
  App.prototype.switchLoader_0 = function (firstLoader, secondLoader) {
    display(firstLoader, 'none');
    display(secondLoader, 'block');
  };
  function App$Companion() {
    App$Companion_instance = this;
    this.PUBLISH_JOB = '&publishJob=';
    this.fullNameRegex_0 = Regex_init('<input[^>]+name="_\\.fullName"[^>]+value="([^"]+)"');
    this.apiTokenRegex_0 = Regex_init('<input[^>]+name="_\\.apiToken"[^>]+value="([^"]+)"');
    this.usernameRegex_0 = Regex_init('<a[^>]+href="[^"]*/user/([^"]+)"');
  }
  App$Companion.prototype.createDependencies_vgvz8r$ = function (jenkinsUrl, publishJobUrl, usernameToken, modifiableJson, menu) {
    var tmp$;
    if (publishJobUrl != null && jenkinsUrl != null && usernameToken != null) {
      var publisher = new Publisher(publishJobUrl, modifiableJson);
      var releaser = new Releaser(jenkinsUrl, modifiableJson, menu);
      var simulatingJobExecutor = new SimulatingJobExecutor();
      var jenkinsJobExecutor = new JenkinsJobExecutor(jenkinsUrl, usernameToken);
      tmp$ = new Menu$Dependencies(publisher, releaser, jenkinsJobExecutor, simulatingJobExecutor);
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  };
  App$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var App$Companion_instance = null;
  function App$Companion_getInstance() {
    if (App$Companion_instance === null) {
      new App$Companion();
    }
    return App$Companion_instance;
  }
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: []
  };
  function ChangeApplier() {
    ChangeApplier_instance = this;
  }
  ChangeApplier.prototype.createReleasePlanJsonWithChanges_61zpoe$ = function (json) {
    var releasePlanJson = JSON.parse(json);
    var changed = this.applyChanges_0(releasePlanJson);
    var newJson = JSON.stringify(releasePlanJson);
    return to(changed, newJson);
  };
  ChangeApplier.prototype.applyChanges_0 = function (releasePlanJson) {
    var changed = {v: false};
    changed.v = changed.v | this.replacePublishIdIfChanged_0(releasePlanJson);
    changed.v = changed.v | this.replaceReleaseStateIfChanged_0(releasePlanJson);
    var $receiver = releasePlanJson.projects;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var mavenProjectId = deserializeProjectId(element.id);
      changed.v = changed.v | this.replaceReleaseVersionIfChanged_0(element, mavenProjectId);
      var $receiver_0 = element.commands;
      var tmp$_0, tmp$_0_0;
      var index = 0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
        var item = $receiver_0[tmp$_0];
        var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
        changed.v = changed.v | this.replaceCommandStateIfChanged_0(item, mavenProjectId, index_0) | this.replaceFieldsIfChanged_0(item, mavenProjectId, index_0);
      }
    }
    changed.v = changed.v | this.replaceConfigEntriesIfChanged_0(releasePlanJson);
    return changed.v;
  };
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  ChangeApplier.prototype.replacePublishIdIfChanged_0 = function (releasePlanJson) {
    var changed = false;
    var input = getTextField(Gui$Companion_getInstance().RELEASE_ID_HTML_ID);
    if (!equals(releasePlanJson.releaseId, input.value)) {
      if (!!isBlank(input.value)) {
        var message = 'An empty or blank PublishId is not allowed';
        throw IllegalStateException_init(message.toString());
      }
      releasePlanJson.releaseId = input.value;
      changed = true;
    }
    return changed;
  };
  ChangeApplier.prototype.replaceReleaseStateIfChanged_0 = function (releasePlanJson) {
    var changed = false;
    var newState = Gui$Companion_getInstance().getReleaseState();
    var currentState = deserializeReleaseState(releasePlanJson);
    if (currentState !== newState) {
      releasePlanJson.state = newState.name;
      changed = true;
    }
    return changed;
  };
  ChangeApplier.prototype.replaceConfigEntriesIfChanged_0 = function (releasePlanJson) {
    var changed = {v: false};
    var $receiver = releasePlanJson.config;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      action$break: do {
        var tmp$_0, tmp$_1, tmp$_2;
        if (element.length !== 2)
          break action$break;
        var input = elementById('config-' + element[0]);
        if (equals(element[0], ConfigKey.JOB_MAPPING.asString())) {
          tmp$_2 = replace(replace((Kotlin.isType(tmp$_0 = input, HTMLTextAreaElement) ? tmp$_0 : throwCCE()).value, '\r', ''), '\n', '|');
        }
         else {
          tmp$_2 = (Kotlin.isType(tmp$_1 = input, HTMLInputElement) ? tmp$_1 : throwCCE()).value;
        }
        var value = tmp$_2;
        if (!equals(element[1], value)) {
          element[1] = value;
          changed.v = true;
        }
      }
       while (false);
    }
    return changed.v;
  };
  ChangeApplier.prototype.replaceReleaseVersionIfChanged_0 = function (project, mavenProjectId) {
    var input = getTextFieldOrNull(mavenProjectId.identifier + ':releaseVersion');
    if (input != null && !equals(project.releaseVersion, input.value)) {
      if (!!isBlank(input.value)) {
        var message = 'An empty or blank Release Version is not allowed';
        throw IllegalStateException_init(message.toString());
      }
      project.releaseVersion = input.value;
      return true;
    }
    return false;
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  ChangeApplier.prototype.replaceCommandStateIfChanged_0 = function (genericCommand, mavenProjectId, index) {
    var tmp$;
    var command = genericCommand.p;
    var previousState = deserializeCommandState(command);
    var newState = Gui$Companion_getInstance().getCommandState_o8feeo$(mavenProjectId, index);
    if (!((tmp$ = Kotlin.getKClassFromExpression(previousState)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(newState)) : null)) {
      var stateObject = {};
      stateObject.state = Kotlin.getKClassFromExpression(newState).simpleName;
      if (Kotlin.isType(newState, CommandState$Deactivated)) {
        stateObject.previous = command.state;
      }
      command.state = stateObject;
      return true;
    }
    if (Kotlin.isType(previousState, CommandState$Waiting) && Kotlin.isType(newState, CommandState$Waiting) && previousState.dependencies.size !== newState.dependencies.size) {
      var $receiver = newState.dependencies;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1 = destination.add_11rb$;
        var transform$result;
        if (Kotlin.isType(item, MavenProjectId)) {
          var entry = {};
          entry.t = MAVEN_PROJECT_ID;
          var p = {};
          p.groupId = item.groupId;
          p.artifactId = item.artifactId;
          entry.p = p;
          transform$result = entry;
        }
         else
          throw UnsupportedOperationException_init(item.toString() + ' is not supported.');
        tmp$_1.call(destination, transform$result);
      }
      var newDependencies = destination;
      command.state.dependencies = copyToArray(newDependencies);
    }
    return false;
  };
  ChangeApplier.prototype.replaceFieldsIfChanged_0 = function (command, mavenProjectId, index) {
    var tmp$;
    switch (command.t) {
      case 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMavenReleasePlugin':
      case 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMultiMavenReleasePlugin':
        tmp$ = this.replaceNextVersionIfChanged_0(command.p, mavenProjectId, index) | this.replaceBuildUrlIfChanged_0(command.p, mavenProjectId, index);
        break;
      case 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsUpdateDependency':
        tmp$ = this.replaceBuildUrlIfChanged_0(command.p, mavenProjectId, index);
        break;
      default:throw UnsupportedOperationException_init(command.t + ' is not supported.');
    }
    return tmp$;
  };
  ChangeApplier.prototype.replaceNextVersionIfChanged_0 = function (command, mavenProjectId, index) {
    var m2Command = command;
    var input = getTextField(Gui$Companion_getInstance().getCommandId_o8feeo$(mavenProjectId, index) + Gui$Companion_getInstance().NEXT_DEV_VERSION_SUFFIX);
    if (!equals(m2Command.nextDevVersion, input.value)) {
      if (!!isBlank(input.value)) {
        var message = 'An empty or blank Next Dev Version is not allowed';
        throw IllegalStateException_init(message.toString());
      }
      m2Command.nextDevVersion = input.value;
      return true;
    }
    return false;
  };
  ChangeApplier.prototype.replaceBuildUrlIfChanged_0 = function (command, mavenProjectId, index) {
    var tmp$;
    var jenkinsCommand = command;
    var guiCommand = Gui$Companion_getInstance().getCommand_o8feeo$(mavenProjectId, index);
    var newBuildUrl = typeof (tmp$ = guiCommand.buildUrl) === 'string' ? tmp$ : null;
    if (newBuildUrl != null && !equals(jenkinsCommand.buildUrl, newBuildUrl)) {
      jenkinsCommand.buildUrl = newBuildUrl;
      return true;
    }
    return false;
  };
  ChangeApplier.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ChangeApplier',
    interfaces: []
  };
  var ChangeApplier_instance = null;
  function ChangeApplier_getInstance() {
    if (ChangeApplier_instance === null) {
      new ChangeApplier();
    }
    return ChangeApplier_instance;
  }
  var MAVEN_PROJECT_ID;
  var JENKINS_MAVEN_RELEASE_PLUGIN;
  var JENKINS_MULTI_MAVEN_RELEASE_PLUGIN;
  var JENKINS_UPDATE_DEPENDENCY;
  function deserialize(body) {
    var releasePlanJson = JSON.parse(body);
    var state = deserializeReleaseState(releasePlanJson);
    var rootProjectId = deserializeProjectId(releasePlanJson.id);
    var projects = deserializeProjects(releasePlanJson);
    var submodules = deserializeMapOfProjectIdAndSetProjectId(releasePlanJson.submodules);
    var dependents = deserializeMapOfProjectIdAndSetProjectId(releasePlanJson.dependents);
    var warnings = toList(releasePlanJson.warnings);
    var infos = toList(releasePlanJson.infos);
    var config = deserializeConfig(releasePlanJson.config);
    return new ReleasePlan(releasePlanJson.releaseId, state, rootProjectId, projects, submodules, dependents, warnings, infos, config);
  }
  function deserializeReleaseState(releasePlanJson) {
    return ReleaseState$valueOf(releasePlanJson.state);
  }
  function deserializeProjectId(id) {
    var tmp$;
    if (equals(id.t, MAVEN_PROJECT_ID))
      tmp$ = createMavenProjectId(id);
    else
      throw UnsupportedOperationException_init(id.t + ' is not supported.');
    return tmp$;
  }
  function createMavenProjectId(genericId) {
    var dynamicId = genericId.p;
    return new MavenProjectId(dynamicId.groupId, dynamicId.artifactId);
  }
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function deserializeProjects(releasePlanJson) {
    var map = HashMap_init();
    var $receiver = releasePlanJson.projects;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var projectId = deserializeProjectId(element.id);
      var value = new Project(projectId, element.isSubmodule, element.currentVersion, element.releaseVersion, element.level, deserializeCommands(element.commands), element.relativePath);
      map.put_xwzc9p$(projectId, value);
    }
    return map;
  }
  function deserializeCommands(commands) {
    var destination = ArrayList_init(commands.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== commands.length; ++tmp$) {
      var item = commands[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      transform$break: do {
        switch (item.t) {
          case 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMavenReleasePlugin':
            transform$result = createJenkinsMavenReleasePlugin(item.p);
            break transform$break;
          case 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMultiMavenReleasePlugin':
            transform$result = createJenkinsMultiMavenReleasePlugin(item.p);
            break transform$break;
          case 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsUpdateDependency':
            transform$result = createJenkinsUpdateDependency(item.p);
            break transform$break;
          default:throw UnsupportedOperationException_init(item.t + ' is not supported.');
        }
      }
       while (false);
      tmp$_0.call(destination, transform$result);
    }
    return destination;
  }
  function createJenkinsMavenReleasePlugin(command) {
    var it = command;
    return new JenkinsMavenReleasePlugin(deserializeCommandState(it), it.nextDevVersion, it.buildUrl);
  }
  function createJenkinsMultiMavenReleasePlugin(command) {
    var it = command;
    return new JenkinsMultiMavenReleasePlugin(deserializeCommandState(it), it.nextDevVersion, it.buildUrl);
  }
  function createJenkinsUpdateDependency(command) {
    var it = command;
    var projectId = new MavenProjectId(it.projectId.groupId, it.projectId.artifactId);
    return new JenkinsUpdateDependency(deserializeCommandState(it), projectId, it.buildUrl);
  }
  function deserializeCommandState(it) {
    var tmp$;
    var json = it.state;
    var fixedState = fakeEnumsName(json);
    var state = fromJson(fixedState);
    if (Kotlin.isType(state, CommandState$Waiting)) {
      var realDependencies = Kotlin.isArray(tmp$ = state.dependencies) ? tmp$ : throwCCE();
      var destination = ArrayList_init(realDependencies.length);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== realDependencies.length; ++tmp$_0) {
        var item = realDependencies[tmp$_0];
        destination.add_11rb$(deserializeProjectId(item));
      }
      var deserializedDependencies = toHashSet(destination);
      state.dependencies = deserializedDependencies;
    }
    return state;
  }
  function fakeEnumsName(json) {
    var tmp$;
    var state = JSON.parse(JSON.stringify(json));
    var tmp = state;
    while (tmp != null) {
      tmp.state = {name: tmp.state};
      if (equals(tmp.state.name, 'Deactivated')) {
        tmp$ = tmp.previous;
      }
       else {
        tmp$ = null;
      }
      tmp = tmp$;
    }
    return state;
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  function deserializeMapOfProjectIdAndSetProjectId(mapJson) {
    var capacity = coerceAtLeast(mapCapacity(mapJson.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== mapJson.length; ++tmp$) {
      var element = mapJson[tmp$];
      var tmp$_0 = destination.put_xwzc9p$;
      var tmp$_1 = deserializeProjectId(element.k);
      var $receiver = element.v;
      var destination_0 = ArrayList_init($receiver.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
        var item = $receiver[tmp$_2];
        destination_0.add_11rb$(deserializeProjectId(item));
      }
      tmp$_0.call(destination, tmp$_1, toHashSet(destination_0));
    }
    return destination;
  }
  function deserializeConfig(config) {
    var capacity = coerceAtLeast(mapCapacity(config.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== config.length; ++tmp$) {
      var element = config[tmp$];
      if (element.length !== 2) {
        showWarning('corrupt config found, size != 2: ' + element);
      }
      var pair = to(ConfigKey.Companion.fromString_61zpoe$(element[0]), element[1]);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    return destination;
  }
  var getKClass = Kotlin.getKClass;
  function elementById(id) {
    var tmp$;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$_0;
      tmp$_0 = document.getElementById(id);
      if (tmp$_0 == null) {
        elementByIdOrNull$result = null;
        break elementByIdOrNull$break;
      }
      var element = tmp$_0;
      if (!Kotlin.isType(element, HTMLElement)) {
        var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLElement)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      elementByIdOrNull$result = element;
    }
     while (false);
    tmp$ = elementByIdOrNull$result;
    if (tmp$ == null) {
      throw IllegalStateException_init('no element found for id ' + id + ' (expected type ' + get_js(getKClass(HTMLElement)).name + ')');
    }
    return tmp$;
  }
  var elementById_0 = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.elementById_3nk6j2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    return function (T_0, isT, id) {
      var tmp$;
      var elementByIdOrNull$result;
      elementByIdOrNull$break: do {
        var tmp$_0;
        tmp$_0 = document.getElementById(id);
        if (tmp$_0 == null) {
          elementByIdOrNull$result = null;
          break elementByIdOrNull$break;
        }
        var element = tmp$_0;
        if (!isT(element)) {
          var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(T_0)).name + '<br/>Found ' + element;
          throw IllegalArgumentException_init(message.toString());
        }
        elementByIdOrNull$result = element;
      }
       while (false);
      tmp$ = elementByIdOrNull$result;
      if (tmp$ == null) {
        throw IllegalStateException_init('no element found for id ' + id + ' (expected type ' + get_js(getKClass(T_0)).name + ')');
      }
      return tmp$;
    };
  }));
  var elementByIdOrNull = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.elementByIdOrNull_3nk6j2$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    return function (T_0, isT, id) {
      var tmp$;
      tmp$ = document.getElementById(id);
      if (tmp$ == null) {
        return null;
      }
      var element = tmp$;
      if (!isT(element)) {
        var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(T_0)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      return element;
    };
  }));
  function display(id, what) {
    elementById(id).style.display = what;
  }
  function getCheckbox(id) {
    var tmp$;
    tmp$ = getCheckboxOrNull(id);
    if (tmp$ == null) {
      throw IllegalStateException_init('no checkbox found for id ' + id);
    }
    return tmp$;
  }
  function getCheckboxOrNull(id) {
    return getInputElementOrNull(id, 'checkbox');
  }
  function getTextField(id) {
    var tmp$;
    tmp$ = getTextFieldOrNull(id);
    if (tmp$ == null) {
      throw IllegalStateException_init('no text field found for id ' + id);
    }
    return tmp$;
  }
  function getTextFieldOrNull(id) {
    return getInputElementOrNull(id, 'text');
  }
  function getInputElementOrNull(id, type) {
    var tmp$;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$_0;
      tmp$_0 = document.getElementById(id);
      if (tmp$_0 == null) {
        elementByIdOrNull$result = null;
        break elementByIdOrNull$break;
      }
      var element = tmp$_0;
      if (!Kotlin.isType(element, HTMLInputElement)) {
        var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLInputElement)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      elementByIdOrNull$result = element;
    }
     while (false);
    tmp$ = elementByIdOrNull$result;
    if (tmp$ == null) {
      return null;
    }
    var element_0 = tmp$;
    if (!equals(element_0.type, type)) {
      var message_0 = id + ' was either not an input element or did not have type ' + type + ': ' + element_0;
      throw IllegalArgumentException_init(message_0.toString());
    }
    return element_0;
  }
  function Downloader(modifiableJson) {
    this.modifiableJson_0 = modifiableJson;
  }
  Downloader.prototype.download = function () {
    var tmp$;
    var json = this.modifiableJson_0.getJsonWithAppliedChanges();
    var a = Kotlin.isType(tmp$ = document.createElement('a'), HTMLElement) ? tmp$ : throwCCE();
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(json));
    a.setAttribute('download', 'release.json');
    a.style.display = 'none';
    ensureNotNull(document.body).appendChild(a);
    a.click();
    ensureNotNull(document.body).removeChild(a);
  };
  Downloader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Downloader',
    interfaces: []
  };
  function Gui(releasePlan, menu) {
    Gui$Companion_getInstance();
    this.releasePlan_0 = releasePlan;
    this.menu_0 = menu;
    this.toggler_0 = new Toggler(this.releasePlan_0, this.menu_0);
  }
  function Gui$load$lambda(it) {
    showWarning(it);
    return Unit;
  }
  function Gui$load$lambda_0(it) {
    showInfo(it);
    return Unit;
  }
  Gui.prototype.load = function () {
    var tmp$, tmp$_0, tmp$_1;
    var rootProjectId = this.releasePlan_0.rootProjectId;
    var htmlTitle = (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = rootProjectId, MavenProjectId) ? tmp$ : null) != null ? tmp$_0.artifactId : null) != null ? tmp$_1 : rootProjectId.identifier;
    document.title = 'Release ' + htmlTitle;
    this.setUpMessages_0(this.releasePlan_0.warnings, 'warnings', Gui$load$lambda);
    this.setUpMessages_0(this.releasePlan_0.infos, 'infos', Gui$load$lambda_0);
    this.setUpConfig_0(this.releasePlan_0);
    this.setUpProjects_0();
    this.toggler_0.registerToggleEvents();
  };
  function Gui$setUpMessages$lambda(closure$minimized, closure$messages, closure$action) {
    return function (it) {
      closure$minimized.style.display = 'none';
      var $receiver = closure$messages;
      var action = closure$action;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        action(element);
      }
      return Unit;
    };
  }
  function Gui$setUpMessages$lambda_0(closure$messagesDiv) {
    return function (it) {
      var $receiver = asList(document.querySelectorAll('#messages > div'));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        closure$messagesDiv.removeChild(element);
      }
      return Unit;
    };
  }
  Gui.prototype.setUpMessages_0 = function (messages, id, action) {
    if (!messages.isEmpty()) {
      var minimized = elementById(id + 'Minimized');
      minimized.style.display = 'block';
      minimized.addEventListener('click', Gui$setUpMessages$lambda(minimized, messages, action));
    }
    var messagesDiv = elementById('messages');
    addClickEventListener(elementById(Gui$Companion_getInstance().HIDE_MESSAGES_HTML_ID), Gui$setUpMessages$lambda_0(messagesDiv));
  };
  function Gui$setUpConfig$lambda$lambda(closure$releasePlan, this$Gui) {
    return function ($receiver) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      this$Gui.fieldWithLabel_0($receiver, Gui$Companion_getInstance().RELEASE_ID_HTML_ID, 'ReleaseId', closure$releasePlan.releaseId);
      var config = closure$releasePlan.config;
      var $receiver_0 = listOf([ConfigKey.COMMIT_PREFIX, ConfigKey.UPDATE_DEPENDENCY_JOB, ConfigKey.REMOTE_REGEX, ConfigKey.REMOTE_JOB, ConfigKey.REGEX_PARAMS]);
      var tmp$_4;
      tmp$_4 = $receiver_0.iterator();
      while (tmp$_4.hasNext()) {
        var element = tmp$_4.next();
        var tmp$_5;
        this$Gui.fieldWithLabel_0($receiver, 'config-' + element.asString(), element.asString(), (tmp$_5 = config.get_11rb$(element)) != null ? tmp$_5 : '');
      }
      var key = ConfigKey.JOB_MAPPING;
      tmp$ = 'config-' + key.asString();
      tmp$_0 = key.asString();
      tmp$_3 = (tmp$_2 = (tmp$_1 = config.get_11rb$(key)) != null ? replace(tmp$_1, '|', '\n') : null) != null ? tmp$_2 : '';
      this$Gui.textFieldWithLabel_0($receiver, tmp$, tmp$_0, tmp$_3);
      return Unit;
    };
  }
  function Gui$setUpConfig$lambda(closure$releasePlan, this$Gui) {
    return function ($receiver) {
      div($receiver, void 0, Gui$setUpConfig$lambda$lambda(closure$releasePlan, this$Gui));
      return Unit;
    };
  }
  Gui.prototype.setUpConfig_0 = function (releasePlan) {
    append(elementById('config'), Gui$setUpConfig$lambda(releasePlan, this));
  };
  function Gui$setUpProjects$lambda$lambda(closure$project, this$Gui, closure$set, closure$itr, closure$level) {
    return function ($receiver) {
      if (!closure$project.isSubmodule) {
        this$Gui.project_0($receiver, closure$project);
      }
      closure$set.add_11rb$(closure$project.id);
      while (hasNextOnTheSameLevel(closure$itr, closure$level.v)) {
        var nextProject = closure$itr.next();
        if (!nextProject.isSubmodule) {
          this$Gui.project_0($receiver, nextProject);
        }
        closure$set.add_11rb$(nextProject.id);
      }
      return Unit;
    };
  }
  function Gui$setUpProjects$lambda(this$Gui, closure$set) {
    return function ($receiver) {
      var itr = toPeekingIterator(this$Gui.releasePlan_0.iterator());
      var level = {v: null};
      while (itr.hasNext()) {
        var project = itr.next();
        level.v = project.level;
        div($receiver, 'level l' + level.v, Gui$setUpProjects$lambda$lambda(project, this$Gui, closure$set, itr, level));
      }
      return Unit;
    };
  }
  function Gui$setUpProjects$lambda_0(it) {
    return it.identifier;
  }
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  Gui.prototype.setUpProjects_0 = function () {
    var set = HashSet_init();
    var pipeline = elementById(Gui$Companion_getInstance().PIPELINE_HTML_ID_0);
    pipeline.state = this.releasePlan_0.state;
    append(pipeline, Gui$setUpProjects$lambda(this, set));
    var involvedProjects = set.size;
    showStatus('Projects involved: ' + involvedProjects);
    if (involvedProjects !== this.releasePlan_0.getNumberOfProjects()) {
      showError('Not all dependent projects are involved in the process, please report a bug. The following where left out\n' + joinToString(minus(this.releasePlan_0.getProjectIds(), set), '\n', void 0, void 0, void 0, void 0, Gui$setUpProjects$lambda_0));
    }
  };
  function Gui$project$lambda$lambda$lambda(closure$project, this$Gui) {
    return function ($receiver) {
      this$Gui.projectId_0($receiver, closure$project.id);
      return Unit;
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function Gui$project$lambda$lambda(closure$hasCommands, closure$identifier, closure$project, this$Gui) {
    return function ($receiver) {
      if (closure$hasCommands) {
        var tmp$ = this$Gui;
        var tmp$_0 = closure$identifier + Gui$Companion_getInstance().DEACTIVATE_ALL_SUFFIX;
        var $receiver_0 = closure$project.commands;
        var any$result;
        any$break: do {
          var tmp$_1;
          if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
            any$result = false;
            break any$break;
          }
          tmp$_1 = $receiver_0.iterator();
          while (tmp$_1.hasNext()) {
            var element = tmp$_1.next();
            if (!Kotlin.isType(element.state, CommandState$Deactivated)) {
              any$result = true;
              break any$break;
            }
          }
          any$result = false;
        }
         while (false);
        tmp$.toggle_0($receiver, tmp$_0, 'deactivate all commands', any$result, false);
      }
      span($receiver, void 0, Gui$project$lambda$lambda$lambda(closure$project, this$Gui));
      return Unit;
    };
  }
  function Gui$project$lambda$lambda_0(closure$identifier, closure$project, this$Gui) {
    return function ($receiver) {
      this$Gui.fieldReadOnlyWithLabel_0($receiver, closure$identifier + ':currentVersion', 'Current Version', closure$project.currentVersion);
      this$Gui.fieldWithLabel_0($receiver, closure$identifier + ':releaseVersion', 'Release Version', closure$project.releaseVersion);
      return Unit;
    };
  }
  function Gui$project$lambda(closure$project, this$Gui) {
    return function ($receiver) {
      var hasCommands = !closure$project.commands.isEmpty();
      set_classes($receiver, setOf(['project', closure$project.isSubmodule ? 'submodule' : '', !hasCommands ? 'withoutCommands' : '', this$Gui.releasePlan_0.hasSubmodules_lljhqa$(closure$project.id) ? 'withSubmodules' : '']));
      var identifier = closure$project.id.identifier;
      set_id($receiver, identifier);
      div_0($receiver, 'title', Gui$project$lambda$lambda(hasCommands, identifier, closure$project, this$Gui));
      if (!closure$project.isSubmodule) {
        div_0($receiver, 'fields', Gui$project$lambda$lambda_0(identifier, closure$project, this$Gui));
      }
      this$Gui.commands_0($receiver, closure$project);
      if (closure$project.isSubmodule) {
        this$Gui.submodules_0($receiver, closure$project.id);
      }
      return Unit;
    };
  }
  Gui.prototype.project_0 = function ($receiver, project) {
    div_0($receiver, void 0, Gui$project$lambda(project, this));
  };
  Gui.prototype.projectId_0 = function ($receiver, id) {
    if (Kotlin.isType(id, MavenProjectId)) {
      set_title($receiver, id.identifier);
      $receiver.unaryPlus_pdl1vz$(id.artifactId);
    }
     else {
      $receiver.unaryPlus_pdl1vz$(id.identifier);
    }
  };
  Gui.prototype.projectId_1 = function ($receiver, id) {
    if (Kotlin.isType(id, MavenProjectId)) {
      set_title($receiver, id.identifier);
      $receiver.value = id.artifactId;
    }
     else {
      $receiver.value = id.identifier;
    }
  };
  function Gui$commands$lambda$lambda$lambda(closure$commandId, closure$command) {
    return function ($receiver) {
      set_id($receiver, closure$commandId + Gui$Companion_getInstance().TITLE_SUFFIX);
      $receiver.unaryPlus_pdl1vz$(ensureNotNull(Kotlin.getKClassFromExpression(closure$command).simpleName));
      return Unit;
    };
  }
  function Gui$commands$lambda$lambda$lambda_0(closure$commandId, closure$project, closure$command, this$Gui) {
    return function ($receiver) {
      this$Gui.fieldsForCommand_0($receiver, closure$commandId, closure$project.id, closure$command);
      return Unit;
    };
  }
  function Gui$commands$lambda$lambda(closure$project, closure$index, closure$command, this$Gui) {
    return function ($receiver) {
      var commandId = Gui$Companion_getInstance().getCommandId_xgsuvp$(closure$project, closure$index);
      set_id($receiver, commandId);
      set_classes($receiver, setOf(['command', Gui$Companion_getInstance().stateToCssClass_0(closure$command.state)]));
      div_0($receiver, 'commandTitle', Gui$commands$lambda$lambda$lambda(commandId, closure$command));
      div_0($receiver, 'fields', Gui$commands$lambda$lambda$lambda_0(commandId, closure$project, closure$command, this$Gui));
      var div = getUnderlyingHtmlElement($receiver);
      div.state = closure$command.state;
      if (Kotlin.isType(closure$command, JenkinsCommand)) {
        div.buildUrl = closure$command.buildUrl;
      }
      return Unit;
    };
  }
  Gui.prototype.commands_0 = function ($receiver, project) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = project.commands.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      div_0($receiver, void 0, Gui$commands$lambda$lambda(project, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item, this));
    }
  };
  function Gui$fieldWithLabel$lambda($receiver) {
    return Unit;
  }
  Gui.prototype.fieldWithLabel_0 = function ($receiver, id, label, text) {
    this.fieldWithLabel_1($receiver, id, label, text, Gui$fieldWithLabel$lambda);
  };
  function Gui$fieldReadOnlyWithLabel$lambda($receiver) {
    return Unit;
  }
  function Gui$fieldReadOnlyWithLabel$lambda_0(closure$inputAct) {
    return function ($receiver) {
      $receiver.disabled = true;
      closure$inputAct($receiver);
      return Unit;
    };
  }
  Gui.prototype.fieldReadOnlyWithLabel_0 = function ($receiver, id, label, text, inputAct) {
    if (inputAct === void 0)
      inputAct = Gui$fieldReadOnlyWithLabel$lambda;
    this.fieldWithLabel_1($receiver, id, label, text, Gui$fieldReadOnlyWithLabel$lambda_0(inputAct));
  };
  function Gui$fieldWithLabel$lambda$lambda(closure$id, closure$label) {
    return function ($receiver) {
      $receiver.htmlFor = closure$id;
      $receiver.unaryPlus_pdl1vz$(closure$label);
      return Unit;
    };
  }
  function Gui$fieldWithLabel$lambda$lambda$lambda(this$Gui) {
    return function (it) {
      this$Gui.menu_0.activateSaveButton();
      return Unit;
    };
  }
  function Gui$fieldWithLabel$lambda$lambda_0(closure$id, closure$text, closure$inputAct, this$Gui) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, closure$id);
      $receiver.value = closure$text;
      closure$inputAct($receiver);
      var input = Kotlin.isType(tmp$ = getUnderlyingHtmlElement($receiver), HTMLInputElement) ? tmp$ : throwCCE();
      input.addEventListener('keyup', Gui$fieldWithLabel$lambda$lambda$lambda(this$Gui));
      Gui$Companion_getInstance().disableUnDisableForReleaseStartAndEnd_fj1ece$(input, input);
      return Unit;
    };
  }
  function Gui$fieldWithLabel$lambda_0(closure$id, closure$label, closure$text, closure$inputAct, this$Gui) {
    return function ($receiver) {
      label($receiver, 'fields', Gui$fieldWithLabel$lambda$lambda(closure$id, closure$label));
      textInput($receiver, void 0, void 0, void 0, void 0, Gui$fieldWithLabel$lambda$lambda_0(closure$id, closure$text, closure$inputAct, this$Gui));
      return Unit;
    };
  }
  Gui.prototype.fieldWithLabel_1 = function ($receiver, id, label, text, inputAct) {
    div_0($receiver, void 0, Gui$fieldWithLabel$lambda_0(id, label, text, inputAct, this));
  };
  function Gui$textFieldWithLabel$lambda$lambda(closure$id, closure$label) {
    return function ($receiver) {
      $receiver.htmlFor = closure$id;
      $receiver.unaryPlus_pdl1vz$(closure$label);
      return Unit;
    };
  }
  function Gui$textFieldWithLabel$lambda$lambda$lambda(this$Gui) {
    return function (it) {
      this$Gui.menu_0.activateSaveButton();
      return Unit;
    };
  }
  function Gui$textFieldWithLabel$lambda$lambda_0(closure$id, closure$text, this$Gui) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, closure$id);
      $receiver.unaryPlus_pdl1vz$(closure$text);
      var htmlTextAreaElement = Kotlin.isType(tmp$ = getUnderlyingHtmlElement($receiver), HTMLTextAreaElement) ? tmp$ : throwCCE();
      htmlTextAreaElement.addEventListener('keyup', Gui$textFieldWithLabel$lambda$lambda$lambda(this$Gui));
      var input = htmlTextAreaElement;
      Gui$Companion_getInstance().disableUnDisableForReleaseStartAndEnd_fj1ece$(input, htmlTextAreaElement);
      return Unit;
    };
  }
  function Gui$textFieldWithLabel$lambda(closure$id, closure$label, closure$text, this$Gui) {
    return function ($receiver) {
      label($receiver, 'fields', Gui$textFieldWithLabel$lambda$lambda(closure$id, closure$label));
      textArea($receiver, void 0, void 0, void 0, void 0, Gui$textFieldWithLabel$lambda$lambda_0(closure$id, closure$text, this$Gui));
      return Unit;
    };
  }
  Gui.prototype.textFieldWithLabel_0 = function ($receiver, id, label, text) {
    div_0($receiver, void 0, Gui$textFieldWithLabel$lambda(id, label, text, this));
  };
  function Gui$fieldsForCommand$lambda$lambda(closure$idPrefix) {
    return function ($receiver) {
      span($receiver);
      set_id($receiver, closure$idPrefix + ':status.icon');
      return Unit;
    };
  }
  function Gui$fieldsForCommand$lambda(closure$idPrefix, closure$command) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, closure$idPrefix + Gui$Companion_getInstance().STATE_SUFFIX);
      i($receiver, 'material-icons', Gui$fieldsForCommand$lambda$lambda(closure$idPrefix));
      if (Kotlin.isType(closure$command, JenkinsCommand)) {
        $receiver.href = (tmp$ = closure$command.buildUrl) != null ? tmp$ : '';
      }
      set_title($receiver, Gui$Companion_getInstance().stateToTitle_0(closure$command.state));
      return Unit;
    };
  }
  Gui.prototype.fieldsForCommand_0 = function ($receiver, idPrefix, projectId, command) {
    var tmp$;
    if (Kotlin.isType(command, ReleaseCommand))
      tmp$ = 'release';
    else
      tmp$ = '';
    var cssClass = tmp$;
    this.toggle_0($receiver, idPrefix + Gui$Companion_getInstance().DEACTIVATE_SUFFIX, 'Click to deactivate command', !Kotlin.isType(command.state, CommandState$Deactivated), command.state === CommandState.Disabled, cssClass);
    a($receiver, void 0, void 0, 'state', Gui$fieldsForCommand$lambda(idPrefix, command));
    if (Kotlin.isType(command, JenkinsMavenReleasePlugin))
      this.appendJenkinsMavenReleasePluginField_0($receiver, idPrefix, command);
    else if (Kotlin.isType(command, JenkinsMultiMavenReleasePlugin))
      this.appendJenkinsMultiMavenReleasePluginFields_0($receiver, idPrefix, projectId, command);
    else if (Kotlin.isType(command, JenkinsUpdateDependency))
      this.appendJenkinsUpdateDependencyField_0($receiver, idPrefix, command);
    else
      showError('Unknown command found, cannot display its fields.' + '\n' + command);
  };
  Gui.prototype.appendJenkinsMavenReleasePluginField_0 = function ($receiver, idPrefix, command) {
    this.fieldNextDevVersion_0($receiver, idPrefix, command, command.nextDevVersion);
  };
  function Gui$fieldNextDevVersion$lambda(closure$command) {
    return function ($receiver) {
      if (closure$command.state === CommandState.Disabled) {
        $receiver.disabled = true;
      }
      return Unit;
    };
  }
  Gui.prototype.fieldNextDevVersion_0 = function ($receiver, idPrefix, command, nextDevVersion) {
    this.fieldWithLabel_1($receiver, idPrefix + Gui$Companion_getInstance().NEXT_DEV_VERSION_SUFFIX, 'Next Dev Version', nextDevVersion, Gui$fieldNextDevVersion$lambda(command));
  };
  Gui.prototype.appendJenkinsMultiMavenReleasePluginFields_0 = function ($receiver, idPrefix, projectId, command) {
    this.fieldNextDevVersion_0($receiver, idPrefix, command, command.nextDevVersion);
    this.submodules_0($receiver, projectId);
  };
  function Gui$submodules$lambda(closure$submodules, this$Gui) {
    return function ($receiver) {
      var $receiver_0 = closure$submodules;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$Gui_0 = this$Gui;
        this$Gui_0.project_0($receiver, this$Gui_0.releasePlan_0.getProject_lljhqa$(element));
      }
      return Unit;
    };
  }
  Gui.prototype.submodules_0 = function ($receiver, projectId) {
    var submodules = this.releasePlan_0.getSubmodules_lljhqa$(projectId);
    if (submodules.isEmpty())
      return;
    div_0($receiver, 'submodules', Gui$submodules$lambda(submodules, this));
  };
  function Gui$appendJenkinsUpdateDependencyField$lambda(closure$command, this$Gui) {
    return function ($receiver) {
      this$Gui.projectId_1($receiver, closure$command.projectId);
      return Unit;
    };
  }
  Gui.prototype.appendJenkinsUpdateDependencyField_0 = function ($receiver, idPrefix, command) {
    this.fieldReadOnlyWithLabel_0($receiver, idPrefix + ':groupId', 'Dependency', command.projectId.identifier, Gui$appendJenkinsUpdateDependencyField$lambda(command, this));
  };
  function Gui$toggle$lambda$lambda(closure$id, closure$checked, closure$disabled) {
    return function ($receiver) {
      set_id($receiver, closure$id);
      $receiver.checked = (closure$checked && !closure$disabled);
      $receiver.disabled = closure$disabled;
      return Unit;
    };
  }
  function Gui$toggle$lambda$lambda_0(closure$id, closure$title, closure$disabled) {
    return function ($receiver) {
      set_id($receiver, closure$id + Gui$Companion_getInstance().SLIDER_SUFFIX);
      set_title($receiver, closure$title);
      if (closure$disabled) {
        set_title($receiver, Gui$Companion_getInstance().STATE_DISABLED);
      }
      return Unit;
    };
  }
  function Gui$toggle$lambda(closure$checkboxCssClass, closure$id, closure$checked, closure$disabled, closure$title) {
    return function ($receiver) {
      checkBoxInput($receiver, void 0, void 0, void 0, closure$checkboxCssClass, Gui$toggle$lambda$lambda(closure$id, closure$checked, closure$disabled));
      span($receiver, 'slider', Gui$toggle$lambda$lambda_0(closure$id, closure$title, closure$disabled));
      return Unit;
    };
  }
  Gui.prototype.toggle_0 = function ($receiver, id, title, checked, disabled, checkboxCssClass) {
    if (checkboxCssClass === void 0)
      checkboxCssClass = '';
    label($receiver, 'toggle', Gui$toggle$lambda(checkboxCssClass, id, checked, disabled, title));
  };
  function Gui$Companion() {
    Gui$Companion_instance = this;
    this.PIPELINE_HTML_ID_0 = 'pipeline';
    this.RELEASE_ID_HTML_ID = 'releaseId';
    this.HIDE_MESSAGES_HTML_ID = 'hideMessages';
    this.DEACTIVATE_SUFFIX = ':deactivate';
    this.DEACTIVATE_ALL_SUFFIX = ':deactivateAll';
    this.SLIDER_SUFFIX = ':slider';
    this.DISABLED_RELEASE_IN_PROGRESS = 'disabled due to release which is in progress.';
    this.DISABLED_RELEASE_SUCCESS = 'Release successful, use a new pipeline for a new release.';
    this.NEXT_DEV_VERSION_SUFFIX = ':nextDevVersion';
    this.STATE_SUFFIX = ':state';
    this.TITLE_SUFFIX = ':title';
    this.STATE_WAITING_0 = 'Wait for dependent projects to complete.';
    this.STATE_READY = 'Ready to be queued for execution.';
    this.STATE_READY_TO_RE_TRIGGER = 'Ready to be re-scheduled';
    this.STATE_QUEUEING = 'Currently queueing the job.';
    this.STATE_IN_PROGRESS = 'Job is running.';
    this.STATE_SUCCEEDED = 'Job completed successfully.';
    this.STATE_FAILED = 'Job completed successfully.';
    this.STATE_DEACTIVATED_0 = 'Currently deactivated, click to activate';
    this.STATE_DISABLED = 'Command disabled, cannot be reactivated.';
  }
  Gui$Companion.prototype.getCommandId_xgsuvp$ = function (project, index) {
    return this.getCommandId_o8feeo$(project.id, index);
  };
  Gui$Companion.prototype.getCommandId_o8feeo$ = function (projectId, index) {
    return projectId.identifier + ':' + index;
  };
  Gui$Companion.prototype.getCommand_xgsuvp$ = function (project, index) {
    return this.getCommand_o8feeo$(project.id, index);
  };
  Gui$Companion.prototype.getCommand_o8feeo$ = function (projectId, index) {
    return elementById(this.getCommandId_o8feeo$(projectId, index));
  };
  Gui$Companion.prototype.getCommandState_o8feeo$ = function (projectId, index) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.getCommand_o8feeo$(projectId, index).state, CommandState) ? tmp$ : throwCCE();
  };
  function Gui$Companion$disableUnDisableForReleaseStartAndEnd$lambda(closure$input, closure$titleElement, this$Gui$) {
    return function (it) {
      closure$input.oldDisabled = closure$input.disabled;
      closure$input.disabled = true;
      setTitleSaveOld(closure$titleElement, this$Gui$.DISABLED_RELEASE_IN_PROGRESS);
      return Unit;
    };
  }
  function Gui$Companion$disableUnDisableForReleaseStartAndEnd$lambda_0(this$Gui$, closure$titleElement, closure$input) {
    return function (success) {
      var tmp$;
      if (success) {
        closure$titleElement.title = this$Gui$.DISABLED_RELEASE_SUCCESS;
      }
       else {
        closure$input.disabled = typeof (tmp$ = closure$input.oldDisabled) === 'boolean' ? tmp$ : throwCCE();
        closure$titleElement.title = getOldTitle(closure$titleElement);
      }
      return Unit;
    };
  }
  Gui$Companion.prototype.disableUnDisableForReleaseStartAndEnd_fj1ece$ = function (input, titleElement) {
    Menu$Companion_getInstance().registerForReleaseStartEvent_gbr1zf$(Gui$Companion$disableUnDisableForReleaseStartAndEnd$lambda(input, titleElement, this));
    Menu$Companion_getInstance().registerForReleaseEndEvent_y8twos$(Gui$Companion$disableUnDisableForReleaseStartAndEnd$lambda_0(this, titleElement, input));
  };
  Gui$Companion.prototype.changeStateOfCommandAndAddBuildUrl_85y8bj$ = function (project, index, newState, title, buildUrl) {
    this.changeStateOfCommand_q143v3$(project, index, newState, title);
    var commandId = this.getCommandId_xgsuvp$(project, index);
    var id = commandId + this.STATE_SUFFIX;
    var tmp$;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$_0;
      tmp$_0 = document.getElementById(id);
      if (tmp$_0 == null) {
        elementByIdOrNull$result = null;
        break elementByIdOrNull$break;
      }
      var element = tmp$_0;
      if (!Kotlin.isType(element, HTMLAnchorElement)) {
        var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLAnchorElement)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      elementByIdOrNull$result = element;
    }
     while (false);
    tmp$ = elementByIdOrNull$result;
    if (tmp$ == null) {
      throw IllegalStateException_init('no element found for id ' + id + ' (expected type ' + get_js(getKClass(HTMLAnchorElement)).name + ')');
    }
    tmp$.href = buildUrl;
    elementById(commandId).buildUrl = buildUrl;
  };
  Gui$Companion.prototype.changeStateOfCommand_q143v3$ = function (project, index, newState, title) {
    var tmp$;
    var commandId = this.getCommandId_xgsuvp$(project, index);
    var command = elementById(commandId);
    var dynCommand = command;
    var previousState = Kotlin.isType(tmp$ = dynCommand.state, CommandState) ? tmp$ : throwCCE();
    try {
      dynCommand.state = previousState.checkTransitionAllowed_m86w84$(newState);
    }
     catch (e) {
      if (Kotlin.isType(e, IllegalStateException)) {
        var commandTitle = elementById(commandId + this.TITLE_SUFFIX);
        throw new IllegalStateException('Cannot change the state of the command ' + commandTitle.innerText + ' (' + (index + 1 | 0) + '. command) ' + ('of the project ' + project.id.identifier), e);
      }
       else
        throw e;
    }
    removeClass(command, [this.stateToCssClass_0(previousState)]);
    addClass(command, [this.stateToCssClass_0(newState)]);
    elementById(commandId + this.STATE_SUFFIX).title = title;
  };
  Gui$Companion.prototype.stateToCssClass_0 = function (state) {
    if (Kotlin.isType(state, CommandState$Waiting))
      return 'waiting';
    else if (equals(state, CommandState.Ready))
      return 'ready';
    else if (equals(state, CommandState.ReadyToRetrigger))
      return 'readyToRetrigger';
    else if (equals(state, CommandState.Queueing))
      return 'queueing';
    else if (equals(state, CommandState.InProgress))
      return 'inProgress';
    else if (equals(state, CommandState.Succeeded))
      return 'succeeded';
    else if (Kotlin.isType(state, Object.getPrototypeOf(CommandState.Failed).constructor))
      return 'failed';
    else if (Kotlin.isType(state, CommandState$Deactivated))
      return 'deactivated';
    else if (equals(state, CommandState.Disabled))
      return 'disabled';
    else
      return Kotlin.noWhenBranchMatched();
  };
  Gui$Companion.prototype.getReleaseState = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = elementById(Gui$Companion_getInstance().PIPELINE_HTML_ID_0).state, ReleaseState) ? tmp$ : throwCCE();
  };
  Gui$Companion.prototype.changeReleaseState_g1wt0g$ = function (newState) {
    var pipeline = elementById(Gui$Companion_getInstance().PIPELINE_HTML_ID_0);
    pipeline.state = this.getReleaseState().checkTransitionAllowed_g1wt0g$(newState);
  };
  Gui$Companion.prototype.stateToTitle_0 = function (state) {
    if (Kotlin.isType(state, CommandState$Waiting))
      return this.STATE_WAITING_0;
    else if (equals(state, CommandState.Ready))
      return this.STATE_READY;
    else if (equals(state, CommandState.ReadyToRetrigger))
      return this.STATE_READY_TO_RE_TRIGGER;
    else if (equals(state, CommandState.Queueing))
      return this.STATE_QUEUEING;
    else if (equals(state, CommandState.InProgress))
      return this.STATE_IN_PROGRESS;
    else if (equals(state, CommandState.Succeeded))
      return this.STATE_SUCCEEDED;
    else if (equals(state, CommandState.Failed))
      return this.STATE_FAILED;
    else if (Kotlin.isType(state, CommandState$Deactivated))
      return this.STATE_DEACTIVATED_0;
    else if (equals(state, CommandState.Disabled))
      return this.STATE_DISABLED;
    else
      return Kotlin.noWhenBranchMatched();
  };
  Gui$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Gui$Companion_instance = null;
  function Gui$Companion_getInstance() {
    if (Gui$Companion_instance === null) {
      new Gui$Companion();
    }
    return Gui$Companion_instance;
  }
  Gui.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gui',
    interfaces: []
  };
  function getUnderlyingHtmlElement($receiver) {
    var tmp$;
    var d = $receiver.consumer;
    if (d.downstream != null) {
      d = d.downstream;
    }
    var arr = Kotlin.isArray(tmp$ = d.path_0.toArray()) ? tmp$ : throwCCE();
    return arr[arr.length - 1 | 0];
  }
  function addClickEventListener$lambda(closure$action) {
    return function (it) {
      withErrorHandling(it, closure$action);
      return Unit;
    };
  }
  function addClickEventListener($receiver, action) {
    $receiver.addEventListener('click', addClickEventListener$lambda(action));
  }
  function addChangeEventListener$lambda(closure$action) {
    return function (it) {
      withErrorHandling(it, closure$action);
      return Unit;
    };
  }
  function addChangeEventListener($receiver, action) {
    $receiver.addEventListener('change', addChangeEventListener$lambda(action));
  }
  function toggleClass($receiver, cssClass) {
    if (hasClass($receiver, cssClass)) {
      removeClass($receiver, [cssClass]);
    }
     else {
      addClass($receiver, [cssClass]);
    }
  }
  function withErrorHandling$lambda(closure$action, closure$event) {
    return function (it) {
      return closure$action(closure$event);
    };
  }
  function withErrorHandling$lambda_0(t) {
    return showThrowableAndThrow(new Error_0('An unexpected error occurred. Please report a bug with the following information.', t));
  }
  function withErrorHandling(event, action) {
    Promise.resolve(1).then(withErrorHandling$lambda(action, event)).catch(withErrorHandling$lambda_0);
  }
  function getOldTitle($receiver) {
    var tmp$;
    return typeof (tmp$ = $receiver.oldTitle) === 'string' ? tmp$ : throwCCE();
  }
  function getOldTitleOrNull($receiver) {
    var tmp$;
    return typeof (tmp$ = $receiver.oldTitle) === 'string' ? tmp$ : null;
  }
  function setTitleSaveOld($receiver, newTitle) {
    if (!equals($receiver.title, newTitle)) {
      $receiver.oldTitle = $receiver.title;
    }
    $receiver.title = newTitle;
  }
  function checkStatusOk(response) {
    var tmp$;
    return Kotlin.isType(tmp$ = checkResponseIgnore(response, null), Promise) ? tmp$ : throwCCE();
  }
  function checkStatusOkOr403(response) {
    return checkResponseIgnore(response, 403);
  }
  function checkStatusOkOr404(response) {
    return checkResponseIgnore(response, 404);
  }
  function checkResponseIgnore$lambda(closure$ignoringError, closure$response) {
    return function (text) {
      if (closure$ignoringError != null && toShort(closure$ignoringError) === closure$response.status) {
        return null;
      }
       else {
        var value = closure$response.ok;
        if (!value) {
          var closure$response_0 = closure$response;
          var message = 'response was not ok, ' + closure$response_0.status + ': ' + closure$response_0.statusText + '\n' + text;
          throw IllegalStateException_init(message.toString());
        }
        return text;
      }
    };
  }
  function checkResponseIgnore(response, ignoringError) {
    return response.text().then(checkResponseIgnore$lambda(ignoringError, response));
  }
  function createFetchInitWithCredentials() {
    var init = {};
    init.credentials = 'include';
    return init;
  }
  function createHeaderWithAuthAndCrumb(crumbWithId, usernameToken) {
    var headers = {};
    addAuthentication(headers, usernameToken);
    if (crumbWithId != null) {
      headers[crumbWithId.id] = crumbWithId.crumb;
    }
    return headers;
  }
  function addAuthentication(headers, usernameToken) {
    var base64UsernameAndToken = window.btoa(usernameToken.username + ':' + usernameToken.token);
    headers['Authorization'] = 'Basic ' + base64UsernameAndToken;
  }
  var get_GET = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.get_GET_be77oc$', function ($receiver) {
    return 'GET';
  });
  var get_POST = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.get_POST_be77oc$', function ($receiver) {
    return 'POST';
  });
  function createRequestInit(body, method, headers) {
    var cache = 'no-cache';
    var o = {};
    o['method'] = method;
    o['headers'] = headers;
    o['body'] = body;
    o['referrer'] = null;
    o['referrerPolicy'] = null;
    o['mode'] = 'cors';
    o['credentials'] = 'include';
    o['cache'] = cache;
    o['redirect'] = 'follow';
    o['integrity'] = null;
    o['keepalive'] = null;
    o['window'] = null;
    var init = o;
    delete init.integrity;
    delete init.referer;
    delete init.referrerPolicy;
    delete init.keepalive;
    delete init.window;
    return init;
  }
  function UsernameToken(username, token) {
    this.username = username;
    this.token = token;
  }
  UsernameToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UsernameToken',
    interfaces: []
  };
  UsernameToken.prototype.component1 = function () {
    return this.username;
  };
  UsernameToken.prototype.component2 = function () {
    return this.token;
  };
  UsernameToken.prototype.copy_puj7f4$ = function (username, token) {
    return new UsernameToken(username === void 0 ? this.username : username, token === void 0 ? this.token : token);
  };
  UsernameToken.prototype.toString = function () {
    return 'UsernameToken(username=' + Kotlin.toString(this.username) + (', token=' + Kotlin.toString(this.token)) + ')';
  };
  UsernameToken.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.username) | 0;
    result = result * 31 + Kotlin.hashCode(this.token) | 0;
    return result;
  };
  UsernameToken.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.username, other.username) && Kotlin.equals(this.token, other.token)))));
  };
  function CrumbWithId(id, crumb) {
    this.id = id;
    this.crumb = crumb;
  }
  CrumbWithId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CrumbWithId',
    interfaces: []
  };
  CrumbWithId.prototype.component1 = function () {
    return this.id;
  };
  CrumbWithId.prototype.component2 = function () {
    return this.crumb;
  };
  CrumbWithId.prototype.copy_puj7f4$ = function (id, crumb) {
    return new CrumbWithId(id === void 0 ? this.id : id, crumb === void 0 ? this.crumb : crumb);
  };
  CrumbWithId.prototype.toString = function () {
    return 'CrumbWithId(id=' + Kotlin.toString(this.id) + (', crumb=' + Kotlin.toString(this.crumb)) + ')';
  };
  CrumbWithId.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.crumb) | 0;
    return result;
  };
  CrumbWithId.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.crumb, other.crumb)))));
  };
  function JenkinsJobExecutor(jenkinsUrl, usernameToken) {
    JenkinsJobExecutor$Companion_getInstance();
    this.jenkinsUrl_0 = jenkinsUrl;
    this.usernameToken_0 = usernameToken;
  }
  function JenkinsJobExecutor$trigger$lambda$lambda(closure$jobName, this$JenkinsJobExecutor) {
    return function (response) {
      return this$JenkinsJobExecutor.checkStatusAndExtractQueuedItemUrl_0(response, closure$jobName);
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda_0(closure$jobName) {
    return function (it) {
      throw new Error_0('Could not trigger the job ' + closure$jobName, it);
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda$lambda(closure$crumbWithId, closure$queuedItemUrl, this$JenkinsJobExecutor) {
    return function (it) {
      return this$JenkinsJobExecutor.extractBuildNumber_0(closure$crumbWithId, closure$queuedItemUrl + 'api/xml');
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda$lambda_0(it) {
    return it;
  }
  function JenkinsJobExecutor$trigger$lambda$lambda_1(closure$verbose, closure$jobName, closure$jobQueuedHook, closure$crumbWithId, this$JenkinsJobExecutor) {
    return function (queuedItemUrl) {
      if (closure$verbose) {
        showInfo('Queued ' + closure$jobName + ' successfully, wait for execution...', 2000);
      }
      return closure$jobQueuedHook(queuedItemUrl).then(JenkinsJobExecutor$trigger$lambda$lambda$lambda(closure$crumbWithId, queuedItemUrl, this$JenkinsJobExecutor)).then(JenkinsJobExecutor$trigger$lambda$lambda$lambda_0);
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda$lambda_1(closure$crumbWithId, closure$jobUrl, closure$buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompleteness, this$JenkinsJobExecutor) {
    return function (it) {
      return this$JenkinsJobExecutor.pollJobForCompletion_0(closure$crumbWithId, closure$jobUrl, closure$buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompleteness);
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda$lambda_2(closure$buildNumber) {
    return function (result) {
      return to(closure$buildNumber, result);
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda_2(closure$verbose, closure$jobName, closure$jobStartedHook, closure$crumbWithId, closure$jobUrl, closure$pollEverySecond, closure$maxWaitingTimeForCompleteness, this$JenkinsJobExecutor) {
    return function (buildNumber) {
      if (closure$verbose) {
        showInfo(closure$jobName + ' started with build number ' + buildNumber + ', wait for completion...', 2000);
      }
      return closure$jobStartedHook(buildNumber).then(JenkinsJobExecutor$trigger$lambda$lambda$lambda_1(closure$crumbWithId, closure$jobUrl, buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompleteness, this$JenkinsJobExecutor)).then(JenkinsJobExecutor$trigger$lambda$lambda$lambda_2(buildNumber));
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda_3(closure$jobName, closure$jobUrl, closure$crumbWithId) {
    return function (f) {
      var buildNumber = f.component1()
      , result = f.component2();
      var value = equals(result, JenkinsJobExecutor$Companion_getInstance().SUCCESS_0);
      if (!value) {
        var closure$jobName_0 = closure$jobName;
        var closure$jobUrl_0 = closure$jobUrl;
        var message = closure$jobName_0 + ' failed, job did not end with status ' + JenkinsJobExecutor$Companion_getInstance().SUCCESS_0 + ' but ' + result + '.' + ('\n' + 'Visit ' + closure$jobUrl_0 + buildNumber + ' for further information');
        throw IllegalStateException_init(message.toString());
      }
      return to(closure$crumbWithId, buildNumber);
    };
  }
  function JenkinsJobExecutor$trigger$lambda(closure$jobUrl, closure$body, this$JenkinsJobExecutor, closure$jobName, closure$verbose, closure$jobQueuedHook, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompleteness) {
    return function (crumbWithId) {
      var $receiver = this$JenkinsJobExecutor.post_0(crumbWithId, closure$jobUrl, closure$body).then(JenkinsJobExecutor$trigger$lambda$lambda(closure$jobName, this$JenkinsJobExecutor)).catch(JenkinsJobExecutor$trigger$lambda$lambda_0(closure$jobName));
      var onFulfilled = JenkinsJobExecutor$trigger$lambda$lambda_1(closure$verbose, closure$jobName, closure$jobQueuedHook, crumbWithId, this$JenkinsJobExecutor);
      var $receiver_0 = $receiver.then(onFulfilled);
      var onFulfilled_0 = JenkinsJobExecutor$trigger$lambda$lambda_2(closure$verbose, closure$jobName, closure$jobStartedHook, crumbWithId, closure$jobUrl, closure$pollEverySecond, closure$maxWaitingTimeForCompleteness, this$JenkinsJobExecutor);
      var $receiver_1 = $receiver_0.then(onFulfilled_0);
      var onFulfilled_1 = JenkinsJobExecutor$trigger$lambda$lambda_3(closure$jobName, closure$jobUrl, crumbWithId);
      return $receiver_1.then(onFulfilled_1);
    };
  }
  JenkinsJobExecutor.prototype.trigger_7817gb$$default = function (jobUrl, jobName, body, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompleteness, verbose) {
    return this.issueCrumb_0(this.jenkinsUrl_0).then(JenkinsJobExecutor$trigger$lambda(jobUrl, body, this, jobName, verbose, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompleteness));
  };
  function JenkinsJobExecutor$checkStatusAndExtractQueuedItemUrl$lambda(closure$response, closure$jobName) {
    return function (it) {
      var tmp$;
      tmp$ = closure$response.headers.get('Location');
      if (tmp$ == null) {
        throw IllegalStateException_init('Job ' + closure$jobName + ' queued but Location header not found in response of Jenkins.' + '\nHave you exposed Location with Access-Control-Expose-Headers?');
      }
      var queuedItemUrl = tmp$;
      return endsWith(queuedItemUrl, '/') ? queuedItemUrl : queuedItemUrl + '/';
    };
  }
  JenkinsJobExecutor.prototype.checkStatusAndExtractQueuedItemUrl_0 = function (response, jobName) {
    return checkStatusOk(response).then(JenkinsJobExecutor$checkStatusAndExtractQueuedItemUrl$lambda(response, jobName));
  };
  function JenkinsJobExecutor$issueCrumb$lambda(it) {
    throw new Error_0('Cannot issue a crumb', it);
  }
  function JenkinsJobExecutor$issueCrumb$lambda_0(crumbWithId) {
    if (crumbWithId != null) {
      var tmp$ = split(crumbWithId, Kotlin.charArrayOf(58));
      var id = tmp$.get_za3lpa$(0);
      var crumb = tmp$.get_za3lpa$(1);
      return new CrumbWithId(id, crumb);
    }
     else {
      return null;
    }
  }
  JenkinsJobExecutor.prototype.issueCrumb_0 = function (jenkinsUrl) {
    var url = jenkinsUrl + '/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,' + '"' + ':' + '"' + ',//crumb)';
    var headers = createHeaderWithAuthAndCrumb(null, this.usernameToken_0);
    var init = createRequestInit(null, 'GET', headers);
    return window.fetch(url, init).then(getCallableRef('checkStatusOkOr404', function (response) {
      return checkStatusOkOr404(response);
    })).catch(JenkinsJobExecutor$issueCrumb$lambda).then(JenkinsJobExecutor$issueCrumb$lambda_0);
  };
  JenkinsJobExecutor.prototype.post_0 = function (crumbWithId, jobUrl, body) {
    var headers = createHeaderWithAuthAndCrumb(crumbWithId, this.usernameToken_0);
    headers['content-type'] = 'application/x-www-form-urlencoded; charset=utf-8';
    var init = createRequestInit(body, 'POST', headers);
    return window.fetch(jobUrl + 'buildWithParameters', init);
  };
  function JenkinsJobExecutor$extractBuildNumber$lambda$lambda(closure$queuedItemUrl) {
    return function (e) {
      throw IllegalStateException_init('Could not find the build number in the returned body.' + ('\n' + 'Job URL: ' + closure$queuedItemUrl) + ('\n' + 'Regex used: ' + JenkinsJobExecutor$Companion_getInstance().numberRegex_0.pattern) + ('\n' + 'Content: ' + e.body));
    };
  }
  function JenkinsJobExecutor$extractBuildNumber$lambda(closure$crumbWithId, closure$xpathUrl, closure$queuedItemUrl, this$JenkinsJobExecutor) {
    return function () {
      return this$JenkinsJobExecutor.pollAndExtract_x0psdq$(closure$crumbWithId, closure$xpathUrl, JenkinsJobExecutor$Companion_getInstance().numberRegex_0, JenkinsJobExecutor$extractBuildNumber$lambda$lambda(closure$queuedItemUrl));
    };
  }
  function JenkinsJobExecutor$extractBuildNumber$lambda_0(it) {
    return toInt(it);
  }
  JenkinsJobExecutor.prototype.extractBuildNumber_0 = function (crumbWithId, queuedItemUrl) {
    var xpathUrl = queuedItemUrl + 'api/xml?xpath=//executable/number';
    return sleep(400, JenkinsJobExecutor$extractBuildNumber$lambda(crumbWithId, xpathUrl, queuedItemUrl, this)).then(JenkinsJobExecutor$extractBuildNumber$lambda_0);
  };
  function JenkinsJobExecutor$pollAndExtract$lambda(closure$regex) {
    return function (body) {
      var matchResult = closure$regex.find_905azu$(body);
      if (matchResult != null) {
        return to(true, matchResult.groupValues.get_za3lpa$(1));
      }
       else {
        return to(false, null);
      }
    };
  }
  function JenkinsJobExecutor$pollAndExtract$lambda_0(closure$errorHandler) {
    return function (t) {
      if (Kotlin.isType(t, JenkinsJobExecutor$PollException)) {
        return closure$errorHandler(t);
      }
       else {
        throw t;
      }
    };
  }
  JenkinsJobExecutor.prototype.pollAndExtract_x0psdq$ = function (crumbWithId, url, regex, errorHandler) {
    return this.poll_0(crumbWithId, url, 0, 2, 20, JenkinsJobExecutor$pollAndExtract$lambda(regex)).catch(JenkinsJobExecutor$pollAndExtract$lambda_0(errorHandler));
  };
  function JenkinsJobExecutor$pollJobForCompletion$lambda$lambda(body) {
    var matchResult = JenkinsJobExecutor$Companion_getInstance().resultRegex_0.matchEntire_6bul2c$(body);
    if (matchResult != null) {
      return to(true, matchResult.groupValues.get_za3lpa$(1));
    }
     else {
      return to(false, '');
    }
  }
  function JenkinsJobExecutor$pollJobForCompletion$lambda(closure$crumbWithId, closure$jobUrl, closure$buildNumber, closure$pollEverySecond, closure$maxWaitingTime, this$JenkinsJobExecutor) {
    return function () {
      return this$JenkinsJobExecutor.poll_0(closure$crumbWithId, closure$jobUrl + closure$buildNumber + '/api/xml?xpath=/*/result', 0, closure$pollEverySecond, closure$maxWaitingTime, JenkinsJobExecutor$pollJobForCompletion$lambda$lambda);
    };
  }
  JenkinsJobExecutor.prototype.pollJobForCompletion_0 = function (crumbWithId, jobUrl, buildNumber, pollEverySecond, maxWaitingTime) {
    return sleep(pollEverySecond * 500 | 0, JenkinsJobExecutor$pollJobForCompletion$lambda(crumbWithId, jobUrl, buildNumber, pollEverySecond, maxWaitingTime, this));
  };
  function JenkinsJobExecutor$poll$lambda$lambda(closure$crumbWithId, closure$pollUrl, closure$numberOfTries, closure$pollEverySecond, closure$maxWaitingTime, closure$action, this$JenkinsJobExecutor) {
    return function () {
      return this$JenkinsJobExecutor.poll_0(closure$crumbWithId, closure$pollUrl, closure$numberOfTries + 1 | 0, closure$pollEverySecond, closure$maxWaitingTime, closure$action);
    };
  }
  function JenkinsJobExecutor$poll$lambda(closure$numberOfTries, closure$pollEverySecond, closure$maxWaitingTime, closure$crumbWithId, closure$pollUrl, closure$action, this$JenkinsJobExecutor) {
    return function (body) {
      if (Kotlin.imul(closure$numberOfTries, closure$pollEverySecond) >= closure$maxWaitingTime) {
        throw new JenkinsJobExecutor$PollException('Waited at least ' + closure$maxWaitingTime + ' seconds', body);
      }
      var p = sleep(closure$pollEverySecond * 1000 | 0, JenkinsJobExecutor$poll$lambda$lambda(closure$crumbWithId, closure$pollUrl, closure$numberOfTries, closure$pollEverySecond, closure$maxWaitingTime, closure$action, this$JenkinsJobExecutor));
      return p;
    };
  }
  function JenkinsJobExecutor$poll$lambda_0(closure$action, closure$rePoll) {
    return function (body) {
      var tmp$ = closure$action(body);
      var success = tmp$.component1()
      , result = tmp$.component2();
      if (success) {
        if (result == null) {
          throw Error_init('Result was null even though success flag during polling was true, please report a bug.');
        }
        return result;
      }
       else {
        return closure$rePoll(body);
      }
    };
  }
  function JenkinsJobExecutor$poll$lambda_1(closure$rePoll) {
    return function (t) {
      if (Kotlin.isType(t, Exception)) {
        return closure$rePoll('');
      }
       else {
        throw t;
      }
    };
  }
  JenkinsJobExecutor.prototype.poll_0 = function (crumbWithId, pollUrl, numberOfTries, pollEverySecond, maxWaitingTime, action) {
    var headers = createHeaderWithAuthAndCrumb(crumbWithId, this.usernameToken_0);
    var init = createRequestInit(null, 'GET', headers);
    var rePoll = JenkinsJobExecutor$poll$lambda(numberOfTries, pollEverySecond, maxWaitingTime, crumbWithId, pollUrl, action, this);
    return window.fetch(pollUrl, init).then(getCallableRef('checkStatusOk', function (response) {
      return checkStatusOk(response);
    })).then(JenkinsJobExecutor$poll$lambda_0(action, rePoll)).catch(JenkinsJobExecutor$poll$lambda_1(rePoll));
  };
  function JenkinsJobExecutor$PollException(message, body) {
    RuntimeException_init(message, this);
    this.body = body;
    this.name = 'JenkinsJobExecutor$PollException';
  }
  JenkinsJobExecutor$PollException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PollException',
    interfaces: [RuntimeException]
  };
  function JenkinsJobExecutor$Companion() {
    JenkinsJobExecutor$Companion_instance = this;
    this.numberRegex_0 = Regex_init('<number>([0-9]+)<\/number>');
    this.resultRegex_0 = Regex_init('<result>([A-Z]+)<\/result>');
    this.SUCCESS_0 = 'SUCCESS';
  }
  JenkinsJobExecutor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JenkinsJobExecutor$Companion_instance = null;
  function JenkinsJobExecutor$Companion_getInstance() {
    if (JenkinsJobExecutor$Companion_instance === null) {
      new JenkinsJobExecutor$Companion();
    }
    return JenkinsJobExecutor$Companion_instance;
  }
  JenkinsJobExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JenkinsJobExecutor',
    interfaces: [JobExecutor]
  };
  function JobExecutor() {
  }
  JobExecutor.prototype.trigger_7817gb$ = function (jobUrl, jobName, body, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompleteness, verbose, callback$default) {
    if (verbose === void 0)
      verbose = true;
    return callback$default ? callback$default(jobUrl, jobName, body, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompleteness, verbose) : this.trigger_7817gb$$default(jobUrl, jobName, body, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompleteness, verbose);
  };
  JobExecutor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JobExecutor',
    interfaces: []
  };
  function Menu() {
    Menu$Companion_getInstance();
    this.publisher_0 = null;
    this.simulation_0 = false;
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(this.settingsButton_0, Menu_init$lambda);
    addClickEventListener(elementById('config_close'), Menu_init$lambda_0);
  }
  Object.defineProperty(Menu.prototype, 'userButton_0', {
    get: function () {
      return elementById('user');
    }
  });
  Object.defineProperty(Menu.prototype, 'userIcon_0', {
    get: function () {
      return elementById('user.icon');
    }
  });
  Object.defineProperty(Menu.prototype, 'userName_0', {
    get: function () {
      return elementById('user.name');
    }
  });
  Object.defineProperty(Menu.prototype, 'saveButton_0', {
    get: function () {
      return elementById('save');
    }
  });
  Object.defineProperty(Menu.prototype, 'downloadButton_0', {
    get: function () {
      return elementById('download');
    }
  });
  Object.defineProperty(Menu.prototype, 'dryRunButton_0', {
    get: function () {
      return elementById('dryRun');
    }
  });
  Object.defineProperty(Menu.prototype, 'releaseButton_0', {
    get: function () {
      return elementById('release');
    }
  });
  Object.defineProperty(Menu.prototype, 'exploreButton_0', {
    get: function () {
      return elementById('explore');
    }
  });
  Object.defineProperty(Menu.prototype, 'settingsButton_0', {
    get: function () {
      return elementById('settings');
    }
  });
  Menu.prototype.disableButtonsDueToNoPublishUrl = function () {
    var titleButtons = 'You need to specify publishJob if you want to use other functionality than Download and Explore Release Order.';
    this.disableButtonsDueToNoAuth_puj7f4$(titleButtons, titleButtons + ('\n' + 'An example: ' + window.location + '&publishJob=jobUrl') + '\nwhere you need to replace jobUrl accordingly.');
  };
  Menu.prototype.disableButtonsDueToNoAuth_puj7f4$ = function (titleButtons, info) {
    showInfo(info);
    this.userButton_0.title = titleButtons;
    addClass(this.userButton_0, [Menu$Companion_getInstance().DEACTIVATED_0]);
    this.userName_0.innerText = 'Anonymous';
    this.userIcon_0.innerText = 'error';
    var tmp$;
    tmp$ = listOf([this.saveButton_0, this.dryRunButton_0, this.releaseButton_0]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.disable_0(element, titleButtons);
    }
  };
  Menu.prototype.setVerifiedUser_puj7f4$ = function (username, name) {
    this.userName_0.innerText = name;
    this.userIcon_0.innerText = 'verified_user';
    this.userButton_0.title = 'Logged in as ' + username;
    removeClass(this.userButton_0, [Menu$Companion_getInstance().DEACTIVATED_0]);
  };
  function Menu$initDependencies$lambda(this$Menu) {
    return function (it) {
      if (!hasClass(this$Menu.saveButton_0, Menu$Companion_getInstance().DEACTIVATED_0)) {
        return 'Your changes will be lost, sure you want to leave the page?';
      }
       else if (Gui$Companion_getInstance().getReleaseState() === ReleaseState.InProgress) {
        return 'You might lose state changes if you navigate away from this page, sure you want to proceed?';
      }
       else {
        return null;
      }
    };
  }
  Menu.prototype.initDependencies_xts1bw$ = function (releasePlan, downloader, dependencies, modifiableJson) {
    if (dependencies != null) {
      this.publisher_0 = dependencies.publisher;
    }
    window.onbeforeunload = Menu$initDependencies$lambda(this);
    this.initSaveAndDownloadButton_0(downloader, dependencies);
    this.initRunButtons_0(releasePlan, dependencies, modifiableJson);
    switch (releasePlan.state.name) {
      case 'Ready':
        break;
      case 'InProgress':
        Menu$Companion_getInstance().dispatchReleaseStart_0();
        break;
      case 'Failed':
      case 'Succeeded':
        Menu$Companion_getInstance().dispatchReleaseStart_0();
        Menu$Companion_getInstance().dispatchReleaseEnd_0(releasePlan.state === ReleaseState.Succeeded);
        break;
    }
  };
  function Menu$initSaveAndDownloadButton$lambda$lambda(this$Menu) {
    return function (it) {
      this$Menu.deactivateSaveButton_0();
      return Unit;
    };
  }
  function Menu$initSaveAndDownloadButton$lambda(closure$dependencies, this$Menu) {
    return function () {
      return this$Menu.save_g760o8$(closure$dependencies.jenkinsJobExecutor, true).then(Menu$initSaveAndDownloadButton$lambda$lambda(this$Menu));
    };
  }
  function Menu$initSaveAndDownloadButton$lambda_0(closure$downloader) {
    return function () {
      closure$downloader.download();
      return Unit;
    };
  }
  Menu.prototype.initSaveAndDownloadButton_0 = function (downloader, dependencies) {
    this.deactivateSaveButton_0();
    if (dependencies != null) {
      this.addClickEventListenerIfNotDeactivatedNorDisabled_0(this.saveButton_0, Menu$initSaveAndDownloadButton$lambda(dependencies, this));
    }
    this.downloadButton_0.title = 'Download the release.json';
    removeClass(this.downloadButton_0, [Menu$Companion_getInstance().DEACTIVATED_0]);
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(this.downloadButton_0, Menu$initSaveAndDownloadButton$lambda_0(downloader));
  };
  function Menu$initRunButtons$lambda() {
    return Unit;
  }
  function Menu$initRunButtons$lambda_0(this$Menu, closure$releasePlan, closure$dependencies) {
    return function () {
      this$Menu.simulation_0 = false;
      return this$Menu.triggerRelease_0(closure$releasePlan, closure$dependencies, closure$dependencies.jenkinsJobExecutor);
    };
  }
  function Menu$initRunButtons$lambda$lambda(closure$dependencies, this$Menu) {
    return function (it) {
      this$Menu.publisher_0 = closure$dependencies != null ? closure$dependencies.publisher : null;
      return Unit;
    };
  }
  function Menu$initRunButtons$lambda_1(this$Menu, closure$nonNullDependencies, closure$releasePlan, closure$dependencies) {
    return function () {
      this$Menu.simulation_0 = true;
      this$Menu.publisher_0 = closure$nonNullDependencies.publisher;
      return finally_0(this$Menu.triggerRelease_0(closure$releasePlan, closure$nonNullDependencies, closure$nonNullDependencies.simulatingJobExecutor), Menu$initRunButtons$lambda$lambda(closure$dependencies, this$Menu));
    };
  }
  function Menu$initRunButtons$lambda_2(this$Menu) {
    return function (it) {
      var tmp$;
      tmp$ = listOf([this$Menu.dryRunButton_0, this$Menu.releaseButton_0, this$Menu.exploreButton_0]).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        addClass(element, [Menu$Companion_getInstance().DISABLED_0]);
        element.title = Gui$Companion_getInstance().DISABLED_RELEASE_IN_PROGRESS;
      }
      return Unit;
    };
  }
  function Menu$initRunButtons$lambda_3(this$Menu) {
    return function (success) {
      var tmp$;
      if (success) {
        var tmp$_0;
        tmp$_0 = listOf([this$Menu.dryRunButton_0, this$Menu.releaseButton_0, this$Menu.exploreButton_0]).iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          element.title = Gui$Companion_getInstance().DISABLED_RELEASE_SUCCESS;
        }
        showSuccess('Release ended successfully :) you can now close the window.' + '\nUse a new pipeline for a new release.' + '\nPlease report a bug in case some job failed without us noticing it.');
      }
       else {
        showError('Release ended with failure :(' + '\nAt least one job failed. Check errors, fix them and then you can re-trigger the failed jobs, the pipeline respectively, by clicking on the release button.' + '\n(You might have to delete git tags and remove artifacts if they have already been created).');
        if (this$Menu.simulation_0) {
          tmp$ = to(this$Menu.exploreButton_0, elementById('explore.text'));
        }
         else {
          tmp$ = to(this$Menu.releaseButton_0, elementById('release.text'));
        }
        var tmp$_1 = tmp$;
        var button = tmp$_1.component1()
        , buttonText = tmp$_1.component2();
        buttonText.innerText = 'Re-trigger failed Jobs';
        button.title = 'Continue with the release process by re-triggering previously failed jobs.';
        removeClass(button, [Menu$Companion_getInstance().DISABLED_0]);
      }
      return Unit;
    };
  }
  Menu.prototype.initRunButtons_0 = function (releasePlan, dependencies, modifiableJson) {
    if (dependencies != null) {
      this.addClickEventListenerIfNotDeactivatedNorDisabled_0(this.dryRunButton_0, Menu$initRunButtons$lambda);
      this.activateReleaseButton_0();
      this.addClickEventListenerIfNotDeactivatedNorDisabled_0(this.releaseButton_0, Menu$initRunButtons$lambda_0(this, releasePlan, dependencies));
    }
    this.activateExploreButton_0();
    var jenkinsUrl = 'https://github.com/loewenfels/';
    var nonNullDependencies = dependencies != null ? dependencies : ensureNotNull(App$Companion_getInstance().createDependencies_vgvz8r$(jenkinsUrl, 'https://github.com/loewenfels/dgr-publisher/', new UsernameToken('test', 'test'), modifiableJson, this));
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(this.exploreButton_0, Menu$initRunButtons$lambda_1(this, nonNullDependencies, releasePlan, dependencies));
    Menu$Companion_getInstance().registerForReleaseStartEvent_gbr1zf$(Menu$initRunButtons$lambda_2(this));
    Menu$Companion_getInstance().registerForReleaseEndEvent_y8twos$(Menu$initRunButtons$lambda_3(this));
  };
  function Menu$triggerRelease$lambda(result) {
    Menu$Companion_getInstance().dispatchReleaseEnd_0(result);
    return Unit;
  }
  function Menu$triggerRelease$lambda_0(t) {
    Menu$Companion_getInstance().dispatchReleaseEnd_0(false);
    throw t;
  }
  Menu.prototype.triggerRelease_0 = function (releasePlan, dependencies, jobExecutor) {
    if (Gui$Companion_getInstance().getReleaseState() === ReleaseState.Failed) {
      this.turnFailedIntoReTrigger_0(releasePlan);
    }
    Menu$Companion_getInstance().dispatchReleaseStart_0();
    return dependencies.releaser.release_4589td$(jobExecutor).then(Menu$triggerRelease$lambda, Menu$triggerRelease$lambda_0);
  };
  Menu.prototype.turnFailedIntoReTrigger_0 = function (releasePlan) {
    var $receiver = releasePlan.iterator();
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = element.commands.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
        var commandState = Gui$Companion_getInstance().getCommandState_o8feeo$(element.id, index_0);
        if (commandState === CommandState.Failed) {
          Gui$Companion_getInstance().changeStateOfCommand_q143v3$(element, index_0, CommandState.ReadyToRetrigger, Gui$Companion_getInstance().STATE_READY_TO_RE_TRIGGER);
        }
      }
    }
  };
  function Menu$addClickEventListenerIfNotDeactivatedNorDisabled$lambda(this$addClickEventListenerIfNotDeactivatedNorDisabled, closure$action) {
    return function (it) {
      if (hasClass(this$addClickEventListenerIfNotDeactivatedNorDisabled, Menu$Companion_getInstance().DEACTIVATED_0) || hasClass(this$addClickEventListenerIfNotDeactivatedNorDisabled, Menu$Companion_getInstance().DISABLED_0))
        return Unit;
      return closure$action();
    };
  }
  Menu.prototype.addClickEventListenerIfNotDeactivatedNorDisabled_0 = function ($receiver, action) {
    addClickEventListener($receiver, Menu$addClickEventListenerIfNotDeactivatedNorDisabled$lambda($receiver, action));
  };
  Menu.prototype.disable_0 = function ($receiver, reason) {
    addClass($receiver, [Menu$Companion_getInstance().DISABLED_0]);
    $receiver.title = reason;
  };
  Menu.prototype.isDisabled_0 = function ($receiver) {
    return hasClass($receiver, Menu$Companion_getInstance().DISABLED_0);
  };
  Menu.prototype.deactivate_0 = function ($receiver, reason) {
    if (this.isDisabled_0(this.saveButton_0))
      return;
    addClass($receiver, [Menu$Companion_getInstance().DEACTIVATED_0]);
    setTitleSaveOld($receiver, reason);
  };
  Menu.prototype.deactivateSaveButton_0 = function () {
    this.deactivate_0(this.saveButton_0, 'Nothing to save, no changes were made');
    var tmp$;
    tmp$ = listOf([this.dryRunButton_0, this.releaseButton_0, this.exploreButton_0]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var oldTitle = getOldTitleOrNull(element);
      if (oldTitle != null) {
        element.title = oldTitle;
        removeClass(element, [Menu$Companion_getInstance().DEACTIVATED_0]);
      }
    }
  };
  Menu.prototype.activateSaveButton = function () {
    if (this.isDisabled_0(this.saveButton_0))
      return;
    removeClass(this.saveButton_0, [Menu$Companion_getInstance().DEACTIVATED_0]);
    this.saveButton_0.title = 'Publish changed json file and change location';
    var saveFirst = 'You need to save your changes first.';
    var tmp$;
    tmp$ = listOf([this.dryRunButton_0, this.releaseButton_0, this.exploreButton_0]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.deactivate_0(element, saveFirst);
    }
  };
  Menu.prototype.activateReleaseButton_0 = function () {
    if (this.isDisabled_0(this.releaseButton_0))
      return;
    removeClass(this.releaseButton_0, [Menu$Companion_getInstance().DEACTIVATED_0]);
    this.releaseButton_0.title = 'Start a release based on this release plan.';
  };
  Menu.prototype.activateExploreButton_0 = function () {
    if (this.isDisabled_0(this.exploreButton_0))
      return;
    removeClass(this.exploreButton_0, [Menu$Companion_getInstance().DEACTIVATED_0]);
    this.exploreButton_0.title = 'See in which order the projects are build, actual order may vary due to unequal execution time.';
  };
  function Menu$save$lambda(it) {
    return true;
  }
  Menu.prototype.save_g760o8$ = function (jobExecutor, verbose) {
    var tmp$;
    var publisher = this.publisher_0;
    if (publisher == null) {
      this.deactivateSaveButton_0();
      showThrowableAndThrow(IllegalStateException_init('Save button should not be activate if no publish job url was specified.\nPlease report a bug.'));
    }
    var changed = publisher.applyChanges();
    if (changed) {
      var publishId = getTextField(Gui$Companion_getInstance().RELEASE_ID_HTML_ID).value;
      var newFileName = 'release-' + publishId;
      tmp$ = publisher.publish_lkprpu$(newFileName, verbose, jobExecutor).then(Menu$save$lambda);
    }
     else {
      if (verbose)
        showInfo('Seems like all changes have been reverted manually. Will not save anything.');
      this.deactivateSaveButton_0();
      tmp$ = Promise.resolve(false);
    }
    return tmp$;
  };
  function Menu$Companion() {
    Menu$Companion_instance = this;
    this.DEACTIVATED_0 = 'deactivated';
    this.DISABLED_0 = 'disabled';
    this.EVENT_RELEASE_START_0 = 'release.start';
    this.EVENT_RELEASE_END_0 = 'release.end';
  }
  Menu$Companion.prototype.registerForReleaseStartEvent_gbr1zf$ = function (callback) {
    elementById('menu').addEventListener(Menu$Companion_getInstance().EVENT_RELEASE_START_0, callback);
  };
  function Menu$Companion$registerForReleaseEndEvent$lambda(closure$callback) {
    return function (e) {
      var tmp$, tmp$_0;
      var customEvent = Kotlin.isType(tmp$ = e, CustomEvent) ? tmp$ : throwCCE();
      var success = typeof (tmp$_0 = customEvent.detail) === 'boolean' ? tmp$_0 : throwCCE();
      closure$callback(success);
      return Unit;
    };
  }
  Menu$Companion.prototype.registerForReleaseEndEvent_y8twos$ = function (callback) {
    elementById('menu').addEventListener(Menu$Companion_getInstance().EVENT_RELEASE_END_0, Menu$Companion$registerForReleaseEndEvent$lambda(callback));
  };
  Menu$Companion.prototype.dispatchReleaseStart_0 = function () {
    elementById('menu').dispatchEvent(new Event(this.EVENT_RELEASE_START_0));
  };
  Menu$Companion.prototype.dispatchReleaseEnd_0 = function (success) {
    var tmp$ = elementById('menu');
    var tmp$_0 = this.EVENT_RELEASE_END_0;
    var o = {};
    o['detail'] = success;
    o['bubbles'] = false;
    o['cancelable'] = false;
    o['composed'] = false;
    tmp$.dispatchEvent(new CustomEvent(tmp$_0, o));
  };
  Menu$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Menu$Companion_instance = null;
  function Menu$Companion_getInstance() {
    if (Menu$Companion_instance === null) {
      new Menu$Companion();
    }
    return Menu$Companion_instance;
  }
  function Menu$Dependencies(publisher, releaser, jenkinsJobExecutor, simulatingJobExecutor) {
    this.publisher = publisher;
    this.releaser = releaser;
    this.jenkinsJobExecutor = jenkinsJobExecutor;
    this.simulatingJobExecutor = simulatingJobExecutor;
  }
  Menu$Dependencies.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dependencies',
    interfaces: []
  };
  function Menu_init$lambda() {
    toggleClass(elementById('config'), 'active');
    return Unit;
  }
  function Menu_init$lambda_0(it) {
    return removeClass(elementById('config'), ['active']);
  }
  Menu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Menu',
    interfaces: []
  };
  function ModifiableJson(json) {
    this._json_0 = json;
  }
  Object.defineProperty(ModifiableJson.prototype, 'json', {
    get: function () {
      return this._json_0;
    },
    set: function (value) {
      this._json_0 = value;
    }
  });
  ModifiableJson.prototype.applyChanges = function () {
    var tmp$ = ChangeApplier_getInstance().createReleasePlanJsonWithChanges_61zpoe$(this.json);
    var changed = tmp$.component1()
    , newJson = tmp$.component2();
    this.json = newJson;
    return changed;
  };
  ModifiableJson.prototype.getJsonWithAppliedChanges = function () {
    var newJson = ChangeApplier_getInstance().createReleasePlanJsonWithChanges_61zpoe$(this.json).component2();
    return newJson;
  };
  ModifiableJson.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModifiableJson',
    interfaces: []
  };
  var msgCounter;
  function showStatus(message) {
    elementById('status').innerText = message;
  }
  function showSuccess(message, autoCloseAfterMs) {
    if (autoCloseAfterMs === void 0)
      autoCloseAfterMs = null;
    return showMessageOfType('success', 'check_circle', message, autoCloseAfterMs);
  }
  function showInfo(message, autoCloseAfterMs) {
    if (autoCloseAfterMs === void 0)
      autoCloseAfterMs = null;
    return showMessageOfType('info', 'info_outline', message, autoCloseAfterMs);
  }
  function showWarning(message, autoCloseAfterMs) {
    if (autoCloseAfterMs === void 0)
      autoCloseAfterMs = null;
    return showMessageOfType('warning', 'warning', message, autoCloseAfterMs);
  }
  function showError(message) {
    return showMessageOfType('error', 'error_outline', message, null);
  }
  function showMessageOfType$lambda$lambda$lambda(closure$msgId) {
    return function (it) {
      closeMessage(closure$msgId);
      return Unit;
    };
  }
  function showMessageOfType$lambda$lambda(closure$msgId) {
    return function ($receiver) {
      set_title($receiver, 'close this message');
      var span = getUnderlyingHtmlElement($receiver);
      span.addEventListener('click', showMessageOfType$lambda$lambda$lambda(closure$msgId));
      return Unit;
    };
  }
  function showMessageOfType$lambda$lambda_0(closure$icon) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$icon);
      return Unit;
    };
  }
  function showMessageOfType$lambda$lambda_1(closure$message) {
    return function ($receiver) {
      convertNewLinesToBrAndParseUrls($receiver, closure$message);
      return Unit;
    };
  }
  function showMessageOfType$lambda$lambda_2(closure$msgId) {
    return function () {
      closeMessage(closure$msgId);
      return Unit;
    };
  }
  function showMessageOfType$lambda(closure$icon, closure$message, closure$autoCloseAfterMs) {
    return function ($receiver) {
      var tmp$;
      var msgId = 'msg' + (tmp$ = msgCounter, msgCounter = tmp$ + 1 | 0, tmp$);
      set_id($receiver, msgId);
      span($receiver, 'close', showMessageOfType$lambda$lambda(msgId));
      i($receiver, 'material-icons', showMessageOfType$lambda$lambda_0(closure$icon));
      div_0($receiver, 'text', showMessageOfType$lambda$lambda_1(closure$message));
      if (closure$autoCloseAfterMs != null) {
        window.setTimeout(showMessageOfType$lambda$lambda_2(msgId), closure$autoCloseAfterMs);
      }
      return Unit;
    };
  }
  function showMessageOfType(type, icon, message, autoCloseAfterMs) {
    var messages = elementById('messages');
    var div = div_1(get_create(document), type, showMessageOfType$lambda(icon, message, autoCloseAfterMs));
    var hideMessagesButton = elementById(Gui$Companion_getInstance().HIDE_MESSAGES_HTML_ID);
    messages.insertBefore(div, hideMessagesButton.nextSibling);
    return div;
  }
  function closeMessage(msgId) {
    elementById(msgId).remove();
  }
  function showThrowableAndThrow(t) {
    showThrowable(t);
    throw t;
  }
  function showThrowable(t) {
    showError(turnThrowableIntoMessage(t));
  }
  function turnThrowableIntoMessage(t) {
    var sb = new StringBuilder();
    appendThrowable(sb, t);
    var cause = t.cause;
    while (cause != null) {
      appendThrowable(sb.append_gw00v9$('\n\nCause: '), cause);
      cause = cause.cause;
    }
    return sb.toString();
  }
  function appendThrowable($receiver, t) {
    var tmp$;
    var stack = typeof (tmp$ = t.stack) === 'string' ? tmp$ : null;
    if (stack != null) {
      $receiver.append_gw00v9$(stack);
    }
     else {
      $receiver.append_gw00v9$(get_js(Kotlin.getKClassFromExpression(t)).name + ': ' + toString(t.message));
    }
  }
  function convertNewLinesToBrAndParseUrls($receiver, message) {
    var tmp$;
    if (message.length === 0)
      return;
    var messages = split_0(message, ['\n']);
    convertUrlToLinks($receiver, messages.get_za3lpa$(0));
    tmp$ = messages.size;
    for (var i = 1; i < tmp$; i++) {
      get_br($receiver);
      convertUrlToLinks($receiver, messages.get_za3lpa$(i));
    }
  }
  function convertUrlToLinks$lambda(closure$match) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$match.value);
      return Unit;
    };
  }
  function convertUrlToLinks($receiver, message) {
    var matchResult = urlRegex.find_905azu$(message);
    if (matchResult != null) {
      var index = 0;
      do {
        var match = ensureNotNull(matchResult);
        var startIndex = index;
        var endIndex = match.range.start;
        $receiver.unaryPlus_pdl1vz$(message.substring(startIndex, endIndex));
        a($receiver, match.value, void 0, void 0, convertUrlToLinks$lambda(match));
        index = match.range.endInclusive + 1 | 0;
        matchResult = match.next();
      }
       while (matchResult != null);
      var startIndex_0 = index;
      var endIndex_0 = message.length;
      $receiver.unaryPlus_pdl1vz$(message.substring(startIndex_0, endIndex_0));
    }
     else {
      $receiver.unaryPlus_pdl1vz$(message);
    }
  }
  var urlRegex;
  function Publisher(publishJobUrl, modifiableJson) {
    Publisher$Companion_getInstance();
    this.publishJobUrl_0 = publishJobUrl;
    this.modifiableJson_0 = modifiableJson;
  }
  function Publisher$publish$lambda(it) {
    return Promise.resolve(1);
  }
  function Publisher$publish$lambda$lambda(closure$buildNumber) {
    return function (it) {
      return to(closure$buildNumber, it);
    };
  }
  function Publisher$publish$lambda_0(closure$jobExecutor, this$Publisher) {
    return function (f) {
      var crumbWithId = f.component1()
      , buildNumber = f.component2();
      return this$Publisher.extractResultJsonUrl_0(closure$jobExecutor, crumbWithId, this$Publisher.publishJobUrl_0, buildNumber).then(Publisher$publish$lambda$lambda(buildNumber));
    };
  }
  function Publisher$publish$lambda_1(this$Publisher, closure$verbose) {
    return function (f) {
      var buildNumber = f.component1()
      , releaseJsonUrl = f.component2();
      this$Publisher.changeUrlAndReloadOrAddHint_0(this$Publisher.publishJobUrl_0, buildNumber, releaseJsonUrl, closure$verbose);
      return Unit;
    };
  }
  function Publisher$publish$lambda_2(it) {
    changeCursorBackToNormal();
    return Unit;
  }
  Publisher.prototype.publish_lkprpu$ = function (fileName, verbose, jobExecutor) {
    changeCursorToProgress();
    var body = 'fileName=' + fileName + '&json=' + this.modifiableJson_0.json;
    var doNothingPromise = Publisher$publish$lambda;
    return finally_0(jobExecutor.trigger_7817gb$(this.publishJobUrl_0, 'publish release-' + fileName + '.json', body, doNothingPromise, doNothingPromise, 2, 20, verbose).then(Publisher$publish$lambda_0(jobExecutor, this)).then(Publisher$publish$lambda_1(this, verbose)), Publisher$publish$lambda_2);
  };
  function Publisher$extractResultJsonUrl$lambda(closure$jobUrl) {
    return function (e) {
      throw IllegalStateException_init('Could not find the published release.json as artifact.' + ('\n' + 'Job URL: ' + closure$jobUrl) + ('\n' + 'Regex used: ' + Publisher$Companion_getInstance().resultRegex_0.pattern) + ('\n' + 'Content: ' + e.body));
    };
  }
  function Publisher$extractResultJsonUrl$lambda_0(closure$jobUrl, closure$buildNumber) {
    return function (fileName) {
      return closure$jobUrl + closure$buildNumber + '/artifact/' + fileName;
    };
  }
  Publisher.prototype.extractResultJsonUrl_0 = function (jobExecutor, crumbWithId, jobUrl, buildNumber) {
    var xpathUrl = jobUrl + buildNumber + '/api/xml?xpath=//artifact/fileName';
    return jobExecutor.pollAndExtract_x0psdq$(crumbWithId, xpathUrl, Publisher$Companion_getInstance().resultRegex_0, Publisher$extractResultJsonUrl$lambda(jobUrl)).then(Publisher$extractResultJsonUrl$lambda_0(jobUrl, buildNumber));
  };
  function Publisher$changeUrlAndReloadOrAddHint$lambda(closure$url, closure$successMsg) {
    return function () {
      window.location.href = closure$url;
      closure$successMsg.style.display = 'none';
      return Unit;
    };
  }
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  Publisher.prototype.changeUrlAndReloadOrAddHint_0 = function (jobUrl, buildNumber, releaseJsonUrl, verbose) {
    var prefix = window.location.protocol + '//' + window.location.hostname + '/';
    var isOnSameHost = startsWith(jobUrl, prefix);
    if (isOnSameHost) {
      var pipelineUrl = substringBefore_0(window.location.href, 35);
      var relativeJobUrl = substringAfter(jobUrl, prefix);
      var tmp$;
      var count = 0;
      tmp$ = iterator(substringAfter(pipelineUrl, prefix));
      while (tmp$.hasNext()) {
        var element = unboxChar(tmp$.next());
        if (unboxChar(toBoxedChar(element)) === 47) {
          count = count + 1 | 0;
        }
      }
      var numOfChars = count;
      var relativeJsonUrl = repeat('../', numOfChars) + substringAfter(releaseJsonUrl, prefix);
      var url = pipelineUrl + '#' + relativeJsonUrl + App$Companion_getInstance().PUBLISH_JOB + relativeJobUrl;
      if (verbose) {
        var successMsg = showSuccess('Publishing successful, going to change to the new location.' + '\nIf this message does not disappear, then it means the switch failed. Please visit the following url manually:' + ('\n' + url));
        sleep(2000, Publisher$changeUrlAndReloadOrAddHint$lambda(url, successMsg));
      }
       else {
        window.location.href = url;
      }
    }
     else if (verbose) {
      showWarning('Remote publish server detected. We currently do not support to consume remote release.json.' + '\nYou can save changes and it gets published on the remote server, but we will not change the url accordingly. Thus, please do not reload the page after a save because you would load the old state of the release.json' + ('\n' + 'Alternatively you can download the published release.json from here: ' + jobUrl + buildNumber + ' and adjust the url manually.'));
    }
  };
  Publisher.prototype.applyChanges = function () {
    return this.modifiableJson_0.applyChanges();
  };
  function Publisher$Companion() {
    Publisher$Companion_instance = this;
    this.resultRegex_0 = Regex_init('<fileName>([^<]+)<\/fileName>');
  }
  Publisher$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Publisher$Companion_instance = null;
  function Publisher$Companion_getInstance() {
    if (Publisher$Companion_instance === null) {
      new Publisher$Companion();
    }
    return Publisher$Companion_instance;
  }
  Publisher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Publisher',
    interfaces: []
  };
  function Releaser(jenkinsUrl, modifiableJson, menu) {
    this.jenkinsUrl_0 = jenkinsUrl;
    this.modifiableJson_0 = modifiableJson;
    this.menu_0 = menu;
  }
  Releaser.prototype.release_4589td$ = function (jobExecutor) {
    var releasePlan = deserialize(this.modifiableJson_0.json);
    this.checkConfig_0(releasePlan);
    this.warnIfNotOnSameHost_0();
    return this.release_0(jobExecutor, releasePlan);
  };
  Releaser.prototype.checkConfig_0 = function (releasePlan) {
    var config = releasePlan.config;
    this.requireConfigEntry_0(config, ConfigKey.UPDATE_DEPENDENCY_JOB);
    this.requireConfigEntry_0(config, ConfigKey.REMOTE_REGEX);
    this.requireConfigEntry_0(config, ConfigKey.REMOTE_JOB);
    this.requireConfigEntry_0(config, ConfigKey.COMMIT_PREFIX);
  };
  Releaser.prototype.requireConfigEntry_0 = function (config, key) {
    if (!config.containsKey_11rb$(key)) {
      var message = key.toString() + ' is not defined in settings';
      throw IllegalArgumentException_init(message.toString());
    }
  };
  Releaser.prototype.warnIfNotOnSameHost_0 = function () {
    var prefix = window.location.protocol + '//' + window.location.hostname;
    var isOnSameHost = startsWith(this.jenkinsUrl_0, prefix);
    if (!isOnSameHost) {
      showWarning('Remote publish server detected. We currently do not support to consume remote release.json.' + '\nThis means that we publish changes during the release process but will not change the location. Thus, please do not reload the page during the release process.', 8000);
    }
  };
  function Releaser$release$lambda$lambda(closure$newState) {
    return function (t) {
      showThrowable(new Error_0('Could not save the release state (changed to ' + closure$newState + ').' + '\nDo not reload if you want to continue using this pipeline and make sure the publisher works as expected.' + '\nMake a change (e.g. change a Release Version) and try to save (will save the changed release state as well) -- do not forget to revert your change and save again.', t));
      return Unit;
    };
  }
  function Releaser$release$lambda(closure$paramObject, this$Releaser) {
    return function (it) {
      var tmp$ = this$Releaser.checkProjectStates_0(closure$paramObject);
      var result = tmp$.component1()
      , newState = tmp$.component2();
      Gui$Companion_getInstance().changeReleaseState_g1wt0g$(newState);
      this$Releaser.save_0(closure$paramObject, false).catch(Releaser$release$lambda$lambda(newState));
      return result;
    };
  }
  Releaser.prototype.release_0 = function (jobExecutor, releasePlan) {
    var project = releasePlan.getRootProject();
    var paramObject = new Releaser$ParamObject(releasePlan, jobExecutor, project, HashMap_init(), HashMap_init());
    Gui$Companion_getInstance().changeReleaseState_g1wt0g$(ReleaseState.InProgress);
    return this.releaseProject_0(paramObject).then(Releaser$release$lambda(paramObject, this));
  };
  Releaser.prototype.checkProjectStates_0 = function (paramObject) {
    var tmp$;
    var $receiver = paramObject.projectResults.values;
    var all$result;
    all$break: do {
      var tmp$_0;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (!(element === CommandState.Succeeded || Kotlin.isType(element, CommandState$Deactivated) || element === CommandState.Disabled)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    var result = all$result;
    if (result) {
      tmp$ = ReleaseState.Succeeded;
    }
     else {
      this.checkForNoneFailedBug_0(paramObject);
      tmp$ = ReleaseState.Failed;
    }
    var newState = tmp$;
    return to(result, newState);
  };
  function Releaser$checkForNoneFailedBug$lambda(it) {
    return it.key.identifier;
  }
  Releaser.prototype.checkForNoneFailedBug_0 = function (paramObject) {
    var $receiver = paramObject.projectResults.values;
    var none$result;
    none$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        none$result = true;
        break none$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element === CommandState.Failed) {
          none$result = false;
          break none$break;
        }
      }
      none$result = true;
    }
     while (false);
    if (none$result) {
      var $receiver_0 = paramObject.projectResults.entries;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.value !== CommandState.Failed && element_0.value !== CommandState.Succeeded)
          destination.add_11rb$(element_0);
      }
      var erroneousProjects = destination;
      if (!erroneousProjects.isEmpty()) {
        showError('Seems like there is a bug since no command failed but not all are succeeded.' + '\nPlease report a bug, the following projects where affected:' + ('\n' + joinToString(erroneousProjects, '\n', void 0, void 0, void 0, void 0, Releaser$checkForNoneFailedBug$lambda)));
      }
    }
  };
  function Releaser$releaseProject$lambda$lambda(closure$paramObject, this$Releaser) {
    return function (jobResult) {
      if (jobResult !== CommandState.Succeeded)
        return jobResult;
      return this$Releaser.triggerReleaseCommands_0(closure$paramObject);
    };
  }
  function Releaser$releaseProject$lambda$lambda_0(closure$paramObject, this$Releaser) {
    return function (jobResult) {
      var $receiver = closure$paramObject.projectResults;
      var key = closure$paramObject.project.id;
      $receiver.put_xwzc9p$(key, jobResult);
      if (jobResult !== CommandState.Succeeded)
        return jobResult;
      var releasePlan = closure$paramObject.releasePlan;
      var allDependents = releasePlan.collectDependentsInclDependentsOfAllSubmodules_lljhqa$(closure$paramObject.project.id);
      this$Releaser.updateStateWaiting_0(releasePlan, allDependents);
      return this$Releaser.releaseDependentProjects_0(allDependents, releasePlan, closure$paramObject);
    };
  }
  function Releaser$releaseProject$lambda$lambda_1(closure$paramObject) {
    return function (t) {
      var $receiver = closure$paramObject.projectResults;
      var key = closure$paramObject.project.id;
      var value = CommandState.Failed;
      $receiver.put_xwzc9p$(key, value);
      if (t !== Releaser$ReleaseFailure_getInstance())
        throw t;
      return Unit;
    };
  }
  function Releaser$releaseProject$lambda(closure$paramObject, this$Releaser) {
    return function () {
      return this$Releaser.triggerNonReleaseCommandsInclSubmoduleCommands_0(closure$paramObject).then(Releaser$releaseProject$lambda$lambda(closure$paramObject, this$Releaser)).then(Releaser$releaseProject$lambda$lambda_0(closure$paramObject, this$Releaser)).catch(Releaser$releaseProject$lambda$lambda_1(closure$paramObject));
    };
  }
  Releaser.prototype.releaseProject_0 = function (paramObject) {
    return paramObject.withLockForProject_509nd4$(Releaser$releaseProject$lambda(paramObject, this));
  };
  Releaser.prototype.updateStateWaiting_0 = function (releasePlan, allDependents) {
    var tmp$;
    tmp$ = allDependents.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var multiOrSubmoduleId = element.component1()
      , dependentId = element.component2();
      var dependentProject = releasePlan.getProject_lljhqa$(dependentId);
      var tmp$_0, tmp$_0_0;
      var index = 0;
      tmp$_0 = dependentProject.commands.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
        var tmp$_1;
        var state = Gui$Companion_getInstance().getCommandState_o8feeo$(dependentId, index_0);
        if (Kotlin.isType(state, CommandState$Waiting) && state.dependencies.contains_11rb$(multiOrSubmoduleId)) {
          (Kotlin.isType(tmp$_1 = state.dependencies, MutableSet) ? tmp$_1 : throwCCE()).remove_11rb$(multiOrSubmoduleId);
          if (state.dependencies.isEmpty()) {
            Gui$Companion_getInstance().changeStateOfCommand_q143v3$(dependentProject, index_0, CommandState.Ready, Gui$Companion_getInstance().STATE_READY);
          }
        }
      }
    }
  };
  function Releaser$releaseDependentProjects$lambda(closure$releasePlan) {
    return function (f) {
      var dependentId = f.component2();
      return closure$releasePlan.getProject_lljhqa$(dependentId);
    };
  }
  function Releaser$releaseDependentProjects$lambda_0(it) {
    return !it.isSubmodule;
  }
  Releaser.prototype.releaseDependentProjects_0 = function (allDependents, releasePlan, paramObject) {
    var $receiver = toHashSet_0(filter(map(asSequence(allDependents), Releaser$releaseDependentProjects$lambda(releasePlan)), Releaser$releaseDependentProjects$lambda_0));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.releaseProject_0(Releaser$Releaser$ParamObject_init_0(paramObject, item)));
    }
    var promises = destination;
    return Promise.all(copyToArray(promises));
  };
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda(i, t) {
    return to(i, t);
  }
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_0(it) {
    return !Kotlin.isType(it.second, ReleaseCommand);
  }
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_1(closure$paramObject, this$Releaser) {
    return function (f) {
      var index = f.component1()
      , command = f.component2();
      return this$Releaser.createCommandPromise_0(closure$paramObject, command, index);
    };
  }
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda$lambda(closure$paramObject, this$Releaser) {
    return function (submoduleId) {
      return this$Releaser.triggerNonReleaseCommandsInclSubmoduleCommands_0(Releaser$Releaser$ParamObject_init(closure$paramObject, submoduleId));
    };
  }
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_2(closure$paramObject, this$Releaser) {
    return function (jobsResults) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_2 = asSequence(closure$paramObject.releasePlan.getSubmodules_lljhqa$(closure$paramObject.project.id));
      tmp$_0 = Kotlin.isType(tmp$ = jobsResults, MutableList) ? tmp$ : throwCCE();
      tmp$_1 = Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda$lambda(closure$paramObject, this$Releaser);
      return this$Releaser.doSequentially_0(tmp$_2, tmp$_0, tmp$_1);
    };
  }
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_3(jobsResults) {
    var tmp$;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = jobsResults.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element !== CommandState.Succeeded) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$ : CommandState.Succeeded;
  }
  Releaser.prototype.triggerNonReleaseCommandsInclSubmoduleCommands_0 = function (paramObject) {
    return this.doSequentially_0(filter(mapIndexed(asSequence(paramObject.project.commands), Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda), Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_0), ArrayList_init(), Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_1(paramObject, this)).then(Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_2(paramObject, this)).then(Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_3);
  };
  function Releaser$doSequentially$lambda$lambda$lambda(closure$list) {
    return function (jobResult) {
      if (jobResult === CommandState.Failed)
        throw Releaser$ReleaseFailure_getInstance();
      closure$list.add_11rb$(jobResult);
      return closure$list;
    };
  }
  function Releaser$doSequentially$lambda$lambda(closure$action, closure$element) {
    return function (list) {
      return closure$action(closure$element).then(Releaser$doSequentially$lambda$lambda$lambda(list));
    };
  }
  Releaser.prototype.doSequentially_0 = function ($receiver, initial, action) {
    var tmp$;
    var accumulator = Promise.resolve(initial);
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = accumulator.then(Releaser$doSequentially$lambda$lambda(action, element));
    }
    return accumulator;
  };
  function Releaser$triggerReleaseCommands$lambda(i, t) {
    return to(i, t);
  }
  function Releaser$triggerReleaseCommands$lambda_0(it) {
    return Kotlin.isType(it.second, ReleaseCommand);
  }
  function Releaser$triggerReleaseCommands$lambda_1(closure$paramObject, this$Releaser) {
    return function (f) {
      var index = f.component1()
      , command = f.component2();
      return this$Releaser.createCommandPromise_0(closure$paramObject, command, index);
    };
  }
  function Releaser$triggerReleaseCommands$lambda_2(jobsResults) {
    var tmp$;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = jobsResults.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element !== CommandState.Succeeded) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$ : CommandState.Succeeded;
  }
  Releaser.prototype.triggerReleaseCommands_0 = function (paramObject) {
    return this.doSequentially_0(filter(mapIndexed(asSequence(paramObject.project.commands), Releaser$triggerReleaseCommands$lambda), Releaser$triggerReleaseCommands$lambda_0), ArrayList_init(), Releaser$triggerReleaseCommands$lambda_1(paramObject, this)).then(Releaser$triggerReleaseCommands$lambda_2);
  };
  Releaser.prototype.createCommandPromise_0 = function (paramObject, command, index) {
    var tmp$;
    var state = Gui$Companion_getInstance().getCommandState_o8feeo$(paramObject.project.id, index);
    if (state === CommandState.Ready || state === CommandState.ReadyToRetrigger) {
      tmp$ = this.triggerCommand_0(paramObject, command, index);
    }
     else {
      tmp$ = Promise.resolve(state);
    }
    return tmp$;
  };
  Releaser.prototype.triggerCommand_0 = function (paramObject, command, index) {
    var tmp$;
    if (Kotlin.isType(command, JenkinsUpdateDependency))
      tmp$ = this.triggerUpdateDependency_0(paramObject, command, index);
    else if (Kotlin.isType(command, M2ReleaseCommand))
      tmp$ = this.triggerRelease_0(paramObject, command, index);
    else
      throw UnsupportedOperationException_init('We do not (yet) support the command: ' + command);
    return tmp$;
  };
  Releaser.prototype.triggerUpdateDependency_0 = function (paramObject, command, index) {
    var jobUrl = this.jenkinsUrl_0 + '/job/' + paramObject.getConfig_udzor3$(ConfigKey.UPDATE_DEPENDENCY_JOB);
    var jobName = 'update dependency of ' + paramObject.project.id.identifier;
    var params = this.createUpdateDependencyParams_0(paramObject, command);
    return this.triggerJob_0(paramObject, jobUrl, jobName, params, index);
  };
  Releaser.prototype.createUpdateDependencyParams_0 = function (paramObject, command) {
    var tmp$;
    var dependency = paramObject.releasePlan.getProject_lljhqa$(command.projectId);
    var dependencyMavenProjectId = Kotlin.isType(tmp$ = dependency.id, MavenProjectId) ? tmp$ : throwCCE();
    return 'pathToProject=' + paramObject.project.relativePath + ('&groupId=' + dependencyMavenProjectId.groupId) + ('&artifactId=' + dependencyMavenProjectId.artifactId) + ('&newVersion=' + dependency.releaseVersion) + ('&commitPrefix=' + paramObject.getConfig_udzor3$(ConfigKey.COMMIT_PREFIX)) + ('&releaseId=' + paramObject.releasePlan.releaseId);
  };
  Releaser.prototype.triggerRelease_0 = function (paramObject, command, index) {
    var tmp$ = this.determineJobUrlAndParams_0(paramObject, command);
    var jobUrl = tmp$.component1()
    , params = tmp$.component2();
    return this.triggerJob_0(paramObject, jobUrl, 'release ' + paramObject.project.id.identifier, params, index);
  };
  function Releaser$determineJobUrlAndParams$lambda(closure$mavenProjectId) {
    return function (f) {
      var regex = f.component1();
      return regex.matches_6bul2c$(closure$mavenProjectId.identifier);
    };
  }
  function Releaser$determineJobUrlAndParams$lambda_0(it) {
    return it.second;
  }
  Releaser.prototype.determineJobUrlAndParams_0 = function (paramObject, command) {
    var tmp$, tmp$_0;
    var mavenProjectId = Kotlin.isType(tmp$ = paramObject.project.id, MavenProjectId) ? tmp$ : throwCCE();
    var regex = Regex_init(paramObject.getConfig_udzor3$(ConfigKey.REMOTE_REGEX));
    var relevantParams = map(filter(asSequence(paramObject.regexParametersList), Releaser$determineJobUrlAndParams$lambda(mavenProjectId)), Releaser$determineJobUrlAndParams$lambda_0);
    var params = 'releaseVersion=' + paramObject.project.releaseVersion + ('&nextDevVersion=' + command.nextDevVersion);
    var jobName = paramObject.getJobName();
    if (regex.matches_6bul2c$(paramObject.project.id.identifier)) {
      tmp$_0 = to(this.jenkinsUrl_0 + '/job/' + paramObject.getConfig_udzor3$(ConfigKey.REMOTE_JOB), params + '&jobName=' + jobName + '&parameters=' + joinToString_0(relevantParams, ';'));
    }
     else {
      tmp$_0 = to(this.jenkinsUrl_0 + '/job/' + jobName, params + '&' + joinToString_0(relevantParams, '&') + '}');
    }
    return tmp$_0;
  };
  function Releaser$triggerJob$lambda(closure$project, closure$index, closure$paramObject, this$Releaser) {
    return function (queuedItemUrl) {
      Gui$Companion_getInstance().changeStateOfCommandAndAddBuildUrl_85y8bj$(closure$project, closure$index, CommandState.Queueing, Gui$Companion_getInstance().STATE_QUEUEING, queuedItemUrl);
      return this$Releaser.save_0(closure$paramObject);
    };
  }
  function Releaser$triggerJob$lambda_0(closure$project, closure$index, closure$jobUrlWithSlash) {
    return function (buildNumber) {
      Gui$Companion_getInstance().changeStateOfCommandAndAddBuildUrl_85y8bj$(closure$project, closure$index, CommandState.InProgress, Gui$Companion_getInstance().STATE_IN_PROGRESS, closure$jobUrlWithSlash + buildNumber + '/');
      return Promise.resolve(1);
    };
  }
  function Releaser$triggerJob$lambda_1(it) {
    return to(CommandState.Succeeded, Gui$Companion_getInstance().STATE_SUCCEEDED);
  }
  function Releaser$triggerJob$lambda_2(closure$jobName, closure$project, closure$index) {
    return function (t) {
      showThrowable(new Error_0('Job ' + closure$jobName + ' failed', t));
      var id = Gui$Companion_getInstance().getCommandId_xgsuvp$(closure$project, closure$index) + Gui$Companion_getInstance().STATE_SUFFIX;
      var tmp$;
      var elementByIdOrNull$result;
      elementByIdOrNull$break: do {
        var tmp$_0;
        tmp$_0 = document.getElementById(id);
        if (tmp$_0 == null) {
          elementByIdOrNull$result = null;
          break elementByIdOrNull$break;
        }
        var element = tmp$_0;
        if (!Kotlin.isType(element, HTMLAnchorElement)) {
          var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLAnchorElement)).name + '<br/>Found ' + element;
          throw IllegalArgumentException_init(message.toString());
        }
        elementByIdOrNull$result = element;
      }
       while (false);
      tmp$ = elementByIdOrNull$result;
      if (tmp$ == null) {
        throw IllegalStateException_init('no element found for id ' + id + ' (expected type ' + get_js(getKClass(HTMLAnchorElement)).name + ')');
      }
      var state = tmp$;
      var suffix = 'console#footer';
      if (!endsWith(state.href, suffix)) {
        state.href = state.href + suffix;
      }
      return to(CommandState.Failed, Gui$Companion_getInstance().STATE_FAILED);
    };
  }
  function Releaser$triggerJob$lambda_3(closure$project, closure$index) {
    return function (f) {
      var state = f.component1()
      , message = f.component2();
      Gui$Companion_getInstance().changeStateOfCommand_q143v3$(closure$project, closure$index, state, message);
      changeCursorBackToNormal();
      return state;
    };
  }
  Releaser.prototype.triggerJob_0 = function (paramObject, jobUrl, jobName, params, index) {
    var project = paramObject.project;
    console.log('trigger: ' + project.id.identifier + ' / ' + jobUrl + ' / ' + params);
    var jobUrlWithSlash = endsWith(jobUrl, '/') ? jobUrl : jobUrl + '/';
    changeCursorToProgress();
    return paramObject.jobExecutor.trigger_7817gb$(jobUrlWithSlash, jobName, params, Releaser$triggerJob$lambda(project, index, paramObject, this), Releaser$triggerJob$lambda_0(project, index, jobUrlWithSlash), 10, 60 * 15 | 0, false).then(Releaser$triggerJob$lambda_1, Releaser$triggerJob$lambda_2(jobName, project, index)).then(Releaser$triggerJob$lambda_3(project, index));
  };
  function Releaser$save$lambda(closure$paramObject) {
    return function (hadChanges) {
      if (!hadChanges) {
        showWarning('Could not save changes for project ' + closure$paramObject.project.id.identifier + '. Please report a bug.');
      }
      return Unit;
    };
  }
  Releaser.prototype.save_0 = function (paramObject, verbose) {
    if (verbose === void 0)
      verbose = false;
    return this.menu_0.save_g760o8$(paramObject.jobExecutor, verbose).then(Releaser$save$lambda(paramObject));
  };
  function Releaser$ParamObject(releasePlan, jobExecutor, project, locks, projectResults) {
    this.releasePlan = releasePlan;
    this.jobExecutor = jobExecutor;
    this.project = project;
    this.locks = locks;
    this.projectResults = projectResults;
    this.regexParametersList = null;
    this.jobMapping_0 = null;
    this.regexParametersList = this.parseRegexParameters_0();
    this.jobMapping_0 = this.parseJobMapping_0();
  }
  function Releaser$ParamObject$parseRegexParameters$lambda(closure$regexParameters, this$ParamObject) {
    return function (pair) {
      var index = this$ParamObject.checkRegexNotEmpty_0(pair, closure$regexParameters);
      var startIndex = index + 1 | 0;
      var parameters = pair.substring(startIndex);
      this$ParamObject.checkAtLeastOneParameter_0(parameters, closure$regexParameters);
      return to(Regex_init(pair.substring(0, index)), parameters);
    };
  }
  Releaser$ParamObject.prototype.parseRegexParameters_0 = function () {
    var tmp$;
    var regexParameters = this.getConfig_udzor3$(ConfigKey.REGEX_PARAMS);
    if (regexParameters.length > 0) {
      tmp$ = toList_0(map(splitToSequence(regexParameters, ['$']), Releaser$ParamObject$parseRegexParameters$lambda(regexParameters, this)));
    }
     else {
      tmp$ = emptyList();
    }
    return tmp$;
  };
  Releaser$ParamObject.prototype.checkRegexNotEmpty_0 = function (pair, regexParameters) {
    var index = indexOf(pair, 35);
    if (!(index > 0)) {
      var message = 'regex requires at least one character.' + '\n' + 'regexParameters: ' + regexParameters;
      throw IllegalStateException_init(message.toString());
    }
    return index;
  };
  Releaser$ParamObject.prototype.checkAtLeastOneParameter_0 = function (pair, regexParameters) {
    var index = indexOf(pair, 61);
    if (!(index > 0)) {
      var message = 'A regexParam requires at least one parameter.' + '\n' + 'regexParameters: ' + regexParameters;
      throw IllegalStateException_init(message.toString());
    }
    return index;
  };
  Releaser$ParamObject.prototype.parseJobMapping_0 = function () {
    var mapping = this.getConfig_udzor3$(ConfigKey.JOB_MAPPING);
    var $receiver = split_0(mapping, ['|']);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var index = indexOf(element, 61);
      if (!(index > 0)) {
        var message = 'At least one mapping has no groupId and artifactId defined.' + '\n' + 'jobMapping: ' + mapping;
        throw IllegalStateException_init(message.toString());
      }
      var groupIdAndArtifactId = element.substring(0, index);
      if (!contains_0(groupIdAndArtifactId, 58)) {
        var message_0 = 'At least one groupId and artifactId is erroneous, does not contain a `:`.' + '\n' + 'jobMapping: ' + mapping;
        throw IllegalStateException_init(message_0.toString());
      }
      var startIndex = index + 1 | 0;
      var jobName = element.substring(startIndex);
      if (!!isBlank(jobName)) {
        var message_1 = 'At least one groupId and artifactId is erroneous, has no job name defined.' + '\n' + 'jobMapping: ' + mapping;
        throw IllegalStateException_init(message_1.toString());
      }
      var pair = to(groupIdAndArtifactId, jobName);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    return destination;
  };
  Releaser$ParamObject.prototype.getConfig_udzor3$ = function (configKey) {
    var tmp$;
    tmp$ = this.releasePlan.config.get_11rb$(configKey);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('unknown config key: ' + configKey);
    }
    return tmp$;
  };
  function Releaser$ParamObject$withLockForProject$lambda(this$ParamObject, closure$projectId) {
    return function (result) {
      this$ParamObject.locks.remove_11rb$(closure$projectId);
      return result;
    };
  }
  function Releaser$ParamObject$withLockForProject$lambda_0(closure$act, this$ParamObject) {
    return function (it) {
      return this$ParamObject.withLockForProject_509nd4$(closure$act);
    };
  }
  Releaser$ParamObject.prototype.withLockForProject_509nd4$ = function (act) {
    var tmp$;
    var projectId = this.project.id;
    var lock = this.locks.get_11rb$(projectId);
    if (lock == null) {
      var promise = act();
      this.locks.put_xwzc9p$(projectId, promise);
      tmp$ = promise.then(Releaser$ParamObject$withLockForProject$lambda(this, projectId));
    }
     else {
      tmp$ = lock.then(Releaser$ParamObject$withLockForProject$lambda_0(act, this));
    }
    return tmp$;
  };
  Releaser$ParamObject.prototype.getJobName = function () {
    var tmp$, tmp$_0;
    var mavenProjectId = Kotlin.isType(tmp$ = this.project.id, MavenProjectId) ? tmp$ : throwCCE();
    return (tmp$_0 = this.jobMapping_0.get_11rb$(mavenProjectId.identifier)) != null ? tmp$_0 : mavenProjectId.artifactId;
  };
  Releaser$ParamObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParamObject',
    interfaces: []
  };
  function Releaser$Releaser$ParamObject_init(paramObject, newProjectId, $this) {
    $this = $this || Object.create(Releaser$ParamObject.prototype);
    Releaser$Releaser$ParamObject_init_0(paramObject, paramObject.releasePlan.getProject_lljhqa$(newProjectId), $this);
    return $this;
  }
  function Releaser$Releaser$ParamObject_init_0(paramObject, newProject, $this) {
    $this = $this || Object.create(Releaser$ParamObject.prototype);
    Releaser$ParamObject.call($this, paramObject.releasePlan, paramObject.jobExecutor, newProject, paramObject.locks, paramObject.projectResults);
    return $this;
  }
  Releaser$ParamObject.prototype.component1 = function () {
    return this.releasePlan;
  };
  Releaser$ParamObject.prototype.component2 = function () {
    return this.jobExecutor;
  };
  Releaser$ParamObject.prototype.component3 = function () {
    return this.project;
  };
  Releaser$ParamObject.prototype.component4 = function () {
    return this.locks;
  };
  Releaser$ParamObject.prototype.component5 = function () {
    return this.projectResults;
  };
  Releaser$ParamObject.prototype.copy_5ai37b$ = function (releasePlan, jobExecutor, project, locks, projectResults) {
    return new Releaser$ParamObject(releasePlan === void 0 ? this.releasePlan : releasePlan, jobExecutor === void 0 ? this.jobExecutor : jobExecutor, project === void 0 ? this.project : project, locks === void 0 ? this.locks : locks, projectResults === void 0 ? this.projectResults : projectResults);
  };
  Releaser$ParamObject.prototype.toString = function () {
    return 'ParamObject(releasePlan=' + Kotlin.toString(this.releasePlan) + (', jobExecutor=' + Kotlin.toString(this.jobExecutor)) + (', project=' + Kotlin.toString(this.project)) + (', locks=' + Kotlin.toString(this.locks)) + (', projectResults=' + Kotlin.toString(this.projectResults)) + ')';
  };
  Releaser$ParamObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.releasePlan) | 0;
    result = result * 31 + Kotlin.hashCode(this.jobExecutor) | 0;
    result = result * 31 + Kotlin.hashCode(this.project) | 0;
    result = result * 31 + Kotlin.hashCode(this.locks) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectResults) | 0;
    return result;
  };
  Releaser$ParamObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.releasePlan, other.releasePlan) && Kotlin.equals(this.jobExecutor, other.jobExecutor) && Kotlin.equals(this.project, other.project) && Kotlin.equals(this.locks, other.locks) && Kotlin.equals(this.projectResults, other.projectResults)))));
  };
  function Releaser$ReleaseFailure() {
    Releaser$ReleaseFailure_instance = this;
    RuntimeException_init_0(this);
    this.name = 'Releaser$ReleaseFailure';
  }
  Releaser$ReleaseFailure.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReleaseFailure',
    interfaces: [RuntimeException]
  };
  var Releaser$ReleaseFailure_instance = null;
  function Releaser$ReleaseFailure_getInstance() {
    if (Releaser$ReleaseFailure_instance === null) {
      new Releaser$ReleaseFailure();
    }
    return Releaser$ReleaseFailure_instance;
  }
  Releaser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Releaser',
    interfaces: []
  };
  function SimulatingJobExecutor() {
    this.count_0 = 0;
  }
  SimulatingJobExecutor.prototype.pollAndExtract_x0psdq$ = function (crumbWithId, url, regex, errorHandler) {
    return Promise.resolve('simulation-only.json');
  };
  function SimulatingJobExecutor$trigger$lambda(closure$jobQueuedHook, closure$jobUrl) {
    return function () {
      return closure$jobQueuedHook(closure$jobUrl + 'queuingUrl');
    };
  }
  function SimulatingJobExecutor$trigger$lambda$lambda(closure$jobStartedHook) {
    return function () {
      return closure$jobStartedHook(100);
    };
  }
  function SimulatingJobExecutor$trigger$lambda_0(closure$jobStartedHook) {
    return function (it) {
      return sleep(300, SimulatingJobExecutor$trigger$lambda$lambda(closure$jobStartedHook));
    };
  }
  function SimulatingJobExecutor$trigger$lambda$lambda_0(this$SimulatingJobExecutor, closure$jobName) {
    return function () {
      this$SimulatingJobExecutor.count_0 = this$SimulatingJobExecutor.count_0 + 1 | 0;
      if (this$SimulatingJobExecutor.count_0 > failAfter) {
        if (!false) {
          var this$SimulatingJobExecutor_0 = this$SimulatingJobExecutor;
          var closure$jobName_0 = closure$jobName;
          this$SimulatingJobExecutor_0.count_0 = -3;
          var message = 'simulating a failure for ' + closure$jobName_0;
          throw IllegalStateException_init(message.toString());
        }
      }
      return true;
    };
  }
  function SimulatingJobExecutor$trigger$lambda_1(this$SimulatingJobExecutor, closure$jobName) {
    return function (it) {
      return sleep(300, SimulatingJobExecutor$trigger$lambda$lambda_0(this$SimulatingJobExecutor, closure$jobName));
    };
  }
  function SimulatingJobExecutor$trigger$lambda_2(it) {
    return to(new CrumbWithId('Jenkins-Crumb', 'onlySimulation'), 100);
  }
  SimulatingJobExecutor.prototype.trigger_7817gb$$default = function (jobUrl, jobName, body, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompleteness, verbose) {
    return sleep(100, SimulatingJobExecutor$trigger$lambda(jobQueuedHook, jobUrl)).then(SimulatingJobExecutor$trigger$lambda_0(jobStartedHook)).then(SimulatingJobExecutor$trigger$lambda_1(this, jobName)).then(SimulatingJobExecutor$trigger$lambda_2);
  };
  SimulatingJobExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimulatingJobExecutor',
    interfaces: [JobExecutor]
  };
  function Toggler(releasePlan, menu) {
    Toggler$Companion_getInstance();
    this.releasePlan_0 = releasePlan;
    this.menu_0 = menu;
  }
  Toggler.prototype.registerToggleEvents = function () {
    var tmp$;
    tmp$ = this.releasePlan_0.getProjects().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action$break: do {
        var tmp$_0;
        tmp$_0 = this.getAllToggle_0(element);
        if (tmp$_0 == null) {
          break action$break;
        }
        var allToggle = tmp$_0;
        this.registerAllToggleEvents_0(allToggle, element);
        this.registerCommandToggleEvents_0(element);
        this.registerReleaseUncheckEventForDependentsAndSubmodules_0(element);
      }
       while (false);
    }
  };
  Toggler.prototype.getAllToggle_0 = function (project) {
    return this.getAllToggle_1(project.id);
  };
  Toggler.prototype.getAllToggle_1 = function (projectId) {
    var id = projectId.identifier + Gui$Companion_getInstance().DEACTIVATE_ALL_SUFFIX;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$;
      tmp$ = document.getElementById(id);
      if (tmp$ == null) {
        elementByIdOrNull$result = null;
        break elementByIdOrNull$break;
      }
      var element = tmp$;
      if (!Kotlin.isType(element, HTMLInputElement)) {
        var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLInputElement)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      elementByIdOrNull$result = element;
    }
     while (false);
    return elementByIdOrNull$result;
  };
  function Toggler$registerAllToggleEvents$lambda(closure$allToggle, closure$project, this$Toggler) {
    return function (it) {
      var event = closure$allToggle.checked ? Toggler$Companion_getInstance().EVENT_ALL_TOGGLE_CHECKED_0 : Toggler$Companion_getInstance().EVENT_ALL_TOGGLE_UNCHECKED_0;
      this$Toggler.dispatchToggleEvent_0(closure$project, closure$allToggle, event);
      return Unit;
    };
  }
  Toggler.prototype.registerAllToggleEvents_0 = function (allToggle, project) {
    addChangeEventListener(allToggle, Toggler$registerAllToggleEvents$lambda(allToggle, project, this));
    Gui$Companion_getInstance().disableUnDisableForReleaseStartAndEnd_fj1ece$(allToggle, elementById(allToggle.id + Gui$Companion_getInstance().SLIDER_SUFFIX));
  };
  function Toggler$registerCommandToggleEvents$lambda$lambda(closure$project, closure$index, this$Toggler) {
    return function (it) {
      this$Toggler.toggleCommand_0(closure$project, closure$index, Toggler$Companion_getInstance().EVENT_RELEASE_TOGGLE_UNCHECKED_0);
      return Unit;
    };
  }
  function Toggler$registerCommandToggleEvents$lambda$lambda_0(this$Toggler) {
    return function (it) {
      return this$Toggler.releasePlan_0.getProject_lljhqa$(it);
    };
  }
  function Toggler$registerCommandToggleEvents$lambda$lambda$lambda(closure$toggle, this$Toggler) {
    return function (it) {
      this$Toggler.uncheck_0(closure$toggle);
      return Unit;
    };
  }
  function Toggler$registerCommandToggleEvents$lambda$lambda_1(closure$project, closure$index, this$Toggler) {
    return function (it) {
      this$Toggler.toggleCommand_0(closure$project, closure$index, Toggler$Companion_getInstance().EVENT_TOGGLE_UNCHECKED_0);
      return Unit;
    };
  }
  function Toggler$registerCommandToggleEvents$lambda$lambda_2(closure$project, closure$index, this$Toggler, closure$toggle) {
    return function (it) {
      if (this$Toggler.inCorrectStateForToggling_0(closure$project, closure$index)) {
        this$Toggler.check_0(closure$toggle);
      }
      return Unit;
    };
  }
  function Toggler$registerCommandToggleEvents$lambda$lambda_3(closure$project, closure$index, this$Toggler, closure$toggle) {
    return function (it) {
      if (this$Toggler.inCorrectStateForToggling_0(closure$project, closure$index)) {
        this$Toggler.uncheck_0(closure$toggle);
      }
      return Unit;
    };
  }
  Toggler.prototype.registerCommandToggleEvents_0 = function (project) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = project.commands.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var toggle = this.getToggle_0(project, index_0);
      if (Kotlin.isType(item, ReleaseCommand)) {
        addChangeEventListener(toggle, Toggler$registerCommandToggleEvents$lambda$lambda(project, index_0, this));
        this.disallowClickIfNotAllCommandsOrSubmodulesActive_0(project, toggle);
        var projectAndSubmodules = plus(sequenceOf([project]), map(asSequence(this.releasePlan_0.getSubmodules_lljhqa$(project.id)), Toggler$registerCommandToggleEvents$lambda$lambda_0(this)));
        var tmp$_1;
        tmp$_1 = projectAndSubmodules.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          this.registerForProjectEvent_0(element, Toggler$Companion_getInstance().EVENT_TOGGLE_UNCHECKED_0, Toggler$registerCommandToggleEvents$lambda$lambda$lambda(toggle, this));
        }
      }
       else {
        addChangeEventListener(toggle, Toggler$registerCommandToggleEvents$lambda$lambda_1(project, index_0, this));
      }
      Gui$Companion_getInstance().disableUnDisableForReleaseStartAndEnd_fj1ece$(toggle, elementById(toggle.id + Gui$Companion_getInstance().SLIDER_SUFFIX));
      this.registerForProjectEvent_0(project, Toggler$Companion_getInstance().EVENT_ALL_TOGGLE_CHECKED_0, Toggler$registerCommandToggleEvents$lambda$lambda_2(project, index_0, this, toggle));
      this.registerForProjectEvent_0(project, Toggler$Companion_getInstance().EVENT_ALL_TOGGLE_UNCHECKED_0, Toggler$registerCommandToggleEvents$lambda$lambda_3(project, index_0, this, toggle));
    }
  };
  Toggler.prototype.inCorrectStateForToggling_0 = function (project, index) {
    var commandState = Gui$Companion_getInstance().getCommandState_o8feeo$(project.id, index);
    return commandState === CommandState.Ready || Kotlin.isType(commandState, CommandState$Waiting) || Kotlin.isType(commandState, CommandState$Deactivated) || commandState === CommandState.Failed;
  };
  Toggler.prototype.getToggle_0 = function (project, index) {
    var id = Gui$Companion_getInstance().getCommandId_xgsuvp$(project, index) + Gui$Companion_getInstance().DEACTIVATE_SUFFIX;
    var tmp$;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$_0;
      tmp$_0 = document.getElementById(id);
      if (tmp$_0 == null) {
        elementByIdOrNull$result = null;
        break elementByIdOrNull$break;
      }
      var element = tmp$_0;
      if (!Kotlin.isType(element, HTMLInputElement)) {
        var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLInputElement)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      elementByIdOrNull$result = element;
    }
     while (false);
    tmp$ = elementByIdOrNull$result;
    if (tmp$ == null) {
      throw IllegalStateException_init('no element found for id ' + id + ' (expected type ' + get_js(getKClass(HTMLInputElement)).name + ')');
    }
    return tmp$;
  };
  Toggler.prototype.toggleCommand_0 = function (project, index, uncheckedEvent) {
    var tmp$, tmp$_0;
    var toggle = this.getToggle_0(project, index);
    var command = Gui$Companion_getInstance().getCommand_xgsuvp$(project, index);
    var slider = elementById(toggle.id + Gui$Companion_getInstance().SLIDER_SUFFIX);
    var currentTitle = elementById(Gui$Companion_getInstance().getCommandId_xgsuvp$(project, index) + Gui$Companion_getInstance().STATE_SUFFIX).title;
    if (!toggle.checked) {
      this.dispatchToggleEvent_0(project, toggle, uncheckedEvent);
      var previous = Kotlin.isType(tmp$ = command.state, CommandState) ? tmp$ : throwCCE();
      Gui$Companion_getInstance().changeStateOfCommand_q143v3$(project, index, new CommandState$Deactivated(previous), currentTitle);
      slider.title = 'Click to activate command.';
    }
     else {
      var oldState = Kotlin.isType(tmp$_0 = command.state, CommandState$Deactivated) ? tmp$_0 : throwCCE();
      Gui$Companion_getInstance().changeStateOfCommand_q143v3$(project, index, oldState.previous, currentTitle);
      slider.title = 'Click to deactivate command.';
    }
    this.menu_0.activateSaveButton();
  };
  function Toggler$disallowClickIfNotAllCommandsOrSubmodulesActive$lambda(closure$toggle, closure$project, this$Toggler) {
    return function (e) {
      if (closure$toggle.checked && this$Toggler.notAllCommandsOrSubmodulesActive_0(closure$project, closure$toggle)) {
        e.preventDefault();
        showInfo('Cannot reactivate the ReleaseCommand for project ' + closure$project.id.identifier + ' ' + 'because some commands (of submodules) are deactivated.', 4000);
      }
      return Unit;
    };
  }
  Toggler.prototype.disallowClickIfNotAllCommandsOrSubmodulesActive_0 = function (project, toggle) {
    addClickEventListener(toggle, Toggler$disallowClickIfNotAllCommandsOrSubmodulesActive$lambda(toggle, project, this));
  };
  function Toggler$notAllCommandsOrSubmodulesActive$lambda(closure$toggle) {
    return function (it) {
      return !equals(it.id, closure$toggle.id);
    };
  }
  Toggler.prototype.notAllCommandsOrSubmodulesActive_0 = function (project, toggle) {
    return this.notAllCommandsActive_0(project, Toggler$notAllCommandsOrSubmodulesActive$lambda(toggle)) || this.notAllSubmodulesActive_0(project);
  };
  function Toggler$registerReleaseUncheckEventForDependentsAndSubmodules$lambda$lambda$lambda(this$Toggler, closure$dependentId, closure$index) {
    return function (it) {
      this$Toggler.uncheck_0(this$Toggler.getToggle_0(this$Toggler.releasePlan_0.getProject_lljhqa$(closure$dependentId), closure$index));
      return Unit;
    };
  }
  Toggler.prototype.registerReleaseUncheckEventForDependentsAndSubmodules_0 = function (project) {
    if (!project.isSubmodule) {
      var projectIds = this.releasePlan_0.collectDependentsInclDependentsOfAllSubmodules_lljhqa$(project.id);
      var tmp$;
      tmp$ = projectIds.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var projectId = element.component1()
        , dependentId = element.component2();
        var $receiver = this.releasePlan_0.getProject_lljhqa$(dependentId).commands;
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_0, tmp$_0_0;
        var index = 0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination.add_11rb$(to((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0), item));
        }
        var destination_0 = ArrayList_init();
        var tmp$_1;
        tmp$_1 = destination.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          var predicate$result;
          predicate$break: do {
            var command = element_0.component2();
            if (Kotlin.isType(command, ReleaseCommand)) {
              predicate$result = false;
              break predicate$break;
            }
            var state = command.state;
            predicate$result = (Kotlin.isType(state, CommandState$Waiting) && state.dependencies.contains_11rb$(projectId));
          }
           while (false);
          if (predicate$result)
            destination_0.add_11rb$(element_0);
        }
        var tmp$_2;
        tmp$_2 = destination_0.iterator();
        while (tmp$_2.hasNext()) {
          var element_1 = tmp$_2.next();
          var index_0 = element_1.component1();
          this.registerForProjectEvent_0(project, Toggler$Companion_getInstance().EVENT_RELEASE_TOGGLE_UNCHECKED_0, Toggler$registerReleaseUncheckEventForDependentsAndSubmodules$lambda$lambda$lambda(this, dependentId, index_0));
        }
      }
    }
  };
  Toggler.prototype.uncheck_0 = function ($receiver) {
    this.changeChecked_0($receiver, false);
  };
  Toggler.prototype.check_0 = function ($receiver) {
    this.changeChecked_0($receiver, true);
  };
  function Toggler$changeChecked$lambda(closure$toggle) {
    return function (it) {
      return closure$toggle.dispatchEvent(new Event('change'));
    };
  }
  Toggler.prototype.changeChecked_0 = function (toggle, checked) {
    if (toggle.checked === checked)
      return;
    toggle.checked = checked;
    Promise.resolve(0).then(Toggler$changeChecked$lambda(toggle));
  };
  function Toggler$notAllCommandsActive$lambda(closure$project, this$Toggler) {
    return function (index, f) {
      return this$Toggler.getCheckbox_0(closure$project.id.identifier, index);
    };
  }
  Toggler.prototype.notAllCommandsActive_0 = function (project, predicate) {
    var $receiver = filter(mapIndexed(asSequence(project.commands), Toggler$notAllCommandsActive$lambda(project, this)), predicate);
    var any$result;
    any$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!element.checked) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  function Toggler$notAllSubmodulesActive$lambda$lambda(it) {
    return true;
  }
  Toggler.prototype.notAllSubmodulesActive_0 = function (project) {
    var $receiver = this.releasePlan_0.getSubmodules_lljhqa$(project.id);
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var submodulesHasCommands = document.getElementById(this.getDeactivateAllId_0(project.id)) != null;
        if (submodulesHasCommands && this.notAllCommandsActive_0(this.releasePlan_0.getProject_lljhqa$(element), Toggler$notAllSubmodulesActive$lambda$lambda)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  Toggler.prototype.getDeactivateAllId_0 = function (projectId) {
    return projectId.identifier + Gui$Companion_getInstance().DEACTIVATE_ALL_SUFFIX;
  };
  Toggler.prototype.getCheckbox_0 = function (identifier, index) {
    return getCheckbox(identifier + ':' + index + Gui$Companion_getInstance().DEACTIVATE_SUFFIX);
  };
  Toggler.prototype.dispatchToggleEvent_0 = function (project, toggle, event) {
    var tmp$ = this.projectElement_0(project);
    var o = {};
    o['detail'] = toggle;
    o['bubbles'] = false;
    o['cancelable'] = false;
    o['composed'] = false;
    tmp$.dispatchEvent(new CustomEvent(event, o));
  };
  Toggler.prototype.registerForProjectEvent_0 = function (project, event, callback) {
    this.projectElement_0(project).addEventListener(event, callback);
  };
  Toggler.prototype.projectElement_0 = function (project) {
    return elementById(project.id.identifier);
  };
  function Toggler$Companion() {
    Toggler$Companion_instance = this;
    this.EVENT_TOGGLE_UNCHECKED_0 = 'toggle.unchecked';
    this.EVENT_RELEASE_TOGGLE_UNCHECKED_0 = 'release.toggle.unchecked';
    this.EVENT_ALL_TOGGLE_CHECKED_0 = 'all.toggle.checked';
    this.EVENT_ALL_TOGGLE_UNCHECKED_0 = 'all.toggle.unchecked';
  }
  Toggler$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Toggler$Companion_instance = null;
  function Toggler$Companion_getInstance() {
    if (Toggler$Companion_instance === null) {
      new Toggler$Companion();
    }
    return Toggler$Companion_instance;
  }
  Toggler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Toggler',
    interfaces: []
  };
  function sleep$lambda(closure$ms) {
    return function (resolve, f) {
      window.setTimeout(resolve, closure$ms);
      return Unit;
    };
  }
  function sleep$lambda_0(closure$action) {
    return function (it) {
      return closure$action();
    };
  }
  function sleep(ms, action) {
    var p = new Promise(sleep$lambda(ms));
    return p.then(sleep$lambda_0(action));
  }
  function changeCursorToProgress() {
    ensureNotNull(document.body).style.cursor = 'progress';
  }
  function changeCursorBackToNormal() {
    ensureNotNull(document.body).style.cursor = 'default';
  }
  function finally$lambda(closure$action) {
    return function (it) {
      return closure$action(it);
    };
  }
  function finally$lambda_0(closure$action) {
    return function (t) {
      closure$action(null);
      throw t;
    };
  }
  function finally_0($receiver, action) {
    return $receiver.then(finally$lambda(action)).catch(finally$lambda_0(action));
  }
  function main$lambda(it) {
    return new App();
  }
  function main() {
    window.onload = main$lambda;
  }
  var onlyUsedToCallMain;
  var failAfter;
  Object.defineProperty(App, 'Companion', {
    get: App$Companion_getInstance
  });
  var package$ch = _.ch || (_.ch = {});
  var package$loewenfels = package$ch.loewenfels || (package$ch.loewenfels = {});
  var package$depgraph = package$loewenfels.depgraph || (package$loewenfels.depgraph = {});
  var package$gui = package$depgraph.gui || (package$depgraph.gui = {});
  package$gui.App = App;
  Object.defineProperty(package$gui, 'ChangeApplier', {
    get: ChangeApplier_getInstance
  });
  Object.defineProperty(package$gui, 'MAVEN_PROJECT_ID_8be2vx$', {
    get: function () {
      return MAVEN_PROJECT_ID;
    }
  });
  Object.defineProperty(package$gui, 'JENKINS_MAVEN_RELEASE_PLUGIN_8be2vx$', {
    get: function () {
      return JENKINS_MAVEN_RELEASE_PLUGIN;
    }
  });
  Object.defineProperty(package$gui, 'JENKINS_MULTI_MAVEN_RELEASE_PLUGIN_8be2vx$', {
    get: function () {
      return JENKINS_MULTI_MAVEN_RELEASE_PLUGIN;
    }
  });
  Object.defineProperty(package$gui, 'JENKINS_UPDATE_DEPENDENCY_8be2vx$', {
    get: function () {
      return JENKINS_UPDATE_DEPENDENCY;
    }
  });
  package$gui.deserialize_61zpoe$ = deserialize;
  package$gui.deserializeReleaseState_alav3r$ = deserializeReleaseState;
  package$gui.deserializeProjectId_szevpb$ = deserializeProjectId;
  package$gui.deserializeProjects_alav3r$ = deserializeProjects;
  package$gui.deserializeCommands_8qnrty$ = deserializeCommands;
  package$gui.createJenkinsMavenReleasePlugin_dc558r$ = createJenkinsMavenReleasePlugin;
  package$gui.createJenkinsMultiMavenReleasePlugin_dc558r$ = createJenkinsMultiMavenReleasePlugin;
  package$gui.createJenkinsUpdateDependency_dc558r$ = createJenkinsUpdateDependency;
  package$gui.deserializeCommandState_dc558r$ = deserializeCommandState;
  package$gui.deserializeMapOfProjectIdAndSetProjectId_esfstb$ = deserializeMapOfProjectIdAndSetProjectId;
  package$gui.deserializeConfig_bwh3i6$ = deserializeConfig;
  $$importsForInline$$['dep-graph-releaser-gui'] = _;
  package$gui.elementById_61zpoe$ = elementById;
  package$gui.display_puj7f4$ = display;
  package$gui.getCheckbox_61zpoe$ = getCheckbox;
  package$gui.getCheckboxOrNull_61zpoe$ = getCheckboxOrNull;
  package$gui.getTextField_61zpoe$ = getTextField;
  package$gui.getTextFieldOrNull_61zpoe$ = getTextFieldOrNull;
  package$gui.getInputElementOrNull_puj7f4$ = getInputElementOrNull;
  package$gui.Downloader = Downloader;
  Object.defineProperty(Gui, 'Companion', {
    get: Gui$Companion_getInstance
  });
  package$gui.Gui = Gui;
  package$gui.getUnderlyingHtmlElement_8alqek$ = getUnderlyingHtmlElement;
  package$gui.addClickEventListener_g4c12y$ = addClickEventListener;
  package$gui.addChangeEventListener_g4c12y$ = addChangeEventListener;
  package$gui.toggleClass_9bm2zh$ = toggleClass;
  package$gui.withErrorHandling_f39uuh$ = withErrorHandling;
  package$gui.getOldTitle_y4uc6z$ = getOldTitle;
  package$gui.getOldTitleOrNull_y4uc6z$ = getOldTitleOrNull;
  package$gui.setTitleSaveOld_9bm2zh$ = setTitleSaveOld;
  package$gui.checkStatusOk_7ri4uy$ = checkStatusOk;
  package$gui.checkStatusOkOr403_7ri4uy$ = checkStatusOkOr403;
  package$gui.checkStatusOkOr404_7ri4uy$ = checkStatusOkOr404;
  package$gui.createFetchInitWithCredentials = createFetchInitWithCredentials;
  package$gui.createHeaderWithAuthAndCrumb_rrwa0a$ = createHeaderWithAuthAndCrumb;
  package$gui.addAuthentication_1njwi7$ = addAuthentication;
  package$gui.get_GET_be77oc$ = get_GET;
  package$gui.get_POST_be77oc$ = get_POST;
  package$gui.createRequestInit_jy6nrn$ = createRequestInit;
  package$gui.UsernameToken = UsernameToken;
  package$gui.CrumbWithId = CrumbWithId;
  JenkinsJobExecutor.PollException = JenkinsJobExecutor$PollException;
  Object.defineProperty(JenkinsJobExecutor, 'Companion', {
    get: JenkinsJobExecutor$Companion_getInstance
  });
  package$gui.JenkinsJobExecutor = JenkinsJobExecutor;
  package$gui.JobExecutor = JobExecutor;
  Object.defineProperty(Menu, 'Companion', {
    get: Menu$Companion_getInstance
  });
  Menu.Dependencies = Menu$Dependencies;
  package$gui.Menu = Menu;
  package$gui.ModifiableJson = ModifiableJson;
  package$gui.showStatus_61zpoe$ = showStatus;
  package$gui.showSuccess_4wem9b$ = showSuccess;
  package$gui.showInfo_4wem9b$ = showInfo;
  package$gui.showWarning_4wem9b$ = showWarning;
  package$gui.showError_61zpoe$ = showError;
  package$gui.showThrowableAndThrow_tcv7n7$ = showThrowableAndThrow;
  package$gui.showThrowable_tcv7n7$ = showThrowable;
  package$gui.turnThrowableIntoMessage_tcv7n7$ = turnThrowableIntoMessage;
  Object.defineProperty(Publisher, 'Companion', {
    get: Publisher$Companion_getInstance
  });
  package$gui.Publisher = Publisher;
  package$gui.Releaser = Releaser;
  package$gui.SimulatingJobExecutor = SimulatingJobExecutor;
  Object.defineProperty(Toggler, 'Companion', {
    get: Toggler$Companion_getInstance
  });
  package$gui.Toggler = Toggler;
  package$gui.sleep_xsjjga$ = sleep;
  package$gui.changeCursorToProgress = changeCursorToProgress;
  package$gui.changeCursorBackToNormal = changeCursorBackToNormal;
  package$gui.finally_wus875$ = finally_0;
  _.main = main;
  Object.defineProperty(_, 'onlyUsedToCallMain', {
    get: function () {
      return onlyUsedToCallMain;
    }
  });
  Object.defineProperty(_, 'failAfter', {
    get: function () {
      return failAfter;
    },
    set: function (value) {
      failAfter = value;
    }
  });
  JenkinsJobExecutor.prototype.trigger_7817gb$ = JobExecutor.prototype.trigger_7817gb$;
  SimulatingJobExecutor.prototype.trigger_7817gb$ = JobExecutor.prototype.trigger_7817gb$;
  MAVEN_PROJECT_ID = 'ch.loewenfels.depgraph.data.maven.MavenProjectId';
  JENKINS_MAVEN_RELEASE_PLUGIN = 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMavenReleasePlugin';
  JENKINS_MULTI_MAVEN_RELEASE_PLUGIN = 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMultiMavenReleasePlugin';
  JENKINS_UPDATE_DEPENDENCY = 'ch.loewenfels.depgraph.data.maven.jenkins.JenkinsUpdateDependency';
  msgCounter = 0;
  urlRegex = Regex_init('http(?:s)://[^ ]+');
  onlyUsedToCallMain = main();
  failAfter = 1000;
  Kotlin.defineModule('dep-graph-releaser-gui', _);
  return _;
}));
