// isMaxReached enables router to hub page
// myPokemonservice is the users current selected pokemons
// pokemonsService is all of pokemons data

import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./../classes/pokemon";
import { SelectedPokemon } from "./../classes/selected-pokemon";
import { MyPokemonsService } from "../services/myPokemons.service";
import { Router } from "@angular/router";
import { PokemonsService } from "../services/pokemons.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private _myPokemonService: MyPokemonsService,
    private _router: Router,
    private _pokemonsService: PokemonsService
  ) {}

  pokemons: Pokemon[] = [];
  selectedPokemons: Pokemon[] = [];
  counter: number = 0;
  maxSelected: number = 6;

  ngOnInit() {
    this.pokemons = this._pokemonsService.pokemons;
    this.selectedPokemons = this._myPokemonService.pokemon;
  }

  selectPokemon(id) {
    let poke: Pokemon = this.pokemons[id - 1];
    if (!this._myPokemonService.addPokemon(poke)) {
      alert("You've reached the maximum capacity");
    }

    this.selectedPokemons = this._myPokemonService.updateList();
  }

  continue() {
    this._router.navigate(["hub"]);
  }
}
