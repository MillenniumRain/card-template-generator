# build env ***platform special for linux**
FROM --platform=linux/aarch64 node:21.7.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build