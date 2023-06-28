<template>
  <nav>
   <!--- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <img id="logo" src="../src/assets/EstacionamentoLogo.png" alt="">
    <router-link to="/" id="pg_inicial" >PG/Inicial</router-link>
    <router-link to="/veiculo/lista" class="routerOPC">Veiculos</router-link>
    <router-link to="/marca/lista" class="routerOPC">Marcas</router-link>
    <router-link to="/modelo/lista" class="routerOPC">Modelos</router-link>
    <router-link to="/condutor/pag" class="routerOPC">Condutores</router-link>
    <router-link to="/configuracao/pagina" id="gear" class="routerOPC">⚙️</router-link>
    


  </nav>
  <router-view/>
</template>

<style lang="scss">

#logo{
  width: 10vw;
  height: auto;
}
#logo:hover{
  transition: 1s;
  width: 10.5vw;
}

$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

@import "../node_modules/bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#gear{
  font-size: 2.5vw;
}
#pg_inicial{
  background-color: #ff914d;
  border-radius: 8px;
  padding: 0px 10px;
}

nav {
  //padding: 30px;
  display: flex;
  height: 13vh;
  margin: auto;
  justify-content: space-around;
  align-items: center;

  a {
    color: #5e17eb;
      font-size: 2vw;
      font-weight: 600;
      text-decoration: none;
      font-family: system-ui, 'Segoe UI', Roboto, Oxygen, 'Open Sans', 'Helvetica Neue', sans-serif;

    &.router-link-exact-active {
      color: #5e17eb;
      font-size: 2vw;
      font-weight: 600;
      text-decoration: none;
      font-family: system-ui, 'Segoe UI', Roboto, Oxygen, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  }
}
.routerOPC:hover{
  transition: 0.5s;
  color: #ff914d;
}
</style>
