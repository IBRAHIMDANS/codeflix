const sqlite = require("sqlite3");
const db = new sqlite.Database("data/Appartoo.sqlite");

class NotebookModel {

  static create(note, res) {
    db.run(
      `INSERT INTO notebook (firstname,lastname,email,familly,address,id_user)
    VALUES('${note.firstname}',
           '${note.lastname}',
           '${note.email}',
           '${note.familly}',
           '${note.address}',
           '${note.id_user}')`,
           (err, row) => {
             if (err) {
               res.render('../views/notebooks.ejs', { title: 'Notebook', err : err })
             } else {
               res.render('../views/notebooks.ejs', { title: 'Notebook',err:'' })
             }
           }
    );
  }


  static update(note, res) {
    db.run(
      `UPDATE notebook set
              firstname = '${note.firstname}',
              lastname = '${note.lastname}',
              email = '${note.email}',
              familly = '${note.familly}',
              address = '${note.address}',
              WHERE id_notebook = '${note.id_notebook}'`,
      err => {
        console.log(err);
        if (err) res.send(err);
        else res.render('../views/notebooks.ejs', { title: 'Notebook' });
      }
    );
  }


  static delete(id, res) {
  db.get(`DELETE  from notebook where id_notebook = ${id}`, (err, row) => {
    if (err) res.send(err);
    else res.render('../views/notebooks.ejs', { title: 'Notebook' });
  });
}
  static getNote(id, res) {
  db.get(`SELECT * from notebook where id_user = ${id}`, (err, row) => {
    console.log(id);
    if (err) res.send(err);
    else res.render('../views/notebooks.ejs', { title: 'Notebook', note : row });
  });
}




}

module.exports = NotebookModel;
