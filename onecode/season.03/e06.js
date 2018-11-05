const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');



const hostname = "127.0.0.1"

const filename = path.basename(process.argv[1])
const file = fs.readFileSync("./resources/index.html","utf8")
const port = process.argv[2];
if (port== undefined) throw (`usage node ${filename} <PORT> `)


const serv = http.createServer((req,res) => {
    res.statusCode = 200;
  
    return res.end('done');

})
serv.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
