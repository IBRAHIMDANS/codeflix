import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Pokemon.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: null
    }
  }

  componentDidMount(){
    const name = this.props.match.params.name;
    fetch('http://localhost:4242/pokemon/'+name)
    .then(res => res.json())
    .then(data => this.setState({ name: data }));
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div >
        <input type="text" className="search" id= "name" placeholder="search"/>
        <Link to={`/pokemon/${pokemons.nom}`}>
         <button className=" btn-danger"> Validate</button>
        </Link>
    </div>
  );
}
}

export default Search;
