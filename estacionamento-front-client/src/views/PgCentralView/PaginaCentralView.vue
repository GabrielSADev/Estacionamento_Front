<template>
    <div class="class_button_PC">
            <div class="divLabelPC">
                <label for="" id="labelPaginaPrincipal" class="tit">Buscar Veiculo-Condutor :</label>
                <input type="text" name="PaginaCentral" id="pagCentral" class="all">
            </div>
        <button>Ativar Veículo</button>
    </div>

    <table class="table table-striped">
  <thead>
    <tr class="tr">
      <th scope="col">Condutor</th>
      <th scope="col">Placa</th>
      <th  colspan="4" scope="col">DESATIVAR</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gabriel S. A.</th>
      <td>XXT-2004</td>
      <td colspan="3">✂️</td>
    </tr>
    <tr>
      <th scope="row">Eduardo C. V.</th>
      <td>TCB-1999</td>
      <td colspan="3">✂️</td>
    </tr>
    <tr>
      <th scope="row">Maria X. D.</th>
      <td>EMN-4949</td>
      <td colspan="3">✂️</td>
    </tr>
    <tr>
      <th scope="row">Arthur P. M.</th>
      <td>AGT-0007</td>
      <td colspan="3">✂️</td>
    </tr>
    <tr>
      <th scope="row">Leon D. P.</th>
      <td>LCD-1820</td>
      <td colspan="3">✂️</td>
    </tr>
  </tbody>
</table>

</template>


<script lang="ts">

</script>

<style>
    .class_button_PC{
        background-color: #4f04e7;
        height: 12vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5vw;
    }
    .all{
    border-radius: 3px;
        padding: 0% 0%;
        border: none;
    }
    .divLabelPC{
        background-color: #5e17eb;
    display: flex;
    flex-wrap: wrap;
    gap:1vw;
    padding: 1.2vh 1vw;
    border-radius: 6px;
    }
</style>