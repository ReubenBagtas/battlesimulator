import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ButlerService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string  = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private _http: Http) { }

  getPokemon(offSet: number, limit: number) {
    return this._http.get(`${this.baseUrl}?offset=${offSet}&limit=${limit}`)
    .toPromise()
    .then(response => response.json().results)
    .then(items => items.map((item, idx) => {
      const id: number = (idx + 1) + offSet;
      console.log(item)

      return {
        name: item.name,
        sprite: `${this.baseSpriteUrl}${id}.png`,
        id
      }

    }))
  }

  selectPokemon(pokemonID) {
    return this._http.get(`${this.baseUrl}${pokemonID}/`)
    .toPromise()
    .then(response => response.json())
    .then( pokemon => {
      console.log(pokemon)

      return pokemon = {
        name: pokemon.name,
        id: pokemon.id,
        type1: pokemon.types[0].type.name,
        type2: pokemon.types[1] ? pokemon.types[1].type.name : null,
        sprite: `${this.baseSpriteUrl}${pokemonID}.png`,
        imageLoaded: false
      }
    })
  }
}
