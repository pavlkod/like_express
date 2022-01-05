const config = require("dotenv").config;
const Application = require("./framework/Application");
const router = require("./router");
const jsonParser = require("./framework/parseJson");
const parseUrl = require("./framework/parseUrl");

const mongoose = require("mongoose");

config();

const app = new Application();

app.use(jsonParser);
app.use(parseUrl(`${process.env.HOST}:${process.env.PORT}`));
app.addRoute(router);

(async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));
  } catch (e) {
    console.log(e);
  }
})();
