const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(4242, () => {
  console.log("Listening on port 4242");

});

require("./routes/pokemon.js")(app);
