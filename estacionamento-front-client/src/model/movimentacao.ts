import { AbstractEntity } from "./abstract-entity";
import { Condutor } from "./condutor";
import { Veiculo } from "./veiculo";


export class Movimentacao extends AbstractEntity {

    veiculo! : Veiculo

    condutor! : Condutor

    entrada!: Date

    saida?: Date

    tempo?: Date

    tempoDesconto?: Date
    
    tempoMulta?: Date

    valorDesconto?: Float32Array
    valorMulta?: Float32Array
    valorTotal?: Float32Array
    valorHora?: Float32Array
    valorHoraMulta?: Float32Array

    constructor(entrada: Date,saida: Date,tempo: Date,tempoDesconto: Date, tempoMulta: Date,
        valorDesconto: Float32Array,valorMulta: Float32Array,valorTotal: Float32Array, valorHora: Float32Array, valorHoraMulta: Float32Array){
        super()
        this.ativo = true
        this.entrada = entrada
        this.saida = saida
        this.tempo = tempo
        this.tempoDesconto = tempoDesconto
        this.tempoMulta = tempoMulta
        this.valorDesconto = valorDesconto
        this.valorMulta = valorMulta
        this.valorTotal = valorTotal
        this.valorHora = valorHora
        this.valorHoraMulta = valorHoraMulta
    }
}