const mLinkedList = require('./m_linked_list');
class mStack {
  constructor() {
    this._list = new mLinkedList ()
  }
  size(){
    return this._list._length;
  }
  isEmpty(){
    return this._list.isEmpty();
  }
  push(data){
    this._list.push(data)

    }
  pop(){
    this._list.pop()
    }
  top(){
    this._list._head
    }
  }

module.exports = mStack;
