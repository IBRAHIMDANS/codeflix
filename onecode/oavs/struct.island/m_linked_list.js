const mNode = require('./m_node');

class mLinkedList {

  constructor() {

    this._head = null;
    this._length = 0;

  }

  length()
  {
    return this.count;
  }

  isEmpty(str)
  {
    return isEmpty(str);
  }

  push(data)
  {

    if (data.isArray) {
      let t = [];
      t.push(data)
      return t
    }
    const newMNode = new mNode(data);
    if (this._head == null) {
      this._head = newMNode;
    }
    else
    {
      let pointeur = this._head
      while (pointeur.get_next() !== null)
      {
        pointeur = pointeur.get_next();
      }
      pointeur.set_next(newMNode);
      newMNode.set_prev(pointeur)
    }
    this._length++;
  }
  pop(){
    return this._head
  }
  getNodeByIndex(idx)
  {
    let index =0
    let pointeur = this._head;
    while (index < idx && pointeur.get_next()) {
      index++;
      pointeur = pointeur.get_next();
      }
    if (index == idx) {
      return pointeur;
    }
    else
    {
      throw "out of space";
    }
  }
  popNodeByIndex(i)
  {
    if (this._head == null) {
      throw "Empty list"
    }
    let nodeToRemove = this._head;
    if (this.count == 1) {
      this._head = null
    }
    else {
      this._head =  this._head.get_next();
      this._head.set_prev()

    }
    this._length--;
    nodeToRemove.set_next(null)
    nodeToRemove.set_prev(null)
    return nodeToRemove;
  }
  getNodeByValue(data)
  {
    let list = this._head;
    while (list.get_data() != data&& list.get_next()!= null) {
      list = list.get_next();
    }
    return list;
  }
  reverseList(){
    let nb = this._length;
    let newList = new mLinkedList();
    for (let i = 0; i < this._length; i++) {
       let list = this._head;
       for (let i = nb - 1; i > 0; i--){
          list = list.get_next();
       }
       nb--;
       newList.push(list.get_data());
    }
    this._head = newList;
  }
  forEach(func){
  let n = this._head;
  while(n!=null){
    func(n);
    n = n.get_next();
  }

  }
  toArray(){
 let tab = [];
 let head = this._head
 while (head.get_next() != null) {
   tab.push(head.get_data())
   head = head.get_next()

 }
 return tab
  }

  toString(){
  let to_string = this.toArray()
  return to_string.toString()
  }

}
module.exports = mLinkedList
