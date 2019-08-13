# specify the node base image with your desired version node:<version>
FROM node:12-alpine

WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

RUN yarn

# replace this with your application's default port
EXPOSE 3000

CMD ["yarn", "start"]