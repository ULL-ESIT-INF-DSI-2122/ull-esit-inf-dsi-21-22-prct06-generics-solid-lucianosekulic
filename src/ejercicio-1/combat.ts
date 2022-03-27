import {Fighter} from './fighter'

/**
 * Clase combat donde inicializamos la lucha entre ambos luchadores y calculamos el daño que se harán 
 */
export class Combat {

  /**
   * Constructor de la clase combat
   * @param fighter1 
   * @param fighter2 
   */
  constructor(public fighter1: Fighter, fighter2: Fighter) {}

  /**
   * funcion donde calculamos el daño en la pelea y lo devolvemos
   * @param fighter1 
   * @param fighter2 
   * @returns resultAttack
   */
  public combatFighter(fighter1: Fighter, fighter2: Fighter) {

    let effectiveness: number = 0;
    let resultAttack: number = 0;
     
    if(fighter1.getUniverse() == fighter2.getUniverse()) {
      effectiveness = 1;
    }
    else {
      effectiveness = fighter1.damageFighter(fighter2);
    }
    resultAttack = 50 * (fighter1.getAttack() / fighter2.getDefense() * effectiveness);
    return resultAttack;
  }

  /**
   * Funcion donde empezamos el combate entre 2 luchadores y atacará primero el personaje con mayor atributo de velocidad. Se devuelve el ganador de la contienda
   * @param fighter1 
   * @param fighter2 
   * @returns winner
   */
  public start(fighter1: Fighter, fighter2: Fighter) {
    console.log(`An epic battle is comming... YEHA!!`);
    console.log(`${fighter1} vs ${fighter1}`);
    console.log(`${fighter1.type}`); //type es el string caracteristicos de cada personsaje 
    console.log(`${fighter2.type}`);
    console.log(`GOOOOO!!!`);
    let lifeFighter1 = fighter1.getHP(); 
    let lifeFighter2 = fighter2.getHP(); 
    let result: number = 0;
    let winner: string = '';

    while ((lifeFighter1 > 0) && (lifeFighter2 > 0)){
      if(fighter1.getSpeed() > fighter2.getSpeed()) { //el que tiene mas speed ataca primero
        fighter1.setSpeed(1); //ponemos los speed igualados 
        fighter2.setSpeed(1);
        console.log(`${fighter1} attack ${fighter2}`);
        result = this.combatFighter(fighter1, fighter2);
        lifeFighter2 -= result;
        console.log(`${fighter1} hp: ${lifeFighter1}\n`);
        console.log(`${fighter2} hp: ${lifeFighter2}\n`);
      }
      else if(fighter1.getSpeed() < fighter2.getSpeed()) {
        fighter1.setSpeed(1); //ponemos los speed igualados 
        fighter2.setSpeed(1);
        console.log(`${fighter2} attack ${fighter1}`);
        result = this.combatFighter(fighter1, fighter2);
        lifeFighter1 -= result;
        console.log(`${fighter1} hp: ${lifeFighter1}\n`);
        console.log(`${fighter2} hp: ${lifeFighter2}\n`);
      }

      //empieza la batalla despues del bonus del speed
        console.log(`${fighter1} attack ${fighter2}`);
        result = this.combatFighter(fighter1, fighter2);
        lifeFighter2 -= result;
        console.log(`${fighter1} hp: ${lifeFighter1}\n`);
        console.log(`${fighter2} hp: ${lifeFighter2}\n`);

        console.log(`${fighter2} attack ${fighter1}`);
        result = this.combatFighter(fighter1, fighter2);
        lifeFighter1 -= result;
        console.log(`${fighter1} hp: ${lifeFighter1}\n`);
        console.log(`${fighter2} hp: ${lifeFighter2}\n`);
        

        if(lifeFighter1 <= 0) {
          console.log(`${fighter1} is the winner!`);
          winner = fighter1.name;
        }
        else {
          console.log(`${fighter2} is the winner!`);
          winner = fighter2.name; 
        }
    }
    return winner;
  }
}