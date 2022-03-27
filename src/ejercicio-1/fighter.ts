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