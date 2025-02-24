FROM node:23-alpine3.20 as base

FROM base as deps
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install
RUN npm install --force

COPY . .

CMD ["npm", "start"]

