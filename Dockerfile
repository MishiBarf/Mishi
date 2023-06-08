FROM node:20-alpine AS builder

WORKDIR /home/mishi

COPY . .

RUN npm ci && npm run build

FROM azariasb/nginx-static:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /home/mishi/dist/spa /static/
