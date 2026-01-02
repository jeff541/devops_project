FROM node:22-alpine AS Build

WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY . .

RUN npm run build

FROM nginx:1.27.0

WORKDIR /app
COPY --from=Build /app/build usr/share/nginx/html
