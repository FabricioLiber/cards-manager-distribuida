FROM node:alpine

WORKDIR /app

COPY ./ /app

RUN npm install -g @angular/cli
