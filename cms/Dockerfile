FROM node:14-alpine

ENV CMS_ROOT /usr/src/app
WORKDIR $CMS_ROOT

COPY package.json $CMS_ROOT

RUN apk update && \
    apk add python make g++ && \
    yarn global add npm @vue/cli @vue/cli-init nuxt create-nuxt-app
