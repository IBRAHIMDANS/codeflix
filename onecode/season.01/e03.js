const fs = require ('fs');

class E03 {
  constructor() {}

  function (file){
    return fs.readFileSync(file , 'utf8')
  }
}

module.exports = E03;
