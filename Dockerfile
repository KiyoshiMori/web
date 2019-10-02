FROM node:8

ARG APP_DIR=app
RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

COPY package.json ./
COPY lerna.json ./
RUN yarn

RUN yarn bootstrap

COPY . .