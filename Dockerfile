#!/bin/bash
# Pull base image
ARG distro=stretch
FROM resin/rpi-raspbian:$distro

RUN apt-get update

RUN apt-get purge nodejs npm && curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN apt-get install -y nodejs npm

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