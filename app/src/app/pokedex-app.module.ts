import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './pokedex-app.routes';
import { PokedexAppComponent } from './pokedex-app.component';
import { PokemonService } from '../services/pokemon.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [PokemonService],
  declarations: [PokedexAppComponent, PokemonListComponent, PokemonDetailComponent],
  bootstrap: [PokedexAppComponent],
})
export class PokedexAppModule {}
