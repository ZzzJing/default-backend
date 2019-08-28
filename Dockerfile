FROM arm64v8/node:8-stretch-slim

WORKDIR /app

COPY . .

RUN npm i --production

EXPOSE 8080

CMD ["node", "server.js"]
