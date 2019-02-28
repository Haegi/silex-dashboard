#!/bin/bash
FROM balenalib/rpi-raspbian:stretch

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get dist-upgrade -y
RUN apt-get install wget
RUN wget https://nodejs.org/dist/v5.0.0/node-v5.0.0-linux-armv7l.tar.gz
RUN tar -xvf node-v5.0.0-linux-armv7l.tar.gz
RUN cd node-v5.0.0-linux-armv7l
RUN sudo cp -R * /usr/local/ #attention copies also readme and other not required files

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