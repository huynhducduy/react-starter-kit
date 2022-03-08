FROM node:lts AS develop
# Just in case
# RUN apt-get update && \
#   apt-get install -y \
#   libgtk2.0-0 \
#   libnotify-dev \
#   libgconf-2-4 \
#   libnss3 \
#   libxss1 \
#   libasound2 \
#   xvfb
# Create working directory
WORKDIR /app
# Copy dependencies
COPY ./package.json ./yarn.lock ./
# Fetch dependencies
RUN yarn install --frozen-lockfile

FROM develop AS build
# Run build script
COPY . .
RUN yarn build:production

FROM nginx:stable-alpine AS production
# Copy nginx config, project to machine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /app

# Set command
CMD ["nginx", "-g", "daemon off;"]

# Expose port
EXPOSE 80

# sudo docker build -t react-starter-kit .
# sudo docker run --init -dit -p 3000:80 --name react-starter-kit react-starter-kit:latest
# (sudo docker kill react-starter-kit || true) && sudo docker rm react-starter-kit
