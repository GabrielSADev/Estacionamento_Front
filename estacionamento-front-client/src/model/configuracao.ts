import { AbstractEntity } from "./abstract-entity"

export class Configuracao extends AbstractEntity {
    valorHora!: Float32Array;
    valorMinutoMulta?: Float32Array;
    inicioExpediente?: Date;
    fimExpediente?: Date;
    tempoParaDesconto?: Date;
    tempoDeDesconto?: Date;
    gerarDesconto?: boolean;
    vagasMoto?: Int16Array;
    vagasCarro?: Int16Array;
    vagasVan?: Int16Array;
    
}