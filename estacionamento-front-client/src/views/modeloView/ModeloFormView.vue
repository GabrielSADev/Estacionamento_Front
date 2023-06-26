<template>
   <div class="container" style="background: ;">

<div class="row">
  <div class="col-md-10 text-start"> <p class="fs-3"> Cadastrar o Modelo</p> </div>
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
    <label for="recipient-name" class=" row m-auto col-form-label">Nome da Marca:</label>
      <select type="text" v-model="modelo.marca"><option v-for="item in marca" :value="item">{{ item.nome }} </option></select>
  </div>
    <div class="col-md-12 text-start">
        <label class="form-label">Nome do Modelo</label>
        <input type="text"  class="form-control" v-model="modelo.nome">
    </div>
</div>

<div class="row">
  <div class="col-md-3 offset-md-6"> 
    <div class="d-grid gap-2">
      <router-link type="button" class="btn btn-info" 
        to="/modelo/lista">Voltar
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
      <button v-if="form === 'deletaModelo'" type="button"
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
import  ModeloClient  from '@/client/modeloclient';
import { Modelo } from '@/model/modelo';

import MarcaClient from '@/client/marcaclient';
import { Marca } from '@/model/marca';


export default defineComponent({
  name: 'ModeloFormulario',
  data() {
    return { 
      modelo: new Modelo(),
      marca:  new Array<Marca>(),
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
    this.findAllMarca();  

  },
  methods: {

    findAllMarca(){
      MarcaClient.listaAll().then(sucess =>{
        this.marca = sucess;
        console.log(sucess);
      })
      .catch(error =>{
          console.log(error)

        })

    },

    onClickCadastrar(){
      ModeloClient.cadastrar(this.modelo)
        .then(sucess => {
          this.modelo = new Modelo()

          
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
      ModeloClient.findById(id)
        .then(sucess => {
          this.modelo = sucess
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      ModeloClient.editar(this.modelo.id, this.modelo)
        .then(sucess => {
          this.modelo = new Modelo()
          
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
      ModeloClient.deletaModelo(this.modelo.id)
        .then(sucess => {
          this.modelo = new Modelo()
          
          this.$router.push({ name: 'modelo-lista-view' });
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


<style lang="scss">


</style>