<template>
    <div class="linhaDivMovi">
      <h1>Finalizar Saída</h1>
    </div>

    <table class="table table-striped">
  <thead>
    <tr class="tr">
      <th scope="col">Dados</th>
      <th scope="col">Valor Final</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Condutor :</th>
      <td>Gabriel S. A.</td>
    </tr>
    <tr>
      <th scope="row">Placa :</th>
      <td>XXT-2004</td>
    </tr>
    <tr>
      <th scope="row">Valor :</th>
      <td>R$ 24.90</td>
    </tr>
    <tr>
      <th scope="row">Valor Multa :</th>
      <td>R$ 00.00</td>
    </tr>
    <tr>
      <th scope="row">Horas dentro:</th>
      <td>04:55:20</td>
    </tr>
  </tbody>
</table>
<div class="botaofinal">
    <button>FINALIZAR</button>
</div>
</template>

<script lang="ts">


</script>

<style>
    .linhaDivMovi{
    
    background-color: #4f04e7;
    height: 10vh;   
    display: flex;
    align-items: center;  
    justify-content: center;
    color: #ff914d;   
}
button{
    border-radius: 8px;
        border: none;
        padding: 0.7% 0.8%;
        background-color: #ff914d;
        color: #5e17eb;
        font-weight: 750;
}
button:hover{
    transition: 0.3s;
    background-color: #5e17eb;
    color:#ff914d;
}
</style>