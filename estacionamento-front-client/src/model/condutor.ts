import { AbstractEntity } from "./abstract-entity";

export class Condutor extends AbstractEntity{
    nome!: String
    cpf!: String 
    telefone!: String
    tempoPago?: Date
    tempoDesconto?: Date

    constructor(nome: String, cpf: String, telefone: String) {
        super()
        this.ativo = true
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
    }

}