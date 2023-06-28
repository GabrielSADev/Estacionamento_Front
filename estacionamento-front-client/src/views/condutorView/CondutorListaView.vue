<template>
    <div class="container" style="margin-top: 10px;">

<div class="row">
  <div class="col-md-10 text-start"> <p class="fs-3"  id="MoviTit"> Lista de Condutores: </p> </div>
  <div class="col-md-2"> 
    <div class="d-grid gap-2">
      <router-link type="button" class="btn btn-success" 
        to="/condutor/formulario">Cadastrar
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
          <th scope="col" class="text-start">CPF</th>
          <th scope="col" class="text-start">Telefone</th>
          <th scope="col">Opção</th>
        </tr>
      </thead>  
      <tbody class="table-group-divider">
        
        <tr v-for="item in condutorList" :key="item.id">
          <th class="col-md-1">{{ item.id }}</th>
          <th class="col-md-2"> 
            <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
            <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
          </th>
          <th class="text-start">{{ item.nome }}</th>
    
            <th class="text-start">{{ item.cpf }}</th>
          
            <th class="text-start">{{ item.telefone }}</th>
            <th class="col-md-2">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <router-link type="button" class="btn btn-sm btn-warning" 
                  :to="{ name: 'condutor-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                Editar 
              </router-link>
              <router-link type="button" class="btn btn-sm btn-danger" 
                  :to="{ name: 'condutor-formulario-excluir-view', query: { id: item.id, form: 'deletaCondutor' } } ">
                Excluir
              </router-link>
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
import { Condutor } from '@/model/condutor';
import CondutorClient from '@/client/condutorclient'

export default defineComponent({
  name: 'CondutorLista',
  data() {
    return {
        condutorList: new Array<Condutor>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      CondutorClient.listaAll().then(sucess => {
        this.condutorList = sucess
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
    background-color: #ff914d;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
   }
</style>