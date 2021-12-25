const config = require("dotenv").config;
const http = require("http");
const EventEmitter = require("events");

config();

const emitter = new EventEmitter();

const server = http.createServer((req, res) => {
  emitter.emit(`[${req.url}]:[${req.method}]`);

  res.writeHead(200, {
    "Content-type": "text/html;charset=utf-8",
  });
  res.end("Server response");
});
server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
