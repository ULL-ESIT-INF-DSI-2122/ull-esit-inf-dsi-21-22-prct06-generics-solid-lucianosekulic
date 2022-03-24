
/**
 * 
 */
export interface Arithmeticable<T> {
  add(numero: T): T;
  substract(numero: T): T;
  multiply(numero: T): T;
  divide(numero: T): T;
}


export abstract class ArithmeticableCollection<T> implements Arithmeticable<T>{
  constructor(private items: T[]){}

  abstract add(numero: T): T;
  abstract substract(numero: T): T;
  abstract multiply(numero: T): T;
  abstract divide(numero: T): T;

  addArithmeticable(nuevo: T){
    this.items.push(nuevo);
  }

  getArithmeticable() {
    return this.items.pop();
  }

  getNumberOfArithmeticable() {
    return this.items.length;
  }
}

export class Rational implements Arithmeticable<number> {
  constructor(numero: number, numero2: number) {}
  
  add(numero: number){
    let suma = 0
    suma =+ numero
    return suma
  }

  substract(numero: number): number {
    let resta = 0
    resta =- numero
    return resta
  }

  multiply(numero: number): number {
    let multi
    multi = numero * 2
    return multi
  }

  divide(numero: number): number {
    let div
    div = numero / 2
    // no es asi es con minimo comun multiplo 
    return div
  }

}