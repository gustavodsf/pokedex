import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import {Pokemon, PokemonBasicInfoList} from './type';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  async getPokemons(limit: number, offset: number) {
    try {
      const response = await lastValueFrom(this.httpService
        .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`));

      if (response && response.data) {
        return ( response.data  as PokemonBasicInfoList);
      } else {
        throw new Error('Invalid response from the API');
      }
    } catch (error) {
      console.error('Error fetching pokemons:', error);
      throw error;
    }
  }

  async getPokemonByName(name: string) {
    const response = await lastValueFrom(this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${name}`));
    if (response && response.data) {
      return (response.data  as Pokemon) ;
    } else {
      throw new Error('Invalid pokemon name');
    }
  }
}
