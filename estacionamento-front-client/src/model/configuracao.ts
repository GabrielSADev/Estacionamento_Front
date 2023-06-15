import { AbstractEntity } from "./abstract-entity"

export class Configuracao extends AbstractEntity {
    valorHora?: Float32Array;
    valorMinutoMulta?: Float32Array;
    inicioExpediente?: Date;
    fimExpediente?: Date;
    tempoParaDesconto?: Date;
    tempoDeDesconto?: Date;
    gerarDesconto?: boolean;
    vagasMoto?: Int16Array;
    vagasCarro?: Int16Array;
    vagasVan?: Int16Array;

    constructor(valorHora: Float32Array,valorMinutoMulta: Float32Array,inicioExpediente: Date,fimExpediente: Date,tempoParaDesconto: Date,
        tempoDeDesconto: Date, vagasMoto: Int16Array, vagasCarro: Int16Array, vagasVan: Int16Array){
        super()
        this.ativo = true
        this.valorHora = valorHora
        this.valorMinutoMulta =  valorMinutoMulta 
        this.inicioExpediente = inicioExpediente
        this.fimExpediente = fimExpediente
        this.tempoDeDesconto = tempoDeDesconto
        this.tempoParaDesconto = tempoParaDesconto
       // this.gerarDesconto = this.gerarDesconto
       this.vagasMoto =  vagasMoto
       this.vagasCarro = vagasCarro
       this.vagasVan =  vagasVan
    }
    
}