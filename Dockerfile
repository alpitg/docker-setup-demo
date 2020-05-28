# STAGE 1: Build
FROM node:latest AS build
# ENV PORT=80
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: Run
FROM nginx:alpine
EXPOSE 80
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY --from=build  /app/dist/track-cops/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/track-cops /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]
