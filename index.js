const config = require("dotenv").config;
const http = require("http");

config();

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "text/html;charset=utf-8",
  });
  res.end("Server response");
});
server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
