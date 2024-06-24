import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { Pokemon, PokemonBasicInfoList } from './type';
import { HttpModule } from '@nestjs/axios';

describe('PokemonController', () => {
  let controller: PokemonController;
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [PokemonController],
      providers: [PokemonService],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    service = module.get<PokemonService>(PokemonService);
  });

  describe('getPokemons', () => {
    it('should call getPokemons method of PokemonService and return the result', async () => {
      // Arrange
      const query = { limit: 10, offset: 0 };
      const expected = {
        count: 1,
        next: null,
        previous: null,
        results: [{ name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' }],
      } as unknown as PokemonBasicInfoList;
      jest.spyOn(service, 'getPokemons').mockResolvedValue(expected);

      // Act
      const result = await controller.getPokemons(query);

      // Assert
      expect(service.getPokemons).toHaveBeenCalledWith(query.limit, query.offset);
      expect(result).toBe(expected);
    });
  });

  describe('getPokemonByName', () => {
    it('should call getPokemonByName method of PokemonService and return the result', async () => {
      // Arrange
      const params = { name: 'Pikachu' };
      const expected = {
        abilities: [],
        base_experience: 112,
        height: 4,
        id: 25,
        name: 'pikachu',
        species: { name: 'pikachu' },
        sprites: { front_default: 'https://pokeapi.co/media/sprites/pokemon/25.png' },
        weight: 60,
      } as unknown as Pokemon;
      jest.spyOn(service, 'getPokemonByName').mockResolvedValue(expected);

      // Act
      const result = await controller.getPokemonByName(params);

      // Assert
      expect(service.getPokemonByName).toHaveBeenCalledWith(params.name);
      expect(result).toBe(expected);
    });
  });
});