
class mNode {
  constructor(data) {
    this._data = data
    this._next = null;
    this._prev = null;
  }
  get_data(){
    return this._data;
  }
  get_next(){
    return this._next;
  }
  get_prev(){
    return this._prev;
  }
  set_data(value){
    this._data = value;
  }
  set_next(node){
    this._next = node;
  }

  set_prev(node){
    this._prev = node;
  }
}
module.exports = mNode
