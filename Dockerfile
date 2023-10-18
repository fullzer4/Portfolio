FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN yarn

CMD ["npm", "run", "preview"]
