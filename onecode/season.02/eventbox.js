const emitter = require('events').EventEmitter;
const myEmitter = new emitter();
fs


myEmitter.on('event 1', function (arr) {
	console.log("Here come's a new Pirate ->> "+ arr);
});


module.exports.Boucle = function (arr) {
  if (typeof (arr) == "string" ){
      myEmitter.emit('event 1',arr);
  }
      for (let i = 0; i < arr.length; i++) {
        myEmitter.emit('event 1',arr[i]);
        }
  }
///on sert a executer un evenement
