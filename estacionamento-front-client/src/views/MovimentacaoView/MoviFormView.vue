<template>
 
 <div class="container" style="background: ;">

<div class="row">
  <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar de Movimentacao</p> </div>
  <div class="col-md-2"> </div>
</div>

<hr/>

<div v-if="mensagem.ativo" class="row">
  <div class="col-md-12 text-start">
    <div :class="mensagem.css" role="alert">
      <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</div>

  <div class="row">
    <div class="col-md-12 text-start">
        <label for="recipient-name" class=" row m-auto col-form-label">Condutor :</label>
        <select type="text" v-model="movimentacao.condutor"><option v-for="item in condutor" :value="item">{{ item.nome }} </option></select>
    </div>
    <div class="col-md-12 text-start">
        <label for="recipient-name" class=" row m-auto col-form-label">Placa :</label>
        <select type="text" v-model="movimentacao.veiculo"><option v-for="item in veiculo" :value="item">{{ item.placa }} </option></select>
    </div> 
    <div class="col-md-12 text-start">
        <label for="recipient-name" class=" row m-auto col-form-label">Modelo :</label>
        <select type="text" v-model="movimentacao.veiculo"><option v-for="item in veiculo" :value="item">{{ item.modelo.nome }} </option></select>
    </div>
    <div class="col-md-12 text-start">
        <label for="recipient-name" class=" row m-auto col-form-label">Marca :</label>
        <select type="text" v-model="movimentacao.veiculo"><option v-for="item in veiculo" :value="item">{{ item.modelo.marca.nome }} </option></select>
    </div> 
  </div>


<div class="row">
  <div class="col-md-3 offset-md-6"> 
    <div class="d-grid gap-2">
      <router-link type="button" class="btn btn-info" 
        to="/">Voltar
      </router-link>
    </div>    
  </div>
  <div class="col-md-3 "> 
    <div class="d-grid gap-2">
      <button v-if="form === undefined" type="button" 
          class="btn btn-success" @click="onClickCadastrar()">
        Cadastrar 
      </button>
      <button v-if="form === 'editar'" type="button" 
          class="btn btn-warning" @click="onClickEditar()">
        Editar 
      </button>
      <button v-if="form === 'delete'" type="button"
        class="btn btn-danger" @click="onClickExcluir()">
        Excluir 
      </button>
    </div>
  </div>
</div>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import MovimentacaoClient from '@/client/movimentacaoclient';
import { Movimentacao } from '@/model/movimentacao';

import { Condutor } from '@/model/condutor';
import CondutorClient from '@/client/condutorclient';

import VeiculoClient from '@/client/veiculoclient';
import { Veiculo } from '@/model/veiculo';

import ConfiguracaoClient from '@/client/configuracaoclient';
  import { Configuracao } from '@/model/configuracao';

export default defineComponent({
  name: 'MovimentacaoFormulario',
  data() {
    return { 
      movimentacao: new Movimentacao(),
      condutor:  new Array<Condutor>(),
      veiculo: new Array<Veiculo>(),
      mensagem: {
        ativo: false as boolean,
        titulo: "" as string,
        mensagem: "" as string,
        css: "" as string
      }
    }
  },
  computed: {
    id () {
      return this.$route.query.id
    },
    form () {
      return this.$route.query.form
    }
  },
  mounted() { 

    if(this.id !== undefined){
      this.findById(Number(this.id));
    }
    this.findAllVeiculo();  
    this.findAllCondutor();

  },
  methods: {

    findAllVeiculo(){
      VeiculoClient.listaAll().then(sucess =>{
        this.veiculo = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })

    },
    findAllCondutor(){
        CondutorClient.listaAll().then(sucess =>{
            this.condutor = sucess;
            console.log(sucess);
        })
        .catch(error =>{
          console.log(error)

        })
    },
   
    onClickCadastrar(){
      MovimentacaoClient.cadastrar(this.movimentacao)
        .then(sucess => {
          this.movimentacao = new Movimentacao()

          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    findById(id: number){
      MovimentacaoClient.findById(id)
        .then(sucess => {
          this.movimentacao = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      MovimentacaoClient.editar(this.movimentacao.id, this.movimentacao)
        .then(sucess => {
          this.movimentacao = new Movimentacao()
          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir(){
      MovimentacaoClient.deletaMovimentacao(this.movimentacao.id)
        .then(sucess => {
          this.movimentacao = new Movimentacao()

          this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Movimentacao Excluida com sucesso!";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";
          
          this.$router.push({ name: 'paginaCentral' });
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }
  }
});

</script>

<style>
  
</style>