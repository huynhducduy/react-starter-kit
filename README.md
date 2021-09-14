# Duy's React Starter Kit

[![DeepSource](https://deepsource.io/gh/huynhducduy/react-starter-kit.svg/?label=resolved+issues)](https://deepsource.io/gh/huynhducduy/react-starter-kit/?ref=repository-badge)
![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/huynhducduy/react-starter-kit?logo=lgtm)
![Codecov](https://img.shields.io/codecov/c/github/huynhducduy/react-starter-kit?logo=codecov&token=VLMIXK11LQ)
![Package.json version](https://img.shields.io/github/package-json/v/huynhducduy/react-starter-kit)
![GitHub](https://img.shields.io/github/license/huynhducduy/react-starter-kit)
![Dependencies](https://david-dm.org/huynhducduy/react-starter-kit.svg)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fhuynhducduy%2Freact-starter-kit.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fhuynhducduy%2Freact-starter-kit?ref=badge_shield)

This project was based on [Create React App](https://github.com/facebook/create-react-app). [(#11304)](https://github.com/facebook/create-react-app/pull/11304)

Vite-version / Unbundled Development available at [vite branch](https://github.com/huynhducduy/react-starter-kit/tree/vite) (WIP)

# Features

Includes all features of CRA, with some opinionated tweaks but provide flexible configurations.

- Webpack 5 with `dynamic import()`, `react-refresh`, modern JSX and build optimizations.
- Tailwind 2+ (with opt-in, opt-out option)
- TypeScript 4
- React 17
- Router support `react-router-dom`
- `recoil` + `react-query` configurated as state management
- i18n with i18next, support locale splitting
- Animation with `framer-motion`
- SASS (with `dart-sass`), PostCSS with `autoprefixer`, `CSS Module` supported and optimizations.
- Babel in `Stage 1` with tree-shaking support for `ramda`, `date-fns`
- ESlint configured to work well with Prettier, Typescript, EditorConfig in multiple environment: IDE, compile
- Authentication and Authorization boilerplate
- Router boilerplate
- Jest + Testing-library for unit/component testing, Cypress for E2E testing, MSW for API mocking
- Lintstaged & Husky for automatically lint & formatting
- VSCode specific settings, extensions & debug launch config
- Docker, docker-compose with `nginx` config for development and deployment
- Not like CRA, _everything is customizable_ (and initially come with presets): Eslint, babel, jest, postcss, prettier, tailwind, cypress,....

# Differs from CRA

- Scripts: no `eject` (because everything is customizable by default), the rest of the scripts can be view in `package.json`
- Supported language features: [here](https://github.com/huynhducduy/babel-preset-duy)
- Configuring supported browsers: in `.browserlistrc`
- Editor setup, debugger setup: in `.vscode` folder
- Advanced configuration:
  - `FAST_REFRESH` option removed (Fast Refrest is always enable)
  - `DISABLE_ESLINT_PLUGIN` option removed (Eslint is always enable)
  - `ENABLE_TAILWINDCSS` added
  - `ENABLE_WDYR` added

# Usage

## Installation

```sh
git clone git@github.com:huynhducduy/react-starter-kit.git react-app
cd react-app
yarn
```

Clone with SSH is recommennded.

or [Create a new repository from react-starter-kit](https://github.com/huynhducduy/react-starter-kit/generate)

## Configure

`cp .env.example .env && vi .env` for local environment, also support for `staging` and `production` environment. Local environment will be use as fallback when staging and production environment is not available.

Alias: in `tsconfig.json` - `compilerOptions.paths`. Automatically resolve in `webpack`, `jest` environment.

Further configuration can be found in root level files.

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

Build image - by default will use `yarn build:production`: `sudo docker build -t react-starter-kit .`

Run container: `sudo docker run --init -dit -p 3000:80 --name react-starter-kit react-starter-kit:latest`

Kill and remove: `(sudo docker kill react-starter-kit || true) && (sudo docker rm react-starter-kit || true)`

Without docker: `yarn build` or `yarn build:staging` or `yarn build:production`, output is located at `/build`

Analyze output: `yarn analyze`

## Todo

- Stylelint
- GraphQL - Relay/Apollo
- Server-Side Rendering (waiting for support in React v18)
- Storybook for component testing, interaction testing
- Write 2E2 tests

## Issues

- `React.lazy` is not yet available for server-side rendering

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fhuynhducduy%2Freact-starter-kit.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fhuynhducduy%2Freact-starter-kit?ref=badge_large)
