FROM node:18.16.0
WORKDIR /portfolio-web
COPY package.json /portfolio-web
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]
