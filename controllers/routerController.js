const users = [
  { id: 1, name: "Test" },
  { id: 2, name: "Test2" },
];
const User = require("../models/user");
class RouterController {
  async getUsers(req, res) {
    let users;
    if (req.params.id) {
      users = await User.findById(req.params.id);
      return res.send(users);
    }
    users = await User.find();
    res.send(users);
  }
  async createUser(req, res) {
    const body = req.body;
    users.push(body);
    res.send(body);
  }
}

module.exports = new RouterController();
