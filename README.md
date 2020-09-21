# Duy's React Starter Kit

This project was based on [Create React App](https://github.com/facebook/create-react-app). [(3.4.3 (2020-08-12))](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)

## Configure

`cp .env.example .env && vi .env`

## Development

With docker: `docker-compose up --build -d`

Without docker: `yarn start`

Configure in `docker-compose.yml` file, default running on port `3000`

Running test: `yarn test`

## Production

Build image: `sudo docker build -t react-starter-kit .`

Run container: `sudo docker run -dit -p 3000:80 --name react-starter-kit react-starter-kit:latest`

Kill and remove: `(sudo docker kill react-starter-kit || true) && (sudo docker rm react-starter-kit || true)`

Without docker: `yarn build`, output is located at `/build`

Analyze output: `yarn analyze`

## Todo

- Typescript
- Redux + Class component
- Unstated + Functional component + Hooks
- Xstate?
- GraphQL - Relay/Apollo
- Eject/Config Webpack - Server-Side rendering
- Config PWA - workbox/firebase
