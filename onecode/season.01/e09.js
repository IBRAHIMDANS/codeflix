const fs = require('fs');

class E09 {
  constructor() {}

  function (file,file2){
    fs.chmodSync(file,file2)
  }

}
module.exports = E09
