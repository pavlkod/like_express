const http = require("http");
const EventEmitter = require("events");
class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
    this.middlewares = [];
  }
  _createServer() {
    return http.createServer((req, res) => {
      let body = "";
      req.on("data", chunk => {
        body += chunk;
      });
      req.on("end", () => {
        if (body) {
          req.body = JSON.parse(body);
        }

        this.middlewares.forEach(middleware => middleware(req, res));
        const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res);
        if (!emitted) {
          res.end("Server response");
        }
      });
    });
  }
  use(middleware) {
    this.middlewares.push(middleware);
  }
  addRoute(router) {
    Object.keys(router.endpoints).forEach(path => {
      const route = router.endpoints[path];
      Object.keys(route).forEach(method => {
        const handler = route[method];
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    });
  }
  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
  listen(port, callback) {
    this.server.listen(port, callback);
  }
}
module.exports = Application;
