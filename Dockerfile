FROM node:19.8.1-alpine AS builder

WORKDIR /home/mishi

COPY . .

RUN npm ci && npm run build

FROM flashspys/nginx-static:latest

RUN apk update && apk upgrade

COPY --from=builder /home/mishi/build /static/