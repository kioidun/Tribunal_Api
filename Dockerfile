FROM node:23-alpine3.20 as base

FROM base as deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@10.9.2 && npm install
RUN npm i -g sequelize-cli


FROM base as runner
WORKDIR /usr/src/app
# Copy all project files
COPY . . 
CMD ["npm", "start"]