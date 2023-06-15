import { AbstractEntity } from "./abstract-entity";
import { Marca } from "./marca";

export class Modelo extends AbstractEntity{
    nome?: String

    marca: Marca

    constructor(marca: Marca, nome: string) {
      super()
        this.marca = marca;
        this.nome = nome;
        this.ativo = true
      }
}