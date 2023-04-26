FROM node:16-alpine

WORKDIR /usr/src/app

RUN apk add --update \
    curl \
    && rm -rf /var/cache/apk/*

COPY . .

RUN yarn

CMD [ "yarn", "start" ]
