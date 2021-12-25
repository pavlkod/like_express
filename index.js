const config = require("dotenv").config;
config();

const http = require("http");
const EventEmitter = require("events");

const emitter = new EventEmitter();

class Router {
  constructor() {
    this.endpoints = {};
    emitter.on("test", () => {});
  }
  request(method = "GET", path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {};
    }
    const endpoint = this.endpoints[path];
    if (endpoint[method]) {
      throw new Error("Handler alreary exists");
    }
    endpoint[method] = handler;
    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      handler(req, res);
    });
  }
  get(path, handler) {
    this.request("GET", path, handler);
  }
  post(path, handler) {
    this.request("POST", path, handler);
  }
  path(path, handler) {
    this.request("PATH", path, handler);
  }
  put(path, handler) {
    this.request("PUT", path, handler);
  }
  delete(path, handler) {
    this.request("DELETE", path, handler);
  }
}

const router = new Router();

router.get("/users", (req, res) => {
  res.end("users");
});
router.get("/posts", (req, res) => {
  res.end("posts");
});

const server = http.createServer((req, res) => {
  const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res);
  if (!emitted) {
    res.end("Server response");
  }
});
server.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
