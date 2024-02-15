FROM oven/bun:1.0.26

WORKDIR /client

COPY . .

RUN bun install

EXPOSE 4321

CMD ["bun", "run", "start"]