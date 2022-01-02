const config = require("dotenv").config;
const Application = require("./framework/Application");
const router = require("./router");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");

config();

const app = new Application();

app.use(jsonParser);
app.use(parseUrl);
app.addRoute(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
