#!/bin/bash
FROM arm32v7/node:11-stretch

RUN apt-get update

RUN npm install npm@latest -g
RUN node -v

ENV SILEX_VERSION 0.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


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

RUN [ "cross-build-end" ]