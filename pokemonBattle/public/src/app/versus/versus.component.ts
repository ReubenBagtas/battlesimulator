import { Component, OnInit } from '@angular/core';
import { DummyService } from '../services/dummy.service';
import { SelectedPokemon } from  '../classes/selected-pokemon';

@Component({
  selector: 'app-versus',
  templateUrl: './versus.component.html',
  styleUrls: ['./versus.component.scss']
})
export class VersusComponent implements OnInit {

  constructor(private _dummyService: DummyService) { }

  pokemons: SelectedPokemon[];


  ngOnInit() {
    this.pokemons = this._dummyService.pokemons;
  }

  simulate() {

  }







}
