FROM golang:lastest

WORKDIR .

COPY . .

RUN go mod download

CMD ["./backend"]