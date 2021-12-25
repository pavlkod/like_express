const Router = require("./Router");

const router = new Router();

router.get("/users", (req, res) => {
  res.end("users");
  console.log("users");
});
router.get("/posts", (req, res) => {
  res.end("posts");
  console.log("posts");
});
