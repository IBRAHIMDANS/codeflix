const http = require('http');
const url = require('url');

const hostname = "127.0.0.1"
const port = process.argv[2];
let random = Math.floor(Math.random()*1000)
let cpt =0 ;
if (port== undefined|| port !== 1337 ) {const port = 1337;}
const serv = http.createServer((req,res) => {
    res.statusCode = 200;
    const q = url.parse(req.url,true);
    let query = q.query;
    let keys= Object.keys(query);
    let values= Object.values(query);

    if (values < 0 || values > 1000){
      console.log("Please choice a number beetween 0 and 1000");
      cpt++
    }
    else if (values[0] > random) {
      console.log("Bigger");
      cpt++
    }
    else if (values[0] < random) {
      console.log("Smaller");
      cpt++
    }
    else if (values[0] == random) {
      console.log(`Well done ! You have found in ${cpt} shots`);
    }
    else {
      console.log(`Values is indefined localhost:1337?n=[Values]`);
    }

    return res.end('done');
})
serv.listen(port, hostname, () => {
  console.log(`Server running at port : 1337`);
});
