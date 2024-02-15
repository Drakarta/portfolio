FROM rust:1.76.0

WORKDIR /server

COPY . .

RUN cargo install --path .

EXPOSE 3000

CMD ["cargo", "run"]