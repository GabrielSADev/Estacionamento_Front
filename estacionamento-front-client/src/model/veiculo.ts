import { AbstractEntity } from "./abstract-entity";
import { Modelo } from "./modelo";
import { Cor } from "./cor";
import { Tipo } from "./tipo";


export class Veiculo extends AbstractEntity{

    placa!: String
    ano!: Int8Array

    modelo!: Modelo

    cor!: Cor

    tipo?: Tipo

}