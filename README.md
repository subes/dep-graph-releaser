[![Download](https://api.bintray.com/packages/loewenfels/oss/dep-graph-releaser/images/download.svg) ](https://bintray.com/loewenfels/oss/dep-graph-releaser/_latestVersion)
[![EUPL](https://img.shields.io/badge/license-EUPL%201.2-brightgreen.svg)](https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12)
[![Build Status](https://travis-ci.org/loewenfels/dep-graph-releaser.svg?branch=master)](https://travis-ci.org/loewenfels/dep-graph-releaser/branches)
[![Coverage](https://codecov.io/github/loewenfels/dep-graph-releaser/coverage.svg?branch=master)](https://codecov.io/github/loewenfels/dep-graph-releaser?branch=master)

# Dependent Graph Releaser
Dependent Graph Releaser is a tool which helps you with releasing a project and its dependent projects.
Its aim is to simplify the process of using up-to-date internal dependencies.
 
A simple example: having project `A -> B -> C` we want to automate the following process:
- release C
- update the dependency in B
- release B
- update the dependency in A
- release A

It will start of with supporting only maven projects and requires Jenkins integration.

Have a look at the [Wiki](https://github.com/loewenfels/dep-graph-releaser/wiki) 
for more information and try out the [online example](https://loewenfels.github.io/dep-graph-releaser/#./release.json).
   
# Design Decisions   
- In case a dependency has specified `${project.version}` as `<version>` then it will be replaced with the new version.
   
# Known Limitations

Outlined in the Wiki page [Known Limitations](https://github.com/loewenfels/dep-graph-releaser/wiki/Known-Limitations).

# License
Dependent Graph Releaser is published under [EUPL 1.2](https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12).

# Contributors

We thank the following contributors for their support (inspired by [all-contributors](https://github.com/kentcdodds/all-contributors#emoji-key)).

| [<img src="https://avatars0.githubusercontent.com/u/5557885?s=460&v=4" width="100px;"/><br /><sub><b>Robert Stoll</b></sub>](https://tutteli.ch)<br/> [💻](#code "Code") [🤔](#ideas "Ideas & Planing") [💬](#questions "Answering Questions") [👀](#review "Review Pull Requests")<br/> [📖](#doc "Documentation") [🚇](#infrastructure "Infrastructure") [🔧](#tools "Tools") [🐛](#bug "Bug Reports") | [<img src="https://avatars1.githubusercontent.com/u/39348110?s=460&v=4" width="100px;"/><br /><sub><b>Adrian Scherer</b></sub>](https://github.com/schereradi)<br/> [💻](#code "Code") | [<img src="https://avatars1.githubusercontent.com/u/22729797?s=460&v=4" width="100px;"/><br /><sub><b>Mario Eberl</b></sub>](https://github.com/hubmop)<br/> [💻](#code "Code") | [<img src="https://avatars3.githubusercontent.com/u/14939597?s=460&v=4" width="100px"/><br /><sub><b>Chrimat</b></sub>](https://github.com/Chrimat)<br/> [💻](#code "Code") [🐛](#bug "Bug Reports") | [<img src="https://avatars2.githubusercontent.com/u/5530915?s=460&v=4" width="100px"/><br /><sub><b>Edimasta</b></sub>](https://github.com/Edimasta)<br/> [💻](#code "Code") | [<img src="https://avatars0.githubusercontent.com/u/37987805?s=460&v=4" width="100px"/><br /><sub><b>kayth1</b></sub>](https://github.com/kayth1)<br/> [🐛](#bug "Bug Reports") |
| :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars3.githubusercontent.com/u/36969748?s=460&v=4" width="100px;"/><br /><sub><b>Wladimir Babitzki</b></sub>](https://github.com/wbabitzki)<br/> [🐛](#bug "Bug Reports") | [<img src="https://avatars0.githubusercontent.com/u/20090741?s=460&v=4" width="100px;"/><br /><sub><b>Simon</b></sub>](https://github.com/sniederb)<br/> [🐛](#bug "Bug Reports") | [<img src="https://avatars2.githubusercontent.com/u/2034531?s=460&v=4" width="100px;"/><br /><sub><b>Adi König</b></sub>](https://github.com/Anchialas)<br/> [🐛](#bug "Bug Reports") |