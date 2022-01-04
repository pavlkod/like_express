const users = [
  { id: 1, name: "Test" },
  { id: 2, name: "Test2" },
];

class RouterController {
  getUsers(req, res) {
    if (req.params.id) {
      return res.send(users.find(user => user.id === +req.params.id));
    }
    res.send(users);
  }
}

module.exports = new RouterController();
