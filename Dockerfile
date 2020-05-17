# STAGE 1: Build
FROM node:latest AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: Run
FROM nginx:alpine
COPY --from=build /app/dist/track-cops /usr/share/nginx/html
