const fs = require('fs');
const path = require('path');

function duplicate(arg) {
const reader = fs.createReadStream(arg,'utf8')
const extension = path.extname(arg)
const basename = path.basename(arg,extension)
const duplicated = `${basename}.copy${extension}`
if (fs.existsSync(duplicated)) {
  throw console.error("file exist , please use an other file :D");
}
const writeStream = fs.createWriteStream(duplicated)
reader.pipe(writeStream)
console.log(` The file ${arg} has been duplicated successfully as ${duplicated}  `) ;
}

module.exports = { duplicate }
