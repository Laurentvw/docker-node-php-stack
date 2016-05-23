FROM mhart/alpine-node:latest

# Install nodemon
RUN npm install -g nodemon

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src
ADD . /src

EXPOSE 80

RUN npm run build

ENV NODE_ENV production
ENV PORT 80

CMD ["nodemon", "/src/server.js"]
