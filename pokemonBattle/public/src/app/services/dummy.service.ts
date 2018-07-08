import { Injectable } from '@angular/core';
import { SelectedPokemon } from './../classes/selected-pokemon';

@Injectable()
export class DummyService {

    contstructor() {    }

    private _pokemons = [
        {
            name:  'Charizard',
            id:  9,
            type1:  'Fire',
            type2: 'Flying',
            imageLoaded: true,
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
        },
        {
            name:  'Venasaur',
            id:  6,
            type1:  'Grass',
            type2: 'Poison',
            imageLoaded: true,
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
        },
        {
            name:  'Alakazam',
            id:  65,
            type1:  'Psychic',
            type2: null,
            imageLoaded: true,
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png'
          },
          {
            name:  'Gengar',
            id:  94,
            type1:  'Psychic',
            type2: 'Ghost',
            imageLoaded: true,
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
          },
          {
            name:  'Pikachu',
            id:  25,
            type1: 'electric',
            type2: null,
            imageLoaded: true,
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
          },
          {
            name:  'Mewtwo',
            id:  150,
            type1:  'Fire',
            type2: 'Flying',
            imageLoaded: true,
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
          }
    ]


    get pokemons(): SelectedPokemon[] {
        return this._pokemons;
    }
}
