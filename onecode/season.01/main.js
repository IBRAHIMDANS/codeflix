const E01 = require('./e01.js');
const E02 = require('./e02.js');
const E03 = require('./e03.js');
const E04 = require('./e04.js');
const E05 = require('./e05.js');
const E06 = require('./e06.js');
const E07 = require('./e07.js');
const E08 = require('./e08.js');
const E09 = require('./e09.js');
const E10 = require('./e10.js');


const file = process.argv[2]
const file2 = process.argv[3]


const an = new E01()
const extension = new E02()
const read = new E03()
const readAs = new E04()
const write = new E05()
const remove = new E06()
const typeOf = new E07()
const access = new E08()
const readperm = new E09()
const copyf = new E10()



copyf.function(file,file2)
// readperm.function(file,file2)
// access.function(file)
// typeOf.function(file)
// remove.function(file)
// write.function(file,file2)
// console.log(read.function(file));
// console.log(readAs.function(file));
// console.log(extension.function(file));
//
// console.log(an.function())
//
// console.log(__filename);
