import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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


  render() {
    const { pokemons } = this.state;
    return (
      <div className="container">
        <h1> List of Pokemons </h1>
        <input type="text" className="search" placeholder="search"/> <button className=" btn-danger"> Validate</button>

        <div className="row">
          {pokemons.map(element => {return (
            <div className="col" key={element.id}>
              <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`} alt={`${element.nom}` } className="imglist"></img>
              <p > Nom du Pokemon : {element.name} </p>
              <p> Type1 : {element.type1} </p>
              <p> Type2 : {element.type2} </p>
              <p> Couleur : {element.couleur} </p>
              <Link to={`/pokemon/${element.id}`}>
              <input type="button" className ="btn btn-primary" formAction="#" value="Afficher les infos"/>
            </Link>
          </div>)
        })}
      </div>
    </div>
  );
}
}

export default PokemonList;
