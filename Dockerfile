FROM node:14-alpine

WORKDIR /opt/src/app

# COPY package*.json ./

# RUN npm ci

COPY ./dist .

EXPOSE 9000
ENTRYPOINT [ "node", "index.js" ]