const EventEmitter = require('events').EventEmitter;
const myEvent = new EventEmitter();


function  empty(){
    myEvent.on('hi', () => {
      console.log('Ch0ooooooper!');
    });
    myEvent.emit('hi');
  }
  function withArgs(arg) {
    myEvent.on('newFellow', () => {
      if(typeof(arg) == 'string' ){
        console.log(`Here come's a new pirate ->> ${arg}`);
      }
      else {
        for(let item in arg) {
          console.log(`Here come's a new pirate ->> ${arg[item]}`);
      }
    }
    myEvent.emit('newFellow');
  }
)}
module.exports = { empty,withArgs }
