const http = require("http");
const EventEmitter = require("events");
class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
  }
  _createServer() {
    return http.createServer((req, res) => {
      const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
      if (!emitted) {
        res.end("Server response");
      }
    });
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
}
module.exports = Application;
