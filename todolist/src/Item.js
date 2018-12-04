import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <p onClick={() => {this.props.deleteItem(this.props.itemKey)}} >{this.props.text}</p>
      </div>
    );
  }
}

export default Item;