const http = require('http');
const url = require('url');
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('data/demodb01.sql');
const port = 8080
const host = "127.0.0.1"

http.createServer((req,res)=> {
  res.writeHead(200 , {"Content-Type" : 'text/html'})


  res.end("done")
}).listen(port,()=> {
  console.log('server running at port 8080');
})

db.serialize(()=>{
  db.run("CREATE TABLE test(info TEXT)");

  let stmt = db.prepare("INSERT INTO test VALUES (?)");
  for (let i = 0; i < 10; i++) {
    stmt.run(" text entrer " + i);
  }
  stmt.finalize()

  db.each("SELECT rowid AS id, info FROM test",(err,row)=>{
    console.log(row.id +": " +row.info);
  });
  db.close();
});

db.serialize(()=>{
  db.run("CREATE TABLE IF NOT EXISTS  test(runtime REAL)");

   db.run("INSERT INTO test (runtime) VALUES (?)", new Date().getTime());

   db.each("SELECT runtime FROM test", function(err, row) {
       console.log("This app was run at " + row.runtime);
   });
});

db.close();

console.log("root endpoint : /");
app.get('/' ,(req,res) => {
  res.send("Hello ROOT world");
});
console.log("Registering endpoint: /stubbed");
app.get('/stubbed', function(req, res){
    res.send('hello STUBBED');
});
console.log("Registering endpoint: /testing");
app.get('/testing', function(req, res){
    res.send('this is a test endpoint');
});
console.log("Registering endpoint: /jsonendpoint");
app.get('/jsonendpoint', function(req, res){
    res.json({
        "mykey" : "myvalue",
        "testy" : "something",
        "exnum" : 123
    });
  })
  console.log("Registering endpoint: /testing/map");
  app.get('/testing/map', function(req, res){
      res.send('this is a test/map endpoint');
  });

  app.listen(2000)

db.serialize(() =>{
  db.run("CREATE TABLE IF NOT EXISTS counts (key TEXT, value INTEGER)");
   db.run("INSERT INTO counts (key, value) VALUES (?, ?)", "counter", 0);
 })
 app.get('/data', (req,res) => {
   db.get("SELECT value FROM counts", (err,row) => {
     res.json({"count" : row.value})
   })
 })
 app.post('/data' ,(req,res) => {
   db.run("UPDATE counts SET value = value + 1 WHERE key = ?", "counter", function(err, row){
          if (err){
              console.err(err);
              res.status(500);
          }
          else {
              res.status(202);
          }
          res.end();
      });
  });
app.listen(2000)
