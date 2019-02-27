#!/bin/bash
# Pull base image
ARG distro=stretch
FROM resin/rpi-raspbian:$distro

RUN apt-get update
RUN apt-get dist-upgrade

RUN apt-get remove nodejs nodejs-legacy
RUN curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
RUN apt-get install -y nodejs

# Now the versions are:  nodejs: v9.3.0  npm: v5.5.1 --> npm need update
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
RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# build next.js
RUN npm run build

# expose multiple ports
EXPOSE 3001 999
CMD [ "npm", "run", "start-server" ]