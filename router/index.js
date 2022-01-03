const Router = require("../framework/Router");
const router = new Router();

const users = [
  { id: 1, name: "Test" },
  { id: 2, name: "Test2" },
];

router.get("/users", (req, res) => {
  if (req.params.id) {
    return res.send(users.find(user => user.id === +req.params.id));
  }
  res.send(users);
});
router.post("/users", (req, res) => {
  const body = req.body;
  users.push(body);
  res.send(body);
});
router.get("/posts", (req, res) => {
  res.send("posts");
});

module.exports = router;
