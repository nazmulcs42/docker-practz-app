#                 DOCKER PRACTZ


## Chapter 1: Basic Docker Configuration and Introduction

### Todo List

- `$ npm init -y`
- `$ npm i express cors body-parser nodemon`
- add on package.json: 
    -  `"type": "module",`
    - scripts:  `"start:dev": "nodemon index.js"`
- add `index.js` file and add basic node code to create and run simple api endpoints.


### index.js
```javascript
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

```


### dockerfile
```javascript

FROM node:22.0.0-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:dev"]


```


### Package.json
```javascript

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

```


### Build Docker Image
`$ docker build -t docker-practz-img . `

### Build Docker container from the image
`$ docker run --name docker-practz-container -p 3000:3000 --rm docker-practz-img`
- or
### Build Docker container and volumes from the image by using nodemon package so that  live changes can affect the container image
`$ docker run --name docker-practz-container -p 3000:3000 --rm -v D:/pratz/docker-practz/practz-01:/app  docker-practz-img`
`$docker run --name docker-practz-container -p 3000:3000 --rm -v D:/docker-practz-app:/app  docker-practz-img`


~ Simple Docker project setup Done! with docker image, container and volumes


### Push Image into Docker Hub

Login into docker hub if not. Then, tag image by a tag name `docker tag image_name tag_name` and after this push into the tag repository
- `$ docker login`
- `$ docker tag docker-practz-app nazmulcs42/docker-practz-app`
- `$ docker push nazmulcs42/docker-practz-app`


### Pull Image from Docker Hub
Select an image to pull into your local repo. Then make a pull request for the targeted image file.
- Got to docker hub
- `$ docker pull nazmulcs42/docker-practz-app`


- `$ docker ps`
- `$ docker ps -a`
- `$ docker rm -f $(docker ps -aq)`
- `$ docker images`
- `$ docker rm <container_name>`
- `$ docker rm -f <container_name>`
- `$ docker rmi <image_name>`
- `$ docker rmi -f <image_name>`
- 
- 



## Chapter 2: Docker Composer Configuration and Introduction

- `$ docker-compose up`
- `$ docker-compose down`
- `$ docker-compose up --build`
- `$ docker-compose down -v`
- `$ docker-compose up -d`
- `$ docker-compose up -d --build`


### docker-compose.yml
```javascript

services:
  app:
    build:
      context: .
      dockerfile: dockerfile
    image: docker-practz-app
    container_name: docker-practz-app
    restart: always
    ports:
      - "3000:3000"
    # tty: true
    # environment:
    #   SERVICE_NAME: app
    #   SERVICE_TAGS: dev
    # volumes:
    #   - data:/var/www/html
    networks:
      - docker-practz-network

networks:
  docker-practz-network:
    driver: bridge

volumes:
  data:
    driver: local



```