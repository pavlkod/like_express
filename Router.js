const EventEmitter = require("events");

const emitter = new EventEmitter();

class Router {
  constructor() {
    this.endpoints = {};
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
}
module.exports = Router;
