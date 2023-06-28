<template>
    <div class="container" style="margin-top: 10px;">

<div class="row">
  <div class="col-md-10 text-start"> <p class="fs-3" id="MoviTit"> Configurações </p> </div>
  <div class="col-md-2"> 
    <div class="d-grid gap-2">
      <router-link type="button" class="btn btn-success" 
        to="/configuracao/formulario" v-if="!configList.length">Cadastrar
      </router-link>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-12">  
    <table class="table table-dark table-striped">
      <thead class="table-secondary" >
        <tr>
          <th scope="col-md-1">Valor Hora</th>
          <th scope="col-md-1">Valor Min. Multa</th>
          <th scope="col-md-1">Inicio Expediente</th>
          <th scope="col-md-1">Fim Expediente</th>
          <th scope="col-md-1">Tempo para Desc.</th>
          <th scope="col-md-1">Tempo de Desc.</th>
          <th scope="col-md-1">Gerar Desconto</th>
          <th scope="col-md-1">Vagas Carro</th>
          <th scope="col-md-1">Vagas Moto</th>
          <th scope="col-md-1">Vagas Van</th>
          <th scope="col-md-1">Opção</th>


        </tr>
      </thead>  
      <tbody class="table-group-divider">
        
        <tr v-for="item in configList" :key="item.id">
          <th class="col-md-1">{{ item.valorHora }}</th>
          <th class="col-md-1">{{ item.valorMinutoMulta }}</th>
          <th class="col-md-1">{{ item.inicioExpediente }}</th>
          <th class="col-md-1">{{ item.fimExpediente }}</th>  
          <th class="col-md-1">{{ item.tempoParaDesconto }}</th>
          <th class="col-md-1">{{ item.tempoDeDesconto }}</th>
          <th class="col-md-1">{{ item.gerarDesconto }}</th>
          <th class="col-md-1">{{ item.vagasCarro }}</th>
          <th class="col-md-1">{{ item.vagasMoto }}</th>
          <th class="col-md-1">{{ item.vagasVan }}</th>

          <th class="col-md-1">
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
   #MoviTit{
    color: #5e17eb;
    font-weight: 700;
    background-color: #ff914d;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
   }
</style>