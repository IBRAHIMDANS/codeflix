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


  static update(note, res, id) {
    db.run(
      `UPDATE notebook set
              firstname = '${note.firstname}',
              lastname = '${note.lastname}',
              email = '${note.email}',
              familly = '${note.familly}',
              address = '${note.address}',
              WHERE id_notebook = '${id}'`,
      err => {
        console.log(err);
        if (err) res.send(err);
        else res.render('../views/notebooks.ejs', { title: 'Notebook' });
      }
    );
  }


  static deleteNote(id, res) {
  db.get(`DELETE  from notebook where id_notebook = ${id}`, (err, row) => {
    if (err) res.send(err);
    else res.render('../views/notebooks.ejs', { title: 'Notebook' });
  });
}
  static getNote(res,id) {

  db.get(`SELECT * from notebook where id_user = ${id}`, (err, row) => {
    if (err) res.send(err);
    else res.render('../views/note.ejs', { title: 'Notebook', note : row });
    console.log(row);
    
  });
}




}

module.exports = NotebookModel;
