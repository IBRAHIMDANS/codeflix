import React, { Component } from 'react';
import './css/PokemonList.css';


class PokemonList extends Component {
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
      <div className="container">
        <h1> List of Pokemons </h1>
        <input type="text" className="search" placeholder="search"/> <button className=" btn-danger"> Validate</button>

        <div className="row">
        {pokemons.map(element => {return (
          <div className="col" key={element.id}>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`} alt={`${element.nom}` }></img>
            <p > Nom du Pokemon : {element.name} </p>
            <p> Type1 : {element.type1} </p>
            <p> Type2 : {element.type2} </p>
            <p> Couleur : {element.couleur} </p>
            <input type="button" className ="btn btn-primary" formAction="#" value="Afficher les infos"/>
          </div>)
         })}
       </div>
        </div>
    );
  }
}

export default PokemonList;



  // componentDidMount(){
  //
  // fetch('http://localhost:4242/pokemons/010')
  //   .then(res => res.json())
  //   .then(pokemons => this.setState({data: pokemons}, () => console.log(pokemons)))
  // }
