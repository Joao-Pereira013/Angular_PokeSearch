import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { pokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL: string = ""
  private pokeData: pokemonData | any

  constructor(private Http: HttpClient ) {
    this.baseURL = environment.pokeApi
  }
    getPokemon(pokemonName : string):Observable<pokemonData>{
      this.pokeData = this
                      .Http
                      .get<pokemonData>
                      (`${this.baseURL}${pokemonName}`)
      return this.pokeData
    }
}
