FROM node:16.13.1-alpine AS build-stage
WORKDIR /app
COPY yarn.lock ./
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:16.13.1-alpine AS final-stage
WORKDIR /app
RUN apk update \
    && apk add bash
COPY --from=build-stage /app ./
COPY ./start.sh ./
RUN chmod +x ./start.sh
CMD ["/bin/bash", "-c", "/app/start.sh"]