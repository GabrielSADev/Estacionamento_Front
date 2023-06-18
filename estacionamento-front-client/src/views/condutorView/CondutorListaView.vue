<template>
    <header>
        <div class="class_button">
            <div class="labelCondutor">
                <label for="" id="labelNomeCond" class="tit">Nome :</label>
                <input type="text" name="nomeCond" id="NomeCondutor" class="all">
                <label for="" id="labelCPF" class="tit">CPF :</label>
                <input type="text" name="nomeCPF" id="CPF" class="all">
                <label for="" id="labelTelefone" class="tit">Telefone :</label>
                <input type="text" name="nomeTelefone" id="Telefone" class="all">
                <label for="" id="labelVeiculoCond" class="tit">Veiculo :</label>
                <input type="text" name="nomeVeiculoCond" id="VeiculoCond" class="all">
             </div>
            <button>Adicionar Condutor</button>
        </div>  
    </header>

    <table class="table table-striped">
  <thead>
    <tr class="tr">
      <th scope="col">CPF</th>
      <th scope="col">Telefone</th>
      <th scope="col">Condutor</th>
      <th scope="col" id="modelo">Veiculo</th>
      <th scope="col" id="modelo">Tempo</th>
      <th  colspan="4" scope="col">EDITAR</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">XXX.XXX.XXX-XX</th>
      <td>(OO) OOOOO - OOOO</td>
      <td>Gabriel S.</td>
      <td>XXT-2004</td>
      <td>20:00 Hrs</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
    <tr>
      <th scope="row">XXX.XXX.XXX-XX</th>
      <td>(OO) OOOOO - OOOO</td>
      <td>Silvio A.</td>
      <td>OTM-2023</td>
      <td>05:00 Hrs</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
    <tr>
      <th scope="row">XXX.XXX.XXX-XX</th>
      <td>(OO) OOOOO - OOOO</td>
      <td>Fernanda G.</td>
      <td>AWP-2016</td>
      <td>13:00 Hrs</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
    <tr>
      <th scope="row">XXX.XXX.XXX-XX</th>
      <td>(OO) OOOOO - OOOO</td>
      <td>Inacio X.</td>
      <td>BRA-157</td>
      <td>22:35 Hrs</td>
      <td colspan="3">✎</td>
      <td colspan="3">🗑️</td>
    </tr>
    <tr>
      <th scope="row">XXX.XXX.XXX-XX</th>
      <td>(OO) OOOOO - OOOO</td>
      <td>Lucio D.</td>
      <td>GTX-1080</td>
      <td>43:22 Hrs</td>
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

.labelCondutor{
    background-color: #5e17eb;
    display: flex;
    flex-wrap: wrap;
    gap:1vw;
    padding: 1.2vh 1vw;
    border-radius: 6px;
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