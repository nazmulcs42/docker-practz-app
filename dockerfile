FROM node:22.0.0-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000


# Development
CMD ["npm", "run", "start:dev"]

# Production
# CMD ["npm", "run", "start:prod"]