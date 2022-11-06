FROM node:16-alpine as app_admin

RUN apk add --no-cache python3 py3-pip make g++

# Create app directory
RUN mkdir -p /usr/src/admin
WORKDIR /usr/src/admin

## Install app dependencies
COPY package.json /usr/src/admin/
COPY yarn.lock /usr/src/admin/
RUN yarn install


## Set environment variables
##ENV NODE_ENV production
#ENV NUXT_HOST 0.0.0.0
#ENV NUXT_PORT 3000

EXPOSE 3000

