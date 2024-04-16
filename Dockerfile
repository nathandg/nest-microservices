FROM node:18-alpine

ARG APP
WORKDIR /usr/src/app
COPY ./package*.json ./

RUN npm install
COPY . .

ENV APP=${APP}
CMD npm run start:dev $APP