const Router = require("../framework/Router");
const router = new Router();

const users = [
  { id: 1, name: "Test" },
  { id: 2, name: "Test2" },
];

router.get("/users", (req, res) => {
  res.end(JSON.stringify(users));
});
router.get("/posts", (req, res) => {
  res.end("posts");
});

module.exports = router;
