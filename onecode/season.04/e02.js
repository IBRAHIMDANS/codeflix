const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const hostname = "127.0.0.1"
const port = process.argv[2];

if (port== undefined|| port !== 1337 ) {const port = 1337;}
const serv = http.createServer((req,res) => {
  res.statusCode = 200;
  const q = url.parse(req.url,true);
  const path = q.pathname;
  res.on('data', (data) => {
    console.log("op");
});

  if (path === '/messages'){
    let pathh = path.slice(1)
    const value = { "messages" : []}
    let d = new Date;
    res.on
    value.messages.push({"text" : data,"date" : d.toJSON()})
    let file = fs.writeFileSync('text.json',JSON.stringify(value, null, 3))
    let read = fs.readFileSync(text.json, 'utf8')
  }

  return res.end('done');
})
serv.listen(port, hostname, () => {
  console.log(`Server running at port : 1337`);
});
