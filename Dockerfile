FROM node:16.13.1-alpine AS build-stage
WORKDIR /app
COPY yarn.lock ./
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
# RUN yarn build

FROM node:16.13.1-alpine AS final-stage
WORKDIR /app
RUN apk update \
    && apk add bash
COPY --from=build-stage /app ./
COPY ./start.sh ./
RUN chmod +x ./start.sh
CMD ["/bin/bash", "-c", "/app/start.sh"]

# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# FROM node:16.13.1-alpine as build-stage
# ARG APP_ENV
# WORKDIR /app
# RUN apk update \
#     && apk add bash
# COPY yarn.lock ./
# COPY package.json ./
# RUN yarn
# COPY ./ ./
# RUN ["chmod", "+x", "start.sh"]
# RUN ./start.sh

# FROM nginx:1.19 as production-stage
# WORKDIR /app
# RUN rm -rf ./*
# COPY --from=build-stage /app/build ./
# COPY site.conf /etc/nginx/nginx.conf

# Menggunakan image node untuk build aplikasi React
# FROM node:16 as build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Menggunakan image nginx terbaru
# FROM nginx:latest

# # Menyalin hasil build dari tahap sebelumnya
# COPY --from=build /app/build /usr/share/nginx/html

# # Menyalin file konfigurasi nginx custom
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
