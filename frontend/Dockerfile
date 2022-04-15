FROM node:latest AS builder

WORKDIR /app

COPY frontend/ .

RUN ./DownloadDependencies

FROM node:latest AS launcher

WORKDIR /app

COPY --from=builder . .

CMD ["npm", "run", "start"]
