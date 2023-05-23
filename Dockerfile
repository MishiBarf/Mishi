FROM node:20-alpine AS builder

WORKDIR /home/mishi

COPY . .

RUN npm ci && npm run build

FROM flashspys/nginx-static:latest

RUN apk update && apk upgrade

COPY --from=builder /home/mishi/build /static/

COPY nginx.conf /etc/nginx/conf.d/default.conf