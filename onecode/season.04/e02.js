const http = require('http');
const fs = require('fs');
const url = require('url');

const hostname = "127.0.0.1"
const port = process.argv[2];

if (port== undefined|| port !== 1337 ) {const port = 1337;}
const serv = http.createServer((req,res) => {
    res.statusCode = 200;
    const q = url.parse(req.url,true);
    let query = q.query;
    let keys= Object.keys(query);
    let values= Object.values(query);
    let file


    return res.end('done');
})
serv.listen(port, hostname, () => {
  console.log(`Server running at port : 1337`);
});
