import axios, { AxiosInstance } from 'axios';

import { Marca } from '@/model/marca';

    class MarcaClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/marca',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async findByAtivo(ativo: boolean) : Promise<Marca> {
        try {
            return (await this.axiosClient.get<Marca>(`/ativo/${ativo}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

    public async listaAll(): Promise<Marca[]> {
        try {
            return (await this.axiosClient.get<Marca[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(marca: Marca): Promise<string> {
		try {
            return (await this.axiosClient.post<string>(``, marca)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
	}

	public async editar(id: number, marca: Marca): Promise<string> {
		try {
			return (await this.axiosClient.put<string>(`/${marca.id}`, marca)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(id: number, marca: Marca): Promise<string> {
		try {
            return (await this.axiosClient.put<string>(`/${id}`, marca)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
	}

	public async deletaMarca(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
      }
}
export default new MarcaClient();