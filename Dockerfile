FROM node:20-alpine3.17

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

CMD ["npm", "run", "preview"]
