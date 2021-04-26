# pull official base image
FROM node:14-slim

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

# add app
COPY . .

EXPOSE 3000

# start app
CMD ["yarn", "start"]