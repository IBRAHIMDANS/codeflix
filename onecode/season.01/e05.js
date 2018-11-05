const fs = require ('fs');

class E05 {
  constructor() {}

  function (file,text){

  return fs.writeFile(file,text,'utf8', (err) =>{
    if (err) throw err;
    console.log("success");
  });

}
}
module.exports = E05
