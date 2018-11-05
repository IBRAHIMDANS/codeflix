const http = require('http');
const path = require('path');


const port = process.argv[2]
const hostname = "127.0.0.1"
const filename = path.basename('onecode/season.03/e02.js')

if (port== undefined) throw (`usage node ${filename} <PORT> `)

const serv = http.createServer((req,res) => {
  res.statusCode = 200;

  if (req.method === 'POST') {

    res.setHeader('Content-Type', 'text/html');
    res.end( 'Heisenberg');
  }
  else
  {

  res.setHeader('Content-Type', 'text/html');
  res.end( '<h1>Hello World\n</h1>');

}})
serv.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
