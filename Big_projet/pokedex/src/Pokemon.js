import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Pokemon.css';

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: null
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    fetch('http://localhost:4242/pokemon/'+id)
    .then(res => res.json())
    .then(data => this.setState({ pokemon: data }));
  }

  render() {
    const { pokemon } = this.state;
    if (!pokemon) return <h1>Pas de données</h1>
    let attaques = pokemon.attaques.map((attaque, index) => (
      <ul key={index}>
        {Object.entries(attaque).map(([key, value]) => (
          <li className="col" key={key}> <b> {key}</b>: {value}</li>

        ))}
      </ul>
    ))

    return (
      <div>
        <h1>  {pokemon.nom} </h1>
        <p></p>
        <div className="red">
          <div>
            <img className="imgOne" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.ndex}.png`} alt={`${pokemon.nom}`}></img>
          </div>
          <div className= "" key={pokemon.ndex}>

            <p> <b>Nom du Pokemon : </b>{pokemon.nom} </p>
            <p> <b> Type1 : </b>{pokemon.type1} </p>
            {  (! pokemon.type2)?  <p> </p> : <p> <b>Type2 :</b> {pokemon.type2} </p> }
            <p> <b>Couleur : </b> {pokemon.couleur} </p>
            <p> <b>Attaques :</b> <div className="row">{attaques} </div></p>
          </div>
        </div>

        <Link to={`/`}>
        <input type="button" className ="btn btn-primary" formAction="#" value="Back"/>
      </Link>
    </div>
  );
}
}

export default Pokemon;
