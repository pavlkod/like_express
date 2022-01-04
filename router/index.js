const RouterController = require("../controllers/routerController");

const Router = require("../framework/Router");
const router = new Router();

router.get("/users", RouterController.getUsers);
router.post("/users", (req, res) => {
  const body = req.body;
  users.push(body);
  res.send(body);
});
router.get("/posts", (req, res) => {
  res.send("posts");
});

module.exports = router;
