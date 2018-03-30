FROM node:8-alpine
WORKDIR /
COPY package*.json ./
RUN npm install -g typescript ts-node
RUN npm i
COPY . .
CMD node dist
EXPOSE 9999
