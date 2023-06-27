<template>
    <div class="container" style="margin-top: 10px;">

<div class="row">
  <div class="col-md-10 text-start"> <p class="fs-3"> Configurações </p> </div>
  <div class="col-md-2"> 
    <div class="d-grid gap-2">
      <router-link type="button" class="btn btn-success" 
        to="/configuracao/formulario">Cadastrar
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
          <th scope="col">Atributo</th>
          <th scope="col" class="text-start">Valor</th>
          <th scope="col">Opção</th>
        </tr>
      </thead>  
      <tbody class="table-group-divider">
        
        <tr v-for="item in configList" :key="item.id">
          <th class="col-md-1">{{ item.id }}</th>
          <th class="col-md-2"> 
            <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
            <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
          </th>
          <th class="text-start">{{ item.vagasCarro }}</th>
          <th class="col-md-2">
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
              <router-link type="button" class="btn btn-sm btn-warning" 
                  :to="{ name: 'configuracao-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                Editar 
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
import { Configuracao } from '@/model/configuracao';
import ConfiguracaoClient from '@/client/configuracaoclient';

export default defineComponent({
  name: 'ConfigLista',
  data() {
    return {
        configList: new Array<Configuracao>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      ConfiguracaoClient.listaAll().then(sucess => {
        this.configList = sucess
      })
      .catch(error => {
          console.log(error);
        });
    }
  }
});
</script>

<style lang="scss">
 
</style>