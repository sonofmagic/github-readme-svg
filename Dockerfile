FROM node:14-alpine

WORKDIR /opt/src/app

COPY ./dist .

EXPOSE 9000
ENTRYPOINT [ "node", "index.js" ]