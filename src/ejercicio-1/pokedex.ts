import {Pokemon} from './pokemon';
import {Marvel} from './marvel';
import {Starwars} from './starwars';
import {Fighter} from './fighter';

export class Container {
  constructor(private arrayContainer: Fighter[]) {}

  public getContainer(){ /// devolvemos los pokemons de la pokedex
    return this.arrayContainer;
  }

  public setPokemon(pokemon: Pokemon) { ///añadimos pokemons
    this.arrayContainer.push(pokemon)
  }

  public setMarvel(marvel: Marvel) { ///añadimos marvel
    this.arrayContainer.push(marvel)
  }

  public setStarWars(starwars: Starwars) { ///añadimos starwars
    this.arrayContainer.push(starwars)
  }

  public showContainer() {
    console.table(this.arrayContainer, ["name", "weight", "size", "type", "universe"]);
  }

  
}
