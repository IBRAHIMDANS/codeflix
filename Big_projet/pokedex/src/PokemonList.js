import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/PokemonList.css';
// import Search from './Pokemon.js'



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

        <div className="row">
          {pokemons.map(element => {return (
            <div className="col btn btn-light" key={element.id}>
              <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${element.id}.png`} alt={`${element.nom}` } className="imglist"></img>
              <p > <b> Pokemon N° :</b> {element.id} </p>
              <p > <b> Nom :</b> {element.name} </p>
              <p> <b> Type1 :</b> {element.type1} </p>
              {  (! element.type2)?  <p> </p> : <p> <b>Type2 :</b> {element.type2} </p> }
              <p> <b> Couleur :</b> {element.couleur} </p>
              <p> <b> Poids :</b> {element.poids} Kg </p>
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
