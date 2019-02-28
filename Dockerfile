#!/bin/bash
FROM balenalib/rpi-raspbian:stretch

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get dist-upgrade -y
RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -  # Install NodeJS v10
RUN apt-get install -y nodejs  # npm nodejs-legacy #(Installed with nodesource)
RUN apt-get install -y build-essential
RUN npm install npm@latest -g

RUN node -v
RUN npm -v

ENV SILEX_VERSION 0.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm i
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