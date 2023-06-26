import axios, { AxiosInstance } from 'axios';

import { Veiculo } from '@/model/veiculo';

 class VeiculoClient {

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

	public async findByAtivo(ativo: boolean) : Promise<Veiculo> {
        try {
            return (await this.axiosClient.get<Veiculo>(`/ativo/${ativo}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    
    public async listaAll(): Promise<Veiculo[]> {
        try {
            return (await this.axiosClient.get<Veiculo[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }


	public async cadastrar(veiculo: Veiculo): Promise<string> {
		try {
            return (await this.axiosClient.post<string>(``, veiculo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
	}

	public async editar(id: number, veiculo: Veiculo): Promise<string> {
		try {
			return (await this.axiosClient.put<string>(`/${veiculo.id}`, veiculo)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(id: number,veiculo: Veiculo): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, veiculo)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
	}

	public async deletaVeiculo(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
      }
}
export default new VeiculoClient();