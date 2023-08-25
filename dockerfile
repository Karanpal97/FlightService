FROM node

WORKDIR /developer/nodejs/flightsearch

COPY . .

RUN npm ci

ENV PORT 3001

CMD ["npm","run","dev"]

