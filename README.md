# vue-3-boilerplate
## Welcome to `vue-3-boilerplate`!<br>

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/97cider/vue-3-boilerplate/graphs/commit-activity) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

This is a pretty heavily opinionated boilerplate designed to tackle some of the problems I've encountered when trying to spin up a vue project. This project does not use the vue-cli, as I think(?) I still prefer the older way of setting up a project. I've tried to include a few features that I've always wished I had integrated earlier into the project.

## Features
The current version of `vue-3-boilerplate` contains the following features:<br>
    - Store / LocalStorage access via [vuex](https://vuex.vuejs.org/)<br>
    - Routing via [vue-router](https://router.vuejs.org/)<br>
    - Localization via [vue-i18n](https://kazupon.github.io/vue-i18n/)<br>
    - Basic Light/Dark mode via sass mixin<br>
    - Bundling and Dev Server via [webpack 5](https://webpack.js.org/)<br>

## Getting Started
Once the project has been cloned, install all dependent node packages via
```
npm i
```
Additionally, the following node commands can be used to test, deploy and lint the project:
```
npm run build
```
Builds the project for **production**. Will minify, uglify, and bundle the project. Source maps will not be included. Bundled code can be found in `/dist/`.
```
npm run preview
```
Builds the project for **production**, and serves the `/dist` directory using `http-server`. Used to preview bundled and production ready code.
```
npm run start
```
Builds the project for **development** and serves it via the Webpack 5 Dev Server. Code is not uglified, and in-line source maps are included.Uses the `.env` value `DEV_SERVER_PORT` to determine hosted port.
```
npm run lint
```
Lints the project via [eslint](https://eslint.org/).
```
npm run lint-style
```
Lints the project via [stylelint](https://stylelint.io/) with the standards [stylelint-config-standard](https://www.npmjs.com/package/stylelint-config-standard) and [stylelint-config-standard-scss](https://www.npmjs.com/package/stylelint-config-standard-scss).