# Practica 6: Clases e interfaces genericas. Principios SOLID.

## Ejercicio 1: El combate definitivo.

***Código clase Combat.ts***
```
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
```

En esta clase llamada Combat, tenemos dos funciones:

* combatFighter: Se le pasan dos luchadores de tipo **Fighter** y se calcula, dependiendo de la efectividad que tenga el luchador, cuanto daño hace.
* start: Se le pasan dos luchadores de tipo **Fighter** y esta función se encarga de iniciar la batalla entre dos luchadores de distintos universos, retornando el nombre del ganador de la contienda. 
Además el combate empieza por el luchador que más velocidad tiene en sus estadisticas, para así dar un bonus al comienzo del combate sobre quien asesta el primer golpe.


***Código Fighter.ts***
```
/**
 * clase abstracta donde creamos al luchador, dandole las caracteristicas necesarias para poder entablar una lucha
 */
 export abstract class Fighter {

    /**
     * atributos basicos del luchador
     */
    private basicData = {
      attack: 0,
      defense: 0,
      speed: 0,
      hp: 0,
    }

    /**
     * construcor de la clase fighter
     * @param name 
     * @param weigth 
     * @param size 
     * @param type 
     * @param universe 
     * @param basicData 
     */
    constructor(public name: string, public weigth: number, public size: number, public type: string, public universe: any, basicData: number[]) {
      this.basicData.attack = basicData[0];
      this.basicData.defense = basicData[1];
      this.basicData.speed = basicData[2];
      this.basicData.hp = basicData[3];
    }
  
    /**
     * Getters de las caracteristicas del luchador
     */
  
    public getName() {
      return this.name;
    }
  
    public getWeigth() {
      return this.weigth;
    }
  
    public getSize() {
      return this.size;
    }
  
    public getType() {
      return this.type;
    }
  
    public getBasicData() {
      return this.basicData;
    }

    public getAttack() {
      return this.basicData.attack;
    }

    public getDefense() {
      return this.basicData.defense;
    }

    public getHP() {
      return this.basicData.hp;
    }

    public getSpeed() {
      return this.basicData.speed;
    }

    public getUniverse(){
      return this.universe;
    }

    /**
     * Setters de las caracteristicas del luchador
     */
   
    public setName(name: string) {
      this.name = name; 
    }
  
    public setWeigth(weigth: number) {
      this.weigth = weigth;
    }
  
    public setSize(size: number) {
      this.size = size;
    }
  
    public setType(type: string) {
      this.type = type;
    }
  
    public setHp(life: number) {
      this.basicData.hp = life;
    }

    public setSpeed(speed: number) {
      this.basicData.speed = speed;
    }

    /**
     * funcion abstracta la cual deberá de ser implementada en las clases hijas
     * @param fighter 
     */
    abstract damageFighter(fighter: Fighter) : any;
  
  }
  ```
  
  En esta clase abstracta, se crea al luchador con sus distintas caracteristicas, haciendolo desde la clase padre de las clases marvel, pokemon y starwars. 
  Todas las clases hijas deberan de tener obligatoriamente una funcion damageFIghter en la cual se pondrán las pautas de que tipo de personajes son más fuertes que otros una vez se inicie el combate.
  
  ***Código marvel.ts***
  ```
  import { Fighter } from './fighter';

/**
 * clase hija de Fighter, donde crearemos a los personajes del universo marvel y le daremos las directrices de efectividad contra personajes de otros universos
 */
export class Marvel extends Fighter {

  /**
   * constructor de la clase marvel
   * @param name 
   * @param weigth 
   * @param size 
   * @param type 
   * @param universe 
   * @param basicData 
   */
  constructor(public name: string, public weigth: number, public size: number, public type: string, public universe: any, basicData: number[]){
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
   *  funcion donde le daremos las directrices de efectividad entre universos
   * @param fighter 
   * @returns effectiveness
   */
  damageFighter(fighter: Fighter){
    let effectiveness: number = 0;
    if (fighter.getUniverse() == 'starwars') {
      effectiveness = 2;
    }
    else if(fighter.getUniverse() == 'pokemon') {
      effectiveness = 0.5;
    }
    else {
      effectiveness = 1;
    }
    return effectiveness;
  }

 
}
```

***Código pokemon.ts***
```
import {Fighter} from './fighter';

/**
 * clase hija de Fighter, donde crearemos a los personajes del universo pokemon y le daremos las directrices de efectividad contra personajes de otros universos
 */
export class Pokemon extends Fighter {

  /**
   * constructor de la clase pokemon
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
   *  funcion donde le daremos las directrices de efectividad entre universos
   * @param fighter 
   * @returns effectiveness
   */
  damageFighter(fighter: Fighter){
    let effectiveness: number = 0;
    if (fighter.getUniverse() == 'marvel') {
      effectiveness = 2;
    }
    else if(fighter.getUniverse() == 'starwars') {
      effectiveness = 0.5;
    }
    else {
      effectiveness = 1;
    }
    return effectiveness;
  }
  
}
```

***Código starwars.ts***
```
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
```
Las tres clases anteriores, son clases hijas de **fighter.ts** y en ellas se disponen las direcctrices en la función ***damageFighter***
sobre la efectividad de un personaje de un universo sobre los personajes de los demás universos para ver que personaje es más efectivo sobre el otro en el campo de batalla.
En este "mundo" creado, el universo con más efectividad es el de pokemon y el de menos efectividad es el de marvel. Además el de starwars tiene una efectividad de 1, que estaría en medio de los dos anteriores.


***Código pokedex.ts***
```
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
```

Esta clase se utiliza para guardar en un arraypara luego poder verse mediante una tabla a los luchadores de los distintos universos creados para el combate entre ellos.
La tabla imprimirá por consola el nombre, el peso, el tamaño, el tipo y el universo de cada personaje que esté en este "mundo".


# Ejercicio 2: DSIflix

***Código streamable.ts***
```
/**
 * Interfaz Streamable video que contiene:
 * nombre
 * fecha de lanzamiento
 * director
 */
 interface StreamableVideo {
    name_: string;
    date_: string;
    director_: string;
  
    getName(): string;
    getDate(): string;
    getDirector(): string;
  }
  
  /**
   * Clase para crear un objeto Streamable que implementa StreamableVideo
   */
  export abstract class Streamable implements StreamableVideo {
    name_: string;
    date_: string;
    director_: string;
  
    /**
     * Constructor para la clase Streamable
     * @param name Nombre
     * @param date Fecha de lanzamiento
     * @param director Director
     */
    constructor(name: string, date: string, director: string) {
      this.name_ = name;
      this.date_ = date;
      this.director_ = director;
    }
  
    /**
     * getName
     * @returns el nombre del objeto
     */
    public getName(): string {
      return this.name_;
    }
  
    /**
     * getDate
     * @returns la fecha del objeto
     */
    public getDate(): string {
      return this.date_;
    }
  
    /**
     * getDirector
     * @returns el nombre del director
     */
    public getDirector(): string {
      return this.director_;
    }
  }
 ```
 
 Se crea en primer lugar una interfaz llamada **streamableVideo** donde se define el nombre la fecha y el director. Luego, se crea la clase **streamable** la cual solo tendrá
 el constructor con los parametros anteriormente dichos y sus respectivos getters.
 
 ***Código pelicula.ts***
 ```
 import {Streamable} from './Streamable';

/**
 * Implementa una clase que crea objetos Peliculas extendida de Streamable
 */
export class Pelicula extends Streamable {
  genero: string;
  protagonista: string;

  /**
   * Constructor para el objeto Pelicula
   * @param name Nombre de la película
   * @param date Fecha de lanzamiento de la película
   * @param director Director de la película
   * @param genero Genero de la película
   * @param protagonista Protagonista de la película
   */
  constructor(name: string, date: string, director: string, genero: string, protagonista: string) {
    super(name, date, director);

    this.genero = genero;
    this.protagonista = protagonista;
  }

  /**
   * getName
   * @returns Nombre de la película
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * getDate
   * @returns Fecha de lanzamiento de la película
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * getDirector
   * @returns Director de la película
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * getGenero
   * @returns de la película
   */
  public getGenero(): string {
    return this.genero;
  }

  /**
   * getProtagonista
   * @returns Nombre del protagonista de la película
   */
  public getProtagonista(): string {
    return this.protagonista;
  }
}
```

***Código serie.ts**
```
import {Streamable} from './Streamable';

/**
 * Implementa una clase que crea objetos Serie extendida de Streamable
 */
export class Serie extends Streamable {
  genero: string;
  n_temporadas: number;

  /**
   * Constructor para el objeto Serie
   * @param name Nombre de la Serie
   * @param date Fecha de lanzamiento de la Serie
   * @param director Director de la Serie
   * @param genero Genero de la Serie
   * @param n_temporadas Numero de temporadas que tiene la Serie
   */
  constructor(name: string, date: string, director: string, genero: string, n_temporadas: number) {
    super(name, date, director);

    this.genero = genero;
    this.n_temporadas = n_temporadas;
  }

  /**
   * getName
   * @returns Nombre de la Serie
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * getDate
   * @returns Fecha de lanzamiento de la Serie
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * getDirector
   * @returns Director de la Serie
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * getGenero
   * @returns genero de la Serie
   */
  public getGenero(): string {
    return this.genero;
  }

  /**
   * getNTemporadas
   * @returns Numero de temporadas de la Serie
   */
  public getNTemporadas(): number {
    return this.n_temporadas;
  }
}
```

***Código documental.ts***
```
import {Streamable} from './Streamable';

/**
 * Implementa una clase que crea objetos Documental extendida de Streamable
 */
export class Documental extends Streamable {
  genero: string;

  /**
   * Constructor para el objeto Documental
   * @param name Nombre del Documental
   * @param date Fecha de lanzamiento del Documental
   * @param director Director del Documental
   * @param genero Genero del Documental
   */
  constructor(name: string, date: string, director: string, genero: string) {
    super(name, date, director);

    this.genero = genero;
  }

  /**
   * getName
   * @returns Nombre del Documental
   */
  public getName(): string {
    return this.name_;
  }

  /**
   * getDate
   * @returns Fecha de lanzamiento del Documental
   */
  public getDate(): string {
    return this.date_;
  }

  /**
   * getDirector
   * @returns Director del Documental
   */
  public getDirector(): string {
    return this.director_;
  }

  /**
   * getGenero
   * @returns genero del Documental
   */
  public getGenero(): string {
    return this.genero;
  }
}
```


Mediante la clase streamable, se han creado las clases pelicula, serie y documental, donde tiene un parecido con la clase streamable pero anadiendo los atributos de
el genero de la pelicula y el protagonista. En el constructor se pone el nombre, autor, director, genero y protagonista, luego dentro del mismo se utiliza **super**
para indicar que esos parametros se heredan de la clase abstracta.


***Código BasicStreamableCollection***
```
import {Streamable} from './Streamable';

/**
 * Interfaz que contiene un array para la collecion y los metodos de busquedas
 */
interface IsStreamableCollection {
  coleccion_: Streamable[];
  busquedaNombre(nombre: string): undefined | Streamable;
  busquedaFecha(fecha: string): undefined | Streamable;
  busquedaDirector(director: string): undefined | Streamable;

}

/**
 * Clase que crea el objeto StreamableCollection
 */
export class StreamableCollection implements IsStreamableCollection {
  coleccion_: Streamable[];

  /**
   * Constructor de la clase StreamableCollection
   * @param collection Array donde se guardan los objetos creados
   */
  constructor(collection: Streamable[]) {
    this.coleccion_ = collection;
  }

  /**
   * Realiza la busqueda por nombre
   * @param nombre Nombre del objeto
   * @returns Devuelve el objeto que coincide con el nombre 
   */
  public busquedaNombre(nombre: string): Streamable | undefined {
    return this.coleccion_.find((evidence) => evidence.getName() === nombre);
  }

  /**
   * Realiza la busqueda por fecha
   * @param fecha 
   * @returns Devuelve el objeto que concuerda con la fecha proporcionada
   */
  public busquedaFecha(fecha: string): undefined | Streamable {
    return this.coleccion_.find((evidence) => evidence.getDate() === fecha);
  }

  /**
   * Realiza la busqueda por nombre de director
   * @param director 
   * @returns Devuelve el objeto que concuerda con el nombre del director
   */
  public busquedaDirector(director: string): undefined | Streamable {
    return this.coleccion_.find((evidence) => evidence.getDirector() === director);
  }
}
```

Se crea una interfaz la cual crea una array de la classe streamable y se definen los metodos de busqueda mediante fecha nombre o director. Luego se crea una clase
para implementar la interfaz y almacenar sus busquedas.

 
 
 
 

  
