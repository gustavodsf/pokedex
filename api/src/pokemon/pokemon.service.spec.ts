import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { PokemonService } from './pokemon.service';
import { AxiosResponse } from 'axios';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPokemons', () => {
    it('should return data when API call is successful', async () => {
      const mockResponse = {
        data: {
          results: [{ name: 'bulbasaur' }, { name: 'ivysaur' }],
        },
      };
      jest.spyOn(httpService, 'get').mockReturnValue(of(mockResponse as AxiosResponse<any>));

      const result = await service.getPokemons(2, 0);
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error when API call fails', async () => {
      jest.spyOn(httpService, 'get').mockReturnValue(of({} as AxiosResponse<any>));

      await expect(service.getPokemons(2, 0)).rejects.toThrow('Invalid response from the API');
    });
  });

  describe('getPokemonByName', () => {
    it('should return data when API call is successful', async () => {
      const mockResponse = {
        data: { name: 'bulbasaur' },
      };
      jest.spyOn(httpService, 'get').mockReturnValue(of(mockResponse as AxiosResponse<any>));

      const result = await service.getPokemonByName('bulbasaur');
      expect(result).toEqual(mockResponse.data);
    });

    it('should throw an error when API call fails', async () => {
      jest.spyOn(httpService, 'get').mockReturnValue(of({} as AxiosResponse<any>));

      await expect(service.getPokemonByName('bulbasaur')).rejects.toThrow();
    });
  });
});
