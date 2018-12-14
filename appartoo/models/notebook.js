const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("data/Appartoo.sqlite");

class NotebookModel {

  static create(data, req, res) {

    db.run(
      `INSERT INTO notebook (firstname,lastname,email,familly,address,id_user)
    VALUES('${data.firstname}',
           '${data.lastname}',
           '${data.email}',
           '${data.familly}',
           '${data.address}',
           '${data.id_user}')`,
      (err, row) => {
        if (!row) {
          res.render(`../views/note`, {
            title: 'Notebook',
            err: err,
            id: data.id_user,
            note: data.note
          })
        } else {
          res.render(`../views/note`, {
            title: 'Notebook',
            err: '',
            id: data.id_user,
            note: data.note
          })
        }
      }
    );
  }


  static update(note, res, id) {
    db.run(
      `UPDATE notebook 
      SET
      firstname = '${note.firstname}',
      lastname = '${note.lastname}',
      email = '${note.email}',
      familly = '${note.familly}',
      address = '${note.address}'
      WHERE id_notebook = '${note.id_notebook}'
      AND id_user = '${note.id_user}' `,
      (err,row) => {
        
        if (err) res.send(err.message);
        else res.render('../views/note', {
          title: 'Notebook',
          id: note.id_user,
          note
        });
        console.log(err,row);
        
      }
    );
  }


  static deleteNote(id, note, res) {
    db.all(`DELETE  from notebook where id_notebook = ${id}`, (err, row) => {
      console.log(id, row);

      if (err) res.send(err.message);
      else res.render('../views/note.ejs', {
        title: 'Notebook',
        note,

      });
    });
  }

  static getNote(req, res, id) {

    db.all(`SELECT * from notebook where id_user = ${id}`, (err, row) => {
      if (!row) {
        return res.render('../views/note.ejs', {
          title: "Notebook",
          note: row
        });
      } else {
        res.render('../views/note.ejs', {
          title: 'Notebook',
          note: row,
          id_notebook: row.id_notebook,
          id
        });


      }

    });
  }




}

module.exports = NotebookModel;