const fs = require('fs');
const path = require('path');

class E10 {
  constructor() {}

  function (file,file2){
    if (!fs.existsSync(file))
           console.log(`la source n'existe pas`);

        if (!fs.existsSync(file2)) {
            fs.mkdirSync(file2);
        }

        fs.readdirSync(file).forEach(function (element){
            let newCurrent = path.join(file, element);
            let newfile2 = path.join(file2, element);

            if (fs.lstatSync(newCurrent).isDirectory()) {
                (newCurrent, newfile2)
            } else {
                fs.copyFileSync(newCurrent,newfile2);
            }
       })

       return `Directory [ ${file} ] successfully duplicated into [ ${file2} ]`;



  }
}
  module.exports = E10
