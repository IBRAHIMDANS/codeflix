const express = require("express");
const sqlite = require("sqlite3");
const db = new sqlite.Database("myDb");
const bodyParser = require("body-parser");
const session = require("express-session"); 
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'ssshhhhhh'}));

db.serialize(function() {
  db.run(
    "CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY AUTOINCREMENT, nickname Text, email Text, password text)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS links (id INTEGER PRIMARY KEY AUTOINCREMENT, tags Text, url Text, userId INTEGER)"
  );
});

require("./routes/users.js")(app);
require("./routes/links.js")(app);

app.listen(4242, () => {
  console.log("Listening on port 4242");
});
