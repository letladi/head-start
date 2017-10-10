<h1 align="center">Head Start</h1>

<p align="center">
  <a href="https://circleci.com/gh/Letladi/head-start">
    <img src="https://circleci.com/gh/Letladi/head-start.svg?style=svg" alt="Build Status">
  </a>
</p>

<p align="center">React, Redux, Webpack 3, Jest, MongoDB, Express, Redux-Saga, Semantic UI React boilerplate.</p>

<p align="center">
  This project builds on the 
  <a href="https://github.com/workco/marvin">
    Marvin
  </a>
  boilerplate by 
  <a href="https://work.co">
    Work & Co
  </a>
  .
</p>

## Table of contents
* [What is this?](#user-content-what-is-this)
* [Features](#user-content-features)
* [Setup](#user-content-setup)
* [npm tasks](#user-content-npm-tasks)
* [Running in dev mode](#user-content-running-in-dev-mode)
* [Running it with webpack dashboard](#user-content-running-it-with-webpack-dashboard)
* [Build client (production)](#user-content-build-client-production)
* [Running client in preview production mode](#user-content-running-client-in-preview-production-mode)
* [Universal dev mode](#user-content-universal-dev-mode)
* [Universal build (production)](#user-content-universal-build-production)
* [Removing server rendering related stuff](#user-content-removing-server-rendering-related-stuff)
* [Linting](#user-content-linting)
* [Git hooks](#user-content-git-hooks)
* [Misc](#user-content-misc)
* [Changelog](#user-content-changelog)

## What is this?

Boilerplate for kicking off React/Redux applications.

It includes complete, minimal react app.
By complete we mean it has examples for:

- components (both container/views and regular ones)
- routes
- reducers (redux)
- actions (both sync and async),
- SASS (with autoprefixer)<sup>1</sup>
- dummy API
- using assets (in CSS and components)
- imports relative to the app root
- user registration, login, logout


<sup>1</sup> Using source maps breaks urls in the CSS loader - https://github.com/webpack/css-loader/issues/232. Try [this](https://github.com/webpack/css-loader/issues/232#issuecomment-240449998) to fix it (but it breaks testing from local network).

## Features

- [x] React
- [x] React router
- [x] Redux
- [x] Redux Saga
- [x] Redux DevTools (you need to have [browser extension](https://github.com/zalmoxisus/redux-devtools-extension) installed)
- [x] Universal rendering
- [x] Semantic UI React
- [x] Webpack 3 (development and production config)
- [x] Hot Module Replacement
- [x] Immutable reducer data
- [x] Babel - static props, decorators
- [x] SASS with autoprefixing
- [x] Webpack dashboard
- [x] Linting
- [x] axios (for api calls)
- [x] Preview production build
- [x] File imports relative to the app root
- [x] Git hooks - test and lint before commit
- [x] Tree shaking build
- [x] Import SVGs as React components
- [x] Tests (with jest, chai and others)
- [x] CircleCI

## Setup

Tested with node 8.x

```
$ npm install
```

## npm tasks

* `start` - starts client app only in development mode, using webpack dev server
* `client:dev` - same as `start` plus fancy webpack dashboard
* `client:watch` - not to be used on it's own, starts webpack with client config in watch mode
* `client:build` - builds client application
* `client:preview` - runs client application in *production* mode, using webpack dev server (use for local testing of the client production build)
* `server:watch` - not to be used on it's own, starts webpack with server config in watch mode
* `server:restart` - not to be used on it's own, server build run using `nodemon`
* `server:build` - not to be used on it's own, builds server application
* `server:dev` - starts server app only in development mode (use for testing server responses)
* `universal:dev` - runs both server and client in watch mode, automatically restarts server on changes
* `universal:build` - builds both server and client
* `test:e2e-production` - build the application and run the functional tests (ensure MongoDB is running)
* `test:unit` - run the unit tests (these are only ones run by circle-ci)
* `teest:all` - run the unit and functional tests (these are run before each commit)

## Running in dev mode

```
$ npm start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ npm run client:dev
```

**Note for Windows users:** webpack dashboard still have issues with Windows, so use `npm start` until those are resolved.

![Running in the iTerm2](http://i.imgur.com/3oKTWrv.png)

**OS X Terminal.app users:** Make sure that **View → Allow Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

## Build client (production)

Build will be placed in the `build` folder.

```
$ npm run client:build
```

If your app is not running on the server root you should change `publicPath` at two places.

In `webpack.config.js` (ATM line 147):

```
output: {
  path: buildPath,
  publicPath: '/your-app/',
  filename: 'app-[hash].js',
},
```

and in `source/js/routes` (ATM line 9):

```
const publicPath = '/your-app/';
```

Don't forget the trailing slash (`/`). In development visit `http://localhost:3000/your-app/`.

## Running client in preview production mode

This command will start webpack dev server, but with `NODE_ENV` set to `production`.
Everything will be minified and served.
Hot reload will not work, so you need to refresh the page manually after changing the code.

```
npm run client:preview
```

## Universal dev mode

```
npm run universal:dev
```

Visit `http://localhost:8080/` from your browser of choice.
Server is visible from the local network as well.

## Universal build (production)

```
npm run universal:build
```

copy `package.json` and `build` folder to your production server

install only production dependencies and run server

```
npm install --production

npm run start:production
```

## Removing server rendering related stuff

If you are not using server rendering remove following packages from `package.json`

* `express`
* `transit-immutable-js`
* `transit-js`
* `nodemon`
* `concurrently`

Also open `source/js/config/store.js` and remove lines marked with the following comment

```
// Remove if you are not using server rendering
```

Client app is going to work without this but, it will include few unused packages.
Therefore it is better to remove them.


## Linting

For linting I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),
but some options are overridden to my personal preferences.

```
$ npm run lint
```

## Git hooks

We have 'pre-commit' hooks that run the tests and lint the code before each commit

## Misc

### Importing images in SCSS

Please note that paths to images in SCSS files are relative to `source/scss/base/main.scss` as it imports all of the other `.scss` files.

```
.BackgroundImgExample {
  background-image: url(../assets/img/book1.jpg);
}
```

### Importing SVGs as components

Just import your `.svg` files from the `source/assets/svg/` folder, and you are good to go.

```
import CircleSvg from '../../../assets/svg/circle.svg';

// then in your render

<CircleSvg />

```

-----

## Changelog

#### 0.0.1

Initial release
