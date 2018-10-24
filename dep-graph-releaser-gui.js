(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'dep-graph-releaser-api-js', 'kbox-js', 'dep-graph-releaser-maven-api-js', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('dep-graph-releaser-api-js'), require('kbox-js'), require('dep-graph-releaser-maven-api-js'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    if (typeof this['dep-graph-releaser-api-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'dep-graph-releaser-api-js' was not found. Please, check whether 'dep-graph-releaser-api-js' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    if (typeof this['kbox-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'kbox-js' was not found. Please, check whether 'kbox-js' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    if (typeof this['dep-graph-releaser-maven-api-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'dep-graph-releaser-maven-api-js' was not found. Please, check whether 'dep-graph-releaser-maven-api-js' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'dep-graph-releaser-gui'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'dep-graph-releaser-gui'.");
    }
    root['dep-graph-releaser-gui'] = factory(typeof this['dep-graph-releaser-gui'] === 'undefined' ? {} : this['dep-graph-releaser-gui'], kotlin, this['dep-graph-releaser-api-js'], this['kbox-js'], this['dep-graph-releaser-maven-api-js'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$dep_graph_releaser_api_js, $module$kbox_js, $module$dep_graph_releaser_maven_api_js, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwCCE = Kotlin.throwCCE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Unit = Kotlin.kotlin.Unit;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_j4ogox$;
  var unboxChar = Kotlin.unboxChar;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var ReleaseState = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleaseState;
  var Error_0 = Kotlin.kotlin.Error;
  var CommandState = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.CommandState;
  var CommandState$Deactivated = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.CommandState.Deactivated;
  var getKClass = Kotlin.getKClass;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var trimMargin = Kotlin.kotlin.text.trimMargin_rjktp$;
  var CommandState$Waiting = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.CommandState.Waiting;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var toHashSet = Kotlin.kotlin.sequences.toHashSet_veqyi0$;
  var mapWithIndex = $module$kbox_js.ch.tutteli.kbox.mapWithIndex_veqyi0$;
  var ReleaseCommand = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleaseCommand;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var CommandState$Timeout = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.CommandState.Timeout;
  var JenkinsCommand = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsCommand;
  var substringBefore_0 = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var equals = Kotlin.equals;
  var getCallableRef = Kotlin.getCallableRef;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var Throwable = Error;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var i = $module$kotlinx_html_js.kotlinx.html.i_5g1p9k$;
  var sequenceOf = Kotlin.kotlin.sequences.sequenceOf_i5x0yv$;
  var ConfigKey = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.ConfigKey;
  var generateGitCloneCommands = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.generateGitCloneCommands_z81nd8$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var TypeOfRun = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.TypeOfRun;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var Triple = Kotlin.kotlin.Triple;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var textArea = $module$kotlinx_html_js.kotlinx.html.textArea_b1tfd9$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var set_onKeyUpFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onKeyUpFunction_pszlq2$;
  var textInput = $module$kotlinx_html_js.kotlinx.html.textInput_ap9uf6$;
  var get_br = $module$kotlinx_html_js.kotlinx.html.get_br_6s7ubj$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var code = $module$kotlinx_html_js.kotlinx.html.code_en26pm$;
  var i_0 = $module$kotlinx_html_js.kotlinx.html.js.i_5jry8x$;
  var span_0 = $module$kotlinx_html_js.kotlinx.html.js.span_x24v7w$;
  var p_0 = $module$kotlinx_html_js.kotlinx.html.js.p_qwwequ$;
  var parseRemoteRegex = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.parseRemoteRegex_429wai$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var generateEclipsePsf = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.generateEclipsePsf_xx51qy$;
  var generateGitCloneCommands_0 = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.generateGitCloneCommands_xx51qy$;
  var generateListOfDependentsWithoutSubmoduleAndExcluded = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.generateListOfDependentsWithoutSubmoduleAndExcluded_4w9fpd$;
  var throwUPAE = Kotlin.throwUPAE;
  var toProcessName = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.toProcessName_ncdm8l$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_j4ogox$;
  var indexOf_0 = Kotlin.kotlin.text.indexOf_8eortd$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var split_0 = Kotlin.kotlin.text.split_ip8yn$;
  var ConcurrentModificationException_init = Kotlin.kotlin.ConcurrentModificationException_init_pdl1vj$;
  var a = $module$kotlinx_html_js.kotlinx.html.a_gu26kr$;
  var unsafe = $module$kotlinx_html_js.kotlinx.html.unsafe_vdrn79$;
  var toPeekingIterator = $module$kbox_js.ch.tutteli.kbox.toPeekingIterator_35ci02$;
  var maven = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven;
  var hasNextOnTheSameLevel = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.hasNextOnTheSameLevel_r88oei$;
  var div_1 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var MavenProjectId = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.MavenProjectId;
  var get_simpleNameNonNull = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.get_simpleNameNonNull_lr8r8q$;
  var JenkinsSingleMavenReleaseCommand = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsSingleMavenReleaseCommand;
  var JenkinsMultiMavenReleasePlugin = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsMultiMavenReleasePlugin;
  var JenkinsUpdateDependency = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsUpdateDependency;
  var checkBoxInput = $module$kotlinx_html_js.kotlinx.html.checkBoxInput_ap9uf6$;
  var getToStringRepresentation = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.getToStringRepresentation_s8jyvk$;
  var Project = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.Project;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var asSequence_0 = Kotlin.kotlin.sequences.asSequence_35ci02$;
  var JenkinsNextDevReleaseCommand = $module$dep_graph_releaser_maven_api_js.ch.loewenfels.depgraph.data.maven.jenkins.JenkinsNextDevReleaseCommand;
  var first = Kotlin.kotlin.sequences.first_veqyi0$;
  var wrapFunction = Kotlin.wrapFunction;
  var plus = Kotlin.kotlin.sequences.plus_v0iwhp$;
  var mapIndexed = Kotlin.kotlin.sequences.mapIndexed_b7yuyq$;
  var mapWithIndex_0 = $module$kbox_js.ch.tutteli.kbox.mapWithIndex_7wnvza$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var withIndex = Kotlin.kotlin.sequences.withIndex_veqyi0$;
  var toShort = Kotlin.toShort;
  var regex = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.regex;
  var Exception = Kotlin.kotlin.Exception;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var firstOrNull = Kotlin.kotlin.sequences.firstOrNull_veqyi0$;
  var flatMap = Kotlin.kotlin.sequences.flatMap_49vfel$;
  var joinToString_0 = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var parseRegexParams = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.parseRegexParams_429wai$;
  var parseJobMapping = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.parseJobMapping_429wai$;
  var parseBuildWithParamJobs = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.parseBuildWithParamJobs_429wai$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var CommandStateJson$State = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.serialization.CommandStateJson.State;
  var joinToString_1 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var asSequence_1 = Kotlin.kotlin.collections.asSequence_us0mfu$;
  var toJson = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.serialization.toJson_m86w84$;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var ReleasePlan = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleasePlan;
  var ReleaseState$valueOf = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.ReleaseState.valueOf_61zpoe$;
  var TypeOfRun$valueOf = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.TypeOfRun.valueOf_61zpoe$;
  var fromJson = $module$dep_graph_releaser_api_js.ch.loewenfels.depgraph.data.serialization.fromJson_v4rmea$;
  var toHashSet_0 = Kotlin.kotlin.collections.toHashSet_7wnvza$;
  var take = Kotlin.kotlin.text.take_6ic1pp$;
  Releaser$ReleaseFailure.prototype = Object.create(RuntimeException.prototype);
  Releaser$ReleaseFailure.prototype.constructor = Releaser$ReleaseFailure;
  DryRunJobExecutionDataFactory.prototype = Object.create(BaseJobExecutionDataFactory.prototype);
  DryRunJobExecutionDataFactory.prototype.constructor = DryRunJobExecutionDataFactory;
  JobNotExistingException.prototype = Object.create(IllegalStateException.prototype);
  JobNotExistingException.prototype.constructor = JobNotExistingException;
  JobNotTriggeredException.prototype = Object.create(IllegalStateException.prototype);
  JobNotTriggeredException.prototype.constructor = JobNotTriggeredException;
  PollTimeoutException.prototype = Object.create(RuntimeException.prototype);
  PollTimeoutException.prototype.constructor = PollTimeoutException;
  ReleaseJobExecutionDataFactory.prototype = Object.create(BaseJobExecutionDataFactory.prototype);
  ReleaseJobExecutionDataFactory.prototype.constructor = ReleaseJobExecutionDataFactory;
  RecoveredBuildNumber$Determined.prototype = Object.create(RecoveredBuildNumber.prototype);
  RecoveredBuildNumber$Determined.prototype.constructor = RecoveredBuildNumber$Determined;
  RecoveredBuildNumber$StillQueueing.prototype = Object.create(RecoveredBuildNumber.prototype);
  RecoveredBuildNumber$StillQueueing.prototype.constructor = RecoveredBuildNumber$StillQueueing;
  RecoveredBuildNumber$Undetermined.prototype = Object.create(RecoveredBuildNumber.prototype);
  RecoveredBuildNumber$Undetermined.prototype.constructor = RecoveredBuildNumber$Undetermined;
  function Downloader(modifiableState) {
    Downloader$Companion_getInstance();
    this.modifiableState_0 = modifiableState;
  }
  Downloader.prototype.download = function () {
    var json = this.modifiableState_0.getJsonWithAppliedChanges();
    Downloader$Companion_getInstance().download_puj7f4$('release.json', json);
  };
  function Downloader$Companion() {
    Downloader$Companion_instance = this;
  }
  Downloader$Companion.prototype.download_puj7f4$ = function (fileName, content) {
    var tmp$;
    var a = Kotlin.isType(tmp$ = document.createElement('a'), HTMLElement) ? tmp$ : throwCCE();
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    a.setAttribute('download', fileName);
    a.style.display = 'none';
    var body = get_bodyNonNull(document);
    body.appendChild(a);
    a.click();
    body.removeChild(a);
  };
  Downloader$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Downloader$Companion_instance = null;
  function Downloader$Companion_getInstance() {
    if (Downloader$Companion_instance === null) {
      new Downloader$Companion();
    }
    return Downloader$Companion_instance;
  }
  Downloader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Downloader',
    interfaces: []
  };
  function Publisher(publishJobUrl, modifiableState) {
    Publisher$Companion_getInstance();
    this.publishJobUrl_0 = publishJobUrl;
    this.modifiableState_0 = modifiableState;
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
  Publisher.prototype.publish_1kqjf$ = function (fileName, verbose, jobExecutor) {
    changeCursorToProgress();
    var doNothingPromise = Publisher$publish$lambda;
    var parameters = mapOf([to('fileName', fileName), to('json', this.modifiableState_0.json)]);
    var jobExecutionData = JobExecutionData$Companion_getInstance().buildWithParameters_k99ke9$('publish ' + fileName + '.json', this.publishJobUrl_0, toQueryParameters(parameters), parameters);
    return finally_0(jobExecutor.trigger_gyv2e7$(jobExecutionData, doNothingPromise, doNothingPromise, 2, 60, verbose).then(Publisher$publish$lambda_0(jobExecutor, this)).then(Publisher$publish$lambda_1(this, verbose)), Publisher$publish$lambda_2);
  };
  function Publisher$extractResultJsonUrl$lambda(closure$jobUrl) {
    return function (e) {
      throw IllegalStateException_init('Could not find the published release.json as artifact of the publish job.' + ('\n' + 'Job URL: ' + closure$jobUrl) + ('\n' + 'Regex used: ' + Publisher$Companion_getInstance().resultRegex_0.pattern) + ('\n' + 'Content: ' + e.body));
    };
  }
  function Publisher$extractResultJsonUrl$lambda_0(closure$jobUrl, closure$buildNumber) {
    return function (fileName) {
      return closure$jobUrl + closure$buildNumber + '/artifact/' + fileName;
    };
  }
  Publisher.prototype.extractResultJsonUrl_0 = function (jobExecutor, crumbWithId, jobUrl, buildNumber) {
    var xpathUrl = jobUrl + buildNumber + '/api/xml?xpath=//artifact/fileName';
    return jobExecutor.pollAndExtract_grt11n$(crumbWithId, xpathUrl, Publisher$Companion_getInstance().resultRegex_0, 2, 20, Publisher$extractResultJsonUrl$lambda(jobUrl)).then(Publisher$extractResultJsonUrl$lambda_0(jobUrl, buildNumber));
  };
  function Publisher$changeUrlAndReloadOrAddHint$lambda(closure$url, closure$successMsg) {
    return function () {
      window.location.href = closure$url;
      closure$successMsg.remove();
      return Unit;
    };
  }
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  Publisher.prototype.changeUrlAndReloadOrAddHint_0 = function (jobUrl, buildNumber, releaseJsonUrl, verbose) {
    var prefix = window.location.protocol + '//' + window.location.hostname + '/';
    var isOnSameHost = startsWith(jobUrl, prefix);
    if (isOnSameHost) {
      var pipelineUrl = substringBefore(window.location.href, 35);
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
        var successMsg = Messages$Companion_getInstance().showSuccess_4wem9b$('Publishing successful, going to change to the new location.' + '\nIf this message does not disappear, then it means the switch failed. Please visit the following url manually:' + ('\n' + url));
        sleep(2000, Publisher$changeUrlAndReloadOrAddHint$lambda(url, successMsg));
      }
       else {
        window.location.href = url;
      }
    }
     else if (verbose) {
      Messages$Companion_getInstance().showWarning_4wem9b$('Remote publish server detected. We currently do not support to consume remote release.json.' + '\nYou can save changes and it gets published on the remote server, but we will not change the url accordingly. Thus, please do not reload the page after a save because you would load the old state of the release.json' + ('\n' + 'Alternatively you can download the published release.json from here: ' + jobUrl + buildNumber + ' and adjust the url manually.'));
    }
  };
  Publisher.prototype.applyChanges = function () {
    return this.modifiableState_0.applyChanges();
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
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function Releaser(defaultJenkinsBaseUrl, modifiableState, processStarter) {
    Releaser$Companion_getInstance();
    this.modifiableState_0 = modifiableState;
    this.processStarter_0 = processStarter;
    this.isOnSameHost_0 = false;
    this.additionalTriggers_0 = ArrayList_init_0();
    this.locks_0 = HashMap_init();
    var prefix = window.location.protocol + '//' + window.location.hostname;
    this.isOnSameHost_0 = startsWith(defaultJenkinsBaseUrl, prefix);
  }
  Releaser.prototype.release_q42tl1$ = function (jobExecutor, jobExecutionDataFactory) {
    this.warnIfNotOnSameHost_0();
    var rootProject = this.modifiableState_0.releasePlan.getRootProject();
    var paramObject = this.createParamObject_0(jobExecutor, jobExecutionDataFactory, rootProject);
    return this.release_0(paramObject);
  };
  function Releaser$reProcess$lambda(closure$paramObject) {
    return function (it) {
      return closure$paramObject;
    };
  }
  Releaser.prototype.reProcess_9qcicp$ = function (projectId, jobExecutor, jobExecutionDataFactory) {
    var project = this.modifiableState_0.releasePlan.getProject_lljhqa$(projectId);
    var paramObject = this.createParamObject_0(jobExecutor, jobExecutionDataFactory, project);
    var additionalTrigger = this.releaseProject_0(paramObject).then(Releaser$reProcess$lambda(paramObject));
    this.additionalTriggers_0.add_11rb$(additionalTrigger);
  };
  Releaser.prototype.createParamObject_0 = function (jobExecutor, jobExecutionDataFactory, project) {
    return new Releaser$ParamObject(this.modifiableState_0.releasePlan, jobExecutor, jobExecutionDataFactory, project, HashMap_init());
  };
  Releaser.prototype.warnIfNotOnSameHost_0 = function () {
    if (!this.isOnSameHost_0) {
      Messages$Companion_getInstance().showWarning_4wem9b$('Remote publish server detected. We currently do not support to consume remote release.json.' + '\nThis means that we publish changes during the release process but will not change the location. Thus, please do not reload the page during the release process.', 8000);
    }
  };
  function Releaser$release$lambda(closure$rootParamObject, this$Releaser) {
    return function (it) {
      return this$Releaser.waitForAdditionalTriggers_0(closure$rootParamObject);
    };
  }
  function Releaser$release$lambda$lambda(closure$newState) {
    return function (t) {
      Messages$Companion_getInstance().showThrowable_tcv7n7$(new Error_0('Could not save the release state (changed to ' + closure$newState + ').' + '\nDo not reload if you want to continue using this pipeline and make sure the publisher works as expected.' + '\nMake a change (e.g. change a Release Version) and try to save (will save the changed release state as well) -- do not forget to revert your change and save again.', t));
      return Unit;
    };
  }
  function Releaser$release$lambda_0(this$Releaser) {
    return function (mergedParamObject) {
      var tmp$ = this$Releaser.checkProjectStates_0(mergedParamObject.projectResults);
      var result = tmp$.component1()
      , newState = tmp$.component2();
      Pipeline$Companion_getInstance().changeReleaseState_g1wt0g$(newState);
      this$Releaser.quietSave_0(mergedParamObject, false).catch(Releaser$release$lambda$lambda(newState));
      return result;
    };
  }
  Releaser.prototype.release_0 = function (rootParamObject) {
    if (this.modifiableState_0.releasePlan.state !== ReleaseState.IN_PROGRESS) {
      Pipeline$Companion_getInstance().changeReleaseState_g1wt0g$(ReleaseState.IN_PROGRESS);
    }
    return this.releaseProject_0(rootParamObject).then(Releaser$release$lambda(rootParamObject, this)).then(Releaser$release$lambda_0(this));
  };
  function Releaser$waitForAdditionalTriggers$lambda(closure$rootParamObject, this$Releaser) {
    return function (paramObject) {
      closure$rootParamObject.mergeProjectResults_qcbgcl$(paramObject);
      return this$Releaser.waitForAdditionalTriggers_0(closure$rootParamObject);
    };
  }
  Releaser.prototype.waitForAdditionalTriggers_0 = function (rootParamObject) {
    if (!this.additionalTriggers_0.isEmpty()) {
      return this.additionalTriggers_0.removeAt_za3lpa$(0).then(Releaser$waitForAdditionalTriggers$lambda(rootParamObject, this));
    }
     else {
      return Promise.resolve(rootParamObject);
    }
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  Releaser.prototype.checkProjectStates_0 = function (projectResults) {
    var tmp$;
    var $receiver = projectResults.values;
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
      tmp$ = ReleaseState.SUCCEEDED;
    }
     else {
      this.checkForNotAllCompleteButNoneFailedBug_0(projectResults);
      tmp$ = ReleaseState.FAILED;
    }
    var newState = tmp$;
    return to(result, newState);
  };
  function Releaser$checkForNotAllCompleteButNoneFailedBug$lambda(it) {
    return it.key.identifier;
  }
  Releaser.prototype.checkForNotAllCompleteButNoneFailedBug_0 = function (projectResults) {
    var $receiver = projectResults.values;
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
        if (CommandState.Companion.isFailureState_m86w84$(element)) {
          none$result = false;
          break none$break;
        }
      }
      none$result = true;
    }
     while (false);
    if (none$result) {
      var $receiver_0 = projectResults.entries;
      var destination = ArrayList_init_0();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (!CommandState.Companion.isEndState_m86w84$(element_0.value) && !Kotlin.isType(element_0.value, CommandState$Deactivated) && element_0.value !== CommandState.Disabled)
          destination.add_11rb$(element_0);
      }
      var erroneousProjects = destination;
      if (!erroneousProjects.isEmpty()) {
        Messages$Companion_getInstance().showError_61zpoe$(trimMargin('\n' + '                        |Seems like there is a bug since no command failed but not all commands are in status ' + toString(getKClass(Object.getPrototypeOf(CommandState.Succeeded).constructor).simpleName) + '.' + '\n' + '                        |Please report a bug at ' + GITHUB_NEW_ISSUE + ' - the following projects where affected:' + '\n' + '                        |' + joinToString(erroneousProjects, '\n', void 0, void 0, void 0, void 0, Releaser$checkForNotAllCompleteButNoneFailedBug$lambda) + '\n' + '                    '));
      }
    }
  };
  function Releaser$releaseProject$lambda$lambda(closure$paramObject, this$Releaser) {
    return function (jobResult) {
      return jobResult !== CommandState.Succeeded ? jobResult : this$Releaser.triggerReleaseCommands_0(closure$paramObject);
    };
  }
  function Releaser$releaseProject$lambda$lambda_0(closure$paramObject, this$Releaser) {
    return function (jobResult) {
      var $receiver = closure$paramObject.projectResults;
      var key = closure$paramObject.project.id;
      $receiver.put_xwzc9p$(key, jobResult);
      if (jobResult !== CommandState.Succeeded) {
        return Promise.resolve(jobResult);
      }
       else {
        var releasePlan = closure$paramObject.releasePlan;
        var allDependents = releasePlan.collectDependentsInclDependentsOfAllSubmodules_lljhqa$(closure$paramObject.project.id);
        this$Releaser.updateStateWaiting_0(releasePlan, allDependents);
        return this$Releaser.releaseDependentProjects_0(allDependents, releasePlan, closure$paramObject);
      }
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
    return this.withLockForProject_0(paramObject.project.id, Releaser$releaseProject$lambda(paramObject, this));
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
        var state = Pipeline$Companion_getInstance().getCommandState_o8feeo$(dependentId, index_0);
        if (Kotlin.isType(state, CommandState$Waiting) && state.dependencies.contains_11rb$(multiOrSubmoduleId)) {
          (Kotlin.isType(tmp$_1 = state.dependencies, MutableSet) ? tmp$_1 : throwCCE()).remove_11rb$(multiOrSubmoduleId);
          if (state.dependencies.isEmpty()) {
            Pipeline$Companion_getInstance().changeStateOfCommand_fho14z$(dependentProject, index_0, CommandState.Ready);
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
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Releaser.prototype.releaseDependentProjects_0 = function (allDependents, releasePlan, paramObject) {
    var $receiver = toHashSet(filter(map(asSequence(allDependents), Releaser$releaseDependentProjects$lambda(releasePlan)), Releaser$releaseDependentProjects$lambda_0));
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
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda(it) {
    return !Kotlin.isType(it.value, ReleaseCommand);
  }
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_0(closure$paramObject, this$Releaser) {
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
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_1(closure$paramObject, this$Releaser) {
    return function (jobsResults) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_2 = asSequence(closure$paramObject.releasePlan.getSubmodules_lljhqa$(closure$paramObject.project.id));
      tmp$_0 = Kotlin.isType(tmp$ = jobsResults, MutableList) ? tmp$ : throwCCE();
      tmp$_1 = Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda$lambda(closure$paramObject, this$Releaser);
      return this$Releaser.doSequentiallyWithFailFast_0(tmp$_2, false, tmp$_0, tmp$_1);
    };
  }
  function Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_2(jobsResults) {
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
    return this.doSequentiallyWithFailFast_0(filter(mapWithIndex(asSequence(paramObject.project.commands)), Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda), false, ArrayList_init_0(), Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_0(paramObject, this)).then(Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_1(paramObject, this)).then(Releaser$triggerNonReleaseCommandsInclSubmoduleCommands$lambda_2);
  };
  function Releaser$doSequentiallyWithFailFast$lambda$lambda$lambda(closure$failFast, closure$list) {
    return function (jobResult) {
      if (closure$failFast && CommandState.Companion.isFailureState_m86w84$(jobResult))
        throw Releaser$ReleaseFailure_getInstance();
      closure$list.add_11rb$(jobResult);
      return closure$list;
    };
  }
  function Releaser$doSequentiallyWithFailFast$lambda$lambda(closure$action, closure$element, closure$failFast) {
    return function (list) {
      return closure$action(closure$element).then(Releaser$doSequentiallyWithFailFast$lambda$lambda$lambda(closure$failFast, list));
    };
  }
  Releaser.prototype.doSequentiallyWithFailFast_0 = function ($receiver, failFast, initial, action) {
    var tmp$;
    var accumulator = Promise.resolve(initial);
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = accumulator.then(Releaser$doSequentiallyWithFailFast$lambda$lambda(action, element, failFast));
    }
    return accumulator;
  };
  function Releaser$triggerReleaseCommands$lambda(it) {
    return Kotlin.isType(it.value, ReleaseCommand);
  }
  function Releaser$triggerReleaseCommands$lambda_0(closure$paramObject, this$Releaser) {
    return function (f) {
      var index = f.component1()
      , command = f.component2();
      return this$Releaser.createCommandPromise_0(closure$paramObject, command, index);
    };
  }
  function Releaser$triggerReleaseCommands$lambda_1(jobsResults) {
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
    return this.doSequentiallyWithFailFast_0(filter(mapWithIndex(asSequence(paramObject.project.commands)), Releaser$triggerReleaseCommands$lambda), true, ArrayList_init_0(), Releaser$triggerReleaseCommands$lambda_0(paramObject, this)).then(Releaser$triggerReleaseCommands$lambda_1);
  };
  Releaser.prototype.createCommandPromise_0 = function (paramObject, command, index) {
    var tmp$;
    var state = Pipeline$Companion_getInstance().getCommandState_o8feeo$(paramObject.project.id, index);
    if (Kotlin.isType(state, Object.getPrototypeOf(CommandState.Ready).constructor) || Kotlin.isType(state, Object.getPrototypeOf(CommandState.ReadyToReTrigger).constructor))
      tmp$ = this.triggerCommand_0(paramObject, command, index);
    else if (Kotlin.isType(state, Object.getPrototypeOf(CommandState.StillQueueing).constructor))
      tmp$ = this.rePollQueueing_0(paramObject, command, index);
    else if (Kotlin.isType(state, Object.getPrototypeOf(CommandState.ReadyToRePoll).constructor))
      tmp$ = this.rePollCommand_0(paramObject, command, index);
    else if (Kotlin.isType(state, Object.getPrototypeOf(CommandState.Queueing).constructor) || Kotlin.isType(state, Object.getPrototypeOf(CommandState.InProgress).constructor) || Kotlin.isType(state, Object.getPrototypeOf(CommandState.RePolling).constructor))
      throw IllegalStateException_init('Seems like locking did not work properly, invalid state. Please report a bug https://github.com/loewenfels/dep-graph-releaser/issues/new' + Pipeline$Companion_getInstance().failureDiagnosticsStateTransition_q143v3$(paramObject.project, index, state, Pipeline$Companion_getInstance().getCommandId_xgsuvp$(paramObject.project, index)));
    else if (Kotlin.isType(state, CommandState$Waiting) || Kotlin.isType(state, Object.getPrototypeOf(CommandState.Succeeded).constructor) || Kotlin.isType(state, Object.getPrototypeOf(CommandState.Failed).constructor) || Kotlin.isType(state, CommandState$Timeout) || Kotlin.isType(state, CommandState$Deactivated) || Kotlin.isType(state, Object.getPrototypeOf(CommandState.Disabled).constructor))
      tmp$ = Promise.resolve(state);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  Releaser.prototype.triggerCommand_0 = function (paramObject, command, index) {
    var jobExecutionData = paramObject.jobExecutionDataFactory.create_awtgy4$(paramObject.project, command);
    return this.triggerJob_0(paramObject, index, jobExecutionData);
  };
  Releaser.prototype.rePollQueueing_0 = function (paramObject, command, index) {
    var tmp$;
    if (!Kotlin.isType(command, JenkinsCommand)) {
      throw IllegalStateException_init('We do not know how to re-poll a non Jenkins command.' + '\n' + 'Given Command: ' + command);
    }
    tmp$ = command.buildUrl;
    if (tmp$ == null) {
      throw IllegalStateException_init('We do not know how to re-poll a queued Jenkins job if it does not have a specified build url.' + ('\n' + 'Given Command: ' + command));
    }
    var queuedItemUrl = tmp$;
    var jobExecutionData = paramObject.jobExecutionDataFactory.create_awtgy4$(paramObject.project, command);
    return this.finalizeJob_0(paramObject.jobExecutor.rePollQueueing_aav45s$(jobExecutionData, queuedItemUrl, this.jobStartedHookHandler_0(paramObject, jobExecutionData, index), 5, 900), paramObject, jobExecutionData, index);
  };
  Releaser.prototype.rePollCommand_0 = function (paramObject, command, index) {
    var tmp$;
    if (!Kotlin.isType(command, JenkinsCommand)) {
      throw IllegalStateException_init('We do not know how to re-poll a non Jenkins command.' + '\n' + 'Given Command: ' + command);
    }
    tmp$ = command.buildUrl;
    if (tmp$ == null) {
      throw IllegalStateException_init('We do not know how to re-poll a Jenkins command if it does not have a specified build url.' + ('\n' + 'Given Command: ' + command));
    }
    var buildUrl = tmp$;
    Pipeline$Companion_getInstance().changeStateOfCommandAndAddBuildUrlIfSet_pmaq34$(paramObject.project, index, CommandState.RePolling, buildUrl);
    var jobExecutionData = paramObject.jobExecutionDataFactory.create_awtgy4$(paramObject.project, command);
    var buildNumber = this.extractBuildNumberFromUrl_0(buildUrl, jobExecutionData, paramObject.project, index);
    return this.finalizeJob_0(paramObject.jobExecutor.rePoll_m7tqv$(jobExecutionData, buildNumber, 5, 900), paramObject, jobExecutionData, index);
  };
  Releaser.prototype.extractBuildNumberFromUrl_0 = function (buildUrl, jobExecutionData, project, index) {
    var tmp$;
    try {
      tmp$ = toInt(substringBefore_0(substringAfter(buildUrl, jobExecutionData.jobBaseUrl), '/'));
    }
     catch (e) {
      if (Kotlin.isType(e, NumberFormatException)) {
        var commandTitle = elementById(Pipeline$Companion_getInstance().getCommandId_xgsuvp$(project, index) + Pipeline$Companion_getInstance().TITLE_SUFFIX).innerText;
        throw IllegalStateException_init('Could not extract the buildNumber from the buildUrl, either a corrupt or outdated release.json.' + ('\n' + 'buildUrl: ' + buildUrl) + ('\n' + 'jobBaseUrl: ' + jobExecutionData.jobBaseUrl) + ('\n' + 'Project: ' + project.id.identifier) + ('\n' + 'Command: ' + commandTitle + ' (' + (index + 1 | 0) + '. command)'));
      }
       else
        throw e;
    }
    return tmp$;
  };
  Releaser.prototype.triggerJob_0 = function (paramObject, index, jobExecutionData) {
    return this.finalizeJob_0(paramObject.jobExecutor.trigger_gyv2e7$(jobExecutionData, this.jobQueuedHookHandler_0(paramObject, index), this.jobStartedHookHandler_0(paramObject, jobExecutionData, index), 5, 900, false), paramObject, jobExecutionData, index);
  };
  function Releaser$jobQueuedHookHandler$lambda(closure$paramObject, closure$index, this$Releaser) {
    return function (queuedItemUrl) {
      Pipeline$Companion_getInstance().changeStateOfCommandAndAddBuildUrlIfSet_pmaq34$(closure$paramObject.project, closure$index, CommandState.Queueing, queuedItemUrl);
      return this$Releaser.quietSave_0(closure$paramObject);
    };
  }
  Releaser.prototype.jobQueuedHookHandler_0 = function (paramObject, index) {
    return Releaser$jobQueuedHookHandler$lambda(paramObject, index, this);
  };
  function Releaser$jobStartedHookHandler$lambda(closure$paramObject, closure$index, closure$jobExecutionData) {
    return function (buildNumber) {
      Pipeline$Companion_getInstance().changeStateOfCommandAndAddBuildUrl_q143v3$(closure$paramObject.project, closure$index, CommandState.InProgress, closure$jobExecutionData.jobBaseUrl + buildNumber + '/');
      return Promise.resolve(1);
    };
  }
  Releaser.prototype.jobStartedHookHandler_0 = function (paramObject, jobExecutionData, index) {
    return Releaser$jobStartedHookHandler$lambda(paramObject, index, jobExecutionData);
  };
  function Releaser$finalizeJob$lambda(closure$paramObject, closure$index, this$Releaser) {
    return function (it) {
      return this$Releaser.onJobEndedSuccessFully_0(closure$paramObject.project, closure$index);
    };
  }
  function Releaser$finalizeJob$lambda_0(closure$jobExecutionData, closure$paramObject, closure$index, this$Releaser) {
    return function (t) {
      return this$Releaser.onJobEndedWithFailure_0(t, closure$jobExecutionData, closure$paramObject.project, closure$index);
    };
  }
  Releaser.prototype.finalizeJob_0 = function ($receiver, paramObject, jobExecutionData, index) {
    return $receiver.then(Releaser$finalizeJob$lambda(paramObject, index, this), Releaser$finalizeJob$lambda_0(jobExecutionData, paramObject, index, this));
  };
  Releaser.prototype.onJobEndedSuccessFully_0 = function (project, index) {
    Pipeline$Companion_getInstance().changeStateOfCommand_fho14z$(project, index, CommandState.Succeeded);
    return CommandState.Succeeded;
  };
  Releaser.prototype.onJobEndedWithFailure_0 = function (t, jobExecutionData, project, index) {
    var tmp$, tmp$_0;
    Messages$Companion_getInstance().showThrowable_tcv7n7$(new Error_0('Job ' + jobExecutionData.jobName + ' failed', t));
    var id = Pipeline$Companion_getInstance().getCommandId_xgsuvp$(project, index) + Pipeline$Companion_getInstance().STATE_SUFFIX;
    var tmp$_1;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$_2, tmp$_3;
      tmp$_2 = document.getElementById(id);
      if (tmp$_2 == null) {
        elementByIdOrNull$result = null;
        break elementByIdOrNull$break;
      }
      var element = tmp$_2;
      if (!Kotlin.isType(element, HTMLAnchorElement)) {
        var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLAnchorElement)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      elementByIdOrNull$result = Kotlin.isType(tmp$_3 = element, HTMLAnchorElement) ? tmp$_3 : throwCCE();
    }
     while (false);
    tmp$_1 = elementByIdOrNull$result;
    if (tmp$_1 == null) {
      throw IllegalStateException_init('no element found for id ' + id + ' (expected type ' + get_js(getKClass(HTMLAnchorElement)).name + ')');
    }
    var state = tmp$_1;
    if (Kotlin.isType(t, PollTimeoutException)) {
      var previous = Pipeline$Companion_getInstance().getCommandState_o8feeo$(project.id, index);
      tmp$ = new CommandState$Timeout(previous);
    }
     else {
      tmp$ = CommandState.Failed;
    }
    var errorState = tmp$;
    if (!endsWith(state.href, END_OF_CONSOLE_URL_SUFFIX)) {
      tmp$_0 = state.href + '/' + END_OF_CONSOLE_URL_SUFFIX;
    }
     else {
      tmp$_0 = state.href;
    }
    var href = tmp$_0;
    Pipeline$Companion_getInstance().changeStateOfCommandAndAddBuildUrl_q143v3$(project, index, errorState, href);
    return errorState;
  };
  function Releaser$quietSave$lambda(closure$paramObject) {
    return function (hadChanges) {
      if (!hadChanges) {
        Messages$Companion_getInstance().showWarning_4wem9b$('Could not save changes for project ' + closure$paramObject.project.id.identifier + '.' + '\nPlease report a bug: https://github.com/loewenfels/dep-graph-releaser/issues/new');
      }
      return Unit;
    };
  }
  function Releaser$quietSave$lambda_0(closure$paramObject) {
    return function (it) {
      console.error('save failed for ' + closure$paramObject.project, it);
      return Unit;
    };
  }
  Releaser.prototype.quietSave_0 = function (paramObject, verbose) {
    if (verbose === void 0)
      verbose = false;
    return this.processStarter_0.publishChanges_rt5gs7$(paramObject.jobExecutor, verbose).then(Releaser$quietSave$lambda(paramObject)).catch(Releaser$quietSave$lambda_0(paramObject));
  };
  function Releaser$withLockForProject$lambda(this$Releaser, closure$projectId) {
    return function (result) {
      this$Releaser.locks_0.remove_11rb$(closure$projectId);
      return result;
    };
  }
  function Releaser$withLockForProject$lambda_0(closure$projectId, closure$act, this$Releaser) {
    return function (it) {
      return this$Releaser.withLockForProject_0(closure$projectId, closure$act);
    };
  }
  Releaser.prototype.withLockForProject_0 = function (projectId, act) {
    var tmp$;
    var lock = this.locks_0.get_11rb$(projectId);
    if (lock == null) {
      var promise = act();
      this.locks_0.put_xwzc9p$(projectId, promise);
      tmp$ = promise.then(Releaser$withLockForProject$lambda(this, projectId));
    }
     else {
      tmp$ = lock.then(Releaser$withLockForProject$lambda_0(projectId, act, this));
    }
    return tmp$;
  };
  function Releaser$Companion() {
    Releaser$Companion_instance = this;
    this.POLL_EVERY_SECOND = 5;
    this.MAX_WAIT_FOR_COMPLETION = 900;
  }
  Releaser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Releaser$Companion_instance = null;
  function Releaser$Companion_getInstance() {
    if (Releaser$Companion_instance === null) {
      new Releaser$Companion();
    }
    return Releaser$Companion_instance;
  }
  function Releaser$ParamObject(releasePlan, jobExecutor, jobExecutionDataFactory, project, projectResults) {
    this.releasePlan = releasePlan;
    this.jobExecutor = jobExecutor;
    this.jobExecutionDataFactory = jobExecutionDataFactory;
    this.project = project;
    this.projectResults = projectResults;
  }
  Releaser$ParamObject.prototype.mergeProjectResults_qcbgcl$ = function (paramObject) {
    var tmp$;
    tmp$ = paramObject.projectResults.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var projectId = element.key;
      var state = element.value;
      if (!Kotlin.isType(state, CommandState$Waiting) && this.projectResults.get_11rb$(projectId) !== CommandState.Succeeded) {
        this.projectResults.put_xwzc9p$(projectId, state);
      }
    }
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
    Releaser$ParamObject.call($this, paramObject.releasePlan, paramObject.jobExecutor, paramObject.jobExecutionDataFactory, newProject, paramObject.projectResults);
    return $this;
  }
  Releaser$ParamObject.prototype.component1 = function () {
    return this.releasePlan;
  };
  Releaser$ParamObject.prototype.component2 = function () {
    return this.jobExecutor;
  };
  Releaser$ParamObject.prototype.component3 = function () {
    return this.jobExecutionDataFactory;
  };
  Releaser$ParamObject.prototype.component4 = function () {
    return this.project;
  };
  Releaser$ParamObject.prototype.component5 = function () {
    return this.projectResults;
  };
  Releaser$ParamObject.prototype.copy_u778si$ = function (releasePlan, jobExecutor, jobExecutionDataFactory, project, projectResults) {
    return new Releaser$ParamObject(releasePlan === void 0 ? this.releasePlan : releasePlan, jobExecutor === void 0 ? this.jobExecutor : jobExecutor, jobExecutionDataFactory === void 0 ? this.jobExecutionDataFactory : jobExecutionDataFactory, project === void 0 ? this.project : project, projectResults === void 0 ? this.projectResults : projectResults);
  };
  Releaser$ParamObject.prototype.toString = function () {
    return 'ParamObject(releasePlan=' + Kotlin.toString(this.releasePlan) + (', jobExecutor=' + Kotlin.toString(this.jobExecutor)) + (', jobExecutionDataFactory=' + Kotlin.toString(this.jobExecutionDataFactory)) + (', project=' + Kotlin.toString(this.project)) + (', projectResults=' + Kotlin.toString(this.projectResults)) + ')';
  };
  Releaser$ParamObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.releasePlan) | 0;
    result = result * 31 + Kotlin.hashCode(this.jobExecutor) | 0;
    result = result * 31 + Kotlin.hashCode(this.jobExecutionDataFactory) | 0;
    result = result * 31 + Kotlin.hashCode(this.project) | 0;
    result = result * 31 + Kotlin.hashCode(this.projectResults) | 0;
    return result;
  };
  Releaser$ParamObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.releasePlan, other.releasePlan) && Kotlin.equals(this.jobExecutor, other.jobExecutor) && Kotlin.equals(this.jobExecutionDataFactory, other.jobExecutionDataFactory) && Kotlin.equals(this.project, other.project) && Kotlin.equals(this.projectResults, other.projectResults)))));
  };
  function Releaser$ReleaseFailure() {
    Releaser$ReleaseFailure_instance = this;
    RuntimeException_init(this);
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
  function App() {
    App$Companion_getInstance();
    this.publishJobUrl_0 = null;
    this.defaultJenkinsBaseUrl_0 = null;
    this.menu_0 = null;
    this.eventManager_0 = null;
    var tmp$;
    try {
      Loader_getInstance().updateLoaderToLoadApiToken();
      var jsonUrl = App$Companion_getInstance().determineJsonUrlOrThrow();
      this.publishJobUrl_0 = this.determinePublishJob_0();
      this.defaultJenkinsBaseUrl_0 = (tmp$ = this.publishJobUrl_0) != null ? substringBefore_0(tmp$, '/job/') : null;
      this.eventManager_0 = new EventManager();
      this.menu_0 = new Menu(this.eventManager_0);
      this.start_0(jsonUrl);
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        Messages$Companion_getInstance().showThrowableAndThrow_tcv7n7$(t);
      }
       else
        throw t;
    }
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
    if (!(!contains(possiblyRelativePublishJobUrl, '://') || startsWith(possiblyRelativePublishJobUrl, 'https'))) {
      var message = 'The publish job URL does not start with https but contains ://';
      throw IllegalArgumentException_init(message.toString());
    }
    var port = !isBlank(window.location.port) ? ':' + window.location.port : '';
    var prefix = window.location.protocol + '//' + window.location.hostname + port + '/';
    if (contains(possiblyRelativePublishJobUrl, '://')) {
      tmp$ = possiblyRelativePublishJobUrl;
    }
     else {
      if (!(equals(window.location.protocol, 'https:') || equals(window.location.hostname, 'localhost'))) {
        var message_0 = 'The host needs to use the https protocol if publishJob is defined as relative path.';
        throw IllegalArgumentException_init(message_0.toString());
      }
      tmp$ = prefix + possiblyRelativePublishJobUrl;
    }
    var tmpUrl = tmp$;
    return endsWith(tmpUrl, '/') ? tmpUrl : tmpUrl + '/';
  };
  function App$start$lambda$lambda$lambda(closure$modifiableState) {
    return function (it) {
      return closure$modifiableState;
    };
  }
  function App$start$lambda$lambda(this$App, closure$username, closure$login) {
    return function (f) {
      var body = f.component2();
      var tmp$;
      var modifiableState = new ModifiableState(this$App.defaultJenkinsBaseUrl_0, body);
      var releasePlan = modifiableState.releasePlan;
      if (closure$username != null) {
        Loader_getInstance().updateToLoadOtherTokens();
        tmp$ = closure$login.loadOtherApiTokens_429wai$(releasePlan);
      }
       else {
        tmp$ = Promise.resolve(Unit);
      }
      var promise = tmp$;
      return promise.then(App$start$lambda$lambda$lambda(modifiableState));
    };
  }
  function App$start$lambda$lambda_0(this$App) {
    return function (modifiableState) {
      var tmp$;
      if (modifiableState.releasePlan.state === ReleaseState.IN_PROGRESS) {
        Loader_getInstance().updateToRecoverOngoingProcess();
        tmp$ = recover(modifiableState, this$App.defaultJenkinsBaseUrl_0);
      }
       else {
        tmp$ = Promise.resolve(modifiableState);
      }
      var promise = tmp$;
      return promise;
    };
  }
  function App$start$lambda$lambda_1(this$App) {
    return function (modifiableState) {
      Loader_getInstance().updateToLoadPipeline();
      var processStarter = App$Companion_getInstance().createProcessStarter_1znnzp$(this$App.defaultJenkinsBaseUrl_0, this$App.publishJobUrl_0, modifiableState);
      new ContentContainer(modifiableState, this$App.menu_0, processStarter);
      this$App.menu_0.initDependencies_a2mv01$(new Downloader(modifiableState), modifiableState, processStarter);
      this$App.eventManager_0.recoverEventState_3zm5lf$(processStarter);
      this$App.switchLoaderWithPipeline_0();
      return Notification.requestPermission();
    };
  }
  function App$start$lambda$lambda_2(it) {
    return Messages$Companion_getInstance().showThrowableAndThrow_tcv7n7$(it);
  }
  function App$start$lambda(closure$jsonUrl, this$App, closure$login) {
    return function (username) {
      display('gui', 'block');
      Loader_getInstance().updateToLoadingJson();
      var $receiver = App$Companion_getInstance().loadJsonAndCheckStatus_61zpoe$(closure$jsonUrl).then(App$start$lambda$lambda(this$App, username, closure$login));
      var onFulfilled = App$start$lambda$lambda_0(this$App);
      var $receiver_0 = $receiver.then(onFulfilled);
      var onFulfilled_0 = App$start$lambda$lambda_1(this$App);
      return $receiver_0.then(onFulfilled_0).catch(App$start$lambda$lambda_2);
    };
  }
  App.prototype.start_0 = function (jsonUrl) {
    var login = new Login(this.defaultJenkinsBaseUrl_0);
    login.retrieveUserAndApiToken().then(App$start$lambda(jsonUrl, this, login));
  };
  App.prototype.switchLoaderWithPipeline_0 = function () {
    display('loader', 'none');
    display('pipeline', 'table');
  };
  function App$Companion() {
    App$Companion_instance = this;
    this.PUBLISH_JOB = '&publishJob=';
  }
  App$Companion.prototype.determineJsonUrlOrThrow = function () {
    var tmp$;
    tmp$ = this.determineJsonUrl();
    if (tmp$ == null) {
      throw IllegalStateException_init('You need to specify a release.json.' + ('\n' + 'Append the path with preceding # to the url, e.g., ' + window.location + '#release.json'));
    }
    return tmp$;
  };
  App$Companion.prototype.determineJsonUrl = function () {
    var tmp$;
    if (!equals(window.location.hash, '')) {
      tmp$ = substringBefore_0(window.location.hash.substring(1), '&');
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  };
  function App$Companion$loadJsonAndCheckStatus$lambda(closure$jsonUrl) {
    return function (it) {
      throw new IllegalStateException('Could not load json from url ' + closure$jsonUrl + '.', it);
    };
  }
  App$Companion.prototype.loadJsonAndCheckStatus_61zpoe$ = function (jsonUrl) {
    return this.loadJson_0(jsonUrl).then(getCallableRef('checkStatusOk', function (response) {
      return checkStatusOk(response);
    })).catch(App$Companion$loadJsonAndCheckStatus$lambda(jsonUrl));
  };
  App$Companion.prototype.loadJson_0 = function (jsonUrl) {
    var init = createFetchInitWithCredentials();
    return window.fetch(jsonUrl, init);
  };
  function App$Companion$createProcessStarter$lambda(closure$defaultJenkinsBaseUrl, closure$modifiableState) {
    return function (processStarter) {
      return new Releaser(closure$defaultJenkinsBaseUrl, closure$modifiableState, processStarter);
    };
  }
  App$Companion.prototype.createProcessStarter_1znnzp$ = function (defaultJenkinsBaseUrl, publishJobUrl, modifiableState) {
    var tmp$;
    if (publishJobUrl != null && defaultJenkinsBaseUrl != null) {
      var publisher = new Publisher(publishJobUrl, modifiableState);
      var jenkinsJobExecutor = new JenkinsJobExecutor();
      var simulatingJobExecutor = new SimulatingJobExecutor();
      tmp$ = new ProcessStarter(publisher, jenkinsJobExecutor, simulatingJobExecutor, App$Companion$createProcessStarter$lambda(defaultJenkinsBaseUrl, modifiableState));
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  };
  App$Companion.prototype.givenOrFakeProcessStarter_owuvtf$ = function (processStarter, modifiableState) {
    var tmp$;
    var fakeJenkinsBaseUrl = 'https://github.com/loewenfels/';
    tmp$ = processStarter != null ? processStarter : App$Companion_getInstance().createProcessStarter_1znnzp$(fakeJenkinsBaseUrl, 'https://github.com/loewenfels/dgr-publisher/', modifiableState);
    if (tmp$ == null) {
      throw IllegalStateException_init('faking ProcessStarter failed, was null');
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
  function ContextMenu(modifiableState, menu, processStarter) {
    ContextMenu$Companion_getInstance();
    this.modifiableState_0 = modifiableState;
    this.menu_0 = menu;
    this.processStarter_0 = processStarter;
  }
  function ContextMenu$createProjectContextMenu$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('G');
    return Unit;
  }
  function ContextMenu$createProjectContextMenu$lambda$lambda($receiver) {
    i($receiver, 'material-icons char', ContextMenu$createProjectContextMenu$lambda$lambda$lambda);
    return Unit;
  }
  function ContextMenu$createProjectContextMenu$lambda$lambda_0(this$ContextMenu, closure$project) {
    return function (it) {
      var releasePlan = this$ContextMenu.modifiableState_0.releasePlan;
      var gitCloneCommand = generateGitCloneCommands(sequenceOf([closure$project]), Regex_init(releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_EXCLUDE_PROJECT_REGEX)), Regex_init(releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REGEX)), releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT));
      showOutput('git clone command', gitCloneCommand);
      return Unit;
    };
  }
  function ContextMenu$createProjectContextMenu$lambda(closure$project, this$ContextMenu) {
    return function ($receiver) {
      var idPrefix = closure$project.id.identifier;
      set_id($receiver, this$ContextMenu.getContextMenuId_0(idPrefix));
      this$ContextMenu.contextMenuEntry_0($receiver, idPrefix, 'gitClone', 'Git clone', 'Show the git clone command for this project', ContextMenu$createProjectContextMenu$lambda$lambda, ContextMenu$createProjectContextMenu$lambda$lambda_0(this$ContextMenu, closure$project));
      return Unit;
    };
  }
  ContextMenu.prototype.createProjectContextMenu_7h3q4c$ = function (div_0, project) {
    div(div_0, 'contextMenu', ContextMenu$createProjectContextMenu$lambda(project, this));
  };
  function ContextMenu$createCommandContextMenu$lambda$lambda(closure$project, closure$index, this$ContextMenu) {
    return function (it) {
      this$ContextMenu.transitionToDeactivatedIfOk_0(closure$project, closure$index);
      return Unit;
    };
  }
  function ContextMenu$createCommandContextMenu$lambda$lambda_0(closure$project, closure$index, this$ContextMenu) {
    return function (it) {
      this$ContextMenu.transitionToSucceededIfOk_0(closure$project, closure$index);
      return Unit;
    };
  }
  function ContextMenu$createCommandContextMenu$lambda$lambda_1(closure$project, closure$index, this$ContextMenu) {
    return function (it) {
      this$ContextMenu.transitionToReadyToRePollOrStillQueueing_0(closure$project, closure$index);
      return Unit;
    };
  }
  function ContextMenu$createCommandContextMenu$lambda$lambda_2(closure$project, closure$index, this$ContextMenu) {
    return function (it) {
      this$ContextMenu.reTriggerProject_0(closure$project, closure$index);
      return Unit;
    };
  }
  function ContextMenu$createCommandContextMenu$lambda$lambda_3(closure$project, closure$index, this$ContextMenu) {
    return function (it) {
      this$ContextMenu.transitionToSucceededIfOkAndContinue_0(closure$project, closure$index);
      return Unit;
    };
  }
  function ContextMenu$createCommandContextMenu$lambda$lambda_4(closure$project, closure$index, this$ContextMenu) {
    return function (it) {
      this$ContextMenu.rePollProject_0(closure$project, closure$index);
      return Unit;
    };
  }
  function ContextMenu$createCommandContextMenu$lambda(closure$idPrefix, this$ContextMenu, closure$project, closure$index) {
    return function ($receiver) {
      set_id($receiver, this$ContextMenu.getContextMenuId_0(closure$idPrefix));
      this$ContextMenu.commandContextMenuEntry_0($receiver, closure$idPrefix, ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_DEACTIVATED_0, getKClass(CommandState$Deactivated), ContextMenu$createCommandContextMenu$lambda$lambda(closure$project, closure$index, this$ContextMenu));
      this$ContextMenu.commandContextMenuEntry_0($receiver, closure$idPrefix, ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_SUCCEEDED_0, getKClass(Object.getPrototypeOf(CommandState.Succeeded).constructor), ContextMenu$createCommandContextMenu$lambda$lambda_0(closure$project, closure$index, this$ContextMenu));
      this$ContextMenu.contextMenuEntryWithCssIcon_0($receiver, closure$idPrefix, ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_RE_POLL_0, 'Re-Poll Command', 'Instead of re-triggering, we re-poll an existing job of this command when we resume the whole process.', ContextMenu$createCommandContextMenu$lambda$lambda_1(closure$project, closure$index, this$ContextMenu));
      this$ContextMenu.contextMenuEntryWithCssIcon_0($receiver, closure$idPrefix, ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_RE_TRIGGER_0, 'Re-Trigger Command immediately', 'Continues with the process by re-triggering this command.', ContextMenu$createCommandContextMenu$lambda$lambda_2(closure$project, closure$index, this$ContextMenu));
      this$ContextMenu.contextMenuEntryWithCssIcon_0($receiver, closure$idPrefix, ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_SUCCEEDED_CONTINUE_0, 'Set Command to ' + toString(getKClass(Object.getPrototypeOf(CommandState.Succeeded).constructor).simpleName) + ' and Continue', 'Forcibly sets the state of this command to ' + toString(getKClass(Object.getPrototypeOf(CommandState.Succeeded).constructor).simpleName) + ' and continues with the process. To be used with care.', ContextMenu$createCommandContextMenu$lambda$lambda_3(closure$project, closure$index, this$ContextMenu));
      this$ContextMenu.contextMenuEntryWithCssIcon_0($receiver, closure$idPrefix, ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_RE_POLL_CONTINUE_0, 'Re-Poll Command and Continue', 'Continues with the process by checking periodically again if the command ends.', ContextMenu$createCommandContextMenu$lambda$lambda_4(closure$project, closure$index, this$ContextMenu));
      return Unit;
    };
  }
  ContextMenu.prototype.createCommandContextMenu_1yrdz4$ = function (div_0, idPrefix, project, index) {
    div(div_0, 'contextMenu', ContextMenu$createCommandContextMenu$lambda(idPrefix, this, project, index));
  };
  ContextMenu.prototype.commandContextMenuEntry_0 = function ($receiver, idPrefix, cssClass, commandClass, action) {
    this.contextMenuEntryWithCssIcon_0($receiver, idPrefix, cssClass, 'Set Command to ' + toString(commandClass.simpleName), 'Forcibly sets the state of this command to ' + toString(commandClass.simpleName) + ', to be used with care.', action);
  };
  function ContextMenu$contextMenuEntryWithCssIcon$lambda$lambda($receiver) {
    span($receiver);
    return Unit;
  }
  function ContextMenu$contextMenuEntryWithCssIcon$lambda($receiver) {
    i($receiver, 'material-icons', ContextMenu$contextMenuEntryWithCssIcon$lambda$lambda);
    return Unit;
  }
  ContextMenu.prototype.contextMenuEntryWithCssIcon_0 = function ($receiver, idPrefix, cssClass, text, title, action) {
    this.contextMenuEntry_0($receiver, idPrefix, cssClass, text, title, ContextMenu$contextMenuEntryWithCssIcon$lambda, action);
  };
  function ContextMenu$contextMenuEntry$lambda$lambda(closure$text) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$text);
      return Unit;
    };
  }
  function ContextMenu$contextMenuEntry$lambda$lambda_0(closure$div, closure$action) {
    return function (e) {
      if (!hasClass(closure$div, ContextMenu$Companion_getInstance().CSS_DISABLED_0)) {
        closure$action(e);
      }
      return Unit;
    };
  }
  function ContextMenu$contextMenuEntry$lambda(closure$idPrefix, closure$cssClass, closure$title, closure$iconCreator, closure$text, closure$action) {
    return function ($receiver) {
      set_id($receiver, closure$idPrefix + closure$cssClass);
      set_title($receiver, closure$title);
      closure$iconCreator($receiver);
      span($receiver, void 0, ContextMenu$contextMenuEntry$lambda$lambda(closure$text));
      var div = getUnderlyingHtmlElement($receiver);
      addClickEventListener(div, void 0, ContextMenu$contextMenuEntry$lambda$lambda_0(div, closure$action));
      return Unit;
    };
  }
  ContextMenu.prototype.contextMenuEntry_0 = function ($receiver, idPrefix, cssClass, text, title, iconCreator, action) {
    div($receiver, cssClass, ContextMenu$contextMenuEntry$lambda(idPrefix, cssClass, title, iconCreator, text, action));
  };
  ContextMenu.prototype.transitionToDeactivatedIfOk_0 = function (project, index) {
    var commandState = Pipeline$Companion_getInstance().getCommandState_o8feeo$(project.id, index);
    if (this.isNotInStateToDeactivate_0(commandState))
      return;
    Pipeline$Companion_getInstance().getToggle_xgsuvp$(project, index).click();
  };
  ContextMenu.prototype.isNotInStateToDeactivate_0 = function (commandState) {
    return Kotlin.isType(commandState, CommandState$Deactivated) || commandState === CommandState.Succeeded || commandState === CommandState.Disabled;
  };
  function ContextMenu$transitionToSucceededIfOk$lambda(closure$project, this$ContextMenu) {
    return function (setAllToSucceeded) {
      if (setAllToSucceeded) {
        this$ContextMenu.transitionAllCommandsToSucceeded_0(closure$project);
        this$ContextMenu.menu_0.activateSaveButtonAndDeactivateOthers();
      }
      return Unit;
    };
  }
  ContextMenu.prototype.transitionToSucceededIfOk_0 = function (project, index) {
    if (Kotlin.isType(project.commands.get_za3lpa$(index), ReleaseCommand) && this.notAllOtherCommandsSucceeded_0(project, index)) {
      var succeeded = getKClass(Object.getPrototypeOf(CommandState.Succeeded).constructor).simpleName;
      showDialog('You cannot set this command to the state ' + toString(succeeded) + ' because not all other commands of this project have ' + toString(succeeded) + ' yet.' + '\n\n' + ('Do you want to set all other commands forcibly to ' + toString(succeeded) + ' as well?')).then(ContextMenu$transitionToSucceededIfOk$lambda(project, this));
      return;
    }
    this.transitionToSucceededWithoutCheck_0(project, index);
    this.menu_0.activateSaveButtonAndDeactivateOthers();
  };
  ContextMenu.prototype.transitionAllCommandsToSucceeded_0 = function (project) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = project.commands.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      this.transitionToSucceededWithoutCheck_0(project, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
    }
    var releasePlan = this.modifiableState_0.releasePlan;
    var tmp$_1;
    tmp$_1 = releasePlan.getSubmodules_lljhqa$(project.id).iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      this.transitionAllCommandsToSucceeded_0(releasePlan.getProject_lljhqa$(element));
    }
  };
  function ContextMenu$transitionToSucceededWithoutCheck$lambda(f, f_0) {
    return CommandState.Succeeded;
  }
  ContextMenu.prototype.transitionToSucceededWithoutCheck_0 = function (project, index) {
    this.transitionToSucceededWithCheck_0(project, index, ContextMenu$transitionToSucceededWithoutCheck$lambda);
  };
  ContextMenu.prototype.transitionToSucceededWithCheck_0 = function (project, index, checkStateTransition) {
    Pipeline$Companion_getInstance().changeStateOfCommand_t14kxg$(project, index, CommandState.Succeeded, checkStateTransition);
  };
  ContextMenu.prototype.notAllOtherCommandsSucceeded_0 = function (project, index) {
    var $receiver = mapWithIndex(asSequence(project.commands));
    var any$result;
    any$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var i = element.component1();
        if ((index == null || i !== index) && Pipeline$Companion_getInstance().getCommandState_o8feeo$(project.id, i) !== CommandState.Succeeded) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    var tmp$_0 = any$result;
    if (!tmp$_0) {
      var $receiver_0 = this.modifiableState_0.releasePlan.getSubmodules_lljhqa$(project.id);
      var any$result_0;
      any$break: do {
        var tmp$_1;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          any$result_0 = false;
          break any$break;
        }
        tmp$_1 = $receiver_0.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          if (this.notAllOtherCommandsSucceeded_0(this.modifiableState_0.releasePlan.getProject_lljhqa$(element_0), null)) {
            any$result_0 = true;
            break any$break;
          }
        }
        any$result_0 = false;
      }
       while (false);
      tmp$_0 = any$result_0;
    }
    return tmp$_0;
  };
  function ContextMenu$reTriggerProject$lambda(p, i) {
    Pipeline$Companion_getInstance().changeStateOfCommand_fho14z$(p, i, CommandState.ReadyToReTrigger);
    return Unit;
  }
  ContextMenu.prototype.reTriggerProject_0 = function (project, index) {
    this.reProcessProject_0(project, index, ContextMenu$reTriggerProject$lambda);
  };
  function ContextMenu$transitionToSucceededIfOkAndContinue$lambda$lambda(closure$p, closure$i) {
    return function (previousState, commandId) {
      var value = CommandState.Companion.isFailureState_m86w84$(previousState);
      if (!value) {
        var closure$p_0 = closure$p;
        var closure$i_0 = closure$i;
        var message = 'Cannot set state to ' + toString(getKClass(Object.getPrototypeOf(CommandState.Succeeded).constructor).simpleName) + ' and continue, previous state needs to be a failure state.' + Pipeline$Companion_getInstance().failureDiagnosticsStateTransition_q143v3$(closure$p_0, closure$i_0, previousState, commandId);
        throw IllegalStateException_init(message.toString());
      }
      return CommandState.Succeeded;
    };
  }
  function ContextMenu$transitionToSucceededIfOkAndContinue$lambda(this$ContextMenu) {
    return function (p, i) {
      this$ContextMenu.transitionToSucceededWithCheck_0(p, i, ContextMenu$transitionToSucceededIfOkAndContinue$lambda$lambda(p, i));
      return Unit;
    };
  }
  ContextMenu.prototype.transitionToSucceededIfOkAndContinue_0 = function (project, index) {
    this.reProcessProject_0(project, index, ContextMenu$transitionToSucceededIfOkAndContinue$lambda(this));
  };
  ContextMenu.prototype.rePollProject_0 = function (project, index) {
    this.reProcessProject_0(project, index, getCallableRef('transitionToReadyToRePollOrStillQueueing', function ($receiver, project, index) {
      return $receiver.transitionToReadyToRePollOrStillQueueing_0(project, index), Unit;
    }.bind(null, this)));
  };
  ContextMenu.prototype.transitionToReadyToRePollOrStillQueueing_0 = function (project, index) {
    var tmp$, tmp$_0;
    var currentState = Pipeline$Companion_getInstance().getCommandState_o8feeo$(project.id, index);
    if (!Kotlin.isType(currentState, CommandState$Timeout)) {
      var commandId = Pipeline$Companion_getInstance().getCommandId_xgsuvp$(project, index);
      throw IllegalStateException_init('Cannot re-poll project, current state was not ' + toString(getKClass(CommandState$Timeout).simpleName) + '.' + Pipeline$Companion_getInstance().failureDiagnosticsStateTransition_q143v3$(project, index, currentState, commandId));
    }
    tmp$ = currentState.previous;
    if (equals(tmp$, CommandState.Queueing) || equals(tmp$, CommandState.StillQueueing))
      tmp$_0 = CommandState.StillQueueing;
    else if (equals(tmp$, CommandState.InProgress) || equals(tmp$, CommandState.RePolling))
      tmp$_0 = CommandState.ReadyToRePoll;
    else {
      var commandId_0 = Pipeline$Companion_getInstance().getCommandId_xgsuvp$(project, index);
      throw IllegalStateException_init('state ' + toString(getKClass(CommandState$Timeout).simpleName) + ' with an illegal previous state.' + Pipeline$Companion_getInstance().failureDiagnosticsStateTransition_q143v3$(project, index, currentState, commandId_0));
    }
    var newState = tmp$_0;
    Pipeline$Companion_getInstance().changeStateOfCommand_fho14z$(project, index, newState);
  };
  ContextMenu.prototype.reProcessProject_0 = function (project, index, stateTransition) {
    var tmp$;
    if (Pipeline$Companion_getInstance().getTypeOfRun() === TypeOfRun.EXPLORE) {
      tmp$ = App$Companion_getInstance().givenOrFakeProcessStarter_owuvtf$(this.processStarter_0, this.modifiableState_0);
    }
     else {
      tmp$ = this.processStarter_0;
    }
    var processStarter = tmp$;
    if (processStarter != null) {
      stateTransition(project, index);
      processStarter.reProcess_mzmc0n$(project, this.modifiableState_0);
    }
  };
  function ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda$lambda(f) {
    return Unit;
  }
  function ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda$lambda$lambda(this$ContextMenu) {
    return function (it) {
      this$ContextMenu.hideAllContextMenus_0();
      return Unit;
    };
  }
  function ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda$lambda_0(this$ContextMenu, closure$disableContextEntriesIfNecessary, closure$idPrefix) {
    return function (event) {
      var tmp$, tmp$_0;
      this$ContextMenu.hideAllContextMenus_0();
      closure$disableContextEntriesIfNecessary(closure$idPrefix);
      var contextMenu = elementById(this$ContextMenu.getContextMenuId_0(closure$idPrefix));
      tmp$_0 = Kotlin.isType(tmp$ = event, MouseEvent) ? tmp$ : throwCCE();
      this$ContextMenu.moveContextMenuPosition_0(tmp$_0, contextMenu);
      contextMenu.style.visibility = 'visible';
      window.addEventListener('click', ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda$lambda$lambda(this$ContextMenu), {once: true});
      event.preventDefault();
      event.stopPropagation();
      return Unit;
    };
  }
  function ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda(this$ContextMenu) {
    return function (it) {
      this$ContextMenu.hideAllContextMenus_0();
      return Unit;
    };
  }
  ContextMenu.prototype.setUpOnContextMenuForProjectsAndCommands = function () {
    var $receiver = asList(document.querySelectorAll('.project'));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(new Triple(item, (Kotlin.isType(tmp$_0 = item, HTMLElement) ? tmp$_0 : throwCCE()).id, ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda$lambda));
    }
    var projects = destination;
    var $receiver_0 = asList(document.querySelectorAll('.command > .fields > .toggle'));
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var tmp$_3;
      var toggle = Kotlin.isType(tmp$_3 = item_0.firstChild, HTMLInputElement) ? tmp$_3 : throwCCE();
      var idPrefix = substringBefore_0(toggle.id, Pipeline$Companion_getInstance().DEACTIVATE_SUFFIX);
      tmp$_2.call(destination_0, new Triple(item_0, idPrefix, getCallableRef('disableCommandContextEntriesIfNecessary', function ($receiver, idPrefix) {
        return $receiver.disableCommandContextEntriesIfNecessary_0(idPrefix), Unit;
      }.bind(null, this))));
    }
    var toggleLabels = destination_0;
    var $receiver_1 = asList(document.querySelectorAll('.state'));
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_4;
    tmp$_4 = $receiver_1.iterator();
    while (tmp$_4.hasNext()) {
      var item_1 = tmp$_4.next();
      var tmp$_5 = destination_1.add_11rb$;
      var tmp$_6;
      var a = Kotlin.isType(tmp$_6 = item_1, HTMLAnchorElement) ? tmp$_6 : throwCCE();
      var idPrefix_0 = substringBefore_0(a.id, Pipeline$Companion_getInstance().STATE_SUFFIX);
      tmp$_5.call(destination_1, new Triple(a, idPrefix_0, getCallableRef('disableCommandContextEntriesIfNecessary', function ($receiver, idPrefix) {
        return $receiver.disableCommandContextEntriesIfNecessary_0(idPrefix), Unit;
      }.bind(null, this))));
    }
    var stateIcons = destination_1;
    var tmp$_7;
    tmp$_7 = projects.iterator();
    while (tmp$_7.hasNext()) {
      var element = tmp$_7.next();
      var element_0 = element.component1()
      , idPrefix_1 = element.component2()
      , disableContextEntriesIfNecessary = element.component3();
      element_0.addEventListener('contextmenu', ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda$lambda_0(this, disableContextEntriesIfNecessary, idPrefix_1));
    }
    var tmp$_0_0;
    tmp$_0_0 = toggleLabels.iterator();
    while (tmp$_0_0.hasNext()) {
      var element_0_0 = tmp$_0_0.next();
      var element_1 = element_0_0.component1()
      , idPrefix_2 = element_0_0.component2()
      , disableContextEntriesIfNecessary_0 = element_0_0.component3();
      element_1.addEventListener('contextmenu', ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda$lambda_0(this, disableContextEntriesIfNecessary_0, idPrefix_2));
    }
    var tmp$_1_0;
    tmp$_1_0 = stateIcons.iterator();
    while (tmp$_1_0.hasNext()) {
      var element_1_0 = tmp$_1_0.next();
      var element_2 = element_1_0.component1()
      , idPrefix_3 = element_1_0.component2()
      , disableContextEntriesIfNecessary_1 = element_1_0.component3();
      element_2.addEventListener('contextmenu', ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda$lambda_0(this, disableContextEntriesIfNecessary_1, idPrefix_3));
    }
    window.addEventListener('contextmenu', ContextMenu$setUpOnContextMenuForProjectsAndCommands$lambda(this));
  };
  ContextMenu.prototype.getContextMenuId_0 = function (idPrefix) {
    return idPrefix + ContextMenu$Companion_getInstance().CONTEXT_MENU_SUFFIX_0;
  };
  ContextMenu.prototype.disableCommandContextEntriesIfNecessary_0 = function (idPrefix) {
    var state = Pipeline$Companion_getInstance().getReleaseState();
    var commandState = Pipeline$Companion_getInstance().getCommandState_61zpoe$(idPrefix);
    this.disableOrEnableContextMenuEntry_0(idPrefix + ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_DEACTIVATED_0, state === ReleaseState.IN_PROGRESS || this.isNotInStateToDeactivate_0(commandState), 'Can only deactivate if not in progress or watching (and not already deactivated/disabled/succeeded).');
    this.disableOrEnableContextMenuEntry_0(idPrefix + ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_SUCCEEDED_0, state === ReleaseState.IN_PROGRESS || commandState === CommandState.Succeeded, 'Can only set to Succeeded if not in progress or watching (and not already succeeded).');
    this.disableOrEnableContextMenuEntry_0(idPrefix + ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_RE_POLL_0, state === ReleaseState.IN_PROGRESS || !Kotlin.isType(commandState, CommandState$Timeout), 'Can only set to re-poll if not in progress or watching and in state Timeout.');
    this.disableOrEnableContextMenuEntry_0(idPrefix + ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_RE_TRIGGER_0, state !== ReleaseState.IN_PROGRESS || !CommandState.Companion.isFailureState_m86w84$(commandState), 'Can only re-trigger if previously failed and process state is InProgress.');
    this.disableOrEnableContextMenuEntry_0(idPrefix + ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_SUCCEEDED_CONTINUE_0, state !== ReleaseState.IN_PROGRESS || !CommandState.Companion.isFailureState_m86w84$(commandState), 'Can only set to Succeeded and continue if previously failed and process state is InProgress.');
    this.disableOrEnableContextMenuEntry_0(idPrefix + ContextMenu$Companion_getInstance().CONTEXT_MENU_COMMAND_RE_POLL_CONTINUE_0, state !== ReleaseState.IN_PROGRESS || !Kotlin.isType(commandState, CommandState$Timeout), 'Can only re-poll if previously timed out and process state is InProgress.');
  };
  ContextMenu.prototype.disableOrEnableContextMenuEntry_0 = function (id, disable, disabledReason) {
    var entry = elementById(id);
    if (Pipeline$Companion_getInstance().getReleaseState() === ReleaseState.WATCHING || disable) {
      setTitleSaveOld(entry, disabledReason);
      addClass(entry, [ContextMenu$Companion_getInstance().CSS_DISABLED_0]);
    }
     else {
      var title = getOldTitleOrNull(entry);
      if (title != null) {
        entry.title = title;
      }
      removeClass(entry, [ContextMenu$Companion_getInstance().CSS_DISABLED_0]);
    }
  };
  ContextMenu.prototype.hideAllContextMenus_0 = function () {
    var tmp$;
    tmp$ = asList(document.querySelectorAll('.contextMenu')).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      (Kotlin.isType(tmp$_0 = element, HTMLElement) ? tmp$_0 : throwCCE()).style.visibility = 'hidden';
    }
  };
  ContextMenu.prototype.moveContextMenuPosition_0 = function (event, contextMenu) {
    var tmp$, tmp$_0;
    var menuWidth = contextMenu.offsetWidth;
    var menuHeight = contextMenu.offsetHeight;
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    if (mouseX + menuWidth > get_bodyNonNull(document).clientWidth + window.scrollX) {
      tmp$ = mouseX - menuWidth;
    }
     else {
      tmp$ = mouseX;
    }
    var x = tmp$;
    if (mouseY + menuHeight > get_bodyNonNull(document).clientHeight + window.scrollY) {
      tmp$_0 = mouseY - menuHeight;
    }
     else {
      tmp$_0 = mouseY;
    }
    var y = tmp$_0;
    contextMenu.style.left = x.toString() + 'px';
    contextMenu.style.top = y.toString() + 'px';
  };
  function ContextMenu$Companion() {
    ContextMenu$Companion_instance = this;
    this.CONTEXT_MENU_SUFFIX_0 = ':contextMenu';
    this.CONTEXT_MENU_COMMAND_DEACTIVATED_0 = 'deactivated';
    this.CONTEXT_MENU_COMMAND_SUCCEEDED_0 = 'succeeded';
    this.CONTEXT_MENU_COMMAND_RE_TRIGGER_0 = 'reTrigger';
    this.CONTEXT_MENU_COMMAND_SUCCEEDED_CONTINUE_0 = 'succeededContinue';
    this.CONTEXT_MENU_COMMAND_RE_POLL_0 = 'rePoll';
    this.CONTEXT_MENU_COMMAND_RE_POLL_CONTINUE_0 = 'rePollContinue';
    this.CSS_DISABLED_0 = 'disabled';
  }
  ContextMenu$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ContextMenu$Companion_instance = null;
  function ContextMenu$Companion_getInstance() {
    if (ContextMenu$Companion_instance === null) {
      new ContextMenu$Companion();
    }
    return ContextMenu$Companion_instance;
  }
  ContextMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextMenu',
    interfaces: []
  };
  var DEACTIVATED_CSS_CLASS;
  var DISABLED_CSS_CLASS;
  function isDeactivated($receiver) {
    return hasClass($receiver, DEACTIVATED_CSS_CLASS);
  }
  function isNotDeactivated($receiver) {
    return !isDeactivated($receiver);
  }
  function isDisabled($receiver) {
    return hasClass($receiver, DISABLED_CSS_CLASS);
  }
  function isNotDisabled($receiver) {
    return !isDisabled($receiver);
  }
  function showDialog$lambda$lambda(closure$resolve) {
    return function ($receiver, box) {
      modalButton($receiver, 'Yes', box, closure$resolve, true);
      modalButton($receiver, 'No', box, closure$resolve, false);
      return Unit;
    };
  }
  function showDialog$lambda(closure$msg) {
    return function (resolve, f) {
      showModal(closure$msg, showDialog$lambda$lambda(resolve));
      return Unit;
    };
  }
  function showDialog(msg) {
    return new Promise(showDialog$lambda(msg));
  }
  function showAlert$lambda$lambda(closure$resolve) {
    return function ($receiver, box) {
      modalButton($receiver, 'OK', box, closure$resolve, Unit);
      return Unit;
    };
  }
  function showAlert$lambda(closure$msg) {
    return function (resolve, f) {
      showModal(closure$msg, showAlert$lambda$lambda(resolve));
      return Unit;
    };
  }
  function showAlert(msg) {
    return new Promise(showAlert$lambda(msg));
  }
  function showOutput$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('list_alt');
    return Unit;
  }
  function showOutput$lambda$lambda$lambda$lambda_0(closure$title) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$title);
      return Unit;
    };
  }
  function showOutput$lambda$lambda$lambda$lambda_1(closure$output) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$output);
      return Unit;
    };
  }
  function showOutput$lambda$lambda$lambda(closure$title, closure$output) {
    return function ($receiver) {
      i($receiver, 'material-icons', showOutput$lambda$lambda$lambda$lambda);
      span($receiver, void 0, showOutput$lambda$lambda$lambda$lambda_0(closure$title));
      textArea($receiver, void 0, void 0, void 0, void 0, showOutput$lambda$lambda$lambda$lambda_1(closure$output));
      return Unit;
    };
  }
  function showOutput$lambda$lambda(closure$title, closure$output) {
    return function ($receiver) {
      div($receiver, 'output', showOutput$lambda$lambda$lambda(closure$title, closure$output));
      return Unit;
    };
  }
  function showOutput$lambda$lambda_0(closure$resolve) {
    return function ($receiver, box) {
      modalButton($receiver, 'OK', box, closure$resolve, Unit);
      return Unit;
    };
  }
  function showOutput$lambda(closure$title, closure$output) {
    return function (resolve, f) {
      showModal_0(showOutput$lambda$lambda(closure$title, closure$output), showOutput$lambda$lambda_0(resolve));
      return Unit;
    };
  }
  function showOutput(title, output) {
    return new Promise(showOutput$lambda(title, output));
  }
  function modalButton$lambda$lambda(closure$box, closure$resolve, closure$objectToResolve) {
    return function (it) {
      closure$box.remove();
      closure$resolve(closure$objectToResolve);
      return Unit;
    };
  }
  function modalButton$lambda(closure$buttonText, closure$box, closure$resolve, closure$objectToResolve) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$buttonText);
      addClickEventListener(getUnderlyingHtmlElement($receiver), {once: true}, modalButton$lambda$lambda(closure$box, closure$resolve, closure$objectToResolve));
      return Unit;
    };
  }
  function modalButton($receiver, buttonText, box, resolve, objectToResolve) {
    span($receiver, void 0, modalButton$lambda(buttonText, box, resolve, objectToResolve));
  }
  function showModal$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('help_outline');
    return Unit;
  }
  function showModal$lambda$lambda_0(closure$msg) {
    return function ($receiver) {
      Messages$Companion_getInstance().convertNewLinesToBrTabToTwoSpacesAndParseUrls_2pgskx$($receiver, closure$msg);
      return Unit;
    };
  }
  function showModal$lambda(closure$msg) {
    return function ($receiver) {
      i($receiver, 'material-icons', showModal$lambda$lambda);
      div($receiver, void 0, showModal$lambda$lambda_0(closure$msg));
      return Unit;
    };
  }
  function showModal(msg, buttonCreator) {
    showModal_0(showModal$lambda(msg), buttonCreator);
  }
  function showModal$lambda$lambda$lambda(closure$contentCreator) {
    return function ($receiver) {
      closure$contentCreator($receiver);
      return Unit;
    };
  }
  function showModal$lambda$lambda$lambda_0(closure$buttonCreator, closure$box) {
    return function ($receiver) {
      closure$buttonCreator($receiver, closure$box);
      return Unit;
    };
  }
  function showModal$lambda$lambda_1(closure$contentCreator, closure$buttonCreator) {
    return function ($receiver) {
      var box = getUnderlyingHtmlElement($receiver);
      div($receiver, 'text', showModal$lambda$lambda$lambda(closure$contentCreator));
      div($receiver, 'buttons', showModal$lambda$lambda$lambda_0(closure$buttonCreator, box));
      box.style.visibility = 'hidden';
      return Unit;
    };
  }
  function showModal$lambda_0(closure$contentCreator, closure$buttonCreator) {
    return function ($receiver) {
      div_0($receiver, 'box', showModal$lambda$lambda_1(closure$contentCreator, closure$buttonCreator));
      return Unit;
    };
  }
  function showModal_0(contentCreator, buttonCreator) {
    var tmp$;
    var modals = elementById('modals');
    append(modals, showModal$lambda_0(contentCreator, buttonCreator));
    var box = Kotlin.isType(tmp$ = modals.lastChild, HTMLElement) ? tmp$ : throwCCE();
    var top = window.innerHeight / 2.5 - (box.offsetHeight / 2 | 0);
    var left = (window.innerWidth / 2 | 0) - (box.offsetWidth / 2 | 0) | 0;
    box.style.top = top.toString() + 'px';
    box.style.left = left.toString() + 'px';
    box.style.visibility = 'visible';
  }
  function textFieldWithLabel$lambda($receiver) {
    return Unit;
  }
  function textFieldWithLabel($receiver, id, label, value, menu) {
    textFieldWithLabel_0($receiver, id, label, value, menu, textFieldWithLabel$lambda);
  }
  function textFieldReadOnlyWithLabel$lambda($receiver) {
    return Unit;
  }
  function textFieldReadOnlyWithLabel$lambda_0(closure$inputAct) {
    return function ($receiver) {
      $receiver.readonly = true;
      closure$inputAct($receiver);
      return Unit;
    };
  }
  function textFieldReadOnlyWithLabel($receiver, id, label, value, menu, inputAct) {
    if (inputAct === void 0)
      inputAct = textFieldReadOnlyWithLabel$lambda;
    textFieldWithLabel_0($receiver, id, label, value, menu, textFieldReadOnlyWithLabel$lambda_0(inputAct));
  }
  function textFieldWithLabel$lambda$lambda(closure$id, closure$label) {
    return function ($receiver) {
      $receiver.htmlFor = closure$id;
      $receiver.unaryPlus_pdl1vz$(closure$label);
      return Unit;
    };
  }
  function textFieldWithLabel$lambda$lambda$lambda(closure$menu) {
    return function (it) {
      closure$menu.activateSaveButtonAndDeactivateOthers();
      return Unit;
    };
  }
  function textFieldWithLabel$lambda$lambda_0(closure$id, closure$value, closure$inputAct, closure$menu) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, closure$id);
      $receiver.value = closure$value;
      closure$inputAct($receiver);
      set_onKeyUpFunction($receiver, textFieldWithLabel$lambda$lambda$lambda(closure$menu));
      var input = Kotlin.isType(tmp$ = getUnderlyingHtmlElement($receiver), HTMLInputElement) ? tmp$ : throwCCE();
      EventManager$Companion_getInstance().disableUnDisableForProcessStartAndEnd_fj1ece$(input, input);
      EventManager$Companion_getInstance().unDisableForProcessContinueAndReset_fj1ece$(input, input);
      return Unit;
    };
  }
  function textFieldWithLabel$lambda_0(closure$id, closure$label, closure$value, closure$inputAct, closure$menu) {
    return function ($receiver) {
      label($receiver, 'fields', textFieldWithLabel$lambda$lambda(closure$id, closure$label));
      textInput($receiver, void 0, void 0, void 0, void 0, textFieldWithLabel$lambda$lambda_0(closure$id, closure$value, closure$inputAct, closure$menu));
      return Unit;
    };
  }
  function textFieldWithLabel_0($receiver, id, label, value, menu, inputAct) {
    div($receiver, void 0, textFieldWithLabel$lambda_0(id, label, value, inputAct, menu));
  }
  function textAreaWithLabel$lambda$lambda(closure$id, closure$label) {
    return function ($receiver) {
      $receiver.htmlFor = closure$id;
      $receiver.unaryPlus_pdl1vz$(closure$label);
      return Unit;
    };
  }
  function textAreaWithLabel$lambda$lambda$lambda(closure$menu) {
    return function (it) {
      closure$menu.activateSaveButtonAndDeactivateOthers();
      return Unit;
    };
  }
  function textAreaWithLabel$lambda$lambda_0(closure$id, closure$value, closure$menu) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, closure$id);
      $receiver.unaryPlus_pdl1vz$(closure$value);
      set_onKeyUpFunction($receiver, textAreaWithLabel$lambda$lambda$lambda(closure$menu));
      var htmlTextAreaElement = Kotlin.isType(tmp$ = getUnderlyingHtmlElement($receiver), HTMLTextAreaElement) ? tmp$ : throwCCE();
      var input = htmlTextAreaElement;
      EventManager$Companion_getInstance().disableUnDisableForProcessStartAndEnd_fj1ece$(input, htmlTextAreaElement);
      EventManager$Companion_getInstance().unDisableForProcessContinueAndReset_fj1ece$(input, htmlTextAreaElement);
      return Unit;
    };
  }
  function textAreaWithLabel$lambda(closure$id, closure$label, closure$value, closure$menu) {
    return function ($receiver) {
      label($receiver, 'fields', textAreaWithLabel$lambda$lambda(closure$id, closure$label));
      textArea($receiver, void 0, void 0, void 0, void 0, textAreaWithLabel$lambda$lambda_0(closure$id, closure$value, closure$menu));
      return Unit;
    };
  }
  function textAreaWithLabel($receiver, id, label, value, menu) {
    div($receiver, void 0, textAreaWithLabel$lambda(id, label, value, menu));
  }
  function Loader() {
    Loader_instance = this;
    var loader = elementById('loader');
    var tmp$;
    tmp$ = asList(loader.childNodes).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.nodeType === Node.TEXT_NODE) {
        loader.removeChild(element);
      }
    }
  }
  function Loader$updateLoaderToLoadApiToken$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('If you keep seeing this after a few seconds, then either an error occurred (see bottom of the page) and if not then most probably CORS was not successful and a request was blocked by the server.');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('You can verify it by opening the developer console(F12 in many browsers)');
    return Unit;
  }
  function Loader$updateLoaderToLoadApiToken$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('&publishUrl = ...');
    return Unit;
  }
  function Loader$updateLoaderToLoadApiToken$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('In case you only want to see the resulting pipeline without release functionality, then please remove ');
    code($receiver, void 0, Loader$updateLoaderToLoadApiToken$lambda$lambda$lambda);
    $receiver.unaryPlus_pdl1vz$('from the current URL.');
    return Unit;
  }
  function Loader$updateLoaderToLoadApiToken$lambda($receiver) {
    p($receiver, void 0, Loader$updateLoaderToLoadApiToken$lambda$lambda);
    p($receiver, void 0, Loader$updateLoaderToLoadApiToken$lambda$lambda_0);
    return Unit;
  }
  Loader.prototype.updateLoaderToLoadApiToken = function () {
    this.updateLoader_0('Retrieving API Token', Loader$updateLoaderToLoadApiToken$lambda);
  };
  function Loader$updateToLoadingJson$lambda(this$Loader) {
    return function ($receiver) {
      this$Loader.getDefaultLoadingMessage_0($receiver);
      return Unit;
    };
  }
  Loader.prototype.updateToLoadingJson = function () {
    this.updateLoader_0('Loading release.json', Loader$updateToLoadingJson$lambda(this));
  };
  function Loader$updateToLoadOtherTokens$lambda(this$Loader) {
    return function ($receiver) {
      this$Loader.getDefaultLoadingMessage_0($receiver);
      return Unit;
    };
  }
  Loader.prototype.updateToLoadOtherTokens = function () {
    this.updateLoader_0('Loading other API Tokens (from remote Jenkins servers)', Loader$updateToLoadOtherTokens$lambda(this));
  };
  function Loader$updateToRecoverOngoingProcess$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Should disappear after half a minute or so; otherwise most likely an error occurred (see bottom of the page).');
    return Unit;
  }
  function Loader$updateToRecoverOngoingProcess$lambda($receiver) {
    p($receiver, void 0, Loader$updateToRecoverOngoingProcess$lambda$lambda);
    return Unit;
  }
  Loader.prototype.updateToRecoverOngoingProcess = function () {
    this.updateLoader_0('Recovering ongoing process', Loader$updateToRecoverOngoingProcess$lambda);
  };
  function Loader$updateToLoadPipeline$lambda(this$Loader) {
    return function ($receiver) {
      this$Loader.getDefaultLoadingMessage_0($receiver);
      return Unit;
    };
  }
  Loader.prototype.updateToLoadPipeline = function () {
    this.updateLoader_0('Loading Pipeline', Loader$updateToLoadPipeline$lambda(this));
  };
  function Loader$getDefaultLoadingMessage$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Should disappear after a few seconds; otherwise either an error occurred (see bottom of the page) and if not then most likely the request silently failed.');
    get_br($receiver);
    $receiver.unaryPlus_pdl1vz$('You can verify it by opening the developer console (F12 in many browsers)');
    return Unit;
  }
  Loader.prototype.getDefaultLoadingMessage_0 = function ($receiver) {
    p($receiver, void 0, Loader$getDefaultLoadingMessage$lambda);
  };
  function Loader$updateLoader$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('check_box_outline_blank');
    return Unit;
  }
  function Loader$updateLoader$lambda$lambda$lambda_0(closure$newItem) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$newItem);
      $receiver.unaryPlus_pdl1vz$('...');
      return Unit;
    };
  }
  function Loader$updateLoader$lambda$lambda(this$, closure$newItem) {
    return function ($receiver) {
      i_0(this$, 'material-icons waiting', Loader$updateLoader$lambda$lambda$lambda);
      span_0(this$, void 0, Loader$updateLoader$lambda$lambda$lambda_0(closure$newItem));
      return Unit;
    };
  }
  function Loader$updateLoader$lambda$lambda_0(closure$divContent) {
    return function ($receiver) {
      closure$divContent($receiver);
      return Unit;
    };
  }
  function Loader$updateLoader$lambda(closure$newItem, closure$divContent) {
    return function ($receiver) {
      p_0($receiver, void 0, Loader$updateLoader$lambda$lambda($receiver, closure$newItem));
      div_0($receiver, void 0, Loader$updateLoader$lambda$lambda_0(closure$divContent));
      return Unit;
    };
  }
  Loader.prototype.updateLoader_0 = function (newItem, divContent) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var loader = elementById('loader');
    tmp$ = loader.lastChild;
    if (tmp$ == null) {
      throw IllegalStateException_init('loader does not have a child');
    }
    var currentLastChild = tmp$;
    loader.removeChild(currentLastChild);
    tmp$_0 = loader.lastChild;
    if (tmp$_0 == null) {
      throw IllegalStateException_init('loader does not have two children');
    }
    var newLastChild = tmp$_0;
    var icon = Kotlin.isType(tmp$_1 = newLastChild.firstChild, HTMLElement) ? tmp$_1 : throwCCE();
    removeClass(icon, ['waiting']);
    icon.innerText = 'check_box';
    var text = Kotlin.isType(tmp$_2 = newLastChild.lastChild, HTMLElement) ? tmp$_2 : throwCCE();
    text.innerText = substringBefore_0(text.innerText, '...') + ' successful';
    append(loader, Loader$updateLoader$lambda(newItem, divContent));
  };
  Loader.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Loader',
    interfaces: []
  };
  var Loader_instance = null;
  function Loader_getInstance() {
    if (Loader_instance === null) {
      new Loader();
    }
    return Loader_instance;
  }
  function Login(defaultJenkinsBaseUrl) {
    Login$Companion_getInstance();
    this.defaultJenkinsBaseUrl_0 = defaultJenkinsBaseUrl;
  }
  function Login$retrieveUserAndApiToken$lambda(this$Login) {
    return function (pair) {
      if (pair == null) {
        this$Login.disableButtonsDueToNoAuth_0('You need to log in if you want to use this functionality.', 'You need to log in if you want to use all functionality and not only a limited set.' + ('\n' + toString(this$Login.defaultJenkinsBaseUrl_0) + '/login?from=') + toString(window.location));
        return null;
      }
       else {
        var name = pair.component1()
        , usernameToken = pair.component2();
        this$Login.setVerifiedUser_0(name);
        this$Login.updateUserToolTip_0(this$Login.defaultJenkinsBaseUrl_0, pair);
        return usernameToken;
      }
    };
  }
  Login.prototype.retrieveUserAndApiToken = function () {
    var tmp$, tmp$_0;
    if (this.defaultJenkinsBaseUrl_0 == null) {
      this.disableButtonsDueToNoPublishUrl_0();
      tmp$_0 = Promise.resolve((tmp$ = null) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE());
    }
     else {
      tmp$_0 = this.register_0(this.defaultJenkinsBaseUrl_0).then(Login$retrieveUserAndApiToken$lambda(this));
    }
    return tmp$_0;
  };
  Login.prototype.register_0 = function (jenkinsBaseUrl) {
    return this.retrieveUserAndApiTokenAndSaveToken_0(jenkinsBaseUrl);
  };
  function Login$retrieveUserAndApiTokenAndSaveToken$lambda(closure$urlWithoutSlash, this$Login) {
    return function (t) {
      return this$Login.errorHandling_0(closure$urlWithoutSlash, t);
    };
  }
  function Login$retrieveUserAndApiTokenAndSaveToken$lambda_0(this$Login, closure$urlWithoutSlash) {
    return function (pair) {
      var body = pair != null ? pair.second : null;
      if (body == null) {
        return null;
      }
       else {
        var tmp$ = this$Login.extractNameAndApiToken_0(body);
        var username = tmp$.component1()
        , name = tmp$.component2();
        var $receiver = Login$Companion_getInstance().usernameTokens_0;
        var key = closure$urlWithoutSlash;
        $receiver.put_xwzc9p$(key, username);
        return to(name, username);
      }
    };
  }
  function Login$retrieveUserAndApiTokenAndSaveToken$lambda_1(closure$urlWithoutSlash, this$Login) {
    return function (t) {
      return this$Login.errorHandling_0(closure$urlWithoutSlash, t);
    };
  }
  Login.prototype.retrieveUserAndApiTokenAndSaveToken_0 = function (jenkinsBaseUrl) {
    var urlWithoutSlash = this.urlWithoutEndingSlash_0(jenkinsBaseUrl);
    return window.fetch(urlWithoutSlash + '/me/configure', createFetchInitWithCredentials()).then(getCallableRef('checkStatusOkOr403', function (response) {
      return checkStatusOkOr403(response);
    })).catch(Login$retrieveUserAndApiTokenAndSaveToken$lambda(urlWithoutSlash, this)).then(Login$retrieveUserAndApiTokenAndSaveToken$lambda_0(this, urlWithoutSlash)).catch(Login$retrieveUserAndApiTokenAndSaveToken$lambda_1(urlWithoutSlash, this));
  };
  Login.prototype.errorHandling_0 = function (urlWithoutSlash, t) {
    Messages$Companion_getInstance().showThrowable_tcv7n7$(new Error_0('Could not verify login (and retrieve user) for ' + urlWithoutSlash, t));
    return null;
  };
  Login.prototype.extractNameAndApiToken_0 = function (body) {
    var tmp$, tmp$_0;
    var usernameMatch = (tmp$ = Login$Companion_getInstance().usernameRegex_0.find_905azu$(body)) != null ? tmp$ : this.throwCouldNotFind_0('username', body);
    var fullNameMatch = (tmp$_0 = Login$Companion_getInstance().fullNameRegex_0.find_905azu$(body)) != null ? tmp$_0 : this.throwCouldNotFind_0("user's name", body);
    return to(usernameMatch.groupValues.get_za3lpa$(1), fullNameMatch.groupValues.get_za3lpa$(1));
  };
  Login.prototype.throwCouldNotFind_0 = function (what, body) {
    throw IllegalStateException_init('Could not find ' + what + ' in response.' + '\n' + body);
  };
  function Login$loadOtherApiTokens$lambda$lambda(closure$remoteJenkinsBaseUrl, this$Login) {
    return function (pair) {
      this$Login.updateUserToolTip_0(closure$remoteJenkinsBaseUrl, pair);
      if (pair == null) {
        this$Login.setHalfVerified_0(this$Login.defaultJenkinsBaseUrl_0, closure$remoteJenkinsBaseUrl);
      }
      return Unit;
    };
  }
  Login.prototype.loadOtherApiTokens_429wai$ = function (releasePlan) {
    var remoteRegex = parseRemoteRegex(releasePlan);
    var mutableList = ArrayList_init(remoteRegex.size);
    var tmp$;
    tmp$ = remoteRegex.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var remoteJenkinsBaseUrl = element.component2();
      var tmp$_0;
      if (this.isUrlAndNotYetRegistered_0(remoteJenkinsBaseUrl)) {
        tmp$_0 = this.register_0(remoteJenkinsBaseUrl).then(Login$loadOtherApiTokens$lambda$lambda(remoteJenkinsBaseUrl, this));
      }
       else {
        tmp$_0 = Promise.resolve(Unit);
      }
      var promise = tmp$_0;
      mutableList.add_11rb$(promise);
    }
    return Promise.all(copyToArray(mutableList));
  };
  Login.prototype.isUrlAndNotYetRegistered_0 = function (remoteJenkinsBaseUrl) {
    return startsWith(remoteJenkinsBaseUrl, 'http') && this.forHost_0(remoteJenkinsBaseUrl) == null;
  };
  Login.prototype.forHost_0 = function (jenkinsBaseUrl) {
    return Login$Companion_getInstance().usernameTokens_0.get_11rb$(this.urlWithoutEndingSlash_0(jenkinsBaseUrl));
  };
  Login.prototype.urlWithoutEndingSlash_0 = function (jenkinsBaseUrl) {
    var tmp$;
    if (endsWith(jenkinsBaseUrl, '/')) {
      var endIndex = jenkinsBaseUrl.length - 1 | 0;
      tmp$ = jenkinsBaseUrl.substring(0, endIndex);
    }
     else {
      tmp$ = jenkinsBaseUrl;
    }
    return tmp$;
  };
  Login.prototype.updateUserToolTip_0 = function (url, pair) {
    var tmp$;
    this.appendToUserButtonToolTip_0(url, (tmp$ = pair != null ? pair.second : null) != null ? tmp$ : 'Anonymous', pair != null ? pair.first : null);
  };
  Login.prototype.disableButtonsDueToNoPublishUrl_0 = function () {
    var titleButtons = 'You need to specify &publishJob if you want to use other functionality than Download and Explore Release Order.';
    this.disableButtonsDueToNoAuth_0(titleButtons, titleButtons + ('\n' + 'An example: ' + window.location + '&publishJob=jobUrl') + '\nwhere you need to replace jobUrl accordingly.');
  };
  Login.prototype.disableButtonsDueToNoAuth_0 = function (titleButtons, info) {
    Messages$Companion_getInstance().showInfo_4wem9b$(info);
    Login$Companion_getInstance().userButton_0.title = titleButtons;
    addClass(Login$Companion_getInstance().userButton_0, [DEACTIVATED_CSS_CLASS]);
    Login$Companion_getInstance().userName_0.innerText = 'Anonymous';
    Login$Companion_getInstance().userIcon_0.innerText = 'error';
    Menu$Companion_getInstance().disableButtonsDueToNoAuth_61zpoe$(titleButtons);
  };
  Login.prototype.setVerifiedUser_0 = function (name) {
    Login$Companion_getInstance().userName_0.innerText = name;
    Login$Companion_getInstance().userIcon_0.innerText = 'verified_user';
    removeClass(Login$Companion_getInstance().userButton_0, [DEACTIVATED_CSS_CLASS]);
  };
  Login.prototype.setHalfVerified_0 = function (defaultJenkinsBaseUrl, remoteJenkinsBaseUrl) {
    if (!hasClass(Login$Companion_getInstance().userButton_0, DEACTIVATED_CSS_CLASS)) {
      Login$Companion_getInstance().userIcon_0.innerText = 'error';
      addClass(Login$Companion_getInstance().userButton_0, ['warning']);
      Messages$Companion_getInstance().showWarning_4wem9b$('You are not logged in at ' + remoteJenkinsBaseUrl + '.' + '\n' + ('You can perform a Dry Run (runs on ' + toString(defaultJenkinsBaseUrl) + ') but a release involving the remote jenkins will most likely fail.' + '\n' + '\n') + ('Go to the log in: ' + remoteJenkinsBaseUrl + '/login?from=') + toString(window.location));
    }
  };
  Login.prototype.appendToUserButtonToolTip_0 = function (url, username, name) {
    var nameSuffix = name != null ? ' (' + toString(name) + ')' : '';
    Login$Companion_getInstance().userButton_0.title = Login$Companion_getInstance().userButton_0.title + ('\n' + 'Logged in as ' + username + nameSuffix + ' @ ' + url);
  };
  function Login$Companion() {
    Login$Companion_instance = this;
    this.fullNameRegex_0 = Regex_init('<input[^>]+name="_\\.fullName"[^>]+value="([^"]+)"');
    this.usernameRegex_0 = Regex_init('<a[^>]+href="[^"]*/user/([^"]+)"');
    this.usernameTokens_0 = HashMap_init();
  }
  Object.defineProperty(Login$Companion.prototype, 'userButton_0', {
    get: function () {
      return elementById('user');
    }
  });
  Object.defineProperty(Login$Companion.prototype, 'userIcon_0', {
    get: function () {
      return elementById('user.icon');
    }
  });
  Object.defineProperty(Login$Companion.prototype, 'userName_0', {
    get: function () {
      return elementById('user.name');
    }
  });
  Login$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Login$Companion_instance = null;
  function Login$Companion_getInstance() {
    if (Login$Companion_instance === null) {
      new Login$Companion();
    }
    return Login$Companion_instance;
  }
  Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: []
  };
  function Menu(eventManager) {
    Menu$Companion_getInstance();
    this.eventManager_0 = eventManager;
    this.setUpMenuLayers_0([new Triple(Menu$Companion_getInstance().toolsButton_0, 'toolbox', to(Menu$Companion_getInstance().TOOLS_INACTIVE_TITLE_0, 'Close the toolbox.')), new Triple(Menu$Companion_getInstance().settingsButton_0, 'config', to(Menu$Companion_getInstance().SETTINGS_INACTIVE_TITLE_0, 'Close Settings.'))]);
  }
  function Menu$setUpMenuLayers$lambda$lambda(closure$pairs, closure$id, closure$activeCssClass, closure$inactiveAndActiveTitle, closure$button) {
    return function () {
      var $receiver = closure$pairs;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var closure$id_0 = closure$id;
        var closure$activeCssClass_0 = closure$activeCssClass;
        var otherId = element.component2();
        if (!equals(closure$id_0, otherId)) {
          removeClass(elementById(otherId), [closure$activeCssClass_0]);
        }
      }
      var layer = elementById(closure$id);
      if (hasClass(layer, closure$activeCssClass)) {
        closure$button.title = closure$inactiveAndActiveTitle.first;
      }
       else {
        closure$button.title = closure$inactiveAndActiveTitle.second;
      }
      toggleClass(layer, closure$activeCssClass);
      return Unit;
    };
  }
  function Menu$setUpMenuLayers$lambda$lambda_0(closure$id, closure$activeCssClass) {
    return function (it) {
      return removeClass(elementById(closure$id), [closure$activeCssClass]);
    };
  }
  Menu.prototype.setUpMenuLayers_0 = function (pairs) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var element = pairs[tmp$];
      var button = element.component1()
      , id = element.component2()
      , inactiveAndActiveTitle = element.component3();
      var activeCssClass = 'active';
      this.addClickEventListenerIfNotDeactivatedNorDisabled_0(button, Menu$setUpMenuLayers$lambda$lambda(pairs, id, activeCssClass, inactiveAndActiveTitle, button));
      addClickEventListener(elementById(id + ':close'), void 0, Menu$setUpMenuLayers$lambda$lambda_0(id, activeCssClass));
    }
  };
  function Menu$initDependencies$lambda(it) {
    if (isNotDeactivated(Menu$Companion_getInstance().saveButton_0))
      return 'Your changes will be lost, sure you want to leave the page?';
    else if (Pipeline$Companion_getInstance().getReleaseState() === ReleaseState.IN_PROGRESS)
      return 'You might lose state changes if you navigate away from this page, sure you want to proceed?';
    else
      return null;
  }
  Menu.prototype.initDependencies_a2mv01$ = function (downloader, modifiableState, processStarter) {
    Menu$Companion_getInstance().modifiableState = modifiableState;
    window.onbeforeunload = Menu$initDependencies$lambda;
    this.initSaveAndDownloadButton_0(downloader, processStarter);
    this.initRunButtons_0(modifiableState, processStarter);
    this.activateToolsButton_0();
    this.activateSettingsButton_0();
    this.initStartOverButton_0(processStarter);
    this.initExportButtons_0(modifiableState);
    this.initReportButtons_0(modifiableState);
    this.registerForStartAndEndReleaseEvent_0(processStarter);
  };
  function Menu$initSaveAndDownloadButton$lambda(closure$processStarter, this$Menu) {
    return function () {
      return this$Menu.save_0(closure$processStarter);
    };
  }
  function Menu$initSaveAndDownloadButton$lambda_0(closure$downloader) {
    return function () {
      closure$downloader.download();
      return Unit;
    };
  }
  Menu.prototype.initSaveAndDownloadButton_0 = function (downloader, processStarter) {
    this.deactivateSaveButtonAndReactivateOthers_0();
    if (processStarter != null) {
      this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().saveButton_0, Menu$initSaveAndDownloadButton$lambda(processStarter, this));
    }
    Menu$Companion_getInstance().downloadButton_0.title = 'Download the release.json';
    removeClass(Menu$Companion_getInstance().downloadButton_0, [DEACTIVATED_CSS_CLASS]);
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().downloadButton_0, Menu$initSaveAndDownloadButton$lambda_0(downloader));
  };
  function Menu$initRunButtons$lambda(this$Menu, closure$modifiableState, closure$processStarter) {
    return function () {
      return this$Menu.eventManager_0.startDryRun_qzbocw$(closure$modifiableState, closure$processStarter);
    };
  }
  function Menu$initRunButtons$lambda_0(this$Menu, closure$modifiableState, closure$processStarter) {
    return function () {
      return this$Menu.eventManager_0.startRelease_qzbocw$(closure$modifiableState, closure$processStarter);
    };
  }
  function Menu$initRunButtons$lambda_1(this$Menu, closure$modifiableState, closure$processStarter) {
    return function () {
      return this$Menu.eventManager_0.startExploration_fyaonj$(closure$modifiableState, closure$processStarter);
    };
  }
  Menu.prototype.initRunButtons_0 = function (modifiableState, processStarter) {
    if (processStarter != null) {
      this.activateDryRunButton_0();
      this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().dryRunButton_0, Menu$initRunButtons$lambda(this, modifiableState, processStarter));
      this.activateReleaseButton_0();
      this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().releaseButton_0, Menu$initRunButtons$lambda_0(this, modifiableState, processStarter));
    }
    this.activateExploreButton_0();
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().exploreButton_0, Menu$initRunButtons$lambda_1(this, modifiableState, processStarter));
  };
  function Menu$initStartOverButton$lambda$lambda(this$Menu, closure$processStarter) {
    return function (it) {
      this$Menu.resetButtons_0();
      Menu$Companion_getInstance().startOverButton_0.style.display = 'none';
      return this$Menu.save_0(closure$processStarter);
    };
  }
  function Menu$initStartOverButton$lambda(this$Menu, closure$processStarter) {
    return function (it) {
      return this$Menu.eventManager_0.resetForNewProcess().then(Menu$initStartOverButton$lambda$lambda(this$Menu, closure$processStarter));
    };
  }
  Menu.prototype.initStartOverButton_0 = function (processStarter) {
    if (processStarter != null) {
      this.activateStartOverButton_0();
      addClickEventListener(Menu$Companion_getInstance().startOverButton_0, void 0, Menu$initStartOverButton$lambda(this, processStarter));
    }
  };
  Menu.prototype.resetButtons_0 = function () {
    var tmp$ = Menu$Companion_getInstance().getCurrentRunData();
    var processName = tmp$.component1()
    , buttonText = tmp$.component3();
    var tmp$_0;
    tmp$_0 = listOf([Menu$Companion_getInstance().dryRunButton_0, Menu$Companion_getInstance().releaseButton_0, Menu$Companion_getInstance().exploreButton_0]).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      removeClass(element, [DISABLED_CSS_CLASS]);
    }
    buttonText.innerText = processName;
    this.activateDryRunButton_0();
    this.activateReleaseButton_0();
    this.activateExploreButton_0();
  };
  function Menu$initExportButtons$lambda(closure$modifiableState) {
    return function () {
      var releasePlan = closure$modifiableState.releasePlan;
      var psfContent = generateEclipsePsf(releasePlan, Regex_init(releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_EXCLUDE_PROJECT_REGEX)), Regex_init(releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REGEX)), releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT));
      Downloader$Companion_getInstance().download_puj7f4$('customImport.psf', psfContent);
      return Unit;
    };
  }
  function Menu$initExportButtons$lambda_0(closure$modifiableState) {
    return function () {
      var releasePlan = closure$modifiableState.releasePlan;
      var gitCloneCommands = generateGitCloneCommands_0(releasePlan, Regex_init(releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_EXCLUDE_PROJECT_REGEX)), Regex_init(releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REGEX)), releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT));
      var title = 'Copy the following git clone commands and paste them into a terminal/command prompt';
      return showOutput(title, gitCloneCommands);
    };
  }
  function Menu$initExportButtons$lambda_1(closure$modifiableState) {
    return function () {
      var releasePlan = closure$modifiableState.releasePlan;
      var list = generateListOfDependentsWithoutSubmoduleAndExcluded(releasePlan, Regex_init(releasePlan.getConfig_udzor3$(ConfigKey.RELATIVE_PATH_EXCLUDE_PROJECT_REGEX)));
      var title = 'The following projects are (indirect) dependents of ' + releasePlan.rootProjectId.identifier;
      return showOutput(title, list);
    };
  }
  Menu.prototype.initExportButtons_0 = function (modifiableState) {
    this.activateButton_0(Menu$Companion_getInstance().eclipsePsfButton_0, 'Download an eclipse psf-file to import all projects into eclipse.');
    this.activateButton_0(Menu$Companion_getInstance().gitCloneCommandsButton_0, 'Show git clone commands to clone the involved projects.');
    this.activateButton_0(Menu$Companion_getInstance().listDependentsButton_0, 'List direct and indirect dependent projects (identifiers) of the root project.');
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().eclipsePsfButton_0, Menu$initExportButtons$lambda(modifiableState));
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().gitCloneCommandsButton_0, Menu$initExportButtons$lambda_0(modifiableState));
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().listDependentsButton_0, Menu$initExportButtons$lambda_1(modifiableState));
  };
  function Menu$initReportButtons$lambda(closure$modifiableState) {
    return function () {
      Downloader$Companion_getInstance().download_puj7f4$('changelog.csv', generateChangelog(closure$modifiableState.releasePlan, getCallableRef('appendProjectToCsvWithoutWrapper', function (sb, project, releaseVersion, nextDevVersion) {
        return appendProjectToCsvWithoutWrapper(sb, project, releaseVersion, nextDevVersion), Unit;
      })));
      return Unit;
    };
  }
  function Menu$initReportButtons$lambda_0(closure$modifiableState) {
    return function () {
      Downloader$Companion_getInstance().download_puj7f4$('changelog-excel.csv', generateChangelog(closure$modifiableState.releasePlan, getCallableRef('appendProjectToCsvExcel', function (sb, project, releaseVersion, nextDevVersion) {
        return appendProjectToCsvExcel(sb, project, releaseVersion, nextDevVersion), Unit;
      })));
      return Unit;
    };
  }
  Menu.prototype.initReportButtons_0 = function (modifiableState) {
    this.activateButton_0(Menu$Companion_getInstance().changelogButton_0, 'Download changelog in CSV format');
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().changelogButton_0, Menu$initReportButtons$lambda(modifiableState));
    this.activateButton_0(Menu$Companion_getInstance().changelogButtonExcel_0, 'Download changelog in CSV format for Excel');
    this.addClickEventListenerIfNotDeactivatedNorDisabled_0(Menu$Companion_getInstance().changelogButtonExcel_0, Menu$initReportButtons$lambda_0(modifiableState));
  };
  function Menu$registerForStartAndEndReleaseEvent$lambda(it) {
    var tmp$;
    tmp$ = listOf([Menu$Companion_getInstance().dryRunButton_0, Menu$Companion_getInstance().releaseButton_0, Menu$Companion_getInstance().exploreButton_0]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      addClass(element, [DISABLED_CSS_CLASS]);
      element.title = EventManager$Companion_getInstance().getDisabledMessage();
    }
    return Unit;
  }
  function Menu$registerForStartAndEndReleaseEvent$lambda_0(closure$processStarter, this$Menu) {
    return function (success) {
      var tmp$;
      var tmp$_0 = Menu$Companion_getInstance().getCurrentRunData();
      var processName = tmp$_0.component1()
      , button = tmp$_0.component2()
      , buttonText = tmp$_0.component3();
      removeClass(button, [DISABLED_CSS_CLASS]);
      if (success) {
        var tmp$_1;
        tmp$_1 = listOf([Menu$Companion_getInstance().dryRunButton_0, Menu$Companion_getInstance().releaseButton_0, Menu$Companion_getInstance().exploreButton_0]).iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (!equals(button, Menu$Companion_getInstance().releaseButton_0)) {
            element.title = "Current process is '" + processName + "' - click on 'Start Over' to start over with a new process.";
          }
           else {
            element.title = 'Release successful, use a new pipeline for a new release ' + 'or make changes and continue with the release process.';
          }
        }
        if (closure$processStarter != null && !equals(button, Menu$Companion_getInstance().releaseButton_0)) {
          Menu$Companion_getInstance().startOverButton_0.style.display = 'inline-block';
          tmp$ = "Click on the 'Start Over' button if you want to start over with a new process.\n";
        }
         else {
          tmp$ = '';
        }
        var hintIfNotRelease = tmp$;
        this$Menu.createNotification_0('Process ' + processName + ' succeeded :)');
        Messages$Companion_getInstance().showSuccess_4wem9b$(trimMargin('\n' + "                    |Process '" + processName + "' ended successfully :) you can now close the window or continue with the process." + '\n' + '                    |' + hintIfNotRelease + '\n' + '                    |Please report a bug at ' + GITHUB_NEW_ISSUE + ' in case some job failed without us noticing it.' + '\n' + '                    |Do not forget to star the repository if you like dep-graph-releaser ;-) ' + GITHUB_REPO + '\n' + '                    |Last but not least, you might want to visit ' + LOEWENFELS_URL + ' to get to know the company pushing this project forward.' + '\n' + '                    '));
        buttonText.innerText = 'Continue: ' + processName;
        button.title = "Continue with the process '" + processName + "'.";
        addClass(button, [DEACTIVATED_CSS_CLASS]);
      }
       else {
        this$Menu.createNotification_0('Process ' + processName + ' failed :(');
        Messages$Companion_getInstance().showError_61zpoe$(trimMargin('\n' + "                    |Process '" + processName + "' ended with failure :(" + '\n' + '                    |At least one job failed. Check errors, fix them and then you can re-trigger the failed jobs, the pipeline respectively, by clicking on the release button (you might have to delete git tags and remove artifacts if they have already been created).' + '\n' + '                    |' + '\n' + '                    |Please report a bug at ' + GITHUB_NEW_ISSUE + ' in case a job failed due to an error in dep-graph-releaser.' + '\n' + '                    '));
        buttonText.innerText = "Resume '" + processName + "'";
        button.title = "Continue with the process '" + processName + "' by re-processing previously failed projects.";
      }
      return Unit;
    };
  }
  Menu.prototype.registerForStartAndEndReleaseEvent_0 = function (processStarter) {
    EventManager$Companion_getInstance().registerForProcessStartEvent_gbr1zf$(Menu$registerForStartAndEndReleaseEvent$lambda);
    EventManager$Companion_getInstance().registerForProcessEndEvent_y8twos$(Menu$registerForStartAndEndReleaseEvent$lambda_0(processStarter, this));
  };
  function Menu$createNotification$lambda(closure$notification) {
    return function (it) {
      parent.focus();
      window.focus();
      closure$notification.close();
      return Unit;
    };
  }
  Menu.prototype.createNotification_0 = function (body) {
    var tmp$;
    if (equals(Notification.permission, 'granted') && !window.document.hasFocus()) {
      var options = Kotlin.isType(tmp$ = {}, Object) ? tmp$ : throwCCE();
      options.body = body;
      options.requireInteraction = true;
      var notification = new Notification('DGR ended', options);
      notification.onclick = Menu$createNotification$lambda(notification);
    }
  };
  function Menu$addClickEventListenerIfNotDeactivatedNorDisabled$lambda(this$addClickEventListenerIfNotDeactivatedNorDisabled, closure$action) {
    return function (it) {
      if (isNotDeactivated(this$addClickEventListenerIfNotDeactivatedNorDisabled) && isNotDisabled(this$addClickEventListenerIfNotDeactivatedNorDisabled)) {
        closure$action();
      }
      return Unit;
    };
  }
  Menu.prototype.addClickEventListenerIfNotDeactivatedNorDisabled_0 = function ($receiver, action) {
    addClickEventListener($receiver, void 0, Menu$addClickEventListenerIfNotDeactivatedNorDisabled$lambda($receiver, action));
  };
  Menu.prototype.deactivate_0 = function ($receiver, reason) {
    if (isDisabled(Menu$Companion_getInstance().saveButton_0))
      return;
    addClass($receiver, [DEACTIVATED_CSS_CLASS]);
    setTitleSaveOld($receiver, reason);
  };
  Menu.prototype.deactivateSaveButtonAndReactivateOthers_0 = function () {
    this.deactivate_0(Menu$Companion_getInstance().saveButton_0, 'Nothing to save, no changes were made');
    var tmp$;
    tmp$ = listOf([Menu$Companion_getInstance().dryRunButton_0, Menu$Companion_getInstance().releaseButton_0, Menu$Companion_getInstance().exploreButton_0]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var oldTitle = getOldTitleOrNull(element);
      if (oldTitle != null) {
        element.title = oldTitle;
        removeClass(element, [DEACTIVATED_CSS_CLASS]);
      }
    }
  };
  Menu.prototype.activateSaveButtonAndDeactivateOthers = function () {
    if (isDisabled(Menu$Companion_getInstance().saveButton_0))
      return;
    removeClass(Menu$Companion_getInstance().saveButton_0, [DEACTIVATED_CSS_CLASS]);
    Menu$Companion_getInstance().saveButton_0.title = 'Publish changed json file and change location';
    var saveFirst = 'You need to save your changes first.';
    var tmp$;
    tmp$ = listOf([Menu$Companion_getInstance().dryRunButton_0, Menu$Companion_getInstance().releaseButton_0, Menu$Companion_getInstance().exploreButton_0]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.deactivate_0(element, saveFirst);
    }
  };
  Menu.prototype.activateDryRunButton_0 = function () {
    this.activateButton_0(Menu$Companion_getInstance().dryRunButton_0, 'Start a dry run based on this release plan (no commit will be made, no artifact deployed etc.).');
  };
  Menu.prototype.activateReleaseButton_0 = function () {
    this.activateButton_0(Menu$Companion_getInstance().releaseButton_0, 'Start a release based on this release plan.');
  };
  Menu.prototype.activateExploreButton_0 = function () {
    this.activateButton_0(Menu$Companion_getInstance().exploreButton_0, 'See in which order the projects are build, actual order may vary due to unequal execution time.');
  };
  Menu.prototype.activateToolsButton_0 = function () {
    this.activateButton_0(Menu$Companion_getInstance().toolsButton_0, Menu$Companion_getInstance().TOOLS_INACTIVE_TITLE_0);
  };
  Menu.prototype.activateSettingsButton_0 = function () {
    this.activateButton_0(Menu$Companion_getInstance().settingsButton_0, Menu$Companion_getInstance().SETTINGS_INACTIVE_TITLE_0);
  };
  Menu.prototype.activateStartOverButton_0 = function () {
    this.activateButton_0(Menu$Companion_getInstance().startOverButton_0, Menu$Companion_getInstance().START_OVER_INACTIVE_TITLE_0);
  };
  Menu.prototype.activateButton_0 = function (button, newTitle) {
    if (isDisabled(button))
      return;
    removeClass(button, [DEACTIVATED_CSS_CLASS]);
    button.title = newTitle;
  };
  function Menu$save$lambda(hadChanges) {
    if (!hadChanges)
      Messages$Companion_getInstance().showInfo_4wem9b$('Seems like all changes have been reverted manually. Will not save anything.');
    return Unit;
  }
  function Menu$save$lambda_0(this$Menu) {
    return function (unit) {
      var noError = unit != null;
      if (noError) {
        this$Menu.deactivateSaveButtonAndReactivateOthers_0();
      }
       else {
        this$Menu.activateSaveButtonAndDeactivateOthers();
      }
      return Unit;
    };
  }
  Menu.prototype.save_0 = function (processStarter) {
    this.deactivate_0(Menu$Companion_getInstance().saveButton_0, 'Save in progress, please wait for the publish job to complete.');
    var nonNullProcessStarter = processStarter != null ? processStarter : Messages$Companion_getInstance().showThrowableAndThrow_tcv7n7$(IllegalStateException_init('Save button should not be activated if no publish job url was specified.' + '\nPlease report a bug: https://github.com/loewenfels/dep-graph-releaser/'));
    return finally_0(nonNullProcessStarter.publishChanges_6taknv$(true).then(Menu$save$lambda), Menu$save$lambda_0(this));
  };
  function Menu$Companion() {
    Menu$Companion_instance = this;
    this.TOOLS_INACTIVE_TITLE_0 = 'Open the toolbox to see further available features.';
    this.SETTINGS_INACTIVE_TITLE_0 = 'Open Settings.';
    this.START_OVER_INACTIVE_TITLE_0 = 'Start over with a new process.';
    this._modifiableState_v6w50y$_0 = this._modifiableState_v6w50y$_0;
  }
  Object.defineProperty(Menu$Companion.prototype, 'saveButton_0', {
    get: function () {
      return elementById('save');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'downloadButton_0', {
    get: function () {
      return elementById('download');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'dryRunButton_0', {
    get: function () {
      return elementById('dryRun');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'releaseButton_0', {
    get: function () {
      return elementById('release');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'exploreButton_0', {
    get: function () {
      return elementById('explore');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'toolsButton_0', {
    get: function () {
      return elementById('tools');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'settingsButton_0', {
    get: function () {
      return elementById('settings');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'startOverButton_0', {
    get: function () {
      return elementById('startOver');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'eclipsePsfButton_0', {
    get: function () {
      return elementById('eclipsePsf');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'gitCloneCommandsButton_0', {
    get: function () {
      return elementById('gitCloneCommands');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'listDependentsButton_0', {
    get: function () {
      return elementById('listDependents');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'changelogButton_0', {
    get: function () {
      return elementById('changelog');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'changelogButtonExcel_0', {
    get: function () {
      return elementById('changelogExcel');
    }
  });
  Object.defineProperty(Menu$Companion.prototype, '_modifiableState_0', {
    get: function () {
      if (this._modifiableState_v6w50y$_0 == null)
        return throwUPAE('_modifiableState');
      return this._modifiableState_v6w50y$_0;
    },
    set: function (_modifiableState) {
      this._modifiableState_v6w50y$_0 = _modifiableState;
    }
  });
  Object.defineProperty(Menu$Companion.prototype, 'modifiableState', {
    get: function () {
      return this._modifiableState_0;
    },
    set: function (value) {
      this._modifiableState_0 = value;
    }
  });
  Menu$Companion.prototype.getCurrentRunData = function () {
    var tmp$;
    var typeOfRun = this.modifiableState.releasePlan.typeOfRun;
    switch (typeOfRun.name) {
      case 'EXPLORE':
        tmp$ = to(this.exploreButton_0, elementById('explore:text'));
        break;
      case 'DRY_RUN':
        tmp$ = to(this.dryRunButton_0, elementById('dryRun:text'));
        break;
      case 'RELEASE':
        tmp$ = to(this.releaseButton_0, elementById('release:text'));
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var buttonPair = tmp$;
    return new Triple(toProcessName(typeOfRun), buttonPair.first, buttonPair.second);
  };
  Menu$Companion.prototype.disableButtonsDueToNoAuth_61zpoe$ = function (reason) {
    var tmp$;
    tmp$ = listOf([this.saveButton_0, this.dryRunButton_0, this.releaseButton_0]).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      addClass(element, [DISABLED_CSS_CLASS]);
      element.title = reason;
    }
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
  Menu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Menu',
    interfaces: []
  };
  function Messages(releasePlan) {
    Messages$Companion_getInstance();
    var tmp$;
    tmp$ = releasePlan.warnings.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      Messages$Companion_getInstance().showWarning_4wem9b$(element);
    }
    this.setInfoBubble_0(releasePlan.infos);
  }
  function Messages$setInfoBubble$lambda(closure$minimized, closure$messages) {
    return function (it) {
      closure$minimized.style.display = 'none';
      var tmp$;
      tmp$ = closure$messages.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        Messages$Companion_getInstance().showInfo_4wem9b$(element);
      }
      return Unit;
    };
  }
  function Messages$setInfoBubble$lambda_0(closure$messagesDiv) {
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
  Messages.prototype.setInfoBubble_0 = function (messages) {
    if (!messages.isEmpty()) {
      var minimized = elementById('infosMinimized');
      minimized.style.display = 'block';
      minimized.addEventListener('click', Messages$setInfoBubble$lambda(minimized, messages));
    }
    var messagesDiv = elementById(Messages$Companion_getInstance().MESSAGES_ID_0);
    addClickEventListener(elementById(ContentContainer$Companion_getInstance().HIDE_MESSAGES_HTML_ID), void 0, Messages$setInfoBubble$lambda_0(messagesDiv));
  };
  function Messages$Companion() {
    Messages$Companion_instance = this;
    this.MESSAGES_ID_0 = 'messages';
    this.HOLDER_CSS_CLASS_0 = 'holder';
    this.msgCounter_0 = 0;
    this.urlRegex_0 = Regex_init('http(?:s)?://[^ ]+');
  }
  function Messages$Companion$putMessagesInHolder$lambda$lambda(closure$holderId, this$Messages$, closure$messagesDiv) {
    return function (it) {
      var holder = elementById(closure$holderId);
      var $receiver = this$Messages$.getMessages_0(holder);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        closure$messagesDiv.insertBefore(element, holder);
      }
      return closure$messagesDiv.removeChild(holder);
    };
  }
  function Messages$Companion$putMessagesInHolder$lambda(closure$holderId, this$Messages$, closure$lastProcess, closure$timestamp, closure$messagesDiv) {
    return function ($receiver) {
      set_id($receiver, closure$holderId);
      this$Messages$.appendClose_0($receiver, closure$holderId);
      $receiver.unaryPlus_pdl1vz$("Click here to see messages of a previous '" + toProcessName(closure$lastProcess) + "' process - last message with timestamp " + closure$timestamp);
      set_title($receiver, 'Click to see the messages of a previous process.');
      addClickOnceEventListener(getUnderlyingHtmlElement($receiver), void 0, Messages$Companion$putMessagesInHolder$lambda$lambda(closure$holderId, this$Messages$, closure$messagesDiv));
      return Unit;
    };
  }
  Messages$Companion.prototype.putMessagesInHolder_1jdmkk$ = function (lastProcess) {
    var tmp$;
    var messagesDiv = elementById(this.MESSAGES_ID_0);
    var messages = this.getMessages_0(messagesDiv);
    if (!messages.isEmpty()) {
      var holderId = this.nextMessageId_0();
      var $receiver = asList(messages.get_za3lpa$(0).childNodes);
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (Kotlin.isType(element, HTMLDivElement) && equals(element.className, 'timestamp')) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      var timestamp = (Kotlin.isType(tmp$ = firstOrNull$result, HTMLDivElement) ? tmp$ : throwCCE()).innerText;
      var holder = div_0(get_create(document), this.HOLDER_CSS_CLASS_0, Messages$Companion$putMessagesInHolder$lambda(holderId, this, lastProcess, timestamp, messagesDiv));
      holder.className = this.HOLDER_CSS_CLASS_0;
      messagesDiv.insertBefore(holder, messages.get_za3lpa$(0));
      var tmp$_1;
      tmp$_1 = messages.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        holder.appendChild(element_0);
      }
    }
  };
  Messages$Companion.prototype.getMessages_0 = function (node) {
    var $receiver = asList(node.childNodes);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, HTMLDivElement) && !equals(element.className, this.HOLDER_CSS_CLASS_0))
        destination.add_11rb$(element);
    }
    return destination;
  };
  Messages$Companion.prototype.showSuccess_4wem9b$ = function (message, autoCloseAfterMs) {
    if (autoCloseAfterMs === void 0)
      autoCloseAfterMs = null;
    return this.showMessageOfType_0('success', 'check_circle', message, autoCloseAfterMs);
  };
  Messages$Companion.prototype.showInfo_4wem9b$ = function (message, autoCloseAfterMs) {
    if (autoCloseAfterMs === void 0)
      autoCloseAfterMs = null;
    return this.showMessageOfType_0('info', 'info_outline', message, autoCloseAfterMs);
  };
  Messages$Companion.prototype.showWarning_4wem9b$ = function (message, autoCloseAfterMs) {
    if (autoCloseAfterMs === void 0)
      autoCloseAfterMs = null;
    return this.showMessageOfType_0('warning', 'warning', message, autoCloseAfterMs);
  };
  Messages$Companion.prototype.showError_61zpoe$ = function (message) {
    return this.showMessageOfType_0('error', 'error_outline', message, null);
  };
  function Messages$Companion$showMessageOfType$lambda$lambda(this$Messages$) {
    return function ($receiver) {
      var now = new Date();
      var year = now.getFullYear().toString().substring(2);
      var month = this$Messages$.padWithZero_0(now.getMonth() + 1 | 0);
      var day = this$Messages$.padWithZero_0(now.getDay());
      var hours = now.getHours();
      var minutes = this$Messages$.padWithZero_0(now.getMinutes());
      var seconds = this$Messages$.padWithZero_0(now.getSeconds());
      $receiver.unaryPlus_pdl1vz$(year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds);
      return Unit;
    };
  }
  function Messages$Companion$showMessageOfType$lambda$lambda_0(closure$icon) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$icon);
      return Unit;
    };
  }
  function Messages$Companion$showMessageOfType$lambda$lambda_1(closure$message, this$Messages$) {
    return function ($receiver) {
      this$Messages$.convertNewLinesToBrTabToTwoSpacesAndParseUrls_2pgskx$($receiver, closure$message);
      return Unit;
    };
  }
  function Messages$Companion$showMessageOfType$lambda$lambda_2(closure$msgId, this$Messages$) {
    return function () {
      this$Messages$.closeMessage_0(closure$msgId);
      return Unit;
    };
  }
  function Messages$Companion$showMessageOfType$lambda(this$Messages$, closure$icon, closure$message, closure$autoCloseAfterMs) {
    return function ($receiver) {
      var msgId = this$Messages$.nextMessageId_0();
      set_id($receiver, msgId);
      this$Messages$.appendClose_0($receiver, msgId);
      div($receiver, 'timestamp', Messages$Companion$showMessageOfType$lambda$lambda(this$Messages$));
      i($receiver, 'material-icons', Messages$Companion$showMessageOfType$lambda$lambda_0(closure$icon));
      div($receiver, 'text', Messages$Companion$showMessageOfType$lambda$lambda_1(closure$message, this$Messages$));
      if (closure$autoCloseAfterMs != null) {
        window.setTimeout(Messages$Companion$showMessageOfType$lambda$lambda_2(msgId, this$Messages$), closure$autoCloseAfterMs);
      }
      return Unit;
    };
  }
  Messages$Companion.prototype.showMessageOfType_0 = function (type, icon, message, autoCloseAfterMs) {
    var messages = elementById(this.MESSAGES_ID_0);
    var div = div_0(get_create(document), type, Messages$Companion$showMessageOfType$lambda(this, icon, message, autoCloseAfterMs));
    var hideMessagesButton = elementById(ContentContainer$Companion_getInstance().HIDE_MESSAGES_HTML_ID);
    messages.insertBefore(div, hideMessagesButton.nextSibling);
    return div;
  };
  Messages$Companion.prototype.nextMessageId_0 = function () {
    var tmp$;
    return 'msg' + (tmp$ = this.msgCounter_0, this.msgCounter_0 = tmp$ + 1 | 0, tmp$);
  };
  function Messages$Companion$appendClose$lambda$lambda(closure$msgId, this$Messages$) {
    return function (it) {
      this$Messages$.closeMessage_0(closure$msgId);
      return Unit;
    };
  }
  function Messages$Companion$appendClose$lambda(closure$msgId, this$Messages$) {
    return function ($receiver) {
      set_title($receiver, 'close this message');
      var span = getUnderlyingHtmlElement($receiver);
      span.addEventListener('click', Messages$Companion$appendClose$lambda$lambda(closure$msgId, this$Messages$));
      return Unit;
    };
  }
  Messages$Companion.prototype.appendClose_0 = function ($receiver, msgId) {
    span($receiver, 'close', Messages$Companion$appendClose$lambda(msgId, this));
  };
  Messages$Companion.prototype.padWithZero_0 = function (int) {
    return padStart(int.toString(), 2, 48);
  };
  Messages$Companion.prototype.closeMessage_0 = function (msgId) {
    var tmp$;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$_0, tmp$_1;
      tmp$_0 = document.getElementById(msgId);
      if (tmp$_0 == null) {
        elementByIdOrNull$result = null;
        break elementByIdOrNull$break;
      }
      var element = tmp$_0;
      if (!Kotlin.isType(element, HTMLElement)) {
        var message = 'element with ' + msgId + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLElement)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      elementByIdOrNull$result = Kotlin.isType(tmp$_1 = element, HTMLElement) ? tmp$_1 : throwCCE();
    }
     while (false);
    (tmp$ = elementByIdOrNull$result) != null ? (tmp$.remove(), Unit) : null;
  };
  Messages$Companion.prototype.showThrowableAndThrow_tcv7n7$ = function (t) {
    this.showThrowable_tcv7n7$(t);
    throw t;
  };
  Messages$Companion.prototype.showThrowable_tcv7n7$ = function (t) {
    this.showError_61zpoe$(this.turnThrowableIntoMessage_0(t));
  };
  Messages$Companion.prototype.turnThrowableIntoMessage_0 = function (t) {
    var sb = StringBuilder_init();
    this.appendThrowable_0(sb, t);
    var cause = t.cause;
    while (cause != null) {
      this.appendThrowable_0(sb.append_gw00v9$('\n\nCause: '), cause);
      cause = cause.cause;
    }
    return sb.toString();
  };
  Messages$Companion.prototype.appendThrowable_0 = function ($receiver, t) {
    var tmp$, tmp$_0, tmp$_1;
    var nullableStack = typeof (tmp$ = t.stack) === 'string' ? tmp$ : null;
    if (nullableStack != null) {
      var stackWithMessage = this.getStackWithMessage_0(t, nullableStack);
      var firstNewLine = indexOf(stackWithMessage, '   ');
      if (firstNewLine >= 0) {
        $receiver.append_gw00v9$(stackWithMessage.substring(0, firstNewLine)).append_s8itvh$(10);
        tmp$_0 = stackWithMessage.substring(firstNewLine);
      }
       else {
        tmp$_0 = stackWithMessage;
      }
      var stack = tmp$_0;
      tmp$_1 = $receiver.append_gw00v9$(replace(stack, '   ', '\t'));
    }
     else {
      tmp$_1 = $receiver.append_gw00v9$(get_js(Kotlin.getKClassFromExpression(t)).name + ': ' + toString(t.message));
    }
    return tmp$_1;
  };
  Messages$Companion.prototype.withoutEndingNewLine_0 = function (text) {
    if (text == null)
      return '';
    return endsWith(text, '\n') ? substringBeforeLast(text, '\n') : text;
  };
  Messages$Companion.prototype.getStackWithMessage_0 = function (t, nullableStack) {
    var tmp$;
    if (startsWith(nullableStack, 'captureStack')) {
      var firstNewLine = indexOf_0(nullableStack, 10);
      var tmp$_0 = Kotlin.getKClassFromExpression(t).simpleName + ': ' + this.withoutEndingNewLine_0(t.message) + '\n   ';
      var $receiver = this.withoutEndingNewLine_0(nullableStack);
      var startIndex = firstNewLine + 1 | 0;
      tmp$ = tmp$_0 + joinToString(split($receiver.substring(startIndex), Kotlin.charArrayOf(10)), '\n   ');
    }
     else if (isBlank(nullableStack))
      tmp$ = t.toString();
    else
      tmp$ = nullableStack;
    return tmp$;
  };
  Messages$Companion.prototype.convertNewLinesToBrTabToTwoSpacesAndParseUrls_2pgskx$ = function ($receiver, message) {
    var tmp$;
    if (message.length === 0)
      return;
    var messages = split_0(message, ['\n']);
    this.convertTabToTwoSpacesAndUrlToLinks_0($receiver, messages.get_za3lpa$(0));
    tmp$ = messages.size;
    for (var i = 1; i < tmp$; i++) {
      get_br($receiver);
      this.convertTabToTwoSpacesAndUrlToLinks_0($receiver, messages.get_za3lpa$(i));
    }
  };
  function Messages$Companion$convertTabToTwoSpacesAndUrlToLinks$lambda(closure$url) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$url);
      return Unit;
    };
  }
  Messages$Companion.prototype.convertTabToTwoSpacesAndUrlToLinks_0 = function ($receiver, message) {
    var matchResult = this.urlRegex_0.find_905azu$(message);
    if (matchResult != null) {
      var index = 0;
      do {
        if (matchResult == null) {
          throw ConcurrentModificationException_init('matchResult was suddenly null, this class is not thread-safe');
        }
        var match = matchResult;
        var startIndex = index;
        var endIndex = match.range.start;
        this.convertTabToTwoSpaces_0($receiver, message.substring(startIndex, endIndex));
        var tmp$ = this.determineUrlAndNextIndex_0(match);
        var url = tmp$.component1()
        , nextIndex = tmp$.component2();
        a($receiver, url, void 0, void 0, Messages$Companion$convertTabToTwoSpacesAndUrlToLinks$lambda(url));
        index = nextIndex;
        matchResult = match.next();
      }
       while (matchResult != null);
      var startIndex_0 = index;
      this.convertTabToTwoSpaces_0($receiver, message.substring(startIndex_0));
    }
     else {
      this.convertTabToTwoSpaces_0($receiver, message);
    }
  };
  function Messages$Companion$convertTabToTwoSpaces$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('&nbsp;&nbsp;');
    return Unit;
  }
  Messages$Companion.prototype.convertTabToTwoSpaces_0 = function ($receiver, content) {
    var currentIndex = 0;
    do {
      var index = indexOf_0(content, 9, currentIndex);
      if (index < 0)
        break;
      var startIndex = currentIndex;
      $receiver.unaryPlus_pdl1vz$(content.substring(startIndex, index));
      unsafe($receiver, Messages$Companion$convertTabToTwoSpaces$lambda);
      currentIndex = index + 1 | 0;
    }
     while (true);
    var startIndex_0 = currentIndex;
    $receiver.unaryPlus_pdl1vz$(content.substring(startIndex_0));
  };
  Messages$Companion.prototype.determineUrlAndNextIndex_0 = function (match) {
    var tmp$;
    var tmpUrl = match.value;
    if (endsWith(tmpUrl, '.')) {
      var endIndex = tmpUrl.length - 1 | 0;
      tmp$ = to(tmpUrl.substring(0, endIndex), match.range.endInclusive);
    }
     else {
      tmp$ = to(tmpUrl, match.range.endInclusive + 1 | 0);
    }
    return tmp$;
  };
  Messages$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Messages$Companion_instance = null;
  function Messages$Companion_getInstance() {
    if (Messages$Companion_instance === null) {
      new Messages$Companion();
    }
    return Messages$Companion_instance;
  }
  Messages.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Messages',
    interfaces: []
  };
  function Pipeline(modifiableState, menu, processStarter) {
    Pipeline$Companion_getInstance();
    this.modifiableState_0 = modifiableState;
    this.menu_0 = menu;
    this.contextMenu_0 = new ContextMenu(this.modifiableState_0, this.menu_0, processStarter);
    this.setUpProjects_0();
    new Toggler(this.modifiableState_0, this.menu_0);
    this.contextMenu_0.setUpOnContextMenuForProjectsAndCommands();
  }
  function Pipeline$setUpProjects$lambda$lambda(closure$project, this$Pipeline, closure$set, closure$itr, closure$level) {
    return function ($receiver) {
      if (!closure$project.isSubmodule) {
        this$Pipeline.project_0($receiver, closure$project);
      }
      closure$set.add_11rb$(closure$project.id);
      while (hasNextOnTheSameLevel(closure$itr, closure$level.v)) {
        var nextProject = closure$itr.next();
        if (!nextProject.isSubmodule) {
          this$Pipeline.project_0($receiver, nextProject);
        }
        closure$set.add_11rb$(nextProject.id);
      }
      return Unit;
    };
  }
  function Pipeline$setUpProjects$lambda(closure$releasePlan, closure$set, this$Pipeline) {
    return function ($receiver) {
      var itr = toPeekingIterator(closure$releasePlan.iterator());
      var level = {v: null};
      if (itr.hasNext() && equals(itr.peek().id, maven.syntheticRoot)) {
        closure$set.add_11rb$(itr.next().id);
      }
      while (itr.hasNext()) {
        var project = itr.next();
        level.v = project.level;
        div_1($receiver, 'level l' + level.v, Pipeline$setUpProjects$lambda$lambda(project, this$Pipeline, closure$set, itr, level));
      }
      return Unit;
    };
  }
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  Pipeline.prototype.setUpProjects_0 = function () {
    var releasePlan = this.modifiableState_0.releasePlan;
    var set = HashSet_init();
    var pipeline = elementById(Pipeline$Companion_getInstance().PIPELINE_HTML_ID_0);
    pipeline.state = releasePlan.state;
    pipeline.typeOfRun = releasePlan.typeOfRun;
    append(pipeline, Pipeline$setUpProjects$lambda(releasePlan, set, this));
    this.updateStatus_0(releasePlan, set);
  };
  function Pipeline$updateStatus$lambda(it) {
    return it.identifier;
  }
  Pipeline.prototype.updateStatus_0 = function (releasePlan, set) {
    var involvedProjects = set.size;
    var status = elementById('status');
    status.innerText = 'Projects involved: ' + involvedProjects;
    var $receiver = releasePlan.getProjects();
    var count$result;
    count$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        count$result = 0;
        break count$break;
      }
      var count = 0;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.isSubmodule) {
          count = count + 1 | 0;
        }
      }
      count$result = count;
    }
     while (false);
    var numOfSubmodules = count$result;
    var numOfMultiModules = involvedProjects - numOfSubmodules | 0;
    status.title = 'multi-module/single Projects: ' + numOfMultiModules + ', submodules: ' + numOfSubmodules;
    if (involvedProjects !== releasePlan.getNumberOfProjects()) {
      Messages$Companion_getInstance().showError_61zpoe$(trimMargin('\n' + '                    |Not all dependent projects are involved in the process.' + '\n' + '                    |Please report a bug: ' + GITHUB_NEW_ISSUE + '\n' + '                    |The following projects where left out of the analysis:' + '\n' + '                    |' + joinToString(minus(releasePlan.getProjectIds(), set), '\n', void 0, void 0, void 0, void 0, Pipeline$updateStatus$lambda) + '\n' + '                '));
    }
  };
  function Pipeline$project$lambda$lambda$lambda(closure$project, this$Pipeline) {
    return function ($receiver) {
      this$Pipeline.projectId_0($receiver, closure$project.id);
      return Unit;
    };
  }
  function Pipeline$project$lambda$lambda(closure$project, this$Pipeline) {
    return function ($receiver) {
      span($receiver, void 0, Pipeline$project$lambda$lambda$lambda(closure$project, this$Pipeline));
      return Unit;
    };
  }
  function Pipeline$project$lambda$lambda_0(closure$identifier, closure$project, this$Pipeline) {
    return function ($receiver) {
      textFieldReadOnlyWithLabel($receiver, closure$identifier + ':currentVersion', 'Current Version', closure$project.currentVersion, this$Pipeline.menu_0);
      textFieldWithLabel($receiver, closure$identifier + ':releaseVersion', 'Release Version', closure$project.releaseVersion, this$Pipeline.menu_0);
      return Unit;
    };
  }
  function Pipeline$project$lambda(closure$project, this$Pipeline) {
    return function ($receiver) {
      getUnderlyingHtmlElement($receiver).project = closure$project;
      var hasCommands = !closure$project.commands.isEmpty();
      set_classes($receiver, setOf([Pipeline$Companion_getInstance().PROJECT_CSS_CLASS_0, closure$project.isSubmodule ? 'submodule' : '', !hasCommands ? 'withoutCommands' : '', this$Pipeline.modifiableState_0.releasePlan.hasSubmodules_lljhqa$(closure$project.id) ? 'withSubmodules' : '']));
      var identifier = closure$project.id.identifier;
      set_id($receiver, identifier);
      div($receiver, 'title', Pipeline$project$lambda$lambda(closure$project, this$Pipeline));
      if (!closure$project.isSubmodule) {
        div($receiver, 'fields', Pipeline$project$lambda$lambda_0(identifier, closure$project, this$Pipeline));
        this$Pipeline.contextMenu_0.createProjectContextMenu_7h3q4c$($receiver, closure$project);
      }
      this$Pipeline.commands_0($receiver, closure$project);
      if (closure$project.isSubmodule) {
        this$Pipeline.submodules_0($receiver, closure$project.id);
      }
      return Unit;
    };
  }
  Pipeline.prototype.project_0 = function ($receiver, project) {
    div($receiver, void 0, Pipeline$project$lambda(project, this));
  };
  Pipeline.prototype.projectId_0 = function ($receiver, id) {
    if (Kotlin.isType(id, MavenProjectId)) {
      set_title($receiver, id.identifier);
      $receiver.unaryPlus_pdl1vz$(id.artifactId);
    }
     else {
      $receiver.unaryPlus_pdl1vz$(id.identifier);
    }
  };
  Pipeline.prototype.projectId_1 = function ($receiver, id) {
    if (Kotlin.isType(id, MavenProjectId)) {
      set_title($receiver, id.identifier);
      $receiver.value = id.artifactId;
    }
     else {
      $receiver.value = id.identifier;
    }
  };
  function Pipeline$commands$lambda$lambda$lambda(closure$commandId, closure$command) {
    return function ($receiver) {
      set_id($receiver, closure$commandId + Pipeline$Companion_getInstance().TITLE_SUFFIX);
      $receiver.unaryPlus_pdl1vz$(get_simpleNameNonNull(Kotlin.getKClassFromExpression(closure$command)));
      return Unit;
    };
  }
  function Pipeline$commands$lambda$lambda$lambda_0(closure$commandId, closure$project, closure$index, closure$command, this$Pipeline) {
    return function ($receiver) {
      this$Pipeline.fieldsForCommand_0($receiver, closure$commandId, closure$project, closure$index, closure$command);
      return Unit;
    };
  }
  function Pipeline$commands$lambda$lambda(closure$project, closure$index, closure$command, this$Pipeline) {
    return function ($receiver) {
      var commandId = Pipeline$Companion_getInstance().getCommandId_xgsuvp$(closure$project, closure$index);
      set_id($receiver, commandId);
      set_classes($receiver, setOf(['command', Pipeline$Companion_getInstance().stateToCssClass_0(closure$command.state)]));
      div($receiver, 'commandTitle', Pipeline$commands$lambda$lambda$lambda(commandId, closure$command));
      div($receiver, 'fields', Pipeline$commands$lambda$lambda$lambda_0(commandId, closure$project, closure$index, closure$command, this$Pipeline));
      var div_0 = getUnderlyingHtmlElement($receiver);
      div_0.state = closure$command.state;
      if (Kotlin.isType(closure$command, JenkinsCommand)) {
        div_0.buildUrl = closure$command.buildUrl;
      }
      return Unit;
    };
  }
  Pipeline.prototype.commands_0 = function ($receiver, project) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = project.commands.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      div($receiver, void 0, Pipeline$commands$lambda$lambda(project, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item, this));
    }
  };
  Pipeline.prototype.fieldsForCommand_0 = function ($receiver, idPrefix, project, index, command) {
    this.commandToggle_0($receiver, command, idPrefix);
    this.commandState_0($receiver, idPrefix, command);
    this.contextMenu_0.createCommandContextMenu_1yrdz4$($receiver, idPrefix, project, index);
    if (Kotlin.isType(command, JenkinsSingleMavenReleaseCommand))
      this.appendJenkinsMavenReleasePluginField_0($receiver, idPrefix, command);
    else if (Kotlin.isType(command, JenkinsMultiMavenReleasePlugin))
      this.appendJenkinsMultiMavenReleasePluginFields_0($receiver, idPrefix, project.id, command);
    else if (Kotlin.isType(command, JenkinsUpdateDependency))
      this.appendJenkinsUpdateDependencyField_0($receiver, idPrefix, command);
    else
      Messages$Companion_getInstance().showThrowableAndThrow_tcv7n7$(IllegalStateException_init('Unknown command found, cannot display its fields.' + '\n' + command));
  };
  Pipeline.prototype.commandToggle_0 = function ($receiver, command, idPrefix) {
    var cssClass = Kotlin.isType(command, ReleaseCommand) ? 'release' : '';
    var isNotDeactivated = !Kotlin.isType(command.state, CommandState$Deactivated);
    this.toggle_0($receiver, idPrefix + Pipeline$Companion_getInstance().DEACTIVATE_SUFFIX, isNotDeactivated ? 'Click to deactivate command' : 'Click to activate command', isNotDeactivated, command.state === CommandState.Disabled, cssClass);
  };
  function Pipeline$commandState$lambda$lambda(closure$idPrefix) {
    return function ($receiver) {
      span($receiver);
      set_id($receiver, closure$idPrefix + ':status.icon');
      return Unit;
    };
  }
  function Pipeline$commandState$lambda(closure$idPrefix, closure$command) {
    return function ($receiver) {
      var tmp$;
      set_id($receiver, closure$idPrefix + Pipeline$Companion_getInstance().STATE_SUFFIX);
      i($receiver, 'material-icons', Pipeline$commandState$lambda$lambda(closure$idPrefix));
      if (Kotlin.isType(closure$command, JenkinsCommand)) {
        $receiver.href = (tmp$ = closure$command.buildUrl) != null ? tmp$ : '';
      }
      set_title($receiver, Pipeline$Companion_getInstance().stateToTitle_du2eex$(closure$command.state));
      return Unit;
    };
  }
  Pipeline.prototype.commandState_0 = function ($receiver, idPrefix, command) {
    a($receiver, void 0, void 0, 'state', Pipeline$commandState$lambda(idPrefix, command));
  };
  Pipeline.prototype.appendJenkinsMavenReleasePluginField_0 = function ($receiver, idPrefix, command) {
    this.fieldNextDevVersion_0($receiver, idPrefix, command, command.nextDevVersion);
  };
  function Pipeline$fieldNextDevVersion$lambda(closure$command) {
    return function ($receiver) {
      if (closure$command.state === CommandState.Disabled) {
        $receiver.disabled = true;
      }
      return Unit;
    };
  }
  Pipeline.prototype.fieldNextDevVersion_0 = function ($receiver, idPrefix, command, nextDevVersion) {
    textFieldWithLabel_0($receiver, idPrefix + Pipeline$Companion_getInstance().NEXT_DEV_VERSION_SUFFIX, 'Next Dev Version', nextDevVersion, this.menu_0, Pipeline$fieldNextDevVersion$lambda(command));
  };
  Pipeline.prototype.appendJenkinsMultiMavenReleasePluginFields_0 = function ($receiver, idPrefix, projectId, command) {
    this.fieldNextDevVersion_0($receiver, idPrefix, command, command.nextDevVersion);
    this.submodules_0($receiver, projectId);
  };
  function Pipeline$submodules$lambda(closure$submodules, this$Pipeline) {
    return function ($receiver) {
      var $receiver_0 = closure$submodules;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$Pipeline_0 = this$Pipeline;
        this$Pipeline_0.project_0($receiver, this$Pipeline_0.modifiableState_0.releasePlan.getProject_lljhqa$(element));
      }
      return Unit;
    };
  }
  Pipeline.prototype.submodules_0 = function ($receiver, projectId) {
    var submodules = this.modifiableState_0.releasePlan.getSubmodules_lljhqa$(projectId);
    if (submodules.isEmpty())
      return;
    div($receiver, 'submodules', Pipeline$submodules$lambda(submodules, this));
  };
  function Pipeline$appendJenkinsUpdateDependencyField$lambda(closure$command, this$Pipeline) {
    return function ($receiver) {
      this$Pipeline.projectId_1($receiver, closure$command.projectId);
      return Unit;
    };
  }
  Pipeline.prototype.appendJenkinsUpdateDependencyField_0 = function ($receiver, idPrefix, command) {
    textFieldReadOnlyWithLabel($receiver, idPrefix + ':groupId', 'Dependency', command.projectId.identifier, this.menu_0, Pipeline$appendJenkinsUpdateDependencyField$lambda(command, this));
  };
  function Pipeline$toggle$lambda$lambda(closure$idCheckbox, closure$checked, closure$disabled) {
    return function ($receiver) {
      set_id($receiver, closure$idCheckbox);
      $receiver.checked = (closure$checked && !closure$disabled);
      $receiver.disabled = closure$disabled;
      return Unit;
    };
  }
  function Pipeline$toggle$lambda$lambda_0(closure$idCheckbox, closure$title, closure$disabled) {
    return function ($receiver) {
      set_id($receiver, closure$idCheckbox + Pipeline$Companion_getInstance().SLIDER_SUFFIX);
      set_title($receiver, closure$title);
      if (closure$disabled) {
        set_title($receiver, Pipeline$Companion_getInstance().STATE_DISABLED_0);
      }
      return Unit;
    };
  }
  function Pipeline$toggle$lambda(closure$checkboxCssClass, closure$idCheckbox, closure$checked, closure$disabled, closure$title) {
    return function ($receiver) {
      checkBoxInput($receiver, void 0, void 0, void 0, closure$checkboxCssClass, Pipeline$toggle$lambda$lambda(closure$idCheckbox, closure$checked, closure$disabled));
      span($receiver, 'slider', Pipeline$toggle$lambda$lambda_0(closure$idCheckbox, closure$title, closure$disabled));
      return Unit;
    };
  }
  Pipeline.prototype.toggle_0 = function ($receiver, idCheckbox, title, checked, disabled, checkboxCssClass) {
    if (checkboxCssClass === void 0)
      checkboxCssClass = '';
    label($receiver, 'toggle', Pipeline$toggle$lambda(checkboxCssClass, idCheckbox, checked, disabled, title));
  };
  function Pipeline$Companion() {
    Pipeline$Companion_instance = this;
    this.PIPELINE_HTML_ID_0 = 'pipeline';
    this.PROJECT_CSS_CLASS_0 = 'project';
    this.STATE_WAITING_0 = 'Wait for dependent projects to complete.';
    this.STATE_READY_0 = 'Ready to be queued for execution.';
    this.STATE_READY_TO_BE_TRIGGER_0 = 'Ready to be re-triggered.';
    this.STATE_READY_TO_RE_POLL_0 = 'Ready to be re-polled.';
    this.STATE_QUEUEING_0 = 'Currently queueing the job.';
    this.STATE_RE_POLLING_0 = 'Command is being re-polled.';
    this.STATE_IN_PROGRESS_0 = 'Command is running.';
    this.STATE_SUCCEEDED_0 = 'Command completed successfully.';
    this.STATE_FAILED_0 = 'Command failed - click to navigate to the console or the queue item of the job.';
    this.STATE_TIMEOUT_0 = 'Command run into a timeout - click to navigate to the console or the queue item of the job.';
    this.STATE_DEACTIVATED_0 = 'Currently deactivated, click to activate.';
    this.STATE_DISABLED_0 = 'Command disabled, cannot be reactivated.';
    this.DEACTIVATE_SUFFIX = ':deactivate';
    this.SLIDER_SUFFIX = ':slider';
    this.NEXT_DEV_VERSION_SUFFIX = ':nextDevVersion';
    this.STATE_SUFFIX = ':state';
    this.TITLE_SUFFIX = ':title';
  }
  Pipeline$Companion.prototype.getCommandId_xgsuvp$ = function (project, index) {
    return this.getCommandId_o8feeo$(project.id, index);
  };
  Pipeline$Companion.prototype.getCommandId_o8feeo$ = function (projectId, index) {
    return projectId.identifier + ':' + index;
  };
  Pipeline$Companion.prototype.getCommand_xgsuvp$ = function (project, index) {
    return this.getCommand_o8feeo$(project.id, index);
  };
  Pipeline$Companion.prototype.getCommand_o8feeo$ = function (projectId, index) {
    return elementById(this.getCommandId_o8feeo$(projectId, index));
  };
  Pipeline$Companion.prototype.getToggle_xgsuvp$ = function (project, index) {
    return getCheckbox(this.getCommandId_o8feeo$(project.id, index) + this.DEACTIVATE_SUFFIX);
  };
  Pipeline$Companion.prototype.getCommandState_o8feeo$ = function (projectId, index) {
    return this.getCommandState_61zpoe$(this.getCommandId_o8feeo$(projectId, index));
  };
  Pipeline$Companion.prototype.getCommandState_61zpoe$ = function (idPrefix) {
    var tmp$;
    return Kotlin.isType(tmp$ = elementById(idPrefix).state, CommandState) ? tmp$ : throwCCE();
  };
  Pipeline$Companion.prototype.changeStateOfCommandAndAddBuildUrl_q143v3$ = function (project, index, newState, buildUrl) {
    this.changeStateOfCommandAndAddBuildUrlIfSet_pmaq34$(project, index, newState, buildUrl);
  };
  Pipeline$Companion.prototype.changeStateOfCommandAndAddBuildUrlIfSet_pmaq34$ = function (project, index, newState, buildUrl) {
    this.changeStateOfCommand_fho14z$(project, index, newState);
    if (buildUrl != null) {
      this.changeBuildUrlOfCommand_ivpk77$(project, index, buildUrl);
    }
  };
  Pipeline$Companion.prototype.changeBuildUrlOfCommand_ivpk77$ = function (project, index, buildUrl) {
    var commandId = this.getCommandId_xgsuvp$(project, index);
    var id = commandId + this.STATE_SUFFIX;
    var tmp$;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$_0, tmp$_1;
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
      elementByIdOrNull$result = Kotlin.isType(tmp$_1 = element, HTMLAnchorElement) ? tmp$_1 : throwCCE();
    }
     while (false);
    tmp$ = elementByIdOrNull$result;
    if (tmp$ == null) {
      throw IllegalStateException_init('no element found for id ' + id + ' (expected type ' + get_js(getKClass(HTMLAnchorElement)).name + ')');
    }
    tmp$.href = buildUrl;
    elementById(commandId).buildUrl = buildUrl;
  };
  function Pipeline$Companion$changeStateOfCommand$lambda(closure$newState, closure$project, closure$index, this$Pipeline$) {
    return function (previousState, commandId) {
      try {
        return previousState.checkTransitionAllowed_m86w84$(closure$newState);
      }
       catch (e) {
        if (Kotlin.isType(e, IllegalStateException)) {
          throw new IllegalStateException('Cannot change the state of the command to ' + getToStringRepresentation(closure$newState) + '.' + this$Pipeline$.failureDiagnosticsStateTransition_q143v3$(closure$project, closure$index, previousState, commandId), e);
        }
         else
          throw e;
      }
    };
  }
  Pipeline$Companion.prototype.changeStateOfCommand_fho14z$ = function (project, index, newState) {
    this.changeStateOfCommand_t14kxg$(project, index, newState, Pipeline$Companion$changeStateOfCommand$lambda(newState, project, index, this));
  };
  Pipeline$Companion.prototype.failureDiagnosticsStateTransition_q143v3$ = function (project, index, previousState, commandId) {
    var commandTitle = elementById(commandId + this.TITLE_SUFFIX);
    return '\n' + 'Project: ' + project.id.identifier + ('\n' + 'Command: ' + commandTitle.innerText + ' (' + (index + 1 | 0) + '. command)') + ('\n' + 'Current state: ' + getToStringRepresentation(previousState));
  };
  Pipeline$Companion.prototype.changeStateOfCommand_t14kxg$ = function (project, index, newState, checkStateTransition) {
    var tmp$;
    var commandId = this.getCommandId_xgsuvp$(project, index);
    var command = elementById(commandId);
    var dynCommand = command;
    var previousState = Kotlin.isType(tmp$ = dynCommand.state, CommandState) ? tmp$ : throwCCE();
    dynCommand.state = checkStateTransition(previousState, commandId);
    removeClass(command, [this.stateToCssClass_0(previousState)]);
    addClass(command, [this.stateToCssClass_0(newState)]);
    elementById(commandId + this.STATE_SUFFIX).title = this.stateToTitle_du2eex$(newState);
  };
  Pipeline$Companion.prototype.getReleaseState = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.getPipelineAsDynamic_0().state, ReleaseState) ? tmp$ : throwCCE();
  };
  Pipeline$Companion.prototype.getTypeOfRun = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.getPipelineAsDynamic_0().typeOfRun, TypeOfRun) ? tmp$ : throwCCE();
  };
  Pipeline$Companion.prototype.changeReleaseState_g1wt0g$ = function (newState) {
    this.getPipelineAsDynamic_0().state = this.getReleaseState().checkTransitionAllowed_g1wt0g$(newState);
  };
  Pipeline$Companion.prototype.changeTypeOfRun_1jdmkk$ = function (newTypeOfRun) {
    this.getPipelineAsDynamic_0().typeOfRun = newTypeOfRun;
  };
  Pipeline$Companion.prototype.getPipelineAsDynamic_0 = function () {
    return elementById(this.PIPELINE_HTML_ID_0);
  };
  Pipeline$Companion.prototype.stateToCssClass_0 = function (state) {
    if (Kotlin.isType(state, CommandState$Waiting))
      return 'waiting';
    else if (equals(state, CommandState.Ready))
      return 'ready';
    else if (equals(state, CommandState.ReadyToReTrigger))
      return 'readyToReTrigger';
    else if (equals(state, CommandState.ReadyToRePoll))
      return 'readyToRePoll';
    else if (equals(state, CommandState.Queueing) || equals(state, CommandState.StillQueueing))
      return 'queueing';
    else if (equals(state, CommandState.RePolling))
      return 'rePolling';
    else if (equals(state, CommandState.InProgress))
      return 'inProgress';
    else if (equals(state, CommandState.Succeeded))
      return 'succeeded';
    else if (equals(state, CommandState.Failed))
      return 'failed';
    else if (Kotlin.isType(state, CommandState$Timeout))
      return 'timeout';
    else if (Kotlin.isType(state, CommandState$Deactivated))
      return 'deactivated';
    else if (equals(state, CommandState.Disabled))
      return 'disabled';
    else
      return Kotlin.noWhenBranchMatched();
  };
  Pipeline$Companion.prototype.stateToTitle_du2eex$ = function (state) {
    if (Kotlin.isType(state, CommandState$Waiting))
      return this.STATE_WAITING_0;
    else if (equals(state, CommandState.Ready))
      return this.STATE_READY_0;
    else if (equals(state, CommandState.ReadyToReTrigger))
      return this.STATE_READY_TO_BE_TRIGGER_0;
    else if (equals(state, CommandState.ReadyToRePoll))
      return this.STATE_READY_TO_RE_POLL_0;
    else if (equals(state, CommandState.Queueing) || equals(state, CommandState.StillQueueing))
      return this.STATE_QUEUEING_0;
    else if (equals(state, CommandState.RePolling))
      return this.STATE_RE_POLLING_0;
    else if (equals(state, CommandState.InProgress))
      return this.STATE_IN_PROGRESS_0;
    else if (equals(state, CommandState.Succeeded))
      return this.STATE_SUCCEEDED_0;
    else if (equals(state, CommandState.Failed))
      return this.STATE_FAILED_0;
    else if (Kotlin.isType(state, CommandState$Timeout))
      return this.STATE_TIMEOUT_0;
    else if (Kotlin.isType(state, CommandState$Deactivated))
      return this.STATE_DEACTIVATED_0;
    else if (equals(state, CommandState.Disabled))
      return this.STATE_DISABLED_0;
    else
      return Kotlin.noWhenBranchMatched();
  };
  Pipeline$Companion.prototype.getSurroundingProject_61zpoe$ = function (id) {
    var tmp$;
    var node = elementById(id).parentNode;
    while (Kotlin.isType(node, HTMLElement) && !hasClass(node, this.PROJECT_CSS_CLASS_0)) {
      node = node.parentNode;
    }
    if (!(Kotlin.isType(node, HTMLElement) && hasClass(node, this.PROJECT_CSS_CLASS_0))) {
      var message = 'Cannot determine whether input field should be re-activated or not, could not get surrounding project';
      throw IllegalStateException_init(message.toString());
    }
    return Kotlin.isType(tmp$ = node.project, Project) ? tmp$ : throwCCE();
  };
  Pipeline$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Pipeline$Companion_instance = null;
  function Pipeline$Companion_getInstance() {
    if (Pipeline$Companion_instance === null) {
      new Pipeline$Companion();
    }
    return Pipeline$Companion_instance;
  }
  Pipeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pipeline',
    interfaces: []
  };
  function generateChangelog$lambda(it) {
    return !it.isSubmodule;
  }
  var Sequence = Kotlin.kotlin.sequences.Sequence;
  function filterIsInstance$lambda(typeClosure$R, isR) {
    return function (it) {
      return isR(it);
    };
  }
  function generateChangelog(releasePlan, appendProjectToCsv) {
    var sb = new StringBuilder('Project;Release Version;Next Dev Version;Other Commands\n');
    var tmp$;
    tmp$ = filter(asSequence_0(releasePlan.iterator()), generateChangelog$lambda).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver = asSequence(element.commands);
      var tmp$_0;
      var nextDevVersion = first(Kotlin.isType(tmp$_0 = filter($receiver, filterIsInstance$lambda(JenkinsNextDevReleaseCommand, Kotlin.isInstanceOf(JenkinsNextDevReleaseCommand))), Sequence) ? tmp$_0 : throwCCE()).nextDevVersion;
      appendProjectToCsv(sb, element, element.releaseVersion, nextDevVersion);
    }
    return sb.toString();
  }
  function appendProjectToCsv$lambda(it) {
    return !Kotlin.isType(it, JenkinsNextDevReleaseCommand);
  }
  function appendProjectToCsvExcel(sb, project, releaseVersion, nextDevVersion) {
    sb.append_gw00v9$(get_identifierForCsv(project.id)).append_s8itvh$(59).append_gw00v9$('=' + '"' + releaseVersion + '"').append_s8itvh$(59).append_gw00v9$('=' + '"' + nextDevVersion + '"').append_s8itvh$(59);
    var tmp$;
    tmp$ = filter(asSequence(project.commands), appendProjectToCsv$lambda).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      appendCommandToCsv(sb, element);
    }
    sb.append_s8itvh$(10);
    var releaseVersion_0 = project.releaseVersion;
    var submodules = Menu$Companion_getInstance().modifiableState.releasePlan.getSubmodules_lljhqa$(project.id);
    var tmp$_0;
    tmp$_0 = submodules.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      appendProjectToCsvWithoutWrapper(sb, Menu$Companion_getInstance().modifiableState.releasePlan.getProject_lljhqa$(element_0), releaseVersion_0, nextDevVersion);
    }
  }
  function appendProjectToCsvWithoutWrapper(sb, project, releaseVersion, nextDevVersion) {
    sb.append_gw00v9$(get_identifierForCsv(project.id)).append_s8itvh$(59).append_gw00v9$(releaseVersion).append_s8itvh$(59).append_gw00v9$(nextDevVersion).append_s8itvh$(59);
    var tmp$;
    tmp$ = filter(asSequence(project.commands), appendProjectToCsv$lambda).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      appendCommandToCsv(sb, element);
    }
    sb.append_s8itvh$(10);
    var releaseVersion_0 = project.releaseVersion;
    var submodules = Menu$Companion_getInstance().modifiableState.releasePlan.getSubmodules_lljhqa$(project.id);
    var tmp$_0;
    tmp$_0 = submodules.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      appendProjectToCsvWithoutWrapper(sb, Menu$Companion_getInstance().modifiableState.releasePlan.getProject_lljhqa$(element_0), releaseVersion_0, nextDevVersion);
    }
  }
  var appendProjectToCsv = wrapFunction(function () {
    function appendProjectToCsv$lambda(it) {
      return !Kotlin.isType(it, JenkinsNextDevReleaseCommand);
    }
    return function (sb, project, releaseVersion, nextDevVersion, appendProjectToCsv, wrapper) {
      sb.append_gw00v9$(get_identifierForCsv(project.id)).append_s8itvh$(59).append_gw00v9$(wrapper(releaseVersion)).append_s8itvh$(59).append_gw00v9$(wrapper(nextDevVersion)).append_s8itvh$(59);
      var tmp$;
      tmp$ = filter(asSequence(project.commands), appendProjectToCsv$lambda).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        appendCommandToCsv(sb, element);
      }
      sb.append_s8itvh$(10);
      var releaseVersion_0 = project.releaseVersion;
      var submodules = Menu$Companion_getInstance().modifiableState.releasePlan.getSubmodules_lljhqa$(project.id);
      var tmp$_0;
      tmp$_0 = submodules.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        appendProjectToCsv(sb, Menu$Companion_getInstance().modifiableState.releasePlan.getProject_lljhqa$(element_0), releaseVersion_0, nextDevVersion);
      }
    };
  });
  var appendSubmodulesToCsv = wrapFunction(function () {
    return function (sb, project, releaseVersion, nextDevVersion, appendProjectToCsv) {
      var submodules = Menu$Companion_getInstance().modifiableState.releasePlan.getSubmodules_lljhqa$(project.id);
      var tmp$;
      tmp$ = submodules.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        appendProjectToCsv(sb, Menu$Companion_getInstance().modifiableState.releasePlan.getProject_lljhqa$(element), releaseVersion, nextDevVersion);
      }
    };
  });
  function get_identifierForCsv($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver, MavenProjectId) ? tmp$ : null) != null ? tmp$_0.artifactId : null) != null ? tmp$_1 : $receiver.identifier;
  }
  function appendCommandToCsv(sb, command) {
    sb.append_gw00v9$(Kotlin.getKClassFromExpression(command).simpleName);
    if (Kotlin.isType(command, JenkinsUpdateDependency))
      sb.append_gw00v9$(' ' + get_identifierForCsv(command.projectId));
    else
      Messages$Companion_getInstance().showThrowableAndThrow_tcv7n7$(IllegalStateException_init('Unknown command found, cannot transform it to CSV.' + '\n' + command));
    sb.append_s8itvh$(59);
  }
  function Toggler(modifiableState, menu) {
    Toggler$Companion_getInstance();
    this.modifiableState_0 = modifiableState;
    this.menu_0 = menu;
    var tmp$;
    tmp$ = this.modifiableState_0.releasePlan.getProjects().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.registerCommandToggleEvents_0(element);
      this.registerReleaseUncheckEventForDependentsAndSubmodules_0(element);
    }
  }
  function Toggler$registerCommandToggleEvents$lambda$lambda(closure$project, closure$index, this$Toggler) {
    return function (it) {
      this$Toggler.toggleCommand_0(closure$project, closure$index, Toggler$Companion_getInstance().EVENT_RELEASE_TOGGLE_UNCHECKED_0);
      return Unit;
    };
  }
  function Toggler$registerCommandToggleEvents$lambda$lambda_0(closure$releasePlan) {
    return function (it) {
      return closure$releasePlan.getProject_lljhqa$(it);
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
  Toggler.prototype.registerCommandToggleEvents_0 = function (project) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = project.commands.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var toggle = Pipeline$Companion_getInstance().getToggle_xgsuvp$(project, index_0);
      if (Kotlin.isType(item, ReleaseCommand)) {
        addChangeEventListener(toggle, void 0, Toggler$registerCommandToggleEvents$lambda$lambda(project, index_0, this));
        this.disallowClickIfNotAllCommandsOrSubmodulesActive_0(project, toggle);
        var releasePlan = this.modifiableState_0.releasePlan;
        var projectAndSubmodules = plus(sequenceOf([project]), map(asSequence(releasePlan.getSubmodules_lljhqa$(project.id)), Toggler$registerCommandToggleEvents$lambda$lambda_0(releasePlan)));
        var tmp$_1;
        tmp$_1 = projectAndSubmodules.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          this.registerForProjectEvent_0(element, Toggler$Companion_getInstance().EVENT_TOGGLE_UNCHECKED_0, Toggler$registerCommandToggleEvents$lambda$lambda$lambda(toggle, this));
        }
      }
       else {
        addChangeEventListener(toggle, void 0, Toggler$registerCommandToggleEvents$lambda$lambda_1(project, index_0, this));
      }
      var slider = Toggler$Companion_getInstance().getSlider_36rv4q$(toggle);
      EventManager$Companion_getInstance().disableUnDisableForProcessStartAndEnd_fj1ece$(toggle, slider);
      EventManager$Companion_getInstance().unDisableForProcessContinueAndReset_fj1ece$(toggle, slider);
    }
  };
  Toggler.prototype.toggleCommand_0 = function (project, index, uncheckedEvent) {
    var tmp$, tmp$_0;
    var toggle = Pipeline$Companion_getInstance().getToggle_xgsuvp$(project, index);
    var command = Pipeline$Companion_getInstance().getCommand_xgsuvp$(project, index);
    var slider = Toggler$Companion_getInstance().getSlider_36rv4q$(toggle);
    if (!toggle.checked) {
      this.dispatchToggleEvent_0(project, toggle, uncheckedEvent);
      var previous = Kotlin.isType(tmp$ = command.state, CommandState) ? tmp$ : throwCCE();
      Pipeline$Companion_getInstance().changeStateOfCommand_fho14z$(project, index, new CommandState$Deactivated(previous));
      slider.title = 'Click to activate command.';
    }
     else {
      var oldState = Kotlin.isType(tmp$_0 = command.state, CommandState$Deactivated) ? tmp$_0 : throwCCE();
      Pipeline$Companion_getInstance().changeStateOfCommand_fho14z$(project, index, oldState.previous);
      slider.title = 'Click to deactivate command.';
    }
    this.menu_0.activateSaveButtonAndDeactivateOthers();
  };
  function Toggler$disallowClickIfNotAllCommandsOrSubmodulesActive$lambda(closure$toggle, closure$project, this$Toggler) {
    return function (e) {
      if (closure$toggle.checked && this$Toggler.notAllCommandsOrSubmodulesActive_0(closure$project, closure$toggle)) {
        e.preventDefault();
        Messages$Companion_getInstance().showInfo_4wem9b$('Cannot reactivate the ReleaseCommand for project ' + closure$project.id.identifier + ' ' + 'because some commands (of submodules) are deactivated.', 4000);
      }
      return Unit;
    };
  }
  Toggler.prototype.disallowClickIfNotAllCommandsOrSubmodulesActive_0 = function (project, toggle) {
    addClickEventListener(toggle, void 0, Toggler$disallowClickIfNotAllCommandsOrSubmodulesActive$lambda(toggle, project, this));
  };
  function Toggler$notAllCommandsOrSubmodulesActive$lambda(closure$toggle) {
    return function (it) {
      return !equals(it.id, closure$toggle.id);
    };
  }
  Toggler.prototype.notAllCommandsOrSubmodulesActive_0 = function (project, toggle) {
    return this.notAllCommandsOrSubmodulesActive_1(project, Toggler$notAllCommandsOrSubmodulesActive$lambda(toggle));
  };
  Toggler.prototype.notAllCommandsOrSubmodulesActive_1 = function (project, predicate) {
    return this.notAllCommandsActive_0(project, predicate) || this.notAllSubmodulesActive_0(project);
  };
  function Toggler$notAllCommandsActive$lambda(closure$project) {
    return function (index, f) {
      return Pipeline$Companion_getInstance().getToggle_xgsuvp$(closure$project, index);
    };
  }
  Toggler.prototype.notAllCommandsActive_0 = function (project, predicate) {
    var $receiver = filter(mapIndexed(asSequence(project.commands), Toggler$notAllCommandsActive$lambda(project)), predicate);
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
    var $receiver = this.modifiableState_0.releasePlan.getSubmodules_lljhqa$(project.id);
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
        var submodulesHasCommands = !hasClass(elementById(project.id.identifier), 'withoutCommands');
        if (submodulesHasCommands && this.notAllCommandsOrSubmodulesActive_1(this.modifiableState_0.releasePlan.getProject_lljhqa$(element), Toggler$notAllSubmodulesActive$lambda$lambda)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  function Toggler$registerReleaseUncheckEventForDependentsAndSubmodules$lambda$lambda$lambda(this$Toggler, closure$dependentId, closure$index) {
    return function (it) {
      this$Toggler.uncheck_0(Pipeline$Companion_getInstance().getToggle_xgsuvp$(this$Toggler.modifiableState_0.releasePlan.getProject_lljhqa$(closure$dependentId), closure$index));
      return Unit;
    };
  }
  Toggler.prototype.registerReleaseUncheckEventForDependentsAndSubmodules_0 = function (project) {
    if (!project.isSubmodule) {
      var projectIds = this.modifiableState_0.releasePlan.collectDependentsInclDependentsOfAllSubmodules_lljhqa$(project.id);
      var tmp$;
      tmp$ = projectIds.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var projectId = element.component1()
        , dependentId = element.component2();
        var $receiver = mapWithIndex_0(this.modifiableState_0.releasePlan.getProject_lljhqa$(dependentId).commands);
        var destination = ArrayList_init_0();
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          var predicate$result;
          var command = element_0.component2();
          if (Kotlin.isType(command, ReleaseCommand)) {
            predicate$result = false;
          }
           else {
            var state = command.state;
            predicate$result = (Kotlin.isType(state, CommandState$Waiting) && state.dependencies.contains_11rb$(projectId));
          }
          if (predicate$result)
            destination.add_11rb$(element_0);
        }
        var tmp$_1;
        tmp$_1 = destination.iterator();
        while (tmp$_1.hasNext()) {
          var element_1 = tmp$_1.next();
          var index = element_1.component1();
          this.registerForProjectEvent_0(project, Toggler$Companion_getInstance().EVENT_RELEASE_TOGGLE_UNCHECKED_0, Toggler$registerReleaseUncheckEventForDependentsAndSubmodules$lambda$lambda$lambda(this, dependentId, index));
        }
      }
    }
  };
  Toggler.prototype.uncheck_0 = function ($receiver) {
    this.changeChecked_0($receiver, false);
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
  }
  Toggler$Companion.prototype.getSlider_36rv4q$ = function (toggle) {
    return elementById(toggle.id + Pipeline$Companion_getInstance().SLIDER_SUFFIX);
  };
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
  function ContentContainer(modifiableState, menu, processStarter) {
    ContentContainer$Companion_getInstance();
    this.menu_0 = menu;
    var tmp$, tmp$_0, tmp$_1;
    var releasePlan = modifiableState.releasePlan;
    var rootProjectId = releasePlan.rootProjectId;
    var htmlTitle = (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = rootProjectId, MavenProjectId) ? tmp$ : null) != null ? tmp$_0.artifactId : null) != null ? tmp$_1 : rootProjectId.identifier;
    document.title = 'Release ' + htmlTitle;
    new Messages(releasePlan);
    this.setUpConfig_0(releasePlan);
    new Pipeline(modifiableState, this.menu_0, processStarter);
  }
  function ContentContainer$setUpConfig$lambda$lambda(closure$releasePlan, this$ContentContainer) {
    return function ($receiver) {
      textFieldWithLabel($receiver, ContentContainer$Companion_getInstance().RELEASE_ID_HTML_ID, 'ReleaseId', closure$releasePlan.releaseId, this$ContentContainer.menu_0);
      var config = closure$releasePlan.config;
      var $receiver_0 = [ConfigKey.COMMIT_PREFIX, ConfigKey.UPDATE_DEPENDENCY_JOB, ConfigKey.DRY_RUN_JOB, ConfigKey.RELATIVE_PATH_EXCLUDE_PROJECT_REGEX, ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REGEX, ConfigKey.RELATIVE_PATH_TO_GIT_REPO_REPLACEMENT, ConfigKey.INITIAL_RELEASE_JSON];
      var action = this$ContentContainer.configTextField_0($receiver, config);
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        action(element);
      }
      var $receiver_1 = [ConfigKey.REGEX_PARAMS, ConfigKey.REMOTE_REGEX, ConfigKey.BUILD_WITH_PARAM_JOBS, ConfigKey.JOB_MAPPING];
      var action_0 = this$ContentContainer.configTextArea_0($receiver, config);
      var tmp$_0;
      for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
        var element_0 = $receiver_1[tmp$_0];
        action_0(element_0);
      }
      return Unit;
    };
  }
  function ContentContainer$setUpConfig$lambda(closure$releasePlan, this$ContentContainer) {
    return function ($receiver) {
      div_1($receiver, void 0, ContentContainer$setUpConfig$lambda$lambda(closure$releasePlan, this$ContentContainer));
      return Unit;
    };
  }
  ContentContainer.prototype.setUpConfig_0 = function (releasePlan) {
    var tmp$;
    append(elementById('config'), ContentContainer$setUpConfig$lambda(releasePlan, this));
    var initialSite = getTextField('config-' + ConfigKey.INITIAL_RELEASE_JSON.asString());
    if (isBlank(initialSite.value)) {
      initialSite.value = (tmp$ = App$Companion_getInstance().determineJsonUrl()) != null ? tmp$ : '';
    }
  };
  function ContentContainer$configTextField$lambda(closure$config, this$ContentContainer, this$configTextField) {
    return function (key) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$ = 'config-' + key.asString();
      tmp$_0 = key.asString();
      tmp$_2 = (tmp$_1 = closure$config.get_11rb$(key)) != null ? tmp$_1 : '';
      tmp$_3 = this$ContentContainer.menu_0;
      textFieldWithLabel(this$configTextField, tmp$, tmp$_0, tmp$_2, tmp$_3);
      return Unit;
    };
  }
  ContentContainer.prototype.configTextField_0 = function ($receiver, config) {
    return ContentContainer$configTextField$lambda(config, this, $receiver);
  };
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function ContentContainer$configTextArea$lambda(closure$config, this$ContentContainer, this$configTextArea) {
    return function (key) {
      var tmp$, tmp$_0, tmp$_1;
      var tmp$_2;
      if ((tmp$_0 = (tmp$ = closure$config.get_11rb$(key)) != null ? replace(tmp$, '\t', '  ') : null) != null) {
        var tmp$_3;
        tmp$_2 = trim(Kotlin.isCharSequence(tmp$_3 = tmp$_0) ? tmp$_3 : throwCCE()).toString();
      }
       else
        tmp$_2 = null;
      var value = (tmp$_1 = tmp$_2) != null ? tmp$_1 : '';
      textAreaWithLabel(this$configTextArea, 'config-' + key.asString(), key.asString(), value, this$ContentContainer.menu_0);
      return Unit;
    };
  }
  ContentContainer.prototype.configTextArea_0 = function ($receiver, config) {
    return ContentContainer$configTextArea$lambda(config, this, $receiver);
  };
  function ContentContainer$Companion() {
    ContentContainer$Companion_instance = this;
    this.RELEASE_ID_HTML_ID = 'releaseId';
    this.HIDE_MESSAGES_HTML_ID = 'hideMessages';
  }
  ContentContainer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ContentContainer$Companion_instance = null;
  function ContentContainer$Companion_getInstance() {
    if (ContentContainer$Companion_instance === null) {
      new ContentContainer$Companion();
    }
    return ContentContainer$Companion_instance;
  }
  ContentContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContentContainer',
    interfaces: []
  };
  function elementById(id) {
    var tmp$;
    var elementByIdOrNull$result;
    elementByIdOrNull$break: do {
      var tmp$_0, tmp$_1;
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
      elementByIdOrNull$result = Kotlin.isType(tmp$_1 = element, HTMLElement) ? tmp$_1 : throwCCE();
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
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    return function (T_0, isT, id) {
      var tmp$;
      var elementByIdOrNull$result;
      elementByIdOrNull$break: do {
        var tmp$_0, tmp$_1;
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
        elementByIdOrNull$result = isT(tmp$_1 = element) ? tmp$_1 : throwCCE();
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
    var throwCCE = Kotlin.throwCCE;
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    return function (T_0, isT, id) {
      var tmp$, tmp$_0;
      tmp$ = document.getElementById(id);
      if (tmp$ == null) {
        return null;
      }
      var element = tmp$;
      if (!isT(element)) {
        var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(T_0)).name + '<br/>Found ' + element;
        throw IllegalArgumentException_init(message.toString());
      }
      return isT(tmp$_0 = element) ? tmp$_0 : throwCCE();
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
      var tmp$_0, tmp$_1;
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
      elementByIdOrNull$result = Kotlin.isType(tmp$_1 = element, HTMLInputElement) ? tmp$_1 : throwCCE();
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
  function get_bodyNonNull($receiver) {
    var tmp$;
    tmp$ = document.body;
    if (tmp$ == null) {
      throw IllegalStateException_init('document without body');
    }
    return tmp$;
  }
  function getUnderlyingHtmlElement($receiver) {
    var tmp$;
    var d = $receiver.consumer;
    if (d.downstream != null) {
      d = d.downstream;
    }
    var arr = Kotlin.isArray(tmp$ = d.path_0.toArray()) ? tmp$ : throwCCE();
    return arr[arr.length - 1 | 0];
  }
  function addClickOnceEventListener($receiver, options, action) {
    if (options === void 0)
      options = {once: true};
    addClickEventListener($receiver, options, action);
  }
  function addClickEventListener$lambda(closure$action) {
    return function (it) {
      withErrorHandling(it, closure$action);
      return Unit;
    };
  }
  function addClickEventListener($receiver, options, action) {
    if (options === void 0)
      options = {};
    $receiver.addEventListener('click', addClickEventListener$lambda(action), options);
  }
  function addChangeEventListener$lambda(closure$action) {
    return function (it) {
      withErrorHandling(it, closure$action);
      return Unit;
    };
  }
  function addChangeEventListener($receiver, options, action) {
    if (options === void 0)
      options = {};
    $receiver.addEventListener('change', addChangeEventListener$lambda(action), options);
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
    var message = 'An unexpected error occurred.' + '\nPlease report a bug with the following information at https://github.com/loewenfels/dep-graph-releaser/issues/new';
    return Messages$Companion_getInstance().showThrowableAndThrow_tcv7n7$(new Error_0(message, t));
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
  function BaseJobExecutionDataFactory(defaultJenkinsBaseUrl, releasePlan) {
    this.defaultJenkinsBaseUrl = defaultJenkinsBaseUrl;
    this.releasePlan = releasePlan;
  }
  BaseJobExecutionDataFactory.prototype.requireConfigEntry_nhrt5l$ = function (config, key) {
    if (!config.containsKey_11rb$(key)) {
      var message = key.toString() + ' is not defined in settings';
      throw IllegalArgumentException_init(message.toString());
    }
  };
  BaseJobExecutionDataFactory.prototype.getConfig_udzor3$ = function (key) {
    return this.releasePlan.getConfig_udzor3$(key);
  };
  BaseJobExecutionDataFactory.prototype.getJobUrl_udzor3$ = function (key) {
    return this.getJobUrl_puj7f4$(this.defaultJenkinsBaseUrl, this.getConfig_udzor3$(key));
  };
  BaseJobExecutionDataFactory.prototype.getJobUrl_puj7f4$ = function (jenkinsBaseUrl, jobName) {
    return jenkinsBaseUrl + '/job/' + jobName;
  };
  BaseJobExecutionDataFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseJobExecutionDataFactory',
    interfaces: [JobExecutionDataFactory]
  };
  function BuilderNumberExtractor() {
    BuilderNumberExtractor$Companion_getInstance();
  }
  function BuilderNumberExtractor$Companion() {
    BuilderNumberExtractor$Companion_instance = this;
    this.numberRegex = Regex_init('<number>([0-9]+)<\/number>');
  }
  BuilderNumberExtractor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BuilderNumberExtractor$Companion_instance = null;
  function BuilderNumberExtractor$Companion_getInstance() {
    if (BuilderNumberExtractor$Companion_instance === null) {
      new BuilderNumberExtractor$Companion();
    }
    return BuilderNumberExtractor$Companion_instance;
  }
  BuilderNumberExtractor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BuilderNumberExtractor',
    interfaces: []
  };
  function BuildHistoryBasedBuildNumberExtractor(crumbWithId, jobExecutionData) {
    this.crumbWithId_0 = crumbWithId;
    this.jobExecutionData_0 = jobExecutionData;
  }
  function BuildHistoryBasedBuildNumberExtractor$extract$lambda(closure$init, this$BuildHistoryBasedBuildNumberExtractor) {
    return function (it) {
      return this$BuildHistoryBasedBuildNumberExtractor.searchBuildNumber_0(it.second, closure$init);
    };
  }
  BuildHistoryBasedBuildNumberExtractor.prototype.extract = function () {
    var headers = createHeaderWithCrumb(this.crumbWithId_0);
    var init = createGetRequest(headers);
    return window.fetch(this.jobExecutionData_0.jobBaseUrl + 'api/xml?xpath=//build/number&wrapper=builds', init).then(getCallableRef('checkStatusOk', function (response) {
      return checkStatusOk(response);
    })).then(BuildHistoryBasedBuildNumberExtractor$extract$lambda(init, this));
  };
  BuildHistoryBasedBuildNumberExtractor.prototype.searchBuildNumber_0 = function (body, init) {
    var tmp$;
    tmp$ = BuilderNumberExtractor$Companion_getInstance().numberRegex.find_905azu$(body);
    if (tmp$ == null) {
      throw JobNotExistingException_init('no job run at ' + this.jobExecutionData_0.jobBaseUrl + ' so far, as consequence we cannot extract a build number.');
    }
    var matchResult = tmp$;
    var parametersRegex = Regex_init(createParameterRegexPattern(this.jobExecutionData_0.identifyingParams));
    return this.searchBuildNumber_1(matchResult, parametersRegex, init);
  };
  function BuildHistoryBasedBuildNumberExtractor$searchBuildNumber$lambda(closure$parametersRegex, closure$buildNumber, closure$matchResult, this$BuildHistoryBasedBuildNumberExtractor, closure$init) {
    return function (f) {
      var body = f.component2();
      var tmp$;
      if (closure$parametersRegex.containsMatchIn_6bul2c$(body)) {
        return Promise.resolve(closure$buildNumber);
      }
       else {
        tmp$ = closure$matchResult.next();
        if (tmp$ == null) {
          throw JobNotExistingException_init('No job matches the given identifying parameters at ' + this$BuildHistoryBasedBuildNumberExtractor.jobExecutionData_0.jobBaseUrl + '.' + ('\n' + 'Regex used: ' + closure$parametersRegex.pattern));
        }
        var newMatchResult = tmp$;
        return this$BuildHistoryBasedBuildNumberExtractor.searchBuildNumber_1(newMatchResult, closure$parametersRegex, closure$init);
      }
    };
  }
  BuildHistoryBasedBuildNumberExtractor.prototype.searchBuildNumber_1 = function (matchResult, parametersRegex, init) {
    var buildNumber = toInt(matchResult.groupValues.get_za3lpa$(1));
    return window.fetch(this.jobExecutionData_0.jobBaseUrl + buildNumber + '/api/xml', init).then(getCallableRef('checkStatusOk', function (response) {
      return checkStatusOk(response);
    })).then(BuildHistoryBasedBuildNumberExtractor$searchBuildNumber$lambda(parametersRegex, buildNumber, matchResult, this, init));
  };
  BuildHistoryBasedBuildNumberExtractor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildHistoryBasedBuildNumberExtractor',
    interfaces: [BuilderNumberExtractor]
  };
  function DryRunJobExecutionDataFactory(defaultJenkinsBaseUrl, releasePlan) {
    BaseJobExecutionDataFactory.call(this, defaultJenkinsBaseUrl, releasePlan);
    this.checkConfig_0(releasePlan.config);
  }
  DryRunJobExecutionDataFactory.prototype.checkConfig_0 = function (config) {
    this.requireConfigEntry_nhrt5l$(config, ConfigKey.UPDATE_DEPENDENCY_JOB);
    this.requireConfigEntry_nhrt5l$(config, ConfigKey.DRY_RUN_JOB);
  };
  DryRunJobExecutionDataFactory.prototype.create_awtgy4$ = function (project, command) {
    var tmp$;
    if (Kotlin.isType(command, JenkinsUpdateDependency))
      tmp$ = this.triggerUpdateDependency_0(project, command);
    else if (Kotlin.isType(command, JenkinsNextDevReleaseCommand))
      tmp$ = this.triggerRelease_0(project);
    else
      throw UnsupportedOperationException_init('We do not (yet) support the command: ' + command);
    return tmp$;
  };
  DryRunJobExecutionDataFactory.prototype.triggerUpdateDependency_0 = function (project, command) {
    var jobName = 'dry update dependency of ' + project.id.identifier;
    var tmp$ = this.createUpdateDependencyParams_0(project, command);
    var params = tmp$.component1()
    , identifyingParams = tmp$.component2();
    return this.createJobExecutionData_0(jobName, params, identifyingParams);
  };
  DryRunJobExecutionDataFactory.prototype.triggerRelease_0 = function (project) {
    var jobName = 'dry release ' + project.id.identifier;
    var tmp$ = this.createReleaseParams_0(project);
    var params = tmp$.component1()
    , identifyingParams = tmp$.component2();
    return this.createJobExecutionData_0(jobName, params, identifyingParams);
  };
  DryRunJobExecutionDataFactory.prototype.createUpdateDependencyParams_0 = function (project, command) {
    var releaseVersion = '';
    var triple = this.determineGroupIdArtifactIdAndNewVersion_0(command);
    return to(this.createParams_0('update', project, releaseVersion, triple), mapOf([to('releaseId', this.releasePlan.releaseId), to('groupId', triple.first), to('artifactId', triple.second), to('newVersion', triple.third)]));
  };
  DryRunJobExecutionDataFactory.prototype.determineGroupIdArtifactIdAndNewVersion_0 = function (command) {
    var tmp$;
    var dependency = this.releasePlan.getProject_lljhqa$(command.projectId);
    var dependencyMavenProjectId = Kotlin.isType(tmp$ = dependency.id, MavenProjectId) ? tmp$ : throwCCE();
    var groupId = dependencyMavenProjectId.groupId;
    var artifactId = dependencyMavenProjectId.artifactId;
    var newVersion = dependency.releaseVersion + '-' + this.releasePlan.releaseId;
    return new Triple(groupId, artifactId, newVersion);
  };
  DryRunJobExecutionDataFactory.prototype.createReleaseParams_0 = function (project) {
    var releaseVersion = project.releaseVersion + '-' + this.releasePlan.releaseId;
    return to(this.createParams_0('release', project, releaseVersion, new Triple('', '', '')), mapOf([to('releaseId', this.releasePlan.releaseId), to('releaseVersion', releaseVersion)]));
  };
  DryRunJobExecutionDataFactory.prototype.createParams_0 = function (commandName, project, releaseVersion, groupIdArtifactIdAndNewVersion) {
    var groupId = groupIdArtifactIdAndNewVersion.component1()
    , artifactId = groupIdArtifactIdAndNewVersion.component2()
    , newVersion = groupIdArtifactIdAndNewVersion.component3();
    var skipCheckout = this.isFirstTriggeredCommand_0(project) ? 'false' : 'true';
    return 'command=' + commandName + ('&pathToProject=' + project.relativePath) + ('&skipCheckout=' + skipCheckout) + ('&releaseId=' + this.releasePlan.releaseId) + ('&releaseVersion=' + releaseVersion) + ('&groupId=' + groupId) + ('&artifactId=' + artifactId) + ('&newVersion=' + newVersion);
  };
  DryRunJobExecutionDataFactory.prototype.isFirstTriggeredCommand_0 = function (project) {
    if (project.isSubmodule)
      return this.isFirstTriggeredCommand_0(this.searchTopMultiModule_0(project.id));
    return !this.commandRanOnProjectOrSubmodules_0(project);
  };
  DryRunJobExecutionDataFactory.prototype.searchTopMultiModule_0 = function (projectId) {
    var $receiver = this.releasePlan.getAllSubmodules().entries;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var v = element.value;
        if (v.contains_11rb$(projectId)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var it = firstOrNull$result;
    return it != null ? this.searchTopMultiModule_0(it.key) : this.releasePlan.getProject_lljhqa$(projectId);
  };
  DryRunJobExecutionDataFactory.prototype.commandRanOnProjectOrSubmodules_0 = function (project) {
    var tmp$;
    var $receiver = withIndex(asSequence(project.commands));
    var any$result;
    any$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var index = element.component1()
        , command = element.component2();
        var state = this.getState_0(project, index, command);
        if (CommandState.Companion.isEndState_m86w84$(state)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    var projectHasCompletedCommands = any$result;
    if (projectHasCompletedCommands) {
      tmp$ = projectHasCompletedCommands;
    }
     else {
      var submodules = this.releasePlan.getSubmodules_lljhqa$(project.id);
      var tmp$_1 = !submodules.isEmpty();
      if (tmp$_1) {
        var any$result_0;
        any$break: do {
          var tmp$_2;
          if (Kotlin.isType(submodules, Collection) && submodules.isEmpty()) {
            any$result_0 = false;
            break any$break;
          }
          tmp$_2 = submodules.iterator();
          while (tmp$_2.hasNext()) {
            var element_0 = tmp$_2.next();
            if (this.commandRanOnProjectOrSubmodules_0(this.releasePlan.getProject_lljhqa$(element_0))) {
              any$result_0 = true;
              break any$break;
            }
          }
          any$result_0 = false;
        }
         while (false);
        tmp$_1 = any$result_0;
      }
      tmp$ = tmp$_1;
    }
    return tmp$;
  };
  DryRunJobExecutionDataFactory.prototype.getState_0 = function (project, index, command) {
    if (this.releasePlan.state !== ReleaseState.IN_PROGRESS) {
      return Pipeline$Companion_getInstance().getCommandState_o8feeo$(project.id, index);
    }
     else {
      return command.state;
    }
  };
  DryRunJobExecutionDataFactory.prototype.createJobExecutionData_0 = function (jobName, params, identifyingParams) {
    var jobUrl = this.getJobUrl_udzor3$(ConfigKey.DRY_RUN_JOB);
    return JobExecutionData$Companion_getInstance().buildWithParameters_k99ke9$(jobName, jobUrl, params, identifyingParams);
  };
  DryRunJobExecutionDataFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DryRunJobExecutionDataFactory',
    interfaces: [BaseJobExecutionDataFactory]
  };
  function EventManager() {
    EventManager$Companion_getInstance();
  }
  EventManager.prototype.recoverEventState_3zm5lf$ = function (processStarter) {
    var tmp$;
    var modifiableState = Menu$Companion_getInstance().modifiableState;
    var releasePlan = modifiableState.releasePlan;
    switch (releasePlan.state.name) {
      case 'READY':
        tmp$ = Unit;
        break;
      case 'IN_PROGRESS':
        tmp$ = this.restartProcess_0(modifiableState, processStarter);
        break;
      case 'FAILED':
      case 'SUCCEEDED':
        EventManager$Companion_getInstance().dispatchProcessStart_0();
        tmp$ = EventManager$Companion_getInstance().dispatchProcessEnd_0(releasePlan.state === ReleaseState.SUCCEEDED);
        break;
      case 'WATCHING':
        tmp$ = EventManager$Companion_getInstance().dispatchProcessStart_0();
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  EventManager.prototype.restartProcess_0 = function (modifiableState, processStarter) {
    var tmp$;
    if (processStarter != null) {
      switch (modifiableState.releasePlan.typeOfRun.name) {
        case 'EXPLORE':
          tmp$ = this.startExploration_fyaonj$(modifiableState, processStarter);
          break;
        case 'DRY_RUN':
          tmp$ = this.startDryRun_qzbocw$(modifiableState, processStarter);
          break;
        case 'RELEASE':
          tmp$ = this.startRelease_qzbocw$(modifiableState, processStarter);
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var checkWhenExhaustiveness = tmp$;
    }
     else if (modifiableState.releasePlan.typeOfRun === TypeOfRun.EXPLORE)
      this.startExploration_fyaonj$(modifiableState, null);
  };
  function EventManager$resetForNewProcess$lambda$lambda$lambda$lambda(closure$newState) {
    return function (f, f_0) {
      return closure$newState;
    };
  }
  function EventManager$resetForNewProcess$lambda(this$EventManager) {
    return function (f) {
      var body = f.component2();
      var initialReleasePlan = deserialize(body);
      var $receiver = initialReleasePlan.getProjects();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$EventManager_0 = this$EventManager;
        var tmp$_0, tmp$_0_0;
        var index = 0;
        tmp$_0 = element.commands.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var index_0 = (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0);
          var newState = this$EventManager_0.determineNewState_0(element, index_0, item);
          Pipeline$Companion_getInstance().changeBuildUrlOfCommand_ivpk77$(element, index_0, '');
          Pipeline$Companion_getInstance().changeStateOfCommand_t14kxg$(element, index_0, newState, EventManager$resetForNewProcess$lambda$lambda$lambda$lambda(newState));
        }
      }
      Pipeline$Companion_getInstance().changeReleaseState_g1wt0g$(ReleaseState.READY);
      EventManager$Companion_getInstance().dispatchProcessReset_0();
      var id = ContentContainer$Companion_getInstance().RELEASE_ID_HTML_ID;
      var tmp$_1;
      var elementByIdOrNull$result;
      elementByIdOrNull$break: do {
        var tmp$_2, tmp$_3;
        tmp$_2 = document.getElementById(id);
        if (tmp$_2 == null) {
          elementByIdOrNull$result = null;
          break elementByIdOrNull$break;
        }
        var element_0 = tmp$_2;
        if (!Kotlin.isType(element_0, HTMLInputElement)) {
          var message = 'element with ' + id + ' found but was wrong type.<br/>Expected type ' + get_js(getKClass(HTMLInputElement)).name + '<br/>Found ' + element_0;
          throw IllegalArgumentException_init(message.toString());
        }
        elementByIdOrNull$result = Kotlin.isType(tmp$_3 = element_0, HTMLInputElement) ? tmp$_3 : throwCCE();
      }
       while (false);
      tmp$_1 = elementByIdOrNull$result;
      if (tmp$_1 == null) {
        throw IllegalStateException_init('no element found for id ' + id + ' (expected type ' + get_js(getKClass(HTMLInputElement)).name + ')');
      }
      tmp$_1.value = randomPublishId();
      return Unit;
    };
  }
  EventManager.prototype.resetForNewProcess = function () {
    var tmp$;
    var currentReleasePlan = Menu$Companion_getInstance().modifiableState.releasePlan;
    var initialJson = (tmp$ = currentReleasePlan.config.get_11rb$(ConfigKey.INITIAL_RELEASE_JSON)) != null ? tmp$ : App$Companion_getInstance().determineJsonUrlOrThrow();
    return App$Companion_getInstance().loadJsonAndCheckStatus_61zpoe$(initialJson).then(EventManager$resetForNewProcess$lambda(this));
  };
  function EventManager$startDryRun$lambda(closure$processStarter, closure$modifiableState) {
    return function () {
      return closure$processStarter.dryRun_tfgl3i$(closure$modifiableState);
    };
  }
  EventManager.prototype.startDryRun_qzbocw$ = function (modifiableState, processStarter) {
    return this.triggerProcess_0(EventManager$startDryRun$lambda(processStarter, modifiableState));
  };
  function EventManager$startRelease$lambda(closure$processStarter, closure$modifiableState) {
    return function () {
      return closure$processStarter.release_tfgl3i$(closure$modifiableState);
    };
  }
  EventManager.prototype.startRelease_qzbocw$ = function (modifiableState, processStarter) {
    return this.triggerProcess_0(EventManager$startRelease$lambda(processStarter, modifiableState));
  };
  function EventManager$startExploration$lambda(closure$nonNullProcessStarter, closure$modifiableState) {
    return function () {
      return closure$nonNullProcessStarter.explore_tfgl3i$(closure$modifiableState);
    };
  }
  EventManager.prototype.startExploration_fyaonj$ = function (modifiableState, processStarter) {
    var nonNullProcessStarter = App$Companion_getInstance().givenOrFakeProcessStarter_owuvtf$(processStarter, modifiableState);
    return this.triggerProcess_0(EventManager$startExploration$lambda(nonNullProcessStarter, modifiableState));
  };
  function EventManager$triggerProcess$lambda(result) {
    EventManager$Companion_getInstance().dispatchProcessEnd_0(result);
    return Unit;
  }
  function EventManager$triggerProcess$lambda_0(t) {
    EventManager$Companion_getInstance().dispatchProcessEnd_0(false);
    Messages$Companion_getInstance().showThrowableAndThrow_tcv7n7$(t);
    return Unit;
  }
  EventManager.prototype.triggerProcess_0 = function (action) {
    Messages$Companion_getInstance().putMessagesInHolder_1jdmkk$(Pipeline$Companion_getInstance().getTypeOfRun());
    EventManager$Companion_getInstance().dispatchProcessStart_0();
    if (Pipeline$Companion_getInstance().getReleaseState() === ReleaseState.SUCCEEDED) {
      EventManager$Companion_getInstance().dispatchProcessContinue_0();
    }
    return action().then(EventManager$triggerProcess$lambda, EventManager$triggerProcess$lambda_0);
  };
  EventManager.prototype.determineNewState_0 = function (project, index, command) {
    var tmp$;
    var currentState = Pipeline$Companion_getInstance().getCommandState_o8feeo$(project.id, index);
    if (Kotlin.isType(currentState, CommandState$Deactivated) && !Kotlin.isType(command.state, CommandState$Deactivated)) {
      tmp$ = new CommandState$Deactivated(command.state);
    }
     else {
      tmp$ = command.state;
    }
    return tmp$;
  };
  function EventManager$Companion() {
    EventManager$Companion_instance = this;
    this.EVENT_PROCESS_START_0 = 'process.start';
    this.EVENT_PROCESS_END_0 = 'process.end';
    this.EVENT_PROCESS_CONTINUE_0 = 'process.continue';
    this.EVENT_PROCESS_RESET_0 = 'process.reset';
  }
  EventManager$Companion.prototype.registerForProcessStartEvent_gbr1zf$ = function (callback) {
    document.addEventListener(this.EVENT_PROCESS_START_0, callback);
  };
  function EventManager$Companion$registerForProcessEndEvent$lambda(closure$callback) {
    return function (e) {
      var tmp$, tmp$_0;
      var customEvent = Kotlin.isType(tmp$ = e, CustomEvent) ? tmp$ : throwCCE();
      var success = typeof (tmp$_0 = customEvent.detail) === 'boolean' ? tmp$_0 : throwCCE();
      closure$callback(success);
      return Unit;
    };
  }
  EventManager$Companion.prototype.registerForProcessEndEvent_y8twos$ = function (callback) {
    document.addEventListener(this.EVENT_PROCESS_END_0, EventManager$Companion$registerForProcessEndEvent$lambda(callback));
  };
  EventManager$Companion.prototype.getDisabledMessage = function () {
    return "disabled due to process '" + toProcessName(Menu$Companion_getInstance().modifiableState.releasePlan.typeOfRun) + "' which is in progress.";
  };
  function EventManager$Companion$disableUnDisableForProcessStartAndEnd$lambda(closure$input, closure$titleElement, this$EventManager$) {
    return function (it) {
      closure$input.oldDisabled = closure$input.disabled;
      closure$input.disabled = true;
      setTitleSaveOld(closure$titleElement, this$EventManager$.getDisabledMessage());
      return Unit;
    };
  }
  function EventManager$Companion$disableUnDisableForProcessStartAndEnd$lambda_0(closure$input, this$EventManager$, closure$titleElement) {
    return function (f) {
      if (startsWith(closure$input.id, 'config-') || this$EventManager$.isInputFieldOfNonSuccessfulCommand_0(closure$input.id)) {
        this$EventManager$.unDisableInputField_0(closure$input, closure$titleElement);
      }
      return Unit;
    };
  }
  EventManager$Companion.prototype.disableUnDisableForProcessStartAndEnd_fj1ece$ = function (input, titleElement) {
    this.registerForProcessStartEvent_gbr1zf$(EventManager$Companion$disableUnDisableForProcessStartAndEnd$lambda(input, titleElement, this));
    this.registerForProcessEndEvent_y8twos$(EventManager$Companion$disableUnDisableForProcessStartAndEnd$lambda_0(input, this, titleElement));
  };
  EventManager$Companion.prototype.isInputFieldOfNonSuccessfulCommand_0 = function (id) {
    if (equals(id, ContentContainer$Companion_getInstance().RELEASE_ID_HTML_ID))
      return false;
    var project = Pipeline$Companion_getInstance().getSurroundingProject_61zpoe$(id);
    var releasePlan = Menu$Companion_getInstance().modifiableState.releasePlan;
    var $receiver = releasePlan.getProject_lljhqa$(project.id).commands;
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
        if (element.state !== CommandState.Succeeded && element.state !== CommandState.Disabled) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  EventManager$Companion.prototype.unDisableInputField_0 = function (input, titleElement) {
    var tmp$;
    input.disabled = typeof (tmp$ = input.oldDisabled) === 'boolean' ? tmp$ : throwCCE();
    titleElement.title = getOldTitle(titleElement);
  };
  function EventManager$Companion$unDisableForProcessContinueAndReset$lambda(closure$input, closure$titleElement, this$EventManager$) {
    return function (it) {
      this$EventManager$.unDisableInputField_0(closure$input, closure$titleElement);
      return Unit;
    };
  }
  function EventManager$Companion$unDisableForProcessContinueAndReset$lambda_0(closure$input, closure$titleElement, this$EventManager$) {
    return function (it) {
      this$EventManager$.unDisableInputField_0(closure$input, closure$titleElement);
      return Unit;
    };
  }
  EventManager$Companion.prototype.unDisableForProcessContinueAndReset_fj1ece$ = function (input, titleElement) {
    this.registerForProcessContinueEvent_0(EventManager$Companion$unDisableForProcessContinueAndReset$lambda(input, titleElement, this));
    this.registerForProcessResetEvent_0(EventManager$Companion$unDisableForProcessContinueAndReset$lambda_0(input, titleElement, this));
  };
  EventManager$Companion.prototype.registerForProcessContinueEvent_0 = function (callback) {
    document.addEventListener(this.EVENT_PROCESS_CONTINUE_0, callback);
  };
  EventManager$Companion.prototype.registerForProcessResetEvent_0 = function (callback) {
    document.addEventListener(this.EVENT_PROCESS_RESET_0, callback);
  };
  EventManager$Companion.prototype.dispatchProcessStart_0 = function () {
    document.dispatchEvent(new Event(this.EVENT_PROCESS_START_0));
  };
  EventManager$Companion.prototype.dispatchProcessEnd_0 = function (success) {
    var tmp$ = document;
    var tmp$_0 = this.EVENT_PROCESS_END_0;
    var o = {};
    o['detail'] = success;
    o['bubbles'] = false;
    o['cancelable'] = false;
    o['composed'] = false;
    tmp$.dispatchEvent(new CustomEvent(tmp$_0, o));
  };
  EventManager$Companion.prototype.dispatchProcessContinue_0 = function () {
    document.dispatchEvent(new Event(this.EVENT_PROCESS_CONTINUE_0));
  };
  EventManager$Companion.prototype.dispatchProcessReset_0 = function () {
    document.dispatchEvent(new Event(this.EVENT_PROCESS_RESET_0));
  };
  EventManager$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EventManager$Companion_instance = null;
  function EventManager$Companion_getInstance() {
    if (EventManager$Companion_instance === null) {
      new EventManager$Companion();
    }
    return EventManager$Companion_instance;
  }
  EventManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EventManager',
    interfaces: []
  };
  function JobNotExistingException(message, cause) {
    IllegalStateException.call(this, message, cause);
    this.name = 'JobNotExistingException';
  }
  JobNotExistingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobNotExistingException',
    interfaces: [IllegalStateException]
  };
  function JobNotExistingException_init(message, $this) {
    $this = $this || Object.create(JobNotExistingException.prototype);
    JobNotExistingException.call($this, message, null);
    return $this;
  }
  function JobNotTriggeredException(message, cause) {
    IllegalStateException.call(this, message, cause);
    this.name = 'JobNotTriggeredException';
  }
  JobNotTriggeredException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobNotTriggeredException',
    interfaces: [IllegalStateException]
  };
  function PollTimeoutException(message, body, cause) {
    RuntimeException.call(this, message, cause);
    this.body = body;
    this.name = 'PollTimeoutException';
  }
  PollTimeoutException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PollTimeoutException',
    interfaces: [RuntimeException]
  };
  function PollTimeoutException_init(message, body, $this) {
    $this = $this || Object.create(PollTimeoutException.prototype);
    PollTimeoutException.call($this, message, body, null);
    return $this;
  }
  function checkStatusOk$lambda() {
    return false;
  }
  function checkStatusOk(response) {
    var tmp$;
    return Kotlin.isType(tmp$ = checkResponseIgnore(response, checkStatusOk$lambda), Promise) ? tmp$ : throwCCE();
  }
  function checkStatusOkOr403(response) {
    return checkResponseIgnoreStatus(response, 403);
  }
  function checkStatusOkOr404(response) {
    return checkResponseIgnoreStatus(response, 404);
  }
  function checkResponseIgnoreStatus$lambda(closure$errorStatus, closure$response) {
    return function () {
      return toShort(closure$errorStatus) === closure$response.status;
    };
  }
  function checkResponseIgnoreStatus(response, errorStatus) {
    return checkResponseIgnore(response, checkResponseIgnoreStatus$lambda(errorStatus, response));
  }
  function checkStatusIgnoreOpaqueRedirect$lambda(closure$response) {
    return function () {
      return equals(closure$response.type, 'opaqueredirect');
    };
  }
  function checkStatusIgnoreOpaqueRedirect(response) {
    return checkResponseIgnore(response, checkStatusIgnoreOpaqueRedirect$lambda(response));
  }
  function checkResponseIgnore$lambda(closure$ignoreStatusNotOkPredicate, closure$response) {
    return function (text) {
      if (closure$ignoreStatusNotOkPredicate()) {
        return to(closure$response, null);
      }
       else {
        var value = closure$response.ok;
        if (!value) {
          var closure$response_0 = closure$response;
          var message = 'response was not ok, ' + closure$response_0.status + ': ' + closure$response_0.statusText + '\n' + text;
          throw IllegalStateException_init(message.toString());
        }
        return to(closure$response, text);
      }
    };
  }
  function checkResponseIgnore(response, ignoreStatusNotOkPredicate) {
    return response.text().then(checkResponseIgnore$lambda(ignoreStatusNotOkPredicate, response));
  }
  function createFetchInitWithCredentials() {
    var init = {};
    init.credentials = 'include';
    init.method = 'GET';
    return init;
  }
  function createHeaderWithCrumb(crumbWithId) {
    var headers = {};
    if (crumbWithId != null) {
      headers[crumbWithId.id] = crumbWithId.crumb;
    }
    return headers;
  }
  var get_GET = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.jobexecution.get_GET_pcmf85$', function ($receiver) {
    return 'GET';
  });
  var get_POST = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.jobexecution.get_POST_pcmf85$', function ($receiver) {
    return 'POST';
  });
  function createGetRequest(headers) {
    return createRequestInit(null, 'GET', headers);
  }
  function createRequestInit(body, method, headers) {
    var tmp$;
    tmp$ = 'no-cache';
    var referrer = 'no-referrer';
    var referrerPolicy = 'no-referrer';
    var o = {};
    o['method'] = method;
    o['headers'] = headers;
    o['body'] = body;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = 'cors';
    o['credentials'] = 'include';
    o['cache'] = tmp$;
    o['redirect'] = 'manual';
    o['integrity'] = null;
    o['keepalive'] = null;
    o['window'] = null;
    var init = o;
    delete init.integrity;
    delete init.keepalive;
    delete init.window;
    return init;
  }
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
  function issueCrumb$lambda(it) {
    throw new IllegalStateException('Cannot issue a crumb', it);
  }
  function issueCrumb$lambda_0(f) {
    var crumbWithIdString = f.component2();
    var tmp$;
    if (crumbWithIdString != null) {
      var tmp$_0 = split(crumbWithIdString, Kotlin.charArrayOf(58));
      var id = tmp$_0.get_za3lpa$(0);
      var crumb = tmp$_0.get_za3lpa$(1);
      tmp$ = new CrumbWithId(id, crumb);
    }
     else
      tmp$ = null;
    return tmp$;
  }
  function issueCrumb(jenkinsBaseUrl) {
    var url = jenkinsBaseUrl + '/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,' + '"' + ':' + '"' + ',//crumb)';
    var init = createFetchInitWithCredentials();
    return window.fetch(url, init).then(getCallableRef('checkStatusOkOr404', function (response) {
      return checkStatusOkOr404(response);
    })).catch(issueCrumb$lambda).then(issueCrumb$lambda_0);
  }
  function JenkinsJobExecutor() {
    JenkinsJobExecutor$Companion_getInstance();
  }
  function JenkinsJobExecutor$trigger$lambda$lambda(closure$jobName, closure$jobExecutionData) {
    return function (it) {
      throw new JobNotTriggeredException('Could not trigger the job ' + closure$jobName + '.' + ('\n' + 'Please visit ' + closure$jobExecutionData.jobBaseUrl + ' to see if it was triggered nonetheless.') + '\nYou can manually set the command to Succeeded if the job was triggered/executed and ended successfully.', it);
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda_0(closure$jobExecutionData, closure$crumbWithId) {
    return function (f) {
      var response = f.component1();
      return closure$jobExecutionData.queuedItemUrlExtractor.extract_fjylkq$(closure$crumbWithId, response, closure$jobExecutionData);
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda$lambda(closure$jobExecutionData, closure$nullableQueuedItemUrl, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, closure$crumbWithId, closure$verbose, this$JenkinsJobExecutor) {
    return function (it) {
      return this$JenkinsJobExecutor.startOrResumeFromExtractBuildNumber_0(closure$jobExecutionData, closure$nullableQueuedItemUrl, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, closure$crumbWithId, closure$verbose);
    };
  }
  function JenkinsJobExecutor$trigger$lambda$lambda_1(closure$verbose, closure$jobName, this$JenkinsJobExecutor, closure$jobQueuedHook, closure$jobExecutionData, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, closure$crumbWithId) {
    return function (nullableQueuedItemUrl) {
      this$JenkinsJobExecutor.showInfoQueuedItemIfVerbose_0(closure$verbose, nullableQueuedItemUrl, closure$jobName);
      var queuedItemUrl = this$JenkinsJobExecutor.getQueuedItemUrlOrNull_0(nullableQueuedItemUrl);
      return closure$jobQueuedHook(queuedItemUrl).then(JenkinsJobExecutor$trigger$lambda$lambda$lambda(closure$jobExecutionData, nullableQueuedItemUrl, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, closure$crumbWithId, closure$verbose, this$JenkinsJobExecutor));
    };
  }
  function JenkinsJobExecutor$trigger$lambda(closure$jobExecutionData, this$JenkinsJobExecutor, closure$jobName, closure$verbose, closure$jobQueuedHook, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds) {
    return function (crumbWithId) {
      var $receiver = this$JenkinsJobExecutor.triggerJob_0(crumbWithId, closure$jobExecutionData).then(getCallableRef('checkStatusIgnoreOpaqueRedirect', function (response) {
        return checkStatusIgnoreOpaqueRedirect(response);
      })).catch(JenkinsJobExecutor$trigger$lambda$lambda(closure$jobName, closure$jobExecutionData)).then(JenkinsJobExecutor$trigger$lambda$lambda_0(closure$jobExecutionData, crumbWithId));
      var onFulfilled = JenkinsJobExecutor$trigger$lambda$lambda_1(closure$verbose, closure$jobName, this$JenkinsJobExecutor, closure$jobQueuedHook, closure$jobExecutionData, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, crumbWithId);
      return $receiver.then(onFulfilled);
    };
  }
  JenkinsJobExecutor.prototype.trigger_gyv2e7$$default = function (jobExecutionData, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, verbose) {
    var jobName = jobExecutionData.jobName;
    return this.issueCrumb_0(jobExecutionData).then(JenkinsJobExecutor$trigger$lambda(jobExecutionData, this, jobName, verbose, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds));
  };
  JenkinsJobExecutor.prototype.issueCrumb_0 = function (jobExecutionData) {
    var jenkinsBaseUrl = jobExecutionData.getJenkinsBaseUrl();
    return issueCrumb(jenkinsBaseUrl);
  };
  function JenkinsJobExecutor$startOrResumeFromExtractBuildNumber$lambda$lambda(closure$crumbWithId, closure$jobExecutionData, closure$buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, this$JenkinsJobExecutor) {
    return function (it) {
      return this$JenkinsJobExecutor.pollJobForCompletion_0(closure$crumbWithId, closure$jobExecutionData, closure$buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds);
    };
  }
  function JenkinsJobExecutor$startOrResumeFromExtractBuildNumber$lambda(closure$verbose, closure$jobExecutionData, closure$jobStartedHook, closure$crumbWithId, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, this$JenkinsJobExecutor) {
    return function (buildNumber) {
      if (closure$verbose) {
        Messages$Companion_getInstance().showInfo_4wem9b$(closure$jobExecutionData.jobName + ' started with build number ' + buildNumber + ', wait for completion...', 2000);
      }
      return closure$jobStartedHook(buildNumber).then(JenkinsJobExecutor$startOrResumeFromExtractBuildNumber$lambda$lambda(closure$crumbWithId, closure$jobExecutionData, buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, this$JenkinsJobExecutor));
    };
  }
  JenkinsJobExecutor.prototype.startOrResumeFromExtractBuildNumber_0 = function (jobExecutionData, nullableQueuedItemUrl, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, crumbWithId, verbose) {
    return this.extractBuildNumber_0(nullableQueuedItemUrl, crumbWithId, jobExecutionData).then(JenkinsJobExecutor$startOrResumeFromExtractBuildNumber$lambda(verbose, jobExecutionData, jobStartedHook, crumbWithId, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, this));
  };
  JenkinsJobExecutor.prototype.getQueuedItemUrlOrNull_0 = function (nullableQueuedItemUrl) {
    return nullableQueuedItemUrl != null ? toString(nullableQueuedItemUrl) + 'api/xml/' : null;
  };
  JenkinsJobExecutor.prototype.triggerJob_0 = function (crumbWithId, jobExecutionData) {
    var headers = createHeaderWithCrumb(crumbWithId);
    headers['content-type'] = 'application/x-www-form-urlencoded; charset=utf-8';
    var init = createRequestInit(jobExecutionData.body, 'POST', headers);
    return window.fetch(jobExecutionData.jobTriggerUrl, init);
  };
  JenkinsJobExecutor.prototype.showInfoQueuedItemIfVerbose_0 = function (verbose, nullableQueuedItemUrl, jobName) {
    if (verbose) {
      if (nullableQueuedItemUrl != null) {
        Messages$Companion_getInstance().showInfo_4wem9b$('Queued ' + jobName + ' successfully, wait for execution...' + '\n' + 'Queued item URL: ' + toString(nullableQueuedItemUrl) + 'api/xml', 2000);
      }
       else {
        Messages$Companion_getInstance().showInfo_4wem9b$(jobName + ' is probably already running (queued item could not be found), trying to fetch execution number from Job history.', 2000);
      }
    }
  };
  JenkinsJobExecutor.prototype.extractBuildNumber_0 = function (nullableQueuedItemUrl, crumbWithId, jobExecutionData) {
    if (nullableQueuedItemUrl != null) {
      return (new QueuedItemBasedBuildNumberExtractor(crumbWithId, nullableQueuedItemUrl)).extract();
    }
     else {
      return (new BuildHistoryBasedBuildNumberExtractor(crumbWithId, jobExecutionData)).extract();
    }
  };
  function JenkinsJobExecutor$rePollQueueing$lambda(closure$jobExecutionData, closure$queuedItemUrl, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, this$JenkinsJobExecutor) {
    return function (crumbWithId) {
      return this$JenkinsJobExecutor.startOrResumeFromExtractBuildNumber_0(closure$jobExecutionData, closure$queuedItemUrl, closure$jobStartedHook, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, crumbWithId, false);
    };
  }
  JenkinsJobExecutor.prototype.rePollQueueing_aav45s$ = function (jobExecutionData, queuedItemUrl, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds) {
    return this.issueCrumb_0(jobExecutionData).then(JenkinsJobExecutor$rePollQueueing$lambda(jobExecutionData, queuedItemUrl, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, this));
  };
  function JenkinsJobExecutor$rePoll$lambda(closure$jobExecutionData, closure$buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, this$JenkinsJobExecutor) {
    return function (crumbWithId) {
      return this$JenkinsJobExecutor.pollJobForCompletion_0(crumbWithId, closure$jobExecutionData, closure$buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds);
    };
  }
  JenkinsJobExecutor.prototype.rePoll_m7tqv$ = function (jobExecutionData, buildNumber, pollEverySecond, maxWaitingTimeForCompletenessInSeconds) {
    var jenkinsBaseUrl = jobExecutionData.getJenkinsBaseUrl();
    return issueCrumb(jenkinsBaseUrl).then(JenkinsJobExecutor$rePoll$lambda(jobExecutionData, buildNumber, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, this));
  };
  function JenkinsJobExecutor$pollJobForCompletion$lambda$lambda(e) {
    throw e;
  }
  function JenkinsJobExecutor$pollJobForCompletion$lambda$lambda_0(closure$buildNumber) {
    return function (result) {
      return to(closure$buildNumber, result);
    };
  }
  function JenkinsJobExecutor$pollJobForCompletion$lambda$lambda_1(closure$jobExecutionData, closure$crumbWithId) {
    return function (f) {
      var buildNumber = f.component1()
      , result = f.component2();
      var value = equals(result, JenkinsJobExecutor$Companion_getInstance().SUCCESS_0);
      if (!value) {
        var closure$jobExecutionData_0 = closure$jobExecutionData;
        var message = closure$jobExecutionData_0.jobName + ' failed, job did not end with status ' + JenkinsJobExecutor$Companion_getInstance().SUCCESS_0 + ' but ' + result + '.' + ('\n' + 'Visit ' + closure$jobExecutionData_0.jobBaseUrl + buildNumber + '/' + END_OF_CONSOLE_URL_SUFFIX + ' for further information');
        throw IllegalStateException_init(message.toString());
      }
      return to(closure$crumbWithId, buildNumber);
    };
  }
  function JenkinsJobExecutor$pollJobForCompletion$lambda(closure$crumbWithId, closure$jobExecutionData, closure$buildNumber, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, this$JenkinsJobExecutor) {
    return function () {
      return this$JenkinsJobExecutor.pollAndExtract_grt11n$(closure$crumbWithId, closure$jobExecutionData.jobBaseUrl + closure$buildNumber + '/api/xml', JenkinsJobExecutor$Companion_getInstance().resultRegex_0, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, JenkinsJobExecutor$pollJobForCompletion$lambda$lambda).then(JenkinsJobExecutor$pollJobForCompletion$lambda$lambda_0(closure$buildNumber)).then(JenkinsJobExecutor$pollJobForCompletion$lambda$lambda_1(closure$jobExecutionData, closure$crumbWithId));
    };
  }
  JenkinsJobExecutor.prototype.pollJobForCompletion_0 = function (crumbWithId, jobExecutionData, buildNumber, pollEverySecond, maxWaitingTimeForCompletenessInSeconds) {
    return sleep(pollEverySecond * 500 | 0, JenkinsJobExecutor$pollJobForCompletion$lambda(crumbWithId, jobExecutionData, buildNumber, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, this));
  };
  JenkinsJobExecutor.prototype.pollAndExtract_grt11n$ = function (crumbWithId, url, regex, pollEverySecond, maxWaitingTimeInSeconds, errorHandler) {
    return Poller_getInstance().pollAndExtract_grt11n$(crumbWithId, url, regex, pollEverySecond, maxWaitingTimeInSeconds, errorHandler);
  };
  function JenkinsJobExecutor$Companion() {
    JenkinsJobExecutor$Companion_instance = this;
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
  function createParameterRegexPattern$lambda(f) {
    var k = f.key;
    var v = f.value;
    return '<parameter[\\S\\s]*?' + ('<name>' + k + '<\/name>' + regex.NONE_OR_SOME_CHARS) + ('<value>' + v + '<\/value>' + regex.NONE_OR_SOME_CHARS) + '<\/parameter>[\\S\\s]*?';
  }
  function createParameterRegexPattern(parameters) {
    return joinToString(parameters.entries, regex.NONE_OR_SOME_CHARS, void 0, void 0, void 0, void 0, createParameterRegexPattern$lambda);
  }
  function toQueryParameters$lambda(f) {
    var k = f.key;
    var v = f.value;
    return k + '=' + v;
  }
  function toQueryParameters(parameters) {
    return joinToString(parameters.entries, '&', void 0, void 0, void 0, void 0, toQueryParameters$lambda);
  }
  var END_OF_CONSOLE_URL_SUFFIX;
  function JobExecutionData(jobName, jobBaseUrl, jobTriggerUrl, body, identifyingParams, queuedItemUrlExtractor) {
    JobExecutionData$Companion_getInstance();
    this.jobName = jobName;
    this.jobBaseUrl = jobBaseUrl;
    this.jobTriggerUrl = jobTriggerUrl;
    this.body = body;
    this.identifyingParams = identifyingParams;
    this.queuedItemUrlExtractor = queuedItemUrlExtractor;
  }
  JobExecutionData.prototype.getJenkinsBaseUrl = function () {
    return substringBefore_0(this.jobBaseUrl, '/job/');
  };
  function JobExecutionData$Companion() {
    JobExecutionData$Companion_instance = this;
  }
  JobExecutionData$Companion.prototype.buildWithParameters_k99ke9$ = function (jobName, jobBaseUrl, body, identifyingParams) {
    var jobBaseUrlWithSlash = this.assureEndsWithSlash_0(jobBaseUrl);
    var jobTriggerUrl = jobBaseUrlWithSlash + 'buildWithParameters';
    return this.create_0(jobName, jobBaseUrlWithSlash, jobTriggerUrl, body, identifyingParams, LocationBasedQueuedItemUrlExtractor_getInstance());
  };
  JobExecutionData$Companion.prototype.m2ReleaseSubmit_x0a6t6$ = function (jobName, jobBaseUrl, body, releaseVersion, nextDevVersion) {
    var jobBaseUrlWithSlash = this.assureEndsWithSlash_0(jobBaseUrl);
    var jobTriggerUrl = jobBaseUrlWithSlash + 'm2release/submit';
    var identifyingParams = mapOf([to('MVN_RELEASE_VERSION', releaseVersion), to('MVN_DEV_VERSION', nextDevVersion)]);
    var queuedItemUrlExtractor = new RestApiBasedQueuedItemUrlExtractor(identifyingParams);
    return this.create_0(jobName, jobBaseUrlWithSlash, jobTriggerUrl, body, identifyingParams, queuedItemUrlExtractor);
  };
  JobExecutionData$Companion.prototype.create_0 = function (jobName, jobBaseUrl, jobTriggerUrl, body, identifyingParams, queuedItemUrlExtractor) {
    var jobBaseUrlWithSlash = this.assureEndsWithSlash_0(jobBaseUrl);
    return new JobExecutionData(jobName, jobBaseUrlWithSlash, jobTriggerUrl, body, identifyingParams, queuedItemUrlExtractor);
  };
  JobExecutionData$Companion.prototype.assureEndsWithSlash_0 = function (jobBaseUrl) {
    return endsWith(jobBaseUrl, '/') ? jobBaseUrl : jobBaseUrl + '/';
  };
  JobExecutionData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JobExecutionData$Companion_instance = null;
  function JobExecutionData$Companion_getInstance() {
    if (JobExecutionData$Companion_instance === null) {
      new JobExecutionData$Companion();
    }
    return JobExecutionData$Companion_instance;
  }
  JobExecutionData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobExecutionData',
    interfaces: []
  };
  JobExecutionData.prototype.component1 = function () {
    return this.jobName;
  };
  JobExecutionData.prototype.component2 = function () {
    return this.jobBaseUrl;
  };
  JobExecutionData.prototype.component3 = function () {
    return this.jobTriggerUrl;
  };
  JobExecutionData.prototype.component4 = function () {
    return this.body;
  };
  JobExecutionData.prototype.component5 = function () {
    return this.identifyingParams;
  };
  JobExecutionData.prototype.component6 = function () {
    return this.queuedItemUrlExtractor;
  };
  JobExecutionData.prototype.copy_xs099y$ = function (jobName, jobBaseUrl, jobTriggerUrl, body, identifyingParams, queuedItemUrlExtractor) {
    return new JobExecutionData(jobName === void 0 ? this.jobName : jobName, jobBaseUrl === void 0 ? this.jobBaseUrl : jobBaseUrl, jobTriggerUrl === void 0 ? this.jobTriggerUrl : jobTriggerUrl, body === void 0 ? this.body : body, identifyingParams === void 0 ? this.identifyingParams : identifyingParams, queuedItemUrlExtractor === void 0 ? this.queuedItemUrlExtractor : queuedItemUrlExtractor);
  };
  JobExecutionData.prototype.toString = function () {
    return 'JobExecutionData(jobName=' + Kotlin.toString(this.jobName) + (', jobBaseUrl=' + Kotlin.toString(this.jobBaseUrl)) + (', jobTriggerUrl=' + Kotlin.toString(this.jobTriggerUrl)) + (', body=' + Kotlin.toString(this.body)) + (', identifyingParams=' + Kotlin.toString(this.identifyingParams)) + (', queuedItemUrlExtractor=' + Kotlin.toString(this.queuedItemUrlExtractor)) + ')';
  };
  JobExecutionData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.jobName) | 0;
    result = result * 31 + Kotlin.hashCode(this.jobBaseUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.jobTriggerUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.body) | 0;
    result = result * 31 + Kotlin.hashCode(this.identifyingParams) | 0;
    result = result * 31 + Kotlin.hashCode(this.queuedItemUrlExtractor) | 0;
    return result;
  };
  JobExecutionData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.jobName, other.jobName) && Kotlin.equals(this.jobBaseUrl, other.jobBaseUrl) && Kotlin.equals(this.jobTriggerUrl, other.jobTriggerUrl) && Kotlin.equals(this.body, other.body) && Kotlin.equals(this.identifyingParams, other.identifyingParams) && Kotlin.equals(this.queuedItemUrlExtractor, other.queuedItemUrlExtractor)))));
  };
  function JobExecutionDataFactory() {
  }
  JobExecutionDataFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JobExecutionDataFactory',
    interfaces: []
  };
  function JobExecutor() {
  }
  JobExecutor.prototype.trigger_gyv2e7$ = function (jobExecutionData, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, verbose, callback$default) {
    if (verbose === void 0)
      verbose = true;
    return callback$default ? callback$default(jobExecutionData, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, verbose) : this.trigger_gyv2e7$$default(jobExecutionData, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, verbose);
  };
  JobExecutor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JobExecutor',
    interfaces: []
  };
  function LocationBasedQueuedItemUrlExtractor() {
    LocationBasedQueuedItemUrlExtractor_instance = this;
  }
  LocationBasedQueuedItemUrlExtractor.prototype.extract_fjylkq$ = function (crumbWithId, response, jobExecutionData) {
    var tmp$;
    tmp$ = response.headers.get('Location');
    if (tmp$ == null) {
      throw IllegalStateException_init('Job ' + jobExecutionData.jobName + ' queued but Location header not found in response of Jenkins.' + '\nHave you exposed Location with Access-Control-Expose-Headers?');
    }
    return Promise.resolve(tmp$);
  };
  LocationBasedQueuedItemUrlExtractor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LocationBasedQueuedItemUrlExtractor',
    interfaces: [QueuedItemUrlExtractor]
  };
  var LocationBasedQueuedItemUrlExtractor_instance = null;
  function LocationBasedQueuedItemUrlExtractor_getInstance() {
    if (LocationBasedQueuedItemUrlExtractor_instance === null) {
      new LocationBasedQueuedItemUrlExtractor();
    }
    return LocationBasedQueuedItemUrlExtractor_instance;
  }
  function Poller() {
    Poller_instance = this;
  }
  function Poller$pollAndExtract$lambda(closure$regex) {
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
  function Poller$pollAndExtract$lambda_0(closure$errorHandler) {
    return function (t) {
      if (Kotlin.isType(t, PollTimeoutException)) {
        return closure$errorHandler(t);
      }
       else {
        throw t;
      }
    };
  }
  Poller.prototype.pollAndExtract_grt11n$ = function (crumbWithId, url, regex, pollEverySecond, maxWaitingTimeInSeconds, errorHandler) {
    return this.poll_0(Poller$Poller$PollData_init(crumbWithId, url, pollEverySecond, maxWaitingTimeInSeconds, Poller$pollAndExtract$lambda(regex))).catch(Poller$pollAndExtract$lambda_0(errorHandler));
  };
  function Poller$poll$rePoll$lambda(closure$pollData, this$Poller) {
    return function () {
      return this$Poller.poll_0(closure$pollData.newWithIncreasedNumberOfTimes());
    };
  }
  function Poller$poll$rePoll(closure$pollData, this$Poller) {
    return function (body) {
      if (Kotlin.imul(closure$pollData.numberOfTries, closure$pollData.pollEverySecond) >= closure$pollData.maxWaitingTimeInSeconds) {
        throw PollTimeoutException_init('Waited at least ' + closure$pollData.maxWaitingTimeInSeconds + ' seconds', body);
      }
      var p = sleep(closure$pollData.pollEverySecond * 1000 | 0, Poller$poll$rePoll$lambda(closure$pollData, this$Poller));
      return p;
    };
  }
  function Poller$poll$lambda(closure$pollData, closure$rePoll) {
    return function (f) {
      var body = f.component2();
      var tmp$ = closure$pollData.action(body);
      var success = tmp$.component1()
      , result = tmp$.component2();
      if (success) {
        if (result == null) {
          throw IllegalStateException_init('Result was null even though success flag during polling was true.' + '\nPlease report a bug: https://github.com/loewenfels/dep-graph-releaser/issues/new');
        }
        return result;
      }
       else {
        return closure$rePoll(body);
      }
    };
  }
  function Poller$poll$lambda_0(closure$rePoll) {
    return function (t) {
      if (Kotlin.isType(t, PollTimeoutException))
        throw t;
      else if (Kotlin.isType(t, Exception)) {
        console.log(t);
        return closure$rePoll('');
      }
       else
        throw t;
    };
  }
  Poller.prototype.poll_0 = function (pollData) {
    var headers = createHeaderWithCrumb(pollData.crumbWithId);
    var init = createGetRequest(headers);
    var rePoll = Poller$poll$rePoll(pollData, this);
    return window.fetch(pollData.pollUrl, init).then(getCallableRef('checkStatusOk', function (response) {
      return checkStatusOk(response);
    })).then(Poller$poll$lambda(pollData, rePoll)).catch(Poller$poll$lambda_0(rePoll));
  };
  function Poller$PollData(crumbWithId, pollUrl, pollEverySecond, maxWaitingTimeInSeconds, action, numberOfTries) {
    this.crumbWithId = crumbWithId;
    this.pollUrl = pollUrl;
    this.pollEverySecond = pollEverySecond;
    this.maxWaitingTimeInSeconds = maxWaitingTimeInSeconds;
    this.action = action;
    this.numberOfTries = numberOfTries;
  }
  Poller$PollData.prototype.newWithIncreasedNumberOfTimes = function () {
    return new Poller$PollData(this.crumbWithId, this.pollUrl, this.pollEverySecond, this.maxWaitingTimeInSeconds, this.action, this.numberOfTries + 1 | 0);
  };
  Poller$PollData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PollData',
    interfaces: []
  };
  function Poller$Poller$PollData_init(crumbWithId, pollUrl, pollEverySecond, maxWaitingTimeInSeconds, action, $this) {
    $this = $this || Object.create(Poller$PollData.prototype);
    Poller$PollData.call($this, crumbWithId, pollUrl, pollEverySecond, maxWaitingTimeInSeconds, action, 0);
    return $this;
  }
  Poller$PollData.prototype.component1 = function () {
    return this.crumbWithId;
  };
  Poller$PollData.prototype.component2 = function () {
    return this.pollUrl;
  };
  Poller$PollData.prototype.component3 = function () {
    return this.pollEverySecond;
  };
  Poller$PollData.prototype.component4 = function () {
    return this.maxWaitingTimeInSeconds;
  };
  Poller$PollData.prototype.component5 = function () {
    return this.action;
  };
  Poller$PollData.prototype.component6 = function () {
    return this.numberOfTries;
  };
  Poller$PollData.prototype.copy_m1jht0$ = function (crumbWithId, pollUrl, pollEverySecond, maxWaitingTimeInSeconds, action, numberOfTries) {
    return new Poller$PollData(crumbWithId === void 0 ? this.crumbWithId : crumbWithId, pollUrl === void 0 ? this.pollUrl : pollUrl, pollEverySecond === void 0 ? this.pollEverySecond : pollEverySecond, maxWaitingTimeInSeconds === void 0 ? this.maxWaitingTimeInSeconds : maxWaitingTimeInSeconds, action === void 0 ? this.action : action, numberOfTries === void 0 ? this.numberOfTries : numberOfTries);
  };
  Poller$PollData.prototype.toString = function () {
    return 'PollData(crumbWithId=' + Kotlin.toString(this.crumbWithId) + (', pollUrl=' + Kotlin.toString(this.pollUrl)) + (', pollEverySecond=' + Kotlin.toString(this.pollEverySecond)) + (', maxWaitingTimeInSeconds=' + Kotlin.toString(this.maxWaitingTimeInSeconds)) + (', action=' + Kotlin.toString(this.action)) + (', numberOfTries=' + Kotlin.toString(this.numberOfTries)) + ')';
  };
  Poller$PollData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.crumbWithId) | 0;
    result = result * 31 + Kotlin.hashCode(this.pollUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.pollEverySecond) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxWaitingTimeInSeconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.action) | 0;
    result = result * 31 + Kotlin.hashCode(this.numberOfTries) | 0;
    return result;
  };
  Poller$PollData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.crumbWithId, other.crumbWithId) && Kotlin.equals(this.pollUrl, other.pollUrl) && Kotlin.equals(this.pollEverySecond, other.pollEverySecond) && Kotlin.equals(this.maxWaitingTimeInSeconds, other.maxWaitingTimeInSeconds) && Kotlin.equals(this.action, other.action) && Kotlin.equals(this.numberOfTries, other.numberOfTries)))));
  };
  Poller.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Poller',
    interfaces: []
  };
  var Poller_instance = null;
  function Poller_getInstance() {
    if (Poller_instance === null) {
      new Poller();
    }
    return Poller_instance;
  }
  function ProcessStarter(publisher, jenkinsJobExecutor, simulatingJobExecutor, releaserSupplier) {
    this.publisher_0 = publisher;
    this.jenkinsJobExecutor_0 = jenkinsJobExecutor;
    this.simulatingJobExecutor_0 = simulatingJobExecutor;
    this.releaser_lffxot$_0 = lazy(ProcessStarter$releaser$lambda(releaserSupplier, this));
  }
  Object.defineProperty(ProcessStarter.prototype, 'releaser_0', {
    get: function () {
      return this.releaser_lffxot$_0.value;
    }
  });
  ProcessStarter.prototype.publishChanges_6taknv$ = function (verbose) {
    return this.publishChanges_rt5gs7$(this.jenkinsJobExecutor_0, verbose);
  };
  function ProcessStarter$publishChanges$lambda(it) {
    return true;
  }
  ProcessStarter.prototype.publishChanges_rt5gs7$ = function (jobExecutor, verbose) {
    var tmp$;
    var changed = this.publisher_0.applyChanges();
    if (changed) {
      var publishId = getTextField(ContentContainer$Companion_getInstance().RELEASE_ID_HTML_ID).value;
      var newFileName = 'release-' + publishId;
      tmp$ = this.publisher_0.publish_1kqjf$(newFileName, verbose, jobExecutor).then(ProcessStarter$publishChanges$lambda);
    }
     else {
      tmp$ = Promise.resolve(false);
    }
    return tmp$;
  };
  function ProcessStarter$dryRun$lambda(this$ProcessStarter, closure$modifiableState) {
    return function () {
      return this$ProcessStarter.releaser_0.release_q42tl1$(this$ProcessStarter.jenkinsJobExecutor_0, closure$modifiableState.dryRunExecutionDataFactory);
    };
  }
  ProcessStarter.prototype.dryRun_tfgl3i$ = function (modifiableState) {
    return this.triggerProcess_0(modifiableState, TypeOfRun.DRY_RUN, ProcessStarter$dryRun$lambda(this, modifiableState));
  };
  function ProcessStarter$release$lambda(this$ProcessStarter, closure$modifiableState) {
    return function () {
      return this$ProcessStarter.releaser_0.release_q42tl1$(this$ProcessStarter.jenkinsJobExecutor_0, closure$modifiableState.releaseJobExecutionDataFactory);
    };
  }
  ProcessStarter.prototype.release_tfgl3i$ = function (modifiableState) {
    return this.triggerProcess_0(modifiableState, TypeOfRun.RELEASE, ProcessStarter$release$lambda(this, modifiableState));
  };
  function ProcessStarter$explore$lambda(this$ProcessStarter, closure$modifiableState) {
    return function () {
      return this$ProcessStarter.releaser_0.release_q42tl1$(this$ProcessStarter.simulatingJobExecutor_0, closure$modifiableState.releaseJobExecutionDataFactory);
    };
  }
  ProcessStarter.prototype.explore_tfgl3i$ = function (modifiableState) {
    return this.triggerProcess_0(modifiableState, TypeOfRun.EXPLORE, ProcessStarter$explore$lambda(this, modifiableState));
  };
  ProcessStarter.prototype.triggerProcess_0 = function (modifiableState, typeOfRun, action) {
    if (Pipeline$Companion_getInstance().getReleaseState() === ReleaseState.FAILED) {
      if (typeOfRun === TypeOfRun.DRY_RUN) {
        this.turnFailedProjectsIntoReTriggerAndReady_0(modifiableState.releasePlan);
      }
       else {
        this.turnFailedCommandsIntoStateReTrigger_0(modifiableState.releasePlan);
      }
    }
    if (Pipeline$Companion_getInstance().getReleaseState() === ReleaseState.SUCCEEDED) {
      Pipeline$Companion_getInstance().changeReleaseState_g1wt0g$(ReleaseState.READY);
    }
    Pipeline$Companion_getInstance().changeTypeOfRun_1jdmkk$(typeOfRun);
    return action();
  };
  ProcessStarter.prototype.turnFailedProjectsIntoReTriggerAndReady_0 = function (releasePlan) {
    var $receiver = releasePlan.iterator();
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      if (!element.isSubmodule && this.hasFailedCommandsOrSubmoduleHasFailedCommands_0(element, releasePlan)) {
        this.turnCommandsIntoStateReadyToReTriggerAndReady_0(releasePlan, element);
      }
    }
  };
  ProcessStarter.prototype.turnCommandsIntoStateReadyToReTriggerAndReady_0 = function (releasePlan, project) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = project.commands.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var commandState = Pipeline$Companion_getInstance().getCommandState_o8feeo$(project.id, index_0);
      if (CommandState.Companion.isFailureState_m86w84$(commandState)) {
        this.changeToStateReadyToReTrigger_0(project, index_0);
      }
       else if (commandState === CommandState.Succeeded) {
        this.changeStateToReadyWithoutCheck_0(project, index_0);
      }
    }
    var tmp$_1;
    tmp$_1 = releasePlan.getSubmodules_lljhqa$(project.id).iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var submodule = releasePlan.getProject_lljhqa$(element);
      this.turnCommandsIntoStateReadyToReTriggerAndReady_0(releasePlan, submodule);
    }
  };
  ProcessStarter.prototype.hasFailedCommandsOrSubmoduleHasFailedCommands_0 = function ($receiver, releasePlan) {
    var $receiver_0 = mapWithIndex_0($receiver.commands);
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var index = element.component1();
        if (CommandState.Companion.isFailureState_m86w84$(Pipeline$Companion_getInstance().getCommandState_o8feeo$($receiver.id, index))) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    var tmp$_0 = any$result;
    if (!tmp$_0) {
      var $receiver_1 = releasePlan.getSubmodules_lljhqa$($receiver.id);
      var any$result_0;
      any$break: do {
        var tmp$_1;
        if (Kotlin.isType($receiver_1, Collection) && $receiver_1.isEmpty()) {
          any$result_0 = false;
          break any$break;
        }
        tmp$_1 = $receiver_1.iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          if (this.hasFailedCommandsOrSubmoduleHasFailedCommands_0(releasePlan.getProject_lljhqa$(element_0), releasePlan)) {
            any$result_0 = true;
            break any$break;
          }
        }
        any$result_0 = false;
      }
       while (false);
      tmp$_0 = any$result_0;
    }
    return tmp$_0;
  };
  ProcessStarter.prototype.turnFailedCommandsIntoStateReTrigger_0 = function (releasePlan) {
    var $receiver = releasePlan.iterator();
    while ($receiver.hasNext()) {
      var element = $receiver.next();
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = element.commands.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
        var commandState = Pipeline$Companion_getInstance().getCommandState_o8feeo$(element.id, index_0);
        if (CommandState.Companion.isFailureState_m86w84$(commandState)) {
          this.changeToStateReadyToReTrigger_0(element, index_0);
        }
      }
    }
  };
  function ProcessStarter$changeStateToReadyWithoutCheck$lambda(f, f_0) {
    return CommandState.Ready;
  }
  ProcessStarter.prototype.changeStateToReadyWithoutCheck_0 = function (project, index) {
    Pipeline$Companion_getInstance().changeStateOfCommand_t14kxg$(project, index, CommandState.Ready, ProcessStarter$changeStateToReadyWithoutCheck$lambda);
  };
  ProcessStarter.prototype.changeToStateReadyToReTrigger_0 = function (project, index) {
    Pipeline$Companion_getInstance().changeStateOfCommand_fho14z$(project, index, CommandState.ReadyToReTrigger);
  };
  ProcessStarter.prototype.reProcess_mzmc0n$ = function (project, modifiableState) {
    var tmp$;
    switch (Pipeline$Companion_getInstance().getTypeOfRun().name) {
      case 'EXPLORE':
        tmp$ = to(this.simulatingJobExecutor_0, modifiableState.releaseJobExecutionDataFactory);
        break;
      case 'DRY_RUN':
        tmp$ = to(this.jenkinsJobExecutor_0, modifiableState.dryRunExecutionDataFactory);
        break;
      case 'RELEASE':
        tmp$ = to(this.jenkinsJobExecutor_0, modifiableState.releaseJobExecutionDataFactory);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var tmp$_0 = tmp$;
    var jobExecutor = tmp$_0.component1()
    , dataFactory = tmp$_0.component2();
    this.releaser_0.reProcess_9qcicp$(project.id, jobExecutor, dataFactory);
  };
  function ProcessStarter$releaser$lambda(closure$releaserSupplier, this$ProcessStarter) {
    return function () {
      return closure$releaserSupplier(this$ProcessStarter);
    };
  }
  ProcessStarter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcessStarter',
    interfaces: []
  };
  function QueuedItemBasedBuildNumberExtractor(crumbWithId, queuedItemUrl) {
    this.crumbWithId_0 = crumbWithId;
    this.queuedItemUrl_0 = queuedItemUrl;
  }
  function QueuedItemBasedBuildNumberExtractor$extract$lambda$lambda(this$QueuedItemBasedBuildNumberExtractor) {
    return function (e) {
      throw new PollTimeoutException('Extracting the build number via the queued item failed (max waiting time reached). Could not find the build number in the returned body.' + ('\n' + 'Job URL: ' + this$QueuedItemBasedBuildNumberExtractor.queuedItemUrl_0) + ('\n' + 'Regex used: ' + BuilderNumberExtractor$Companion_getInstance().numberRegex.pattern) + ('\n' + 'Content: ' + e.body), e.body, e);
    };
  }
  function QueuedItemBasedBuildNumberExtractor$extract$lambda(this$QueuedItemBasedBuildNumberExtractor) {
    return function () {
      return Poller_getInstance().pollAndExtract_grt11n$(this$QueuedItemBasedBuildNumberExtractor.crumbWithId_0, this$QueuedItemBasedBuildNumberExtractor.queuedItemUrl_0 + 'api/xml', BuilderNumberExtractor$Companion_getInstance().numberRegex, 2, 20, QueuedItemBasedBuildNumberExtractor$extract$lambda$lambda(this$QueuedItemBasedBuildNumberExtractor));
    };
  }
  function QueuedItemBasedBuildNumberExtractor$extract$lambda_0(it) {
    return toInt(it);
  }
  QueuedItemBasedBuildNumberExtractor.prototype.extract = function () {
    return sleep(200, QueuedItemBasedBuildNumberExtractor$extract$lambda(this)).then(QueuedItemBasedBuildNumberExtractor$extract$lambda_0);
  };
  QueuedItemBasedBuildNumberExtractor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueuedItemBasedBuildNumberExtractor',
    interfaces: [BuilderNumberExtractor]
  };
  function QueuedItemUrlExtractor() {
  }
  QueuedItemUrlExtractor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'QueuedItemUrlExtractor',
    interfaces: []
  };
  function ReleaseJobExecutionDataFactory(defaultJenkinsBaseUrl, releasePlan) {
    BaseJobExecutionDataFactory.call(this, defaultJenkinsBaseUrl, releasePlan);
    this.remoteRegex_0 = null;
    this.regexParametersList_0 = null;
    this.jobMapping_0 = null;
    this.buildWithParamJobsList_0 = null;
    this.checkConfig_0(releasePlan.config);
    this.remoteRegex_0 = parseRemoteRegex(releasePlan);
    this.regexParametersList_0 = parseRegexParams(releasePlan);
    this.jobMapping_0 = parseJobMapping(releasePlan);
    this.buildWithParamJobsList_0 = parseBuildWithParamJobs(releasePlan);
  }
  ReleaseJobExecutionDataFactory.prototype.checkConfig_0 = function (config) {
    this.requireConfigEntry_nhrt5l$(config, ConfigKey.UPDATE_DEPENDENCY_JOB);
    this.requireConfigEntry_nhrt5l$(config, ConfigKey.REMOTE_REGEX);
    this.requireConfigEntry_nhrt5l$(config, ConfigKey.COMMIT_PREFIX);
  };
  ReleaseJobExecutionDataFactory.prototype.create_awtgy4$ = function (project, command) {
    var tmp$;
    if (Kotlin.isType(command, JenkinsUpdateDependency))
      tmp$ = this.triggerUpdateDependency_0(project, command);
    else if (Kotlin.isType(command, JenkinsNextDevReleaseCommand))
      tmp$ = this.triggerRelease_0(project, command);
    else
      throw UnsupportedOperationException_init('We do not (yet) support the command: ' + command);
    return tmp$;
  };
  ReleaseJobExecutionDataFactory.prototype.triggerUpdateDependency_0 = function (project, command) {
    var jobUrl = this.getJobUrl_udzor3$(ConfigKey.UPDATE_DEPENDENCY_JOB);
    var jobName = 'update dependency of ' + project.id.identifier;
    var params = this.createUpdateDependencyParams_0(project, command);
    return JobExecutionData$Companion_getInstance().buildWithParameters_k99ke9$(jobName, jobUrl, toQueryParameters(params), params);
  };
  ReleaseJobExecutionDataFactory.prototype.createUpdateDependencyParams_0 = function (project, command) {
    var tmp$;
    var dependency = this.releasePlan.getProject_lljhqa$(command.projectId);
    var dependencyMavenProjectId = Kotlin.isType(tmp$ = dependency.id, MavenProjectId) ? tmp$ : throwCCE();
    return mapOf([to('pathToProject', project.relativePath), to('&groupId', dependencyMavenProjectId.groupId), to('&artifactId', dependencyMavenProjectId.artifactId), to('&newVersion', dependency.releaseVersion), to('&commitPrefix', this.getConfig_udzor3$(ConfigKey.COMMIT_PREFIX)), to('&releaseId', this.releasePlan.releaseId)]);
  };
  function ReleaseJobExecutionDataFactory$triggerRelease$lambda(it) {
    return asSequence(it);
  }
  ReleaseJobExecutionDataFactory.prototype.triggerRelease_0 = function (project, command) {
    var tmp$, tmp$_0, tmp$_1;
    var mavenProjectId = Kotlin.isType(tmp$ = project.id, MavenProjectId) ? tmp$ : throwCCE();
    var jobName = this.getJobName_0(project);
    var jenkinsBaseUrl = (tmp$_0 = firstOrNull(this.getMatchingEntries_0(this.remoteRegex_0, mavenProjectId))) != null ? tmp$_0 : this.defaultJenkinsBaseUrl;
    var jobUrl = this.getJobUrl_puj7f4$(jenkinsBaseUrl, jobName);
    var relevantParams = flatMap(this.getMatchingEntries_0(this.regexParametersList_0, mavenProjectId), ReleaseJobExecutionDataFactory$triggerRelease$lambda);
    var buildWithParamFormat = firstOrNull(this.getMatchingEntries_0(this.buildWithParamJobsList_0, mavenProjectId));
    if (buildWithParamFormat != null) {
      tmp$_1 = this.triggerBuildWithParamRelease_0(buildWithParamFormat, relevantParams, project, command, jobUrl);
    }
     else {
      tmp$_1 = this.triggerM2Release_0(relevantParams, project, command, jobUrl);
    }
    return tmp$_1;
  };
  ReleaseJobExecutionDataFactory.prototype.getJobName_0 = function (project) {
    var tmp$, tmp$_0;
    var mavenProjectId = Kotlin.isType(tmp$ = project.id, MavenProjectId) ? tmp$ : throwCCE();
    return (tmp$_0 = this.jobMapping_0.get_11rb$(mavenProjectId.identifier)) != null ? tmp$_0 : mavenProjectId.artifactId;
  };
  ReleaseJobExecutionDataFactory.prototype.triggerBuildWithParamRelease_0 = function (buildWithParamFormat, relevantParams, project, command, jobUrl) {
    var identifyingParams = buildWithParamFormat.format_puj7f4$(project.releaseVersion, command.nextDevVersion);
    return JobExecutionData$Companion_getInstance().buildWithParameters_k99ke9$('release ' + project.id.identifier, jobUrl, toQueryParameters(identifyingParams) + '&' + joinToString_0(relevantParams, '&'), identifyingParams);
  };
  ReleaseJobExecutionDataFactory.prototype.triggerM2Release_0 = function (relevantParams, project, command, jobUrl) {
    var parameters = StringBuilder_init();
    var itr = relevantParams.iterator();
    if (itr.hasNext()) {
      var tmp$ = split(itr.next(), Kotlin.charArrayOf(61));
      var name = tmp$.get_za3lpa$(0);
      var value = tmp$.get_za3lpa$(1);
      parameters.append_gw00v9$('{' + '"' + 'name' + '"' + ':' + '"' + name + '"' + ',' + '"' + 'value' + '"' + ':' + '"' + value + '"' + '}');
    }
    while (itr.hasNext()) {
      parameters.append_gw00v9$(',');
      var tmp$_0 = split(itr.next(), Kotlin.charArrayOf(61));
      var name_0 = tmp$_0.get_za3lpa$(0);
      var value_0 = tmp$_0.get_za3lpa$(1);
      parameters.append_gw00v9$('{' + '"' + 'name' + '"' + ':' + '"' + name_0 + '"' + ',' + '"' + 'value' + '"' + ':' + '"' + value_0 + '"' + '}');
    }
    var params = 'releaseVersion=' + project.releaseVersion + ('&developmentVersion=' + command.nextDevVersion) + ('&json={parameter=[' + parameters + ']}');
    return JobExecutionData$Companion_getInstance().m2ReleaseSubmit_x0a6t6$('release ' + project.id.identifier, jobUrl, params, project.releaseVersion, command.nextDevVersion);
  };
  function ReleaseJobExecutionDataFactory$getMatchingEntries$lambda(closure$mavenProjectId) {
    return function (f) {
      var regex = f.component1();
      return regex.matches_6bul2c$(closure$mavenProjectId.identifier);
    };
  }
  function ReleaseJobExecutionDataFactory$getMatchingEntries$lambda_0(it) {
    return it.second;
  }
  ReleaseJobExecutionDataFactory.prototype.getMatchingEntries_0 = function (regex, mavenProjectId) {
    return map(filter(asSequence(regex), ReleaseJobExecutionDataFactory$getMatchingEntries$lambda(mavenProjectId)), ReleaseJobExecutionDataFactory$getMatchingEntries$lambda_0);
  };
  ReleaseJobExecutionDataFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReleaseJobExecutionDataFactory',
    interfaces: [BaseJobExecutionDataFactory]
  };
  function RestApiBasedQueuedItemUrlExtractor(identifyingParams) {
    this.identifyingParams_0 = identifyingParams;
  }
  function RestApiBasedQueuedItemUrlExtractor$extract$lambda(closure$paramsIdentification, closure$jobName, closure$jenkinsBaseUrl) {
    return function (f) {
      var body = f.component2();
      var queuedItemRegex = Regex_init('<item>[\\S\\s]*?' + closure$paramsIdentification + ('<task>' + regex.NONE_OR_SOME_CHARS + '<name>' + closure$jobName + '<\/name>' + regex.NONE_OR_SOME_CHARS + '<\/task>' + regex.NONE_OR_SOME_CHARS) + '<url>([^<]+)<\/url>[\\S\\s]*?' + '<\/item>');
      var matchResult = queuedItemRegex.find_905azu$(body);
      if (matchResult != null) {
        return closure$jenkinsBaseUrl + '/' + matchResult.groupValues.get_za3lpa$(1);
      }
       else {
        return null;
      }
    };
  }
  RestApiBasedQueuedItemUrlExtractor.prototype.extract_fjylkq$ = function (crumbWithId, response, jobExecutionData) {
    var jenkinsBaseUrl = substringBefore_0(jobExecutionData.jobBaseUrl, '/job/');
    var t = substringAfter(jobExecutionData.jobBaseUrl, '/job/');
    var jobName = endsWith(t, '/') ? substringBeforeLast(t, '/') : t;
    var headers = createHeaderWithCrumb(crumbWithId);
    var init = createGetRequest(headers);
    var paramsIdentification = createParameterRegexPattern(this.identifyingParams_0);
    return window.fetch(jenkinsBaseUrl + '/queue/api/xml', init).then(getCallableRef('checkStatusOk', function (response) {
      return checkStatusOk(response);
    })).then(RestApiBasedQueuedItemUrlExtractor$extract$lambda(paramsIdentification, jobName, jenkinsBaseUrl));
  };
  RestApiBasedQueuedItemUrlExtractor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RestApiBasedQueuedItemUrlExtractor',
    interfaces: [QueuedItemUrlExtractor]
  };
  function SimulatingJobExecutor() {
    this.count_0 = 0;
  }
  SimulatingJobExecutor.prototype.pollAndExtract_grt11n$ = function (crumbWithId, url, regex, pollEverySecond, maxWaitingTimeInSeconds, errorHandler) {
    return Promise.resolve('simulation-only.json');
  };
  function SimulatingJobExecutor$trigger$lambda(closure$jobQueuedHook, closure$jobExecutionData, closure$jobName, this$SimulatingJobExecutor) {
    return function () {
      closure$jobQueuedHook(closure$jobExecutionData.jobBaseUrl + 'queuingUrl');
      this$SimulatingJobExecutor.informIfStepWiseAndNotPublish_0('job ' + closure$jobName + ' queued', closure$jobName);
      if (this$SimulatingJobExecutor.isNotPublishJob_0(closure$jobExecutionData)) {
        this$SimulatingJobExecutor.count_0 = this$SimulatingJobExecutor.count_0 + 1 | 0;
      }
      if (failDuringQueueing) {
        this$SimulatingJobExecutor.checkIfNeedsToFail_0(closure$jobExecutionData);
      }
      return Unit;
    };
  }
  function SimulatingJobExecutor$trigger$lambda$lambda(closure$jobName, closure$jobStartedHook, this$SimulatingJobExecutor) {
    return function () {
      return this$SimulatingJobExecutor.simulateBuildNumberExtracted_0(closure$jobName, closure$jobStartedHook);
    };
  }
  function SimulatingJobExecutor$trigger$lambda_0(closure$jobName, closure$jobStartedHook, this$SimulatingJobExecutor) {
    return function (it) {
      return sleep(waitBetweenSteps, SimulatingJobExecutor$trigger$lambda$lambda(closure$jobName, closure$jobStartedHook, this$SimulatingJobExecutor));
    };
  }
  function SimulatingJobExecutor$trigger$lambda$lambda_0(closure$jobExecutionData, this$SimulatingJobExecutor) {
    return function () {
      return this$SimulatingJobExecutor.simulateJobFinished_0(closure$jobExecutionData);
    };
  }
  function SimulatingJobExecutor$trigger$lambda_1(closure$jobExecutionData, this$SimulatingJobExecutor) {
    return function (it) {
      return sleep(waitBetweenSteps, SimulatingJobExecutor$trigger$lambda$lambda_0(closure$jobExecutionData, this$SimulatingJobExecutor));
    };
  }
  function SimulatingJobExecutor$trigger$lambda_2(this$SimulatingJobExecutor) {
    return function (it) {
      return this$SimulatingJobExecutor.getFakeCrumbWithIdAndBuildNumber_0();
    };
  }
  SimulatingJobExecutor.prototype.trigger_gyv2e7$$default = function (jobExecutionData, jobQueuedHook, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, verbose) {
    var jobName = jobExecutionData.jobName;
    return sleep(100, SimulatingJobExecutor$trigger$lambda(jobQueuedHook, jobExecutionData, jobName, this)).then(SimulatingJobExecutor$trigger$lambda_0(jobName, jobStartedHook, this)).then(SimulatingJobExecutor$trigger$lambda_1(jobExecutionData, this)).then(SimulatingJobExecutor$trigger$lambda_2(this));
  };
  SimulatingJobExecutor.prototype.simulateBuildNumberExtracted_0 = function (jobName, jobStartedHook) {
    jobStartedHook(100);
    return this.informIfStepWiseAndNotPublish_0('job ' + jobName + ' started', jobName);
  };
  SimulatingJobExecutor.prototype.informIfStepWiseAndNotPublish_0 = function (msg, jobName) {
    return !startsWith(jobName, 'publish') ? this.informIfStepWise_0(msg) : Promise.resolve(Unit);
  };
  function SimulatingJobExecutor$rePollQueueing$lambda(closure$jobExecutionData, closure$jobStartedHook, this$SimulatingJobExecutor) {
    return function () {
      return this$SimulatingJobExecutor.simulateBuildNumberExtracted_0(closure$jobExecutionData.jobName, closure$jobStartedHook);
    };
  }
  function SimulatingJobExecutor$rePollQueueing$lambda_0(closure$jobExecutionData, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds, this$SimulatingJobExecutor) {
    return function (it) {
      return this$SimulatingJobExecutor.rePoll_m7tqv$(closure$jobExecutionData, 100, closure$pollEverySecond, closure$maxWaitingTimeForCompletenessInSeconds);
    };
  }
  SimulatingJobExecutor.prototype.rePollQueueing_aav45s$ = function (jobExecutionData, queuedItemUrl, jobStartedHook, pollEverySecond, maxWaitingTimeForCompletenessInSeconds) {
    return sleep(waitBetweenSteps, SimulatingJobExecutor$rePollQueueing$lambda(jobExecutionData, jobStartedHook, this)).then(SimulatingJobExecutor$rePollQueueing$lambda_0(jobExecutionData, pollEverySecond, maxWaitingTimeForCompletenessInSeconds, this));
  };
  function SimulatingJobExecutor$rePoll$lambda(closure$jobExecutionData, this$SimulatingJobExecutor) {
    return function () {
      return this$SimulatingJobExecutor.simulateJobFinished_0(closure$jobExecutionData);
    };
  }
  function SimulatingJobExecutor$rePoll$lambda_0(this$SimulatingJobExecutor) {
    return function (it) {
      return this$SimulatingJobExecutor.getFakeCrumbWithIdAndBuildNumber_0();
    };
  }
  SimulatingJobExecutor.prototype.rePoll_m7tqv$ = function (jobExecutionData, buildNumber, pollEverySecond, maxWaitingTimeForCompletenessInSeconds) {
    return sleep(waitBetweenSteps, SimulatingJobExecutor$rePoll$lambda(jobExecutionData, this)).then(SimulatingJobExecutor$rePoll$lambda_0(this));
  };
  function SimulatingJobExecutor$simulateJobFinished$lambda(it) {
    return true;
  }
  SimulatingJobExecutor.prototype.simulateJobFinished_0 = function (jobExecutionData) {
    this.checkIfNeedsToFail_0(jobExecutionData);
    return this.informIfStepWise_0('job ' + jobExecutionData.jobName + ' ended').then(SimulatingJobExecutor$simulateJobFinished$lambda);
  };
  SimulatingJobExecutor.prototype.checkIfNeedsToFail_0 = function (jobExecutionData) {
    if (this.isNotPublishJob_0(jobExecutionData) && this.count_0 >= failAfterSteps) {
      this.count_0 = 0;
      if (failWithTimeout) {
        throw PollTimeoutException_init('simulated timeout for ' + jobExecutionData.jobName, 'no body');
      }
       else {
        throw IllegalArgumentException_init('simulating a failure for ' + jobExecutionData.jobName);
      }
    }
  };
  SimulatingJobExecutor.prototype.isNotPublishJob_0 = function (jobExecutionData) {
    return !startsWith(jobExecutionData.jobName, 'publish');
  };
  SimulatingJobExecutor.prototype.informIfStepWise_0 = function (msg) {
    return stepWise ? showAlert(msg) : Promise.resolve(Unit);
  };
  SimulatingJobExecutor.prototype.getFakeCrumbWithIdAndBuildNumber_0 = function () {
    return to(new CrumbWithId('Jenkins-Crumb', 'onlySimulation'), 100);
  };
  SimulatingJobExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimulatingJobExecutor',
    interfaces: [JobExecutor]
  };
  var GITHUB_REPO;
  var GITHUB_NEW_ISSUE;
  var LOEWENFELS_URL;
  function UrlWithSlashAtTheEnd(url) {
    UrlWithSlashAtTheEnd$Companion_getInstance();
    this.url = url;
  }
  UrlWithSlashAtTheEnd.prototype.plus_61zpoe$ = function (s) {
    return this.url + s;
  };
  UrlWithSlashAtTheEnd.prototype.toString = function () {
    return this.url;
  };
  function UrlWithSlashAtTheEnd$Companion() {
    UrlWithSlashAtTheEnd$Companion_instance = this;
  }
  UrlWithSlashAtTheEnd$Companion.prototype.create_61zpoe$ = function (url) {
    return new UrlWithSlashAtTheEnd(endsWith(url, '/') ? url : url + '/');
  };
  UrlWithSlashAtTheEnd$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UrlWithSlashAtTheEnd$Companion_instance = null;
  function UrlWithSlashAtTheEnd$Companion_getInstance() {
    if (UrlWithSlashAtTheEnd$Companion_instance === null) {
      new UrlWithSlashAtTheEnd$Companion();
    }
    return UrlWithSlashAtTheEnd$Companion_instance;
  }
  UrlWithSlashAtTheEnd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UrlWithSlashAtTheEnd',
    interfaces: []
  };
  UrlWithSlashAtTheEnd.prototype.component1 = function () {
    return this.url;
  };
  UrlWithSlashAtTheEnd.prototype.copy_61zpoe$ = function (url) {
    return new UrlWithSlashAtTheEnd(url === void 0 ? this.url : url);
  };
  UrlWithSlashAtTheEnd.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  UrlWithSlashAtTheEnd.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.url, other.url))));
  };
  function recover$lambda(closure$modifiableState, closure$defaultJenkinsBaseUrl) {
    return function (isReleaseManager) {
      if (!isReleaseManager) {
        Messages$Companion_getInstance().showInfo_4wem9b$('We do not yet support tracking of a release process at the moment. Which means, what you see above is only a state of the process but the process as such has likely progressed already.' + '\nPlease open a feature request https://github.com/loewenfels/dep-graph-releaser/issues/new if you have the need of tracking a release (which runs in another tab/browser).');
        var releasePlanJson = JSON.parse(closure$modifiableState.json);
        releasePlanJson.state = ReleaseState.WATCHING.name;
        return Promise.resolve(releasePlanJson);
      }
       else {
        return recoverCommandStates(closure$modifiableState, closure$defaultJenkinsBaseUrl);
      }
    };
  }
  function recover$lambda_0(closure$modifiableState) {
    return function (it) {
      return ModifiableState_init(closure$modifiableState, JSON.stringify(it));
    };
  }
  function recover(modifiableState, defaultJenkinsBaseUrl) {
    if (defaultJenkinsBaseUrl == null) {
      Messages$Companion_getInstance().showInfo_4wem9b$('You have opened a pipeline which is in state ' + ReleaseState.IN_PROGRESS.name + '.' + '\n' + 'Yet, since you have not provided a &publishJob= in the URL we cannot recover the ongoing process.');
      return Promise.resolve(modifiableState);
    }
    return showDialog(trimMargin('\n' + '            |You have opened a pipeline which is in state ' + ReleaseState.IN_PROGRESS.name + " currently executing '" + toProcessName(modifiableState.releasePlan.typeOfRun) + "' for root project " + modifiableState.releasePlan.rootProjectId.identifier + '.' + '\n' + '            |Are you the release manager and would like to recover the ongoing process?' + '\n' + '            |' + '\n' + "            |Extra information: By clicking 'Yes' the dep-graph-releaser will check if the current state of the individual commands is still appropriate and update if necessary. Furthermore, it will resume the process meaning it will trigger dependent jobs if a job finishes. Or in other words, it will almost look like you have never left the page." + '\n' + '            |' + '\n' + "            |Do not click 'Yes' (but 'No') if you (or some else) have started the release process in another tab/browser since otherwise dependent jobs will be triggered multiple times." + '\n' + '            ')).then(recover$lambda(modifiableState, defaultJenkinsBaseUrl)).then(recover$lambda_0(modifiableState));
  }
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var Any = Object;
  function recoverCommandStates$lambda$lambda(closure$releasePlanJson, closure$project) {
    return function () {
      var $receiver = closure$releasePlanJson.projects;
      var tmp$, tmp$_0;
      var single = null;
      var found = false;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        var closure$project_0 = closure$project;
        if (equals(deserializeProjectId(element.id), closure$project_0.id)) {
          if (found)
            throw IllegalArgumentException_init('Array contains more than one matching element.');
          single = element;
          found = true;
        }
      }
      if (!found)
        throw new NoSuchElementException_init('Array contains no element matching the predicate.');
      return (tmp$_0 = single) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    };
  }
  function recoverCommandStates$lambda(closure$releasePlanJson, closure$modifiableState, closure$jenkinsBaseUrl) {
    return function (project) {
      var lazyProjectJson = lazy(recoverCommandStates$lambda$lambda(closure$releasePlanJson, project));
      var promises = mapCommandStates(project, closure$modifiableState, closure$jenkinsBaseUrl, lazyProjectJson.value);
      return Promise.all(copyToArray(promises));
    };
  }
  function recoverCommandStates$lambda_0(closure$releasePlanJson) {
    return function (it) {
      return closure$releasePlanJson;
    };
  }
  function recoverCommandStates(modifiableState, jenkinsBaseUrl) {
    var releasePlanJson = JSON.parse(modifiableState.json);
    var promises = map(asSequence_0(modifiableState.releasePlan.iterator()), recoverCommandStates$lambda(releasePlanJson, modifiableState, jenkinsBaseUrl));
    return Promise.all(copyToArray(toList(promises))).then(recoverCommandStates$lambda_0(releasePlanJson));
  }
  function mapCommandStates(project, modifiableState, jenkinsBaseUrl, lazyProjectJson) {
    var $receiver = project.commands;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var transform$result;
      var tmp$_2;
      tmp$_2 = item.state;
      if (Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.Ready).constructor)) {
        transform$result = Promise.resolve(Unit);
      }
       else if (Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.Queueing).constructor)) {
        transform$result = recoverStateQueueing(modifiableState, jenkinsBaseUrl, project, item, lazyProjectJson, index_0);
      }
       else if (Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.InProgress).constructor)) {
        transform$result = recoverStateTo(lazyProjectJson, index_0, CommandStateJson$State.READY_TO_RE_POLL);
      }
       else if (Kotlin.isType(tmp$_2, CommandState$Waiting) || Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.ReadyToReTrigger).constructor) || Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.ReadyToRePoll).constructor) || Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.StillQueueing).constructor) || Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.RePolling).constructor) || Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.Succeeded).constructor) || Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.Failed).constructor) || Kotlin.isType(tmp$_2, CommandState$Timeout) || Kotlin.isType(tmp$_2, CommandState$Deactivated) || Kotlin.isType(tmp$_2, Object.getPrototypeOf(CommandState.Disabled).constructor)) {
        transform$result = Promise.resolve(Unit);
      }
       else {
        transform$result = Kotlin.noWhenBranchMatched();
      }
      tmp$_1.call(destination, transform$result);
    }
    return destination;
  }
  function recoverStateTo(lazyProjectJson, index, state) {
    lazyProjectJson.commands[index].p.state.state = state.name;
    return Promise.resolve(Unit);
  }
  function recoverStateQueueing$lambda$lambda(closure$jobExecutionData, closure$lazyProjectJson, closure$index) {
    return function (t) {
      Messages$Companion_getInstance().showThrowable_tcv7n7$(new IllegalStateException('job ' + closure$jobExecutionData.jobName + ' could not be recovered', t));
      return recoverStateTo(closure$lazyProjectJson, closure$index, CommandStateJson$State.FAILED);
    };
  }
  function recoverStateQueueing$lambda(closure$modifiableState, closure$project, closure$command, closure$lazyProjectJson, closure$index) {
    return function (crumbWithId) {
      var jobExecutionData = recoverJobExecutionData(closure$modifiableState, closure$project, closure$command);
      var nullableQueuedItemUrl = closure$command.buildUrl;
      return recoverToStillQueueingOrReadyToRePoll(nullableQueuedItemUrl, crumbWithId, jobExecutionData, closure$lazyProjectJson, closure$index).catch(recoverStateQueueing$lambda$lambda(jobExecutionData, closure$lazyProjectJson, closure$index));
    };
  }
  function recoverStateQueueing(modifiableState, jenkinsBaseUrl, project, command, lazyProjectJson, index) {
    if (!Kotlin.isType(command, JenkinsCommand)) {
      throw UnsupportedOperationException_init('We do not know how to recover a command of type ' + toString(Kotlin.getKClassFromExpression(command).simpleName) + '.' + ('\n' + 'Command: ' + command));
    }
    return issueCrumb(jenkinsBaseUrl).then(recoverStateQueueing$lambda(modifiableState, project, command, lazyProjectJson, index));
  }
  function recoverJobExecutionData(modifiableState, project, command) {
    var tmp$;
    switch (modifiableState.releasePlan.typeOfRun.name) {
      case 'DRY_RUN':
        tmp$ = modifiableState.dryRunExecutionDataFactory;
        break;
      case 'RELEASE':
      case 'EXPLORE':
        tmp$ = modifiableState.releaseJobExecutionDataFactory;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var jobExecutionDataFactory = tmp$;
    return jobExecutionDataFactory.create_awtgy4$(project, command);
  }
  function recoverToStillQueueingOrReadyToRePoll$lambda$lambda(closure$jobExecutionData, closure$lazyProjectJson, closure$index) {
    return function (buildNumber) {
      return updateBuildUrlAndTransitionToRePolling(closure$jobExecutionData, closure$lazyProjectJson, closure$index, buildNumber);
    };
  }
  function recoverToStillQueueingOrReadyToRePoll$lambda(closure$jobExecutionData, closure$lazyProjectJson, closure$index, closure$crumbWithId) {
    return function (recoveredBuildNumber) {
      if (Kotlin.isType(recoveredBuildNumber, RecoveredBuildNumber$Determined))
        return updateBuildUrlAndTransitionToRePolling(closure$jobExecutionData, closure$lazyProjectJson, closure$index, recoveredBuildNumber.buildNumber);
      else if (Kotlin.isType(recoveredBuildNumber, RecoveredBuildNumber$StillQueueing))
        return recoverStateTo(closure$lazyProjectJson, closure$index, CommandStateJson$State.STILL_QUEUEING);
      else if (Kotlin.isType(recoveredBuildNumber, RecoveredBuildNumber$Undetermined))
        return (new BuildHistoryBasedBuildNumberExtractor(closure$crumbWithId, closure$jobExecutionData)).extract().then(recoverToStillQueueingOrReadyToRePoll$lambda$lambda(closure$jobExecutionData, closure$lazyProjectJson, closure$index));
      else
        return Kotlin.noWhenBranchMatched();
    };
  }
  function recoverToStillQueueingOrReadyToRePoll(nullableQueuedItemUrl, crumbWithId, jobExecutionData, lazyProjectJson, index) {
    return recoverBuildNumberFromQueue(nullableQueuedItemUrl, crumbWithId).then(recoverToStillQueueingOrReadyToRePoll$lambda(jobExecutionData, lazyProjectJson, index, crumbWithId));
  }
  function updateBuildUrlAndTransitionToRePolling(jobExecutionData, lazyProjectJson, index, buildNumber) {
    lazyProjectJson.commands[index].p.buildUrl = jobExecutionData.jobBaseUrl + toString(buildNumber);
    return recoverStateTo(lazyProjectJson, index, CommandStateJson$State.READY_TO_RE_POLL);
  }
  function recoverBuildNumberFromQueue$lambda(f) {
    var body = f.component2();
    if (body == null) {
      return RecoveredBuildNumber$Undetermined_getInstance();
    }
     else {
      var match = BuilderNumberExtractor$Companion_getInstance().numberRegex.find_905azu$(body);
      if (match != null) {
        return new RecoveredBuildNumber$Determined(toInt(match.groupValues.get_za3lpa$(1)));
      }
       else {
        return RecoveredBuildNumber$StillQueueing_getInstance();
      }
    }
  }
  function recoverBuildNumberFromQueue(nullableQueuedItemUrl, crumbWithId) {
    if (nullableQueuedItemUrl == null)
      return Promise.resolve(RecoveredBuildNumber$Undetermined_getInstance());
    var headers = createHeaderWithCrumb(crumbWithId);
    var init = createGetRequest(headers);
    return window.fetch(nullableQueuedItemUrl, init).then(getCallableRef('checkStatusOkOr404', function (response) {
      return checkStatusOkOr404(response);
    })).then(recoverBuildNumberFromQueue$lambda);
  }
  function RecoveredBuildNumber() {
  }
  function RecoveredBuildNumber$Determined(buildNumber) {
    RecoveredBuildNumber.call(this);
    this.buildNumber = buildNumber;
  }
  RecoveredBuildNumber$Determined.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Determined',
    interfaces: [RecoveredBuildNumber]
  };
  RecoveredBuildNumber$Determined.prototype.component1 = function () {
    return this.buildNumber;
  };
  RecoveredBuildNumber$Determined.prototype.copy_za3lpa$ = function (buildNumber) {
    return new RecoveredBuildNumber$Determined(buildNumber === void 0 ? this.buildNumber : buildNumber);
  };
  RecoveredBuildNumber$Determined.prototype.toString = function () {
    return 'Determined(buildNumber=' + Kotlin.toString(this.buildNumber) + ')';
  };
  RecoveredBuildNumber$Determined.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.buildNumber) | 0;
    return result;
  };
  RecoveredBuildNumber$Determined.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.buildNumber, other.buildNumber))));
  };
  function RecoveredBuildNumber$StillQueueing() {
    RecoveredBuildNumber$StillQueueing_instance = this;
    RecoveredBuildNumber.call(this);
  }
  RecoveredBuildNumber$StillQueueing.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StillQueueing',
    interfaces: [RecoveredBuildNumber]
  };
  var RecoveredBuildNumber$StillQueueing_instance = null;
  function RecoveredBuildNumber$StillQueueing_getInstance() {
    if (RecoveredBuildNumber$StillQueueing_instance === null) {
      new RecoveredBuildNumber$StillQueueing();
    }
    return RecoveredBuildNumber$StillQueueing_instance;
  }
  function RecoveredBuildNumber$Undetermined() {
    RecoveredBuildNumber$Undetermined_instance = this;
    RecoveredBuildNumber.call(this);
  }
  RecoveredBuildNumber$Undetermined.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Undetermined',
    interfaces: [RecoveredBuildNumber]
  };
  var RecoveredBuildNumber$Undetermined_instance = null;
  function RecoveredBuildNumber$Undetermined_getInstance() {
    if (RecoveredBuildNumber$Undetermined_instance === null) {
      new RecoveredBuildNumber$Undetermined();
    }
    return RecoveredBuildNumber$Undetermined_instance;
  }
  RecoveredBuildNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecoveredBuildNumber',
    interfaces: []
  };
  function ChangeApplier() {
    ChangeApplier_instance = this;
  }
  ChangeApplier.prototype.createReleasePlanJsonWithChanges_gkmix8$ = function (releasePlan, json) {
    var releasePlanJson = JSON.parse(json);
    var changed = this.applyChanges_0(releasePlan, releasePlanJson);
    var newJson = JSON.stringify(releasePlanJson);
    return to(changed, newJson);
  };
  ChangeApplier.prototype.applyChanges_0 = function (releasePlan, releasePlanJson) {
    var changed = {v: false};
    changed.v = changed.v | this.replacePublishIdIfChanged_0(releasePlanJson);
    changed.v = changed.v | this.replaceReleaseStateIfChanged_0(releasePlanJson);
    changed.v = changed.v | this.replaceTypeOfRunIfChanged_0(releasePlanJson);
    var $receiver = releasePlanJson.projects;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var mavenProjectId = deserializeProjectId(element.id);
      changed.v = changed.v | this.replaceReleaseVersionIfChanged_0(releasePlan, releasePlanJson, element, mavenProjectId);
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
  ChangeApplier.prototype.replacePublishIdIfChanged_0 = function (releasePlanJson) {
    var changed = false;
    var input = getTextField(ContentContainer$Companion_getInstance().RELEASE_ID_HTML_ID);
    if (!equals(releasePlanJson.releaseId, input.value)) {
      if (!!isBlank(input.value)) {
        var message = 'An empty or blank ReleaseId is not allowed';
        throw IllegalStateException_init(message.toString());
      }
      releasePlanJson.releaseId = input.value;
      changed = true;
    }
    return changed;
  };
  ChangeApplier.prototype.replaceReleaseStateIfChanged_0 = function (releasePlanJson) {
    var changed = false;
    var newState = Pipeline$Companion_getInstance().getReleaseState();
    var currentState = deserializeReleaseState(releasePlanJson);
    if (currentState !== newState) {
      releasePlanJson.state = newState.name;
      changed = true;
    }
    return changed;
  };
  ChangeApplier.prototype.replaceTypeOfRunIfChanged_0 = function (releasePlanJson) {
    var changed = false;
    var newTypeOfRun = Pipeline$Companion_getInstance().getTypeOfRun();
    var currentTypeOfRun = deserializeTypeOfRun(releasePlanJson);
    if (currentTypeOfRun !== newTypeOfRun) {
      releasePlanJson.typeOfRun = newTypeOfRun.name;
      changed = true;
    }
    return changed;
  };
  function ChangeApplier$replaceConfigEntriesIfChanged$lambda$lambda$lambda(it) {
    return joinToString_1(it);
  }
  ChangeApplier.prototype.replaceConfigEntriesIfChanged_0 = function (releasePlanJson) {
    var changed = {v: false};
    var $receiver = releasePlanJson.config;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (!(element.length === 2)) {
        var message = 'config entry corrupt, does not have two entries:\n' + (!(element.length === 0) ? element[0] : joinToString_1(releasePlanJson.config, void 0, void 0, void 0, void 0, void 0, ChangeApplier$replaceConfigEntriesIfChanged$lambda$lambda$lambda));
        throw IllegalStateException_init(message.toString());
      }
      var input = elementById('config-' + element[0]);
      var value = this.getConfigValue_0(element, input);
      if (!equals(element[1], value)) {
        element[1] = value;
        changed.v = true;
      }
    }
    return changed.v;
  };
  ChangeApplier.prototype.getConfigValue_0 = function (arr, input) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = arr[0];
    if (equals(tmp$, ConfigKey.REGEX_PARAMS.asString()) || equals(tmp$, ConfigKey.REMOTE_REGEX.asString()) || equals(tmp$, ConfigKey.BUILD_WITH_PARAM_JOBS.asString()) || equals(tmp$, ConfigKey.JOB_MAPPING.asString()))
      tmp$_2 = (Kotlin.isType(tmp$_0 = input, HTMLTextAreaElement) ? tmp$_0 : throwCCE()).value;
    else
      tmp$_2 = (Kotlin.isType(tmp$_1 = input, HTMLInputElement) ? tmp$_1 : throwCCE()).value;
    return tmp$_2;
  };
  ChangeApplier.prototype.replaceReleaseVersionIfChanged_0 = function (releasePlan, releasePlanJson, project, mavenProjectId) {
    var input = getTextFieldOrNull(mavenProjectId.identifier + ':releaseVersion');
    if (input != null && !equals(project.releaseVersion, input.value)) {
      if (!!isBlank(input.value)) {
        var message = 'An empty or blank Release Version is not allowed';
        throw IllegalStateException_init(message.toString());
      }
      project.releaseVersion = input.value;
      this.updateReleaseVersionOfSubmodules_0(releasePlan, releasePlanJson, mavenProjectId, input.value);
      return true;
    }
    return false;
  };
  function ChangeApplier$updateReleaseVersionOfSubmodules$lambda$lambda(it) {
    return to(it, deserializeProjectId(it.id));
  }
  ChangeApplier.prototype.updateReleaseVersionOfSubmodules_0 = function (releasePlan, releasePlanJson, mavenProjectId, releaseVersion) {
    var tmp$;
    tmp$ = releasePlan.getSubmodules_lljhqa$(mavenProjectId).iterator();
    loop_label: while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver = map(asSequence_1(releasePlanJson.projects), ChangeApplier$updateReleaseVersionOfSubmodules$lambda$lambda);
      var first$result;
      first$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          if (equals(element_0.second, element)) {
            first$result = element_0;
            break first$break;
          }
        }
        throw new NoSuchElementException_init('Sequence contains no element matching the predicate.');
      }
       while (false);
      var $receiver_0 = first$result;
      $receiver_0.first.releaseVersion = releaseVersion;
      this.updateReleaseVersionOfSubmodules_0(releasePlan, releasePlanJson, $receiver_0.second, releaseVersion);
    }
  };
  ChangeApplier.prototype.replaceCommandStateIfChanged_0 = function (genericCommand, mavenProjectId, index) {
    var tmp$;
    var command = genericCommand.p;
    var previousState = deserializeCommandState(command);
    var newState = Pipeline$Companion_getInstance().getCommandState_o8feeo$(mavenProjectId, index);
    if (!((tmp$ = Kotlin.getKClassFromExpression(previousState)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(newState)) : null)) {
      var stateObject = {};
      stateObject.state = toJson(newState).state.name;
      if (Kotlin.isType(newState, CommandState$Deactivated) || Kotlin.isType(newState, CommandState$Timeout)) {
        stateObject.previous = command.state;
      }
      command.state = stateObject;
      if (Kotlin.isType(newState, CommandState$Waiting)) {
        this.serializeWaitingDependencies_0(newState, command);
      }
      return true;
    }
    if (Kotlin.isType(previousState, CommandState$Waiting) && Kotlin.isType(newState, CommandState$Waiting) && previousState.dependencies.size !== newState.dependencies.size) {
      this.serializeWaitingDependencies_0(newState, command);
    }
    return false;
  };
  ChangeApplier.prototype.serializeWaitingDependencies_0 = function (newState, command) {
    var $receiver = newState.dependencies;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      if (Kotlin.isType(item, MavenProjectId)) {
        var entry = {};
        entry.t = MavenProjectId.Companion.TYPE_ID;
        var p = {};
        p.groupId = item.groupId;
        p.artifactId = item.artifactId;
        entry.p = p;
        transform$result = entry;
      }
       else
        throw UnsupportedOperationException_init(item.toString() + ' is not supported.');
      tmp$_0.call(destination, transform$result);
    }
    var newDependencies = destination;
    command.state.dependencies = copyToArray(newDependencies);
  };
  ChangeApplier.prototype.replaceFieldsIfChanged_0 = function (command, mavenProjectId, index) {
    var tmp$;
    switch (command.t) {
      case 'JenkinsSingleMavenRelease':
      case 'JenkinsMultiMavenRelease':
        tmp$ = this.replaceNextDevVersionIfChanged_0(command.p, mavenProjectId, index) | this.replaceBuildUrlIfChanged_0(command.p, mavenProjectId, index);
        break;
      case 'JenkinsUpdateDependency':
        tmp$ = this.replaceBuildUrlIfChanged_0(command.p, mavenProjectId, index);
        break;
      default:throw UnsupportedOperationException_init(command.t + ' is not supported.');
    }
    return tmp$;
  };
  ChangeApplier.prototype.replaceNextDevVersionIfChanged_0 = function (command, mavenProjectId, index) {
    var m2Command = command;
    var input = getTextField(Pipeline$Companion_getInstance().getCommandId_o8feeo$(mavenProjectId, index) + Pipeline$Companion_getInstance().NEXT_DEV_VERSION_SUFFIX);
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
    var guiCommand = Pipeline$Companion_getInstance().getCommand_o8feeo$(mavenProjectId, index);
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
  function deserialize(body) {
    var releasePlanJson = JSON.parse(body);
    var state = deserializeReleaseState(releasePlanJson);
    var typeOfRun = deserializeTypeOfRun(releasePlanJson);
    var rootProjectId = deserializeProjectId(releasePlanJson.id);
    var projects = deserializeProjects(releasePlanJson);
    var submodules = deserializeMapOfProjectIdAndSetProjectId(releasePlanJson.submodules);
    var dependents = deserializeMapOfProjectIdAndSetProjectId(releasePlanJson.dependents);
    var warnings = toList_0(releasePlanJson.warnings);
    var infos = toList_0(releasePlanJson.infos);
    var config = deserializeConfig(releasePlanJson.config);
    return new ReleasePlan(releasePlanJson.releaseId, state, typeOfRun, rootProjectId, projects, submodules, dependents, warnings, infos, config);
  }
  function deserializeReleaseState(releasePlanJson) {
    return ReleaseState$valueOf(releasePlanJson.state);
  }
  function deserializeTypeOfRun(releasePlanJson) {
    return TypeOfRun$valueOf(releasePlanJson.typeOfRun);
  }
  function deserializeProjectId(id) {
    if (equals(id.t, MavenProjectId.Companion.TYPE_ID))
      return createMavenProjectId(id);
    else
      throw UnsupportedOperationException_init(id.t + ' is not a supported ProjectId type.');
  }
  function createMavenProjectId(genericId) {
    var dynamicId = genericId.p;
    return new MavenProjectId(dynamicId.groupId, dynamicId.artifactId);
  }
  function deserializeProjects(releasePlanJson) {
    var map = HashMap_init();
    var $receiver = releasePlanJson.projects;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var projectId = deserializeProjectId(element.id);
      var tmp$_0 = element.isSubmodule;
      var tmp$_1 = element.currentVersion;
      var tmp$_2 = element.releaseVersion;
      var tmp$_3 = element.level;
      var $receiver_0 = element.commands;
      var destination = ArrayList_init($receiver_0.length);
      var tmp$_4;
      for (tmp$_4 = 0; tmp$_4 !== $receiver_0.length; ++tmp$_4) {
        var item = $receiver_0[tmp$_4];
        destination.add_11rb$(deserializeCommand(item));
      }
      var value = new Project(projectId, tmp$_0, tmp$_1, tmp$_2, tmp$_3, destination, element.relativePath);
      map.put_xwzc9p$(projectId, value);
    }
    return map;
  }
  function deserializeCommand(it) {
    var tmp$;
    switch (it.t) {
      case 'JenkinsSingleMavenRelease':
        tmp$ = createJenkinsMavenReleasePlugin(it.p);
        break;
      case 'JenkinsMultiMavenRelease':
        tmp$ = createJenkinsMultiMavenReleasePlugin(it.p);
        break;
      case 'JenkinsUpdateDependency':
        tmp$ = createJenkinsUpdateDependency(it.p);
        break;
      default:throw UnsupportedOperationException_init(it.t + ' is not a supported Command type.');
    }
    return tmp$;
  }
  function createJenkinsMavenReleasePlugin(command) {
    var it = command;
    return new JenkinsSingleMavenReleaseCommand(deserializeCommandState(it), it.nextDevVersion, it.buildUrl);
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var json = it.state;
    var fixedState = fakeEnumsName(json);
    var state = fromJson(fixedState);
    var tmpState = (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = state, CommandState$Deactivated) ? tmp$ : null) != null ? tmp$_0.previous : null) != null ? tmp$_1 : state;
    if (Kotlin.isType(tmpState, CommandState$Waiting)) {
      var realDependencies = Kotlin.isArray(tmp$_2 = tmpState.dependencies) ? tmp$_2 : throwCCE();
      var destination = ArrayList_init(realDependencies.length);
      var tmp$_3;
      for (tmp$_3 = 0; tmp$_3 !== realDependencies.length; ++tmp$_3) {
        var item = realDependencies[tmp$_3];
        destination.add_11rb$(deserializeProjectId(item));
      }
      var deserializedDependencies = toHashSet_0(destination);
      tmpState.dependencies = deserializedDependencies;
    }
    return state;
  }
  function fakeEnumsName(json) {
    var tmp$, tmp$_0;
    var state = JSON.parse(JSON.stringify(json));
    var tmp = state;
    while (tmp != null) {
      tmp.state = {name: tmp.state};
      tmp$ = tmp.state.name;
      if (equals(tmp$, CommandStateJson$State.DEACTIVATED.name) || equals(tmp$, CommandStateJson$State.TIMEOUT.name))
        tmp$_0 = tmp.previous;
      else
        tmp$_0 = null;
      tmp = tmp$_0;
    }
    return state;
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
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
      tmp$_0.call(destination, tmp$_1, toHashSet_0(destination_0));
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
        Messages$Companion_getInstance().showWarning_4wem9b$('corrupt config found, size != 2: ' + element);
      }
      var pair = to(ConfigKey.Companion.fromString_61zpoe$(element[0]), element[1]);
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    return destination;
  }
  function ModifiableState(defaultJenkinsBaseUrl, json) {
    this.defaultJenkinsBaseUrl_0 = null;
    this._json_0 = null;
    this._releaseJobExecutionDataFactory_wfsf9f$_0 = this._releaseJobExecutionDataFactory_wfsf9f$_0;
    this._dryRunExecutionDataFactory_4eld0t$_0 = this._dryRunExecutionDataFactory_4eld0t$_0;
    this._releasePlan_qec5av$_0 = this._releasePlan_qec5av$_0;
    var fakeJenkinsBaseUrl = 'https://github.com/loewenfels/';
    this.defaultJenkinsBaseUrl_0 = defaultJenkinsBaseUrl != null ? defaultJenkinsBaseUrl : fakeJenkinsBaseUrl;
    this._json_0 = json;
    this.initJsonDependentFields_0();
  }
  Object.defineProperty(ModifiableState.prototype, 'json', {
    get: function () {
      return this._json_0;
    },
    set: function (value) {
      this._json_0 = value;
    }
  });
  Object.defineProperty(ModifiableState.prototype, '_releaseJobExecutionDataFactory_0', {
    get: function () {
      if (this._releaseJobExecutionDataFactory_wfsf9f$_0 == null)
        return throwUPAE('_releaseJobExecutionDataFactory');
      return this._releaseJobExecutionDataFactory_wfsf9f$_0;
    },
    set: function (_releaseJobExecutionDataFactory) {
      this._releaseJobExecutionDataFactory_wfsf9f$_0 = _releaseJobExecutionDataFactory;
    }
  });
  Object.defineProperty(ModifiableState.prototype, 'releaseJobExecutionDataFactory', {
    get: function () {
      return this._releaseJobExecutionDataFactory_0;
    },
    set: function (value) {
      this._releaseJobExecutionDataFactory_0 = value;
    }
  });
  Object.defineProperty(ModifiableState.prototype, '_dryRunExecutionDataFactory_0', {
    get: function () {
      if (this._dryRunExecutionDataFactory_4eld0t$_0 == null)
        return throwUPAE('_dryRunExecutionDataFactory');
      return this._dryRunExecutionDataFactory_4eld0t$_0;
    },
    set: function (_dryRunExecutionDataFactory) {
      this._dryRunExecutionDataFactory_4eld0t$_0 = _dryRunExecutionDataFactory;
    }
  });
  Object.defineProperty(ModifiableState.prototype, 'dryRunExecutionDataFactory', {
    get: function () {
      return this._dryRunExecutionDataFactory_0;
    },
    set: function (value) {
      this._dryRunExecutionDataFactory_0 = value;
    }
  });
  Object.defineProperty(ModifiableState.prototype, '_releasePlan_0', {
    get: function () {
      if (this._releasePlan_qec5av$_0 == null)
        return throwUPAE('_releasePlan');
      return this._releasePlan_qec5av$_0;
    },
    set: function (_releasePlan) {
      this._releasePlan_qec5av$_0 = _releasePlan;
    }
  });
  Object.defineProperty(ModifiableState.prototype, 'releasePlan', {
    get: function () {
      return this._releasePlan_0;
    },
    set: function (value) {
      this._releasePlan_0 = value;
    }
  });
  ModifiableState.prototype.initJsonDependentFields_0 = function () {
    this._releasePlan_0 = deserialize(this._json_0);
    this._releaseJobExecutionDataFactory_0 = new ReleaseJobExecutionDataFactory(this.defaultJenkinsBaseUrl_0, this._releasePlan_0);
    this._dryRunExecutionDataFactory_0 = new DryRunJobExecutionDataFactory(this.defaultJenkinsBaseUrl_0, this._releasePlan_0);
  };
  ModifiableState.prototype.applyChanges = function () {
    var tmp$ = ChangeApplier_getInstance().createReleasePlanJsonWithChanges_gkmix8$(this.releasePlan, this.json);
    var changed = tmp$.component1()
    , newJson = tmp$.component2();
    this.json = newJson;
    this.initJsonDependentFields_0();
    return changed;
  };
  ModifiableState.prototype.getJsonWithAppliedChanges = function () {
    var newJson = ChangeApplier_getInstance().createReleasePlanJsonWithChanges_gkmix8$(this.releasePlan, this.json).component2();
    return newJson;
  };
  ModifiableState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModifiableState',
    interfaces: []
  };
  function ModifiableState_init(modifiableState, json, $this) {
    $this = $this || Object.create(ModifiableState.prototype);
    ModifiableState.call($this, modifiableState.defaultJenkinsBaseUrl_0, json);
    return $this;
  }
  var SECOND;
  var HALF_A_SECOND;
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
  var unwrapPromise = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.unwrapPromise_his4r1$', function ($receiver) {
    return $receiver;
  });
  var unwrap2Promise = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.unwrap2Promise_rc74cx$', function ($receiver) {
    return $receiver;
  });
  var unwrap3Promise = defineInlineFunction('dep-graph-releaser-gui.ch.loewenfels.depgraph.gui.unwrap3Promise_vvsos3$', function ($receiver) {
    return $receiver;
  });
  function changeCursorToProgress() {
    get_bodyNonNull(document).style.cursor = 'progress';
  }
  function changeCursorBackToNormal() {
    get_bodyNonNull(document).style.cursor = 'default';
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
  function randomPublishId() {
    return take(replace(uuidv4(), '-', ''), 15);
  }
  function uuidv4() {
    var tmp$;
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
      return v.toString(16);
    });
    return typeof (tmp$ = uuid) === 'string' ? tmp$ : throwCCE();
  }
  function main$lambda(it) {
    return new App();
  }
  function main() {
    window.onload = main$lambda;
  }
  var onlyUsedToCallMain;
  var failAfterSteps;
  var failWithTimeout;
  var failDuringQueueing;
  var waitBetweenSteps;
  var stepWise;
  function options$lambda(f) {
    var k = f.key;
    var v = f.value;
    return k + ': ' + v;
  }
  function options() {
    console.log(joinToString(mapOf([to('failAfterSteps', failAfterSteps), to('failWithTimeout', failWithTimeout), to('failDuringQueueing', failDuringQueueing), to('waitBetweenSteps', waitBetweenSteps), to('stepWise', stepWise)]).entries, '\n', void 0, void 0, void 0, void 0, options$lambda));
  }
  Object.defineProperty(Downloader, 'Companion', {
    get: Downloader$Companion_getInstance
  });
  var package$ch = _.ch || (_.ch = {});
  var package$loewenfels = package$ch.loewenfels || (package$ch.loewenfels = {});
  var package$depgraph = package$loewenfels.depgraph || (package$loewenfels.depgraph = {});
  var package$gui = package$depgraph.gui || (package$depgraph.gui = {});
  var package$actions = package$gui.actions || (package$gui.actions = {});
  package$actions.Downloader = Downloader;
  Object.defineProperty(Publisher, 'Companion', {
    get: Publisher$Companion_getInstance
  });
  package$actions.Publisher = Publisher;
  $$importsForInline$$['dep-graph-releaser-gui'] = _;
  Object.defineProperty(Releaser, 'Companion', {
    get: Releaser$Companion_getInstance
  });
  package$actions.Releaser = Releaser;
  Object.defineProperty(App, 'Companion', {
    get: App$Companion_getInstance
  });
  package$gui.App = App;
  $$importsForInline$$['kbox-js'] = $module$kbox_js;
  Object.defineProperty(ContextMenu, 'Companion', {
    get: ContextMenu$Companion_getInstance
  });
  var package$components = package$gui.components || (package$gui.components = {});
  package$components.ContextMenu = ContextMenu;
  Object.defineProperty(package$components, 'DEACTIVATED_CSS_CLASS', {
    get: function () {
      return DEACTIVATED_CSS_CLASS;
    }
  });
  Object.defineProperty(package$components, 'DISABLED_CSS_CLASS', {
    get: function () {
      return DISABLED_CSS_CLASS;
    }
  });
  package$components.isDeactivated_y4uc6z$ = isDeactivated;
  package$components.isNotDeactivated_y4uc6z$ = isNotDeactivated;
  package$components.isDisabled_y4uc6z$ = isDisabled;
  package$components.isNotDisabled_y4uc6z$ = isNotDisabled;
  package$components.showDialog_61zpoe$ = showDialog;
  package$components.showAlert_61zpoe$ = showAlert;
  package$components.showOutput_puj7f4$ = showOutput;
  package$components.textFieldWithLabel_cm1ubu$ = textFieldWithLabel;
  package$components.textFieldReadOnlyWithLabel_c9gzxl$ = textFieldReadOnlyWithLabel;
  package$components.textFieldWithLabel_c9gzxl$ = textFieldWithLabel_0;
  package$components.textAreaWithLabel_cm1ubu$ = textAreaWithLabel;
  Object.defineProperty(package$components, 'Loader', {
    get: Loader_getInstance
  });
  Object.defineProperty(Login, 'Companion', {
    get: Login$Companion_getInstance
  });
  package$components.Login = Login;
  Object.defineProperty(Menu, 'Companion', {
    get: Menu$Companion_getInstance
  });
  package$components.Menu = Menu;
  Object.defineProperty(Messages, 'Companion', {
    get: Messages$Companion_getInstance
  });
  package$components.Messages = Messages;
  Object.defineProperty(Pipeline, 'Companion', {
    get: Pipeline$Companion_getInstance
  });
  package$components.Pipeline = Pipeline;
  package$components.generateChangelog_q238hl$ = generateChangelog;
  package$components.appendProjectToCsvExcel_b4e71w$ = appendProjectToCsvExcel;
  package$components.appendProjectToCsvWithoutWrapper_b4e71w$ = appendProjectToCsvWithoutWrapper;
  Object.defineProperty(Toggler, 'Companion', {
    get: Toggler$Companion_getInstance
  });
  package$components.Toggler = Toggler;
  Object.defineProperty(ContentContainer, 'Companion', {
    get: ContentContainer$Companion_getInstance
  });
  package$gui.ContentContainer = ContentContainer;
  package$gui.elementById_61zpoe$ = elementById;
  package$gui.display_puj7f4$ = display;
  package$gui.getCheckbox_61zpoe$ = getCheckbox;
  package$gui.getCheckboxOrNull_61zpoe$ = getCheckboxOrNull;
  package$gui.getTextField_61zpoe$ = getTextField;
  package$gui.getTextFieldOrNull_61zpoe$ = getTextFieldOrNull;
  package$gui.getInputElementOrNull_puj7f4$ = getInputElementOrNull;
  package$gui.get_bodyNonNull_4wc2mh$ = get_bodyNonNull;
  package$gui.getUnderlyingHtmlElement_8alqek$ = getUnderlyingHtmlElement;
  package$gui.addClickOnceEventListener_7wfdf5$ = addClickOnceEventListener;
  package$gui.addClickEventListener_7wfdf5$ = addClickEventListener;
  package$gui.addChangeEventListener_7wfdf5$ = addChangeEventListener;
  package$gui.toggleClass_9bm2zh$ = toggleClass;
  package$gui.getOldTitle_y4uc6z$ = getOldTitle;
  package$gui.getOldTitleOrNull_y4uc6z$ = getOldTitleOrNull;
  package$gui.setTitleSaveOld_9bm2zh$ = setTitleSaveOld;
  var package$jobexecution = package$gui.jobexecution || (package$gui.jobexecution = {});
  package$jobexecution.BaseJobExecutionDataFactory = BaseJobExecutionDataFactory;
  Object.defineProperty(BuilderNumberExtractor, 'Companion', {
    get: BuilderNumberExtractor$Companion_getInstance
  });
  package$jobexecution.BuilderNumberExtractor = BuilderNumberExtractor;
  package$jobexecution.BuildHistoryBasedBuildNumberExtractor = BuildHistoryBasedBuildNumberExtractor;
  package$jobexecution.DryRunJobExecutionDataFactory = DryRunJobExecutionDataFactory;
  Object.defineProperty(EventManager, 'Companion', {
    get: EventManager$Companion_getInstance
  });
  package$jobexecution.EventManager = EventManager;
  var package$exceptions = package$jobexecution.exceptions || (package$jobexecution.exceptions = {});
  package$exceptions.JobNotExistingException_init_61zpoe$ = JobNotExistingException_init;
  package$exceptions.JobNotExistingException = JobNotExistingException;
  package$exceptions.JobNotTriggeredException = JobNotTriggeredException;
  package$exceptions.PollTimeoutException_init_puj7f4$ = PollTimeoutException_init;
  package$exceptions.PollTimeoutException = PollTimeoutException;
  package$jobexecution.checkStatusOk_7ri4uy$ = checkStatusOk;
  package$jobexecution.checkStatusOkOr403_7ri4uy$ = checkStatusOkOr403;
  package$jobexecution.checkStatusOkOr404_7ri4uy$ = checkStatusOkOr404;
  package$jobexecution.checkStatusIgnoreOpaqueRedirect_7ri4uy$ = checkStatusIgnoreOpaqueRedirect;
  package$jobexecution.createFetchInitWithCredentials = createFetchInitWithCredentials;
  package$jobexecution.createHeaderWithCrumb_76n36z$ = createHeaderWithCrumb;
  package$jobexecution.get_GET_pcmf85$ = get_GET;
  package$jobexecution.get_POST_pcmf85$ = get_POST;
  package$jobexecution.createGetRequest_za3rmp$ = createGetRequest;
  package$jobexecution.createRequestInit_7hyu12$ = createRequestInit;
  package$jobexecution.CrumbWithId = CrumbWithId;
  package$jobexecution.issueCrumb_61zpoe$ = issueCrumb;
  Object.defineProperty(JenkinsJobExecutor, 'Companion', {
    get: JenkinsJobExecutor$Companion_getInstance
  });
  package$jobexecution.JenkinsJobExecutor = JenkinsJobExecutor;
  package$jobexecution.createParameterRegexPattern_y0zsll$ = createParameterRegexPattern;
  package$jobexecution.toQueryParameters_y0zsll$ = toQueryParameters;
  Object.defineProperty(package$jobexecution, 'END_OF_CONSOLE_URL_SUFFIX', {
    get: function () {
      return END_OF_CONSOLE_URL_SUFFIX;
    }
  });
  Object.defineProperty(JobExecutionData, 'Companion', {
    get: JobExecutionData$Companion_getInstance
  });
  package$jobexecution.JobExecutionData = JobExecutionData;
  package$jobexecution.JobExecutionDataFactory = JobExecutionDataFactory;
  package$jobexecution.JobExecutor = JobExecutor;
  Object.defineProperty(package$jobexecution, 'LocationBasedQueuedItemUrlExtractor', {
    get: LocationBasedQueuedItemUrlExtractor_getInstance
  });
  Poller.prototype.PollData_init_khuv8b$ = Poller$Poller$PollData_init;
  Poller.prototype.PollData = Poller$PollData;
  Object.defineProperty(package$jobexecution, 'Poller', {
    get: Poller_getInstance
  });
  package$jobexecution.ProcessStarter = ProcessStarter;
  package$jobexecution.QueuedItemBasedBuildNumberExtractor = QueuedItemBasedBuildNumberExtractor;
  package$jobexecution.QueuedItemUrlExtractor = QueuedItemUrlExtractor;
  package$jobexecution.ReleaseJobExecutionDataFactory = ReleaseJobExecutionDataFactory;
  package$jobexecution.RestApiBasedQueuedItemUrlExtractor = RestApiBasedQueuedItemUrlExtractor;
  package$jobexecution.SimulatingJobExecutor = SimulatingJobExecutor;
  Object.defineProperty(package$jobexecution, 'GITHUB_REPO', {
    get: function () {
      return GITHUB_REPO;
    }
  });
  Object.defineProperty(package$jobexecution, 'GITHUB_NEW_ISSUE', {
    get: function () {
      return GITHUB_NEW_ISSUE;
    }
  });
  Object.defineProperty(package$jobexecution, 'LOEWENFELS_URL', {
    get: function () {
      return LOEWENFELS_URL;
    }
  });
  Object.defineProperty(UrlWithSlashAtTheEnd, 'Companion', {
    get: UrlWithSlashAtTheEnd$Companion_getInstance
  });
  package$jobexecution.UrlWithSlashAtTheEnd = UrlWithSlashAtTheEnd;
  var package$recovery = package$gui.recovery || (package$gui.recovery = {});
  package$recovery.recover_7unu3l$ = recover;
  var package$serialization = package$gui.serialization || (package$gui.serialization = {});
  Object.defineProperty(package$serialization, 'ChangeApplier', {
    get: ChangeApplier_getInstance
  });
  package$serialization.deserialize_61zpoe$ = deserialize;
  package$serialization.deserializeReleaseState_lpfs1l$ = deserializeReleaseState;
  package$serialization.deserializeTypeOfRun_lpfs1l$ = deserializeTypeOfRun;
  package$serialization.deserializeProjectId_mb6gxr$ = deserializeProjectId;
  package$serialization.deserializeProjects_lpfs1l$ = deserializeProjects;
  package$serialization.deserializeCommand_efqrl6$ = deserializeCommand;
  package$serialization.createJenkinsMavenReleasePlugin_dc558r$ = createJenkinsMavenReleasePlugin;
  package$serialization.createJenkinsMultiMavenReleasePlugin_dc558r$ = createJenkinsMultiMavenReleasePlugin;
  package$serialization.createJenkinsUpdateDependency_dc558r$ = createJenkinsUpdateDependency;
  package$serialization.deserializeCommandState_dc558r$ = deserializeCommandState;
  package$serialization.deserializeMapOfProjectIdAndSetProjectId_sys0ir$ = deserializeMapOfProjectIdAndSetProjectId;
  package$serialization.deserializeConfig_bwh3i6$ = deserializeConfig;
  package$serialization.ModifiableState_init_74kwio$ = ModifiableState_init;
  package$serialization.ModifiableState = ModifiableState;
  Object.defineProperty(package$gui, 'SECOND', {
    get: function () {
      return SECOND;
    }
  });
  Object.defineProperty(package$gui, 'HALF_A_SECOND', {
    get: function () {
      return HALF_A_SECOND;
    }
  });
  package$gui.sleep_xsjjga$ = sleep;
  package$gui.unwrapPromise_his4r1$ = unwrapPromise;
  package$gui.unwrap2Promise_rc74cx$ = unwrap2Promise;
  package$gui.unwrap3Promise_vvsos3$ = unwrap3Promise;
  package$gui.changeCursorToProgress = changeCursorToProgress;
  package$gui.changeCursorBackToNormal = changeCursorBackToNormal;
  package$gui.finally_wus875$ = finally_0;
  package$gui.randomPublishId = randomPublishId;
  _.main = main;
  Object.defineProperty(_, 'onlyUsedToCallMain', {
    get: function () {
      return onlyUsedToCallMain;
    }
  });
  Object.defineProperty(_, 'failAfterSteps', {
    get: function () {
      return failAfterSteps;
    },
    set: function (value) {
      failAfterSteps = value;
    }
  });
  Object.defineProperty(_, 'failWithTimeout', {
    get: function () {
      return failWithTimeout;
    },
    set: function (value) {
      failWithTimeout = value;
    }
  });
  Object.defineProperty(_, 'failDuringQueueing', {
    get: function () {
      return failDuringQueueing;
    },
    set: function (value) {
      failDuringQueueing = value;
    }
  });
  Object.defineProperty(_, 'waitBetweenSteps', {
    get: function () {
      return waitBetweenSteps;
    },
    set: function (value) {
      waitBetweenSteps = value;
    }
  });
  Object.defineProperty(_, 'stepWise', {
    get: function () {
      return stepWise;
    },
    set: function (value) {
      stepWise = value;
    }
  });
  _.options = options;
  JenkinsJobExecutor.prototype.trigger_gyv2e7$ = JobExecutor.prototype.trigger_gyv2e7$;
  SimulatingJobExecutor.prototype.trigger_gyv2e7$ = JobExecutor.prototype.trigger_gyv2e7$;
  DEACTIVATED_CSS_CLASS = 'deactivated';
  DISABLED_CSS_CLASS = 'disabled';
  END_OF_CONSOLE_URL_SUFFIX = 'console#footer';
  GITHUB_REPO = 'https://github.com/loewenfels/dep-graph-releaser/';
  GITHUB_NEW_ISSUE = 'https://github.com/loewenfels/dep-graph-releaser/issues/new';
  LOEWENFELS_URL = 'https://www.loewenfels.ch';
  SECOND = 1000;
  HALF_A_SECOND = 500;
  onlyUsedToCallMain = main();
  failAfterSteps = 10000;
  failWithTimeout = false;
  failDuringQueueing = false;
  waitBetweenSteps = 500;
  stepWise = false;
  Kotlin.defineModule('dep-graph-releaser-gui', _);
  return _;
}));

//# sourceMappingURL=dep-graph-releaser-gui.js.map
