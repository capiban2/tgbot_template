FROM node:alpine

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package.json ./

RUN npm i

COPY --chown=node:node . .

USER node

EXPOSE 8080

CMD [ "node", "main.js" ]
