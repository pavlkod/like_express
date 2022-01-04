const RouterController = require("../controllers/routerController");

const Router = require("../framework/Router");
const router = new Router();

router.get("/users", RouterController.getUsers);
router.post("/users", RouterController.createUser);
router.get("/posts", (req, res) => {
  res.send("posts");
});

module.exports = router;
