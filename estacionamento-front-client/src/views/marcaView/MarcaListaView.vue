<template>
<header>
    <div class="class_button">
        <div class="divLabelMarca">
            <label for="" id="labelMarca">Nome da Marca :</label>
            <input type="text" name="Nome da Marca" id="nomeMarca">
        </div>
        <button>Adicionar Marca</button>
    </div>
</header>

<table class="table table-striped">
  <thead>
    <tr class="tr">
      <th scope="col">Id</th>
      <th scope="col">Marca</th>
      <th colspan="6" scope="col">EDITAR</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Wolkswagen</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Ford</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ferrari</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Renault</td>
      <td>✎</td>
      <td>🗑️</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Peugeot</td>
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
        padding: 0.7rem 0.8rem;
        background-color: #ff914d;
        color: #5e17eb;
        font-weight: 750;
    }
    #nomeMarca{
        border-radius: 8px;
        padding: 2% 0%;
        border: none;
    }
    #labelMarca{
        color: #ff914d;
        font-size: 2vw;
    }
    .divLabelMarca{
        background-color: #5e17eb;
        border-radius: 8px;
        padding: 5px 10px;
        display: flex;
        justify-content: space-around;
    }
</style>