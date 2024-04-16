FROM node:18-alpine

ARG APP
WORKDIR /usr/src/app
COPY ./package*.json ./

RUN npm install
COPY . .

RUN npm run build ${APP}
ENV APP_MAIN_FILE=dist/apps/${APP}/main

CMD node ${APP_MAIN_FILE}.js