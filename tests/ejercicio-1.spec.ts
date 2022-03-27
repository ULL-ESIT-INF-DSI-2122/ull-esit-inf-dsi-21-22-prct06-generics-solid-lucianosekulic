import "mocha";
import { expect } from "chai";
import { Fighter } from "../src/ejercicio-1/fighter";
import { Combat } from "../src/ejercicio-1/combat";
import { Marvel } from "../src/ejercicio-1/marvel";
import { Pokemon } from "../src/ejercicio-1/pokemon";
import { Starwars } from "../src/ejercicio-1/starwars";

describe("Definitive combat tests", () => {
  /*
    Ejemplo:
    let test = new Marvel(name, weigth, size, type, universe, [attack, deffense, speed, hp]);
  */
  let testMarvel = new Marvel("thor", 120, 180, "I'm Odin's son!", "marvel", [10, 10, 12, 100]);
  let testPokemon = new Pokemon("treeko", 120, 180, "Treeeeekooooo treeee!", "pokemon", [6, 8, 10, 100]);
  let testStarwars = new Starwars("luke", 120, 180, "The force is poweful in me", "starwars", [12, 10, 14, 100]);
  
  it("thor vs treeko", () => {
    let startCombat =  new Combat(testMarvel, testPokemon);
    expect(startCombat.start(testMarvel, testPokemon)).to.be.deep.equal('treeko');
  });

  it("thor vs luke", () => {
    let startCombat =  new Combat(testMarvel, testStarwars);
    expect(startCombat.start(testMarvel, testStarwars)).to.be.deep.equal('thor');
  });

  it("luke vs treeko", () => {
    let startCombat =  new Combat(testStarwars, testPokemon);
    expect(startCombat.start(testStarwars, testPokemon)).to.be.deep.equal('luke');
  });
});