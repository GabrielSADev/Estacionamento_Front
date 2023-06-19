<template>

<header>
    <div class="class_button">
        <div class="divLabelModelo">
            <label for="" id="labelMarcaModelo">Marca :</label>
            <input type="text" name="Nome da Marca no Modelo" id="nomeMarcaModelo">
            <label for="" id="labelModelo">Nome do Modelo :</label>
            <input type="text" name="Nome do Modelo" id="nomeModelo">
        </div>
        <button>Adicionar Modelo</button>
    </div>
</header>

<table class="table table-striped">
  <thead>
    <tr class="tr">
      <th scope="col">Id</th>
      <th scope="col">Marca</th>
      <th scope="col" id="modelo">Modelo</th>
      <th colspan="4" scope="col">EDITAR</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Wolkswagen</td>
      <td>Pollo</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ford</td>
      <td>Mustang</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ferrari</td>
      <td>Portofino</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Renault</td>
      <td>Duster</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Peugeot</td>
      <td>e-208</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
  </tbody>
</table>


</template>

<script lang="ts">


</script>

<style>
.class_button{
        background-color: #4f04e7;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vw;
        
    }
    button{
        border-radius: 8px;
        border: none;
        padding: 0.7% 0.8%;
        background-color: #ff914d;
        color: #5e17eb;
        font-weight: 750;
    }
    .divLabelModelo{
        background-color: #5e17eb;
        border-radius: 8px;
        padding: 6px 10px;
        display: flex;
        justify-content: center;
        gap: 1.5vw;
        align-items: center;
    }
    #nomeModelo{
        border-radius: 8px;
        padding: 1.3% 0%;
        border: none;
    }
    #nomeMarcaModelo{
        border-radius: 8px;
        padding: 1.3% 0%;
        border: none;
    }
    #labelMarcaModelo{
        color: #ff914d;
        font-size: 1.6vw;
    }
    #labelModelo{
        color: #ff914d;
        font-size: 1.6vw;
    }
</style>