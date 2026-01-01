FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY tsconfig.json .
COPY src src
RUN npm run build
# Copying index.js from src directory


FROM node:22-alpine AS deps

WORKDIR /app

COPY package*.json .

RUN npm ci --only=production


FROM gcr.io/distroless/nodejs22

WORKDIR /app

COPY --from=deps /app/node_modules node_modules
COPY --from=build /app/dist dist

ENV PORT=3000
ENV APP_NAME="MY APP"

CMD [ "dist/index.js" ] 