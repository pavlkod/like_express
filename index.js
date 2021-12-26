const config = require("dotenv").config;
const Application = require("./framework/Application");
const router = require("./router");

config();

const app = new Application();

app.addRoute(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
