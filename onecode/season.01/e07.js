const fs = require('fs');

class E07 {
  constructor() {

  }
  function(file){
    if (fs.lstatSync(file).isDirectory()) {
        console.log(`The argument ${file} is a directory`)
    }
    else if (fs.lstatSync(file).isFile()) {
      console.log(`The argument ${file} is a file`)
    }
    else {
      console.log(`The argument ${file} is another unix things `)
    }
  }
}
module.exports = E07;
