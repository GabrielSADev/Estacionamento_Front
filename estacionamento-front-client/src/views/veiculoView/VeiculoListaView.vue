<template>
    <header>
        <div class="class_button">
            <div class="divLabelVeiculo">

                <label for="opcoesTipo" class="tit">Tipo :</label>
                    <select id="opcoesDeTipo" class="all">
                        <option value="opcao1">Carro</option>
                        <option value="opcao2">Moto</option>
                        <option value="opcao3">Van</option>
                    </select>
                <label for="opcoesCor" class="tit">Cor :</label>
                    <select id="opcoesDeCor" class="all">
                        <option value="opcaoC1">AMARELO</option>
                        <option value="opcaoC2">AZUL</option>
                        <option value="opcaoC3">BRANCO</option>
                        <option value="opcaoC4">LARANJA</option>
                        <option value="opcaoC5">PRATA</option>
                        <option value="opcaoC6">PRETO</option>
                        <option value="opcaoC7">ROXO</option>
                        <option value="opcaoC8">VERDE</option>
                        <option value="opcaoC9">VERMELHO</option>
                    </select>
                <label for="" id="labelPlaca" class="tit">Placa :</label>
                <input type="text" name="nomePlaca" id="Placa" class="all">
                <label for="" id="labelAno" class="tit">Ano :</label>
                <input type="text" name="nomeAno" id="Ano" class="all">
                <label for="" id="labelModeloVeiculo" class="tit">Modelo :</label>
                <input type="text" name="nomeModelo" id="Modelo" class="all">
            </div>
        <button>Adicionar Veículo</button>
        </div>
    </header>

    <table class="table table-striped">
  <thead>
    <tr class="tr">
      <th scope="col">Placa</th>
      <th scope="col">Cor</th>
      <th scope="col">Condutor</th>
      <th scope="col" id="modelo">Modelo</th>
      <th  colspan="4" scope="col">EDITAR</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">XXT-2004</th>
      <td>ROXO</td>
      <td>Gabriel S.</td>
      <td>Mustang</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
    <tr>
      <th scope="row">OTM-2023</th>
      <td>AZUL</td>
      <td>Silvio A.</td>
      <td>C4 Gran</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
    <tr>
      <th scope="row">AWP-2016</th>
      <td>BRANCO</td>
      <td>Fernanda G.</td>
      <td>Portofino</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
    <tr>
      <th scope="row">BRA-157</th>
      <td>VERMELHO</td>
      <td>Inacio X.</td>
      <td>Duster</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
    <tr>
      <th scope="row">GTX-1080</th>
      <td>VERDE</td>
      <td>Lucio D.</td>
      <td>e-208</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
  </tbody>
</table>

</template>

<script lang="ts">

</script>

<style>

.class_button{
        background-color: #4f04e7;
        height: 12vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5vw;
        
    }
.divLabelVeiculo{
    background-color: #5e17eb;
    display: flex;
    flex-wrap: wrap;
    gap:1vw;
    padding: 1.2vh 1vw;
    border-radius: 6px;
}
.all{
    border-radius: 8px;
        padding: 0% 0%;
        border: none;
}
.tit{
    color: #ff914d;
        font-size: 1.8vw;
}
button{
        border-radius: 8px;
        border: none;
        padding: 0.7rem 0.8rem;
        background-color: #ff914d;
        color: #5e17eb;
        font-weight: 750;
    }

</style>