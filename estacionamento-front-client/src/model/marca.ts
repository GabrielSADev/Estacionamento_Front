import { AbstractEntity } from "./abstract-entity";

export class Marca extends AbstractEntity {

    nome!: String

    constructor(nome: String){
        super()
        this.nome = nome
    }
}