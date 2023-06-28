<template>
  

    <div class="container" style="margin-top: 10px;">
  
      <div class="row">
        <div class="col-md-10 text-start"> <p class="fs-3" id="MoviTit"> Movimentações: </p> </div>
        <div class="col-md-2"> 
          <div class="d-grid gap-2">
            <router-link type="button" class="btn btn-success" 
              to="/movimentacao/form">Cadastrar
            </router-link>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-md-12">  
          <table class="table">
            <thead class="table-secondary" >
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Ativo</th>
                <th scope="col" class="text-start">Nome</th>
                <th scope="col" class="text-start">Placa</th>
                <th scope="col" class="text-start">Modelo</th>
                <th scope="col" class="text-start">Marca</th>
                <th scope="col" class="text-start">Entrada</th>
                <th scope="col">Opção</th>
              </tr>
            </thead>  
            <tbody class="table-group-divider">
              
              <tr v-for="item in movimentacaoList" :key="item.id">
                <th class="col-md-1">{{ item.id }}</th>
                <th class="col-md-2"> 
                  <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
                  <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
                </th>
                <th class="text-start">{{ item.condutor.nome}}</th>
                <th class="text-start">{{ item.veiculo.placa}}</th>
                <th class="text-start">{{ item.veiculo.modelo.nome}}</th>
                <th class="text-start">{{ item.veiculo.modelo.marca.nome}}</th>
                <th class="text-start">{{ item.entrada}}</th>
                <th class="col-md-2">
                  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <router-link type="button" class="btn btn-sm btn-warning" 
                        :to="{ name: 'movimentacao-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                      Finalizar 
                    </router-link>
                  <!--  <router-link type="button" class="btn btn-sm btn-danger" 
                        :to="{ name: 'movimentacao-formulario-excluir-view', query: { id: item.id, form: 'deletaMovimentacao' } } ">
                      Editar
                    </router-link> -->
                  </div>
                </th>
              </tr>
  
            </tbody>
          </table>
        </div>
      </div>
    </div>
</template>


<script lang="ts">
  import { defineComponent } from 'vue';
import MovimentacaoClient from '@/client/movimentacaoclient';
import { Movimentacao } from '@/model/movimentacao';

export default defineComponent({
  name: 'MovimentacaoListaView',
  data() {
    return {
      movimentacaoList: new Array<Movimentacao>()

    }
  },
  mounted(){
    this.findAllLista();
  },

  methods:{
    findAllLista() {
        MovimentacaoClient.listaAll()
          .then(sucess => {
            this.movimentacaoList = sucess
          })
          .catch(error => {
            console.log(error);
          })},

    findAll() {
        MovimentacaoClient.listaAll()
          .then(sucess => {
            this.movimentacaoList = sucess
          })
          .catch(error => {
            console.log(error);
          });
      }
    }

});
</script>

<style lang="scss">
   #MoviTit{
    color: #5e17eb;
    font-weight: 700;
   }
</style>