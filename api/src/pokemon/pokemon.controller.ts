import { Controller, Get, Query, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { GetPokemonsDto, GetPokemonByNameDto } from './type';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async getPokemons(@Query() query: GetPokemonsDto) {
    const { limit, offset } = query;
    return this.pokemonService.getPokemons(limit, offset);
  }

  @Get(':name')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getPokemonByName(@Param() params: GetPokemonByNameDto) {
    const { name } = params;
    return this.pokemonService.getPokemonByName(name);
  }
}
