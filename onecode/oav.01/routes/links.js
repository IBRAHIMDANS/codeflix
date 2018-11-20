const linksModel = require("../models/links.js");

function register(router) {
  router.get("/links", function(req, res) {
    linksModel.getAll(res);
  });

  router.get("/links/:id", function(req, res) {
    const idSelected = req.params.id;

    linksModel.get(idSelected, res);
  });

  router.delete("/links/:id", function(req, res) {
    const idSelected = req.params.id;
    linksModel.delete(idSelected, res);
  });

  router.post("/links", function(req, res) {
    const data = {
      tags: req.body.tags,
      url: req.body.url,
      userId: req.body.userId
    };

    linksModel.create(data, res);
  });

  router.put("/links", function(req, res) {
    const data = {
      id: req.body.id,
      tags: req.body.tags,
      url: req.body.url,
      userId: req.body.userId
    };

    linksModel.update(data, res);
  });

  router.get("/users/:userId/links", function(req, res) {
    const idSelected = req.params.userId;

    linksModel.getAllLinksFromUser(idSelected, res);
  });

  router.get("/users/:userId/links/:id", function(req, res) {
    const idSelected = req.params.id;
    const userIdSelected = req.params.userId;

    linksModel.getLinkFromUser(userIdSelected, idSelected, res);
  });
}

module.exports = register;
