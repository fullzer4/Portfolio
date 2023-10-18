FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM node:20-alpine3.17

COPY --from=builder /app/node_modules /node_modules
COPY --from=builder /app/dist /dist
COPY --from=builder /app/package.json /

EXPOSE 3000:3000

CMD ["npm", "run", "start"]
