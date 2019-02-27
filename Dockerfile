#!/bin/bash
# Pull base image
FROM resin/armv7hf-debian

RUN [ "cross-build-start" ]

RUN apt-get update
RUN apt-get dist-upgrade

RUN npm install npm@latest -g
RUN node -v

ENV SILEX_VERSION 0.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm -v
RUN npm set registry https://registry.npmjs.org/
RUN npm i --target_arch=armv6 --target_platform=linux
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# build next.js
RUN npm run build

# expose multiple ports
EXPOSE 3001 999
CMD [ "npm", "run", "start-server" ]

RUN [ "cross-build-end" ]