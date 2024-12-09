FROM node:latest
WORKDIR /home/node/app
COPY package*.json .
RUN yarn
COPY . .
EXPOSE 80
RUN yarn prod
CMD ['yarn', 'prod:server']
