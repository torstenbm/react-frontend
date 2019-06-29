FROM node:8
WORKDIR /usr/
COPY package*.json ./
COPY yarn*.lock ./
COPY . .
RUN yarn
RUN yarn build
EXPOSE 3010
CMD [ "node", "server.js"]