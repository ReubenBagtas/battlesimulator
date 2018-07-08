import { Component, OnInit } from '@angular/core';
import { MyPokemonsService } from './../services/myPokemons.service';
import { SelectedPokemon } from '../classes/selected-pokemon';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.scss']
})
export class HubComponent implements OnInit {
  constructor(private _myPokemonService: MyPokemonsService) {}

  pokemons: SelectedPokemon[] = [];
  currentIndex = 0;

  // Doughnut
  public doughnutChartLabels: string[] = ['Fire', 'Grass', 'Water', 'Psychic'];
  public doughnutChartData: number[] = [1, 2, 1, 2];
  public doughnutChartType = 'doughnut';

  // Bar Chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responseive: true
  };

  public barChartLabels: string[] = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THUR',
    'FRI',
    'SAT'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Total Battle' },
    { data: [60, 50, 70, 70, 51, 43, 23], label: 'Wins' }
  ];

  ngOnInit() {
    // this._myPokemonService.currentPokemons.subscribe( pokemons => this.selectedPokemons = pokemons);
    this.pokemons = this._myPokemonService.pokemon;
  }

  previous(): number {
    if (this.currentIndex === 0) {
      return (this.currentIndex = this.pokemons.length - 1);
    }

    return this.currentIndex--;
  }

  next(): number {
    if (this.currentIndex === this.pokemons.length - 1) {
      return (this.currentIndex = 0);
    }
    return this.currentIndex++;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
