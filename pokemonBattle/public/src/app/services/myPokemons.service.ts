import { Injectable }      from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable }      from '../../../pokebattle/node_modules/rxjs/Observable';
import { Pokemon }         from '../classes/pokemon';

@Injectable()
export class MyPokemonsService {

    private _pokemons: Pokemon[]= [];
    limit: number = 6;

    constructor() {}

    get pokemon() { return this._pokemons}


    addPokemon(poke):boolean {
        let pokeLen = this._pokemons.length;
        let limit = this.limit;

        if(pokeLen === limit) return false;
        this._pokemons.push(poke);
        return true;
    }

    updateList() { return this._pokemons }

}