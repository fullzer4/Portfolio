FROM node:20-alpine3.17

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD ["npm", "run", "preview"]
