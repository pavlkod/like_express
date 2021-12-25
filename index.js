const config = require("dotenv").config;
const http = require("http");
const Router = require("./Router");

config();

const router = new Router();

router.get("/users", (req, res) => {
  res.end("users");
  console.log("users");
});
router.get("/posts", (req, res) => {
  res.end("posts");
  console.log("posts");
});

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "text/html;charset=utf-8",
  });
  res.end("Server response");
});
server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
