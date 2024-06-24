import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  limit = 20;
  offset = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe((data) => {
      this.pokemons = this.pokemons.concat(data.results);
      this.offset += this.limit;
    });
  }

  loadMore(): void {
    this.loadPokemons();
  }
}
