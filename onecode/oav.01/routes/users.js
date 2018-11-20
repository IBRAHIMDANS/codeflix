const userModel = require("../models/users.js");

function register(router) {
  router.get("/users", async function(req, res) {
    userModel.getAll(res);
  });

  router.get("/users/:id", function(req, res) {
    const idSelected = req.params.id;

    userModel.getUser(idSelected, res);
  });

  router.delete("/users/:id", function(req, res) {
    const idSelected = req.params.id;
    userModel.delete(idSelected, res);
  });

  router.post("/users", function(req, res) {
    const data = {
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password
    };
    userModel.create(data, res);
  });

  router.put("/users", function(req, res) {
    const data = {
      id: req.body.id,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password
    };

    userModel.update(data, res);
  });

  router.post("/users/login", (req, res) => {
    const data = {
      username: req.body.nickname,
      password: req.body.password,
    };

    userModel.login(data,req,res);
  });

  router.post("/users/register", (req, res) => {
    const data = {
      username: req.body.nickname,
      password: req.body.password,
    };

    userModel.register(data,req,res);
  });

  router.get("/login", (req, res) => {
    userModel.loginPage(req, res)
  })

  router.get("/logged", (req, res) => {
    userModel.loggedPage(req, res)
  })
}

module.exports = register;
