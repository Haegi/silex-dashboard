#!/bin/bash
FROM balenalib/rpi-raspbian:stretch

RUN apt-get update
RUN wget https://nodejs.org/dist/v8.9.0/node-v8.9.0-linux-armv6l.tar.gz && tar -xzf node-v8.9.0-linux-armv6l.tar.gz
RUN cd node-v6.11.1-linux-armv6l/
RUN cp -R * /usr/local/

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