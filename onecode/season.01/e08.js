const fs = require('fs');

class E08 {
  constructor() {}

  function (file){

    return fs.access(file ,fs.constants.W_OK | fs.constants.R_OK , (err) =>{
    if (err) {
      console.error(`I don't have access to the file ${file}`)
    }
    else {
      console.log(`I can read or write the file ${file}`)
    }
  })
}
}
module.exports = E08
