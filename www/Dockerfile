FROM node:16-alpine as app_www

RUN apk add --no-cache python3 py3-pip make g++

# Create app directory
RUN mkdir -p /usr/src/www
WORKDIR /usr/src/www

## Install app dependencies
COPY package.json /usr/src/www/
COPY yarn.lock /usr/src/www/
RUN yarn install


## Set environment variables
##ENV NODE_ENV production
#ENV NUXT_HOST 0.0.0.0
#ENV NUXT_PORT 3000

EXPOSE 3000

