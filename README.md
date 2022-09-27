# The complete 'Webpack' starter guide to build in production

<!-- ## Travis CI badges and github actions
# Logo: Framework, tool, base of the project not all  -->

<!-- Markdown link & img dfn's -->

<!-- [npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/escummy/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/escummy/node-datadog-metrics
[wiki]: https://github.com/escummy/yourproject/wiki -->

 <!-- [![Build Status](https://travis-ci.org/escummy/dillinger.svg?branch=master)](https://travis-ci.org/escummy/dillinger) <img alt="Github workflows" src="https://github.com/thmsgbrt/thmsgbrt/workflows/README%20build/badge.svg"/> <img alt="Contributor Covenant v2.1" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg"/> <img alt="License" src="https://img.shields.io/github/license/escummy/webpack-complete?style=flat-square&labelColor=343b41"/> -->

> Start a local server, all neccesary files to start a project and build quality code to production, compatibility browsers, styles loaders, development mode and production mode in different files, minifiy using #hashes, cache and more.

## Snapshots


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. To start clone the repository or download it as a file.zip

<br>

- (Option 1): Clone the repository with link "https"

```bash
  git clone https://github.com/escummy/webpack-complete.git
```

- (Option 2): Clone the repository with link "SSH"

```bash
  git clone git@github.com:escummy/webpack-complete.git
```

- (Option 3): Download the file.zip to your desktop

<br>

### # Prerequisites

<!-- Add more if you need it -->

To continue, you need to have installed:

- [Node] - Check in your terminal bash if is already installed.

```
node --version
```

Else, Install nodejs from the official site 'version LTS' (Recommended)

[English] - https://nodejs.org/en/ (or) [Spanish] - https://nodejs.org/es/

<br>

## Installing dependencies

- Install the necessary dependencies and devDependencies from any package.json

```bash
  npm install
```

<br>

## Development setup

Depending on the mode we want to use, we can run the following commands:

### # Build in Development mode

- Development - In the project folder, run this command in terminal to transpile babel and check browser compatibility without hashes in the file name.

```bash
  npm run dev
```

### # Build in Production mode

- Production - At the end of your development, build with this mode to transpile and compile, minify files, preparing the codebase to be ready in production, that include improvements and performance (filename #hashes), avoiding spaces, indented, comments, memory saving and browser compatibility among others.

* NOTE: If you run 'npm install' in production mode, you'll also install DevDependencies.

```bash
  npm run build
```

<br>

<!-- ### # Check status

- Run `Watch`: Which just watches for changes and still does development compiling, it shows any console.log declared for example

```bash
  npm run watch
```

This will launch a web browser that will auto-update every time you save a watched file as(#specify-files-to-watch), but before push to production, we recommend minify the outputs files and caching how this purpose package helper [Browsersync](https://www.browsersync.io/) -->

## Start server

- To start a server to develop at localhost, and leave it (watching for changes).

```bash
  npm run start
```

- This command is the only one that can also be used typing just 'npm start'
- To Stop the local server while is running on terminal, you can type `control + c` to finish the watcher and shut down the server.

<br>

## Latest releases

Repositories use [SemVer](http://semver.org/) for versioning, three-digit numbering technique based patter of Major, Minor and Patch fixes, see the [release tags](https://github.com/your/project/tags) for more details about version available.

<!-- ## Running the tests

The code is tested by 'Jest' including unit-test and global-test, applying documentation from continuous integration, github actions, npm datalog-metrics and Travis-CI

### Break down into end to end tests

Explain what these tests test and why

```
npm test
```

### And coding style tests

Explain what these tests test and why

```
Give an example
``` -->

<!-- Please read [CONTRIBUTING.md](https://gist.github.com/escummy/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests. -->

<br>

## Contributing

Contributions are always welcome.

See [CONTRIBUTING](.github/CONTRIBUTING.md) for ways to get started, you can colaborate addings features to improve the repository, you can feel free to suggest anything or help solving issues via pull request.

Please adhere to this project [CODE_OF_CONDUCT](.github/CODE_OF_CONDUCT.md), examples of behavior that contributes to a positive environment for our community and adapted from the Contributor Covenant, version 2.0, available at https://www.contributor-covenant.org/version/2/0/code_of_conduct.html

> **[Author]**: Gonzalo Cugiani (Amsterdam, North Holland, Netherlands)
>
> - [www.github.com/github.com/escummy](https://github.com/escummy)
> - [www.linkedin.com/in/gonzalocugiani](https://linkedin.com/in/gonzalocugiani)

<br>

## About Licenses

A licensor may grant a license under intellectual property laws to authorize a use (such as copying software or using a patented invention) to a licensee, sparing the licensee from a claim of infringement brought by the licensor.

License used for this repository <a href="https://github.com/escummy/webpack-complete/blob/main/LICENSE">`[`MIT License`]`</a>

<!-- #### Hashtags

#webpack #starter #initialfiles #developmentmode #productionmode #packagejson #webpackconfig #babelconfig #dev #prod #npmstart #yarnstart #build #builddev #buildprod #github #badges -->

<br><br>

---

<p align="center">. . .</p>

<p align="center">This <i>README</i> file was updated</br>Last refresh: Tuesday, 18 May, 20:02 CET<br/></p>

<br><br><br>
