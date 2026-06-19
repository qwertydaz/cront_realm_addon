FROM node:26-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run mcpack


FROM alpine:3 AS artifacts

WORKDIR /out
COPY --from=build /app/dist/packages ./packages
