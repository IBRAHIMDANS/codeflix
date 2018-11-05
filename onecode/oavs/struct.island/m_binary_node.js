class mBinaryNode {
  constructor(data,left,right) {
    this._data = data;
    this._left= left;
    this._right= right;
  }

  get_data(){
    return this._data
  }
  get_left(){
    return this._left
  }
  get_right(){
    return this._right
  }
  set_data(){
    this._data = data;
  }
  set_left(){
    this._left= left;
  }
  set_right(){
    this._right= right;
  }
}
