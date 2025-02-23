FROM node:22.0.0-alpine

WORKDIR /app

RUN npm install -g nodemon

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]