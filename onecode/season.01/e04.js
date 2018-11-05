const fs = require ('fs');

class E04 {
  constructor() {}

  function (file){
    const reada = fs.readFile(file,'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
    return reada

  }
}

module.exports = E04;
