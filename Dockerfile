FROM node:16

#Create app dir;

WORKDIR /usr/src/app

# Install dependencies

COPY package*.json .

RUN npm i -g ts-node

RUN npm i

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["node", "./build/server.js"]