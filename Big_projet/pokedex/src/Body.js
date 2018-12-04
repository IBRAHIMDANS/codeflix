import React, { Component } from 'react';
import './App.css';


class Body extends Component {
  constructor() {
    super();
    this.state = {
      pokemons:[]
    }
  }

  componentDidMount(){

  fetch('http://localhost:4242/')
    .then(res => res.json())
    .then(data => this.setState({ pokemons: data },() => console.log(data)));
  }
  // fetch('http://localhost:4242/pokemons/'+ this.state.currentId)
  //   .then(res => res.json())
  //   .then(data => this.setState({ pokemons: data },() => console.log(data)));
  // }


  render() {
    const { pokemons } = this.state;
    return (
      <div>
        {pokemons.map(element => {return (
          <div key={element.id}>
          <a href="/"> {element.name} </a>
          </div>)
         })}
        </div>
    );
  }
}

export default Body;



  // componentDidMount(){
  //
  // fetch('http://localhost:4242/pokemons/010')
  //   .then(res => res.json())
  //   .then(pokemons => this.setState({data: pokemons}, () => console.log(pokemons)))
  // }
