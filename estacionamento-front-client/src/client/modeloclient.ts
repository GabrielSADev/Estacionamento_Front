import axios, { AxiosInstance } from 'axios';

import { Modelo } from '@/model/modelo';

 class ModeloClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async findByAtivo(ativo: boolean) : Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/ativo/${ativo}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(modelo: Modelo): Promise<string> {
		try {
            return (await this.axiosClient.post<string>(``, modelo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
	}

	public async editar(id: number,modelo: Modelo): Promise<string> {
		try {
			return (await this.axiosClient.put<string>(`/${modelo.id}`, modelo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(id: number,modelo: Modelo): Promise<string> {
		try {
			return (await this.axiosClient.put(`/${id}`, modelo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async deletaModelo(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
      }
}

export default new ModeloClient();