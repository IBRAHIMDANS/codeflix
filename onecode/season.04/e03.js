const path = require ('path');
const http = require ('http');
const https = require ('https');

let port = process.argv[2];

if (port == undefined)
{
port = 1717;
  console.log(`Server is running at port ${port}`);

  http.createServer(function (req, res) {

    const request = https.get(`https://www.reddit.com/r/perfectloops.json`, (resp) => {
    let body = "";
    resp.on('data', data => {
        body += data.toString();
    });
    resp.on('end', () => {
        let json = JSON.parse(body);
        let string = ""
        for(let i = 1; i < 11; i++) {
              let gifUrl = json.data.children[i].data.url;
              gifUrl = gifUrl.replace('.gifv','.gif')
              string += `<div>
                          <img src = "${gifUrl}" >
                          </div>`
              res.writeHeader(200, {"Content-Type": "text/html"});
        }
        res.write(string);
        res.end()
      });
    });
  }).listen(port);
}
