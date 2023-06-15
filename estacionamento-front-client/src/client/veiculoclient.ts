import axios, { AxiosInstance } from 'axios';

import { Veiculo } from '@/model/veiculo';

export class VeiculoClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/veiculo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.post('/', veiculo))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${veiculo.id}`, veiculo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativa(veiculo: Veiculo): Promise<void> {
		try {
			return (await this.axiosClient.put(`/desativar/${veiculo.id}`, veiculo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}
}