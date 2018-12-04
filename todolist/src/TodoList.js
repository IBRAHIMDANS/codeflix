import React, {Component} from 'react';
import Item from './Item'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      items: [],
      currentInput: '',
    });
    this.catchInput = this.catchInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  catchInput(e) {
    this.setState({
      currentInput: e.target.value,
    });
  }

  addItem(e) {
    const newItem = {
     text: this.state.currentInput,
     key:  this.state.items.length,
    };
    
    this.setState(previousState  => ({
      items: [...previousState.items, newItem],
      currentInput: '',
    }));
  }

  buildList(){
    return this.state.items.map(item => {
      return <Item text={item.text} key={item.key} itemKey={item.key} deleteItem={this.deleteItem} />
    });
  }

  deleteItem(key) {
    const newList = this.state.items.filter(item => {
      return key !== item.key;
    });
    this.setState({
      items: newList,
    });
  }

  render() {
    const list = this.buildList();
    return(
      <div>
          <input onChange={this.catchInput} value={this.state.currentInput} />
          <button onClick={this.addItem}>Add Task</button>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

export default TodoList;