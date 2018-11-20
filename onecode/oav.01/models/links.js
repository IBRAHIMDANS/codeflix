const sqlite = require("sqlite3");
const db = new sqlite.Database("myDb");

class linksModel {
  static create(link, res) {
    db.run(
      `INSERT INTO links (tags, url, userId) 
    VALUES('${link.tags}',
           '${link.url}',
           '${link.userId}')`,
      err => {
        if (err) res.send(err);
        else res.send("Created");
      }
    );
  }

  static getAll(res) {
    db.all("SELECT * from links", (err, row) => {
      if (err) res.send(err);
      else if (row) res.send(row);
      else res.send("Nothing found");
    });
  }

  static get(id, res) {
    db.get(`SELECT * from links where id = ${id}`, (err, row) => {
      if (err) res.send(err);
      else if (row)
        res.send({
          id: id,
          tags: row.tags,
          url: row.url,
          userId: row.userId
        });
      else res.send("Nothing found");
    });
  }

  static update(data, res) {
    db.run(
      `UPDATE links set 
              tags = '${data.tags}', 
              url = '${data.url}',
              userId = '${data.userId}' 
              WHERE id = '${data.id}'`,
      err => {
        if (err) res.send(err);
        else res.send("Updated");
      }
    );
  }

  static delete(id, res) {
    db.run(`DELETE  from links where id = ${id}`, err => {
      if (err) res.send(err);
      else res.send(`Link has been successfully deleted :{"id" : ${id}`);
    });
  }

  static getAllLinksFromUser(id, res) {
    db.all(`SELECT * from links where userId = ${id}`, (err, row) => {
      console.log("row", row);
      if (err) res.send(err);
      else if (row) res.send(row);
      else res.send("Nothing found");
    });
  }

  static getLinkFromUser(userId, linkId, res) {
    db.get(
      `SELECT * from links where id = ${linkId} AND userId = ${userId}`,
      (err, row) => {
        if (err) res.send(err);
        else if (row)
          res.send({
            id: id,
            tags: row.tags,
            url: row.url,
            userId: row.userId
          });
        else res.send("Nothing found");
      }
    );
  }
}

module.exports = linksModel;
