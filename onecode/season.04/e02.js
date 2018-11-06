const path = require ('path');
const http = require ('http');
const fs = require('fs');
const url = require ('url')

let port = process.argv[2];

if (port == undefined){

  port = 1111
  console.log(`Server is running at port ${port}`);

  http.createServer(function (req, res) {

    let q = url.parse(req.url,true);
    let path = q.pathname.split('/')
    let pathname = path[1]
    let file = 'message.json'
    let chatContent = {messages: []};

    if (pathname === 'messages' && req.method === 'POST'){
      req.on('data', function(chunk) {

        chunk = chunk.toString();
        let d = new Date();

        if (fs.existsSync(file)){
          fs.readFile(file, 'utf-8', (err,data) => {
            if(err) throw(err);
            let jsonParse = JSON.parse(data)
            jsonParse.messages.push({text: chunk, date: d.toJSON()});
            let jsonStringify = JSON.stringify(jsonParse,null,3)
            fs.writeFileSync('message.json', jsonStringify, (err) => {
              if(err) throw(err);
            })
          });
        }else {
          chatContent.messages.push({text: chunk, date: d.toJSON()});
          fs.writeFileSync('message.json', JSON.stringify(chatContent,null,3));
        }
      })

    } else {
      console.log('fail');
    }
    res.end();
  }).listen(port);
}
