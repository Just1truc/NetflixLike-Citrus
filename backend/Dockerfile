FROM node:latest AS builder

WORKDIR .

COPY . .

RUN npm i
RUN ./DownloadDependencies

FROM node:latest AS launcher

WORKDIR .

COPY --from=builder . .

CMD ["npm", "run", "start"]
