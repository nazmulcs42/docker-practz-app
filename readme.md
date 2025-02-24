# Chapter 1: Basic Docker Configuration and Introduction

## Todo List

- npm init -y
- npm i express cors body-parser nodemon
- add on package.json: 
    -  "type": "module",
    - scripts:  "start:dev": "nodemon index.js"
- add index.js file and add basic node code to create and run simple api endpoints.


## Basic index.js file contents ----start------

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World, 2025');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

## Basic dockerfile index.js file contents ----ends------


## Basic dockerfile contents ----start------

FROM node:22.0.0-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]

## Basic dockerfile contents ----ends------


## Basic Package.json file contents----start----

{
  "name": "practz-01",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "Md.Nazmul Islam",
  "license": "ISC",
  "description": "Docker practice",
  "dependencies": {
    "body-parser": "^1.20.3",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "nodemon": "^3.1.9"
  }
}

## Basic Package.json file ----end----


## Build Docker Image
docker build -t docker-practz-img . 

## Build Docker container from the image
docker run --name docker-practz-container -p 3000:3000 --rm docker-practz-img
- or
## Build Docker container and volumes from the image by using nodemon package so that  live changes can affect the container image
docker run --name docker-practz-container -p 3000:3000 --rm -v D:/pratz/docker-practz/practz-01:/app  docker-practz-img


- Simple Docker project setup Done! with docker image, container and volumes


# Chapter 2: Docker Composer Configuration and Introduction

- comming soon...