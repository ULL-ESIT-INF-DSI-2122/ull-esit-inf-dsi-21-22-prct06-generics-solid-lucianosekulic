import 'mocha';
import {expect} from 'chai';
import {StreamableCollection} from '../src/ejercicio-2/BasicStreameableCollection';
import {Pelicula} from '../src/ejercicio-2/Pelicula';
import {Serie} from '../src/ejercicio-2/Serie';
import {Documental} from '../src/ejercicio-2/Documental';

describe('Ejercicio 3 - DSIflix', () => {
  const peli1 = new Pelicula("StarWars: El retorno del Jedi", "1983", "George Lucas", "Ciencia ficcion", "Mark Hamill");
  const Cineteca = new StreamableCollection([peli1]);

  describe('BasicStreamableCollection', () => {
    it('Cineteca.busquedaNombre("StarWars: El retorno del Jedi") devuelve StarWars: El retorno del Jedi', () => {
      expect(Cineteca.busquedaNombre("StarWars: El retorno del Jedi")).to.be.deep.equal(peli1);
    });

    it('Cineteca.busquedaDirector("George Lucas") devuelve StarWars: El retorno del Jedi', () => {
      expect(Cineteca.busquedaDirector("George Lucas")).to.be.deep.equal(peli1);
    });

    it('Cineteca.busquedaFecha("1983") devuelve StarWars: El retorno del Jedi', () => {
      expect(Cineteca.busquedaFecha("1983")).to.be.deep.equal(peli1);
    });
  });

    describe('Peliculas', () => {
      it('peli1.getDate() devuelve 1983', () => {
        expect(peli1.getDate()).to.be.deep.equal("1983");
      });
  
      it('peli1.getDirector() devuelve George Lucas', () => {
        expect(peli1.getDirector()).to.be.deep.equal("George Lucas");
      });

      it('peli1.getGenero() devuelve Ciencia ficcion', () => {
        expect(peli1.getGenero()).to.be.deep.equal("Ciencia ficcion");
      });

      it('peli1.getName() devuelve StarWars: El retorno del Jedi', () => {
        expect(peli1.getName()).to.be.deep.equal("StarWars: El retorno del Jedi");
      });

      it('peli1.getProtagonista() devuelve Mark Hamill', () => {
        expect(peli1.getProtagonista()).to.be.deep.equal("Mark Hamill");
      });
    });

});