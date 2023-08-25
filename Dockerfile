# FROM node:16.13.1-alpine AS build-stage
# WORKDIR /app
# COPY yarn.lock ./
# COPY package.json ./
# RUN yarn install --frozen-lockfile
# COPY . .
# RUN yarn build

# FROM node:16.13.1-alpine AS final-stage
# WORKDIR /app
# RUN apk update \
#     && apk add bash
# COPY --from=build-stage /app ./
# COPY ./start.sh ./
# RUN chmod +x ./start.sh
# CMD ["/bin/bash", "-c", "/app/start.sh"]

# Build stage
FROM node:16.13.1-alpine AS build-stage
WORKDIR /app
COPY yarn.lock ./
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Final stage
FROM node:16.13.1-alpine AS final-stage
WORKDIR /app

# Install bash and serve
RUN apk update \
    && apk add bash \
    && yarn global add serve

# Copy the built files from the build-stage
COPY --from=build-stage /app/build ./build

# Copy the start script
COPY ./start.sh ./
RUN chmod +x ./start.sh

# Start the application using the start script
CMD ["./start.sh"]
