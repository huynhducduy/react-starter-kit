# Duy's React Starter Kit

[![DeepSource](https://deepsource.io/gh/huynhducduy/react-starter-kit.svg/?label=resolved+issues)](https://deepsource.io/gh/huynhducduy/react-starter-kit/?ref=repository-badge)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/huynhducduy/react-starter-kit?logo=lgtm)
![Codecov](https://img.shields.io/codecov/c/github/huynhducduy/react-starter-kit?logo=codecov&token=VLMIXK11LQ)
![Package.json version](https://img.shields.io/github/package-json/v/huynhducduy/react-starter-kit)
![GitHub](https://img.shields.io/github/license/huynhducduy/react-starter-kit)
![Dependencies](https://david-dm.org/huynhducduy/react-starter-kit.svg)

This project was based on [Create React App](https://github.com/facebook/create-react-app). [(4.0.1 (2020-11-23))](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)

Vite-version / Unbundled Development available at [vite branch](https://github.com/huynhducduy/react-starter-kit/tree/vite)

# Features

Includes all features of CRA, with some opinionated tweaks but provide flexible configurations.

- Webpack 4 with `dynamic import()`, `react-refresh`, modern JSX and build optimizations.
- Tailwind 2
- TypeScript 4
- React 17 with `react-router-dom`, `recoil` as state management
- SASS (with `dart-sass`), PostCSS with `autoprefixer`, `CSS Module` supported and optimizations.
- Babel in `Stage 1` with tree-shaking support for `ramda`, `date-fns`
- ESlint configured to work well with Prettier, Typescript, EditorConfig in multiple environment: IDE (VSCode), compile (start & build)
- Jest + Enzyme for testing
- Lintstaged & Husky for automatically lint & formatting
- VSCode specific settings, extensions & debug launch config
- Docker, docker-compose with `nginx` config for development and deployment

# Libraries

- recoil
- react-router-dom
- axios
- ramda
- date-fns
- react-helmet-async
- classnames
- immer

# Usage

## Installation

```sh
git clone https://github.com/huynhducduy/react-starter-kit react-app
cd react-app
yarn
```

or [Create a new repository from react-starter-kit](https://github.com/huynhducduy/react-starter-kit/generate')

## Configure

`cp .env.example .env && vi .env`

## Development

With docker: `docker-compose up --build -d`

Without docker: `yarn start`

Configure in `docker-compose.yml` file, default running on port `3000`

Running test: `yarn test`

Debugging tests: `yarn test:debug`

Lint code & style: `yarn lint`

Fix code & style: `yarn fix`

Reinstall entire project: `yarn refresh`

## Production

Build image: `sudo docker build -t react-starter-kit .`

Run container: `sudo docker run --init -dit -p 3000:80 --name react-starter-kit react-starter-kit:latest`

Kill and remove: `(sudo docker kill react-starter-kit || true) && (sudo docker rm react-starter-kit || true)`

Without docker: `yarn build`, output is located at `/build`

Analyze output: `yarn analyze`

## Todo

- Stylelint
- Upgrade to Webpack 5 (with `terser-webpack-plugin` 5, `html-webpack-plugin` 5, `postcss-loader` 5, `sass-loader` 11)
- GraphQL - Relay/Apollo
- Server-Side rendering
- PWA - workbox/firebase
- Storybook?

## Issues

- `@typescript-eslint/typescript-estree` is not yet compatible with Typescript `^4.2.0`, can cause some bugs
