const fs = require('fs');
class E06 {
  constructor() {}
  function (file){
    return fs.unlink(file, (err) => {
if (err) throw err;
  console.log(`${file} was deleted`);
})

}
}
module.exports =  E06
