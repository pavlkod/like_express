const config = require("dotenv").config;
config();

const Router = require("./framework/Router");
const Application = require("./framework/Application");

const app = new Application();
const router = new Router();

router.get("/users", (req, res) => {
  res.end("users");
});
router.get("/posts", (req, res) => {
  res.end("posts");
});

app.addRoute(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
