const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 4242;
const hostname = "127.0.0.1"
const file = fs.readFileSync("./resources/index.html","utf8")
const filename = path.basename('onecode/season.03/e02.js')
if (port== undefined) throw (`usage node ${filename} <PORT> `)

const serv = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(file);
})

serv.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
