import { Axios } from "axios";
import axios, { AxiosInstance } from "axios"


import { Condutor } from "@/model/condutor";


 class CondutorClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

	public async findByAtivo(ativo: boolean) : Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/ativo/${ativo}`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

    public async listaAll(): Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
    }

	public async cadastrar(condutor: Condutor): Promise<string> {
		try {
            return (await this.axiosClient.post<string>(``, condutor)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
	}

	public async editar(id: number,condutor: Condutor): Promise<string> {
		try {
			return (await this.axiosClient.put<string>(`/${condutor.id}`, condutor)).data
		} catch (error:any) {
			return Promise.reject(error.response.data)
		}
	}

	public async desativar(id: number,condutor: Condutor): Promise<string> {
		try {
            return (await this.axiosClient.put<string>(`/${id}`, condutor)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
	}

	public async deletaCondutor(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response.data)
        }
      }
}
export default new CondutorClient();

