import {Fighter} from './fighter';

/**
 * clase hija de Fighter, donde crearemos a los personajes del universo starwars y le daremos las directrices de efectividad contra personajes de otros universos
 */
export class Starwars extends Fighter {

  /**
   * Constructor de la clase starwars
   * @param name 
   * @param weigth 
   * @param size 
   * @param type 
   * @param universe 
   * @param basicData 
   */
  constructor(public name: string, public weigth: number, public size: number, public type: string, public universe: any, basicData: number[]) {
    super(name, weigth, size, type, universe, basicData);
  }

  /**
   * get del atributo universe
   * @returns universe
   */
  public getUniverse(){
    return this.universe;
  }

  /**
   * funcion donde le daremos las directrices de efectividad entre universos
   * @param fighter 
   * @returns effectiveness
   */
  damageFighter(fighter: Fighter){
    let effectiveness: number = 0;
    if (fighter.getUniverse() == 'pokemon') {
      effectiveness = 2;
    }
    else if(fighter.getUniverse() == 'marvel') {
      effectiveness = 0.5;
    }
    else {
      effectiveness = 1;
    }
    return effectiveness;
  }
  
}