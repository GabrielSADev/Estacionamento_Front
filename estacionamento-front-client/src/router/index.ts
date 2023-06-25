import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/marca/lista',
    name: 'marca-lista-view',
  component: () => import('../views/marcaView/MarcaListaView.vue')
  },
  {
    path: '/marca/formulario',
    name: 'marca-formulario-view',
    component: () => import( '../views/marcaView/MarcaFormView.vue'),
    children: [
      {
        path: '/marca/formulario',
        name: 'marca-formulario-editar-view',
        component: () => import( '../views/marcaView/MarcaFormView.vue')
      },
      {
        path: '/marca/formulario',
        name: 'marca-formulario-excluir-view',
        component: () => import('../views/marcaView/MarcaFormView.vue')
      }
    ]
  },

  {
    path: '/modelo/lista',
    name: 'modelo-lista-view',
    component: () => import('../views/modeloView/ModeloListaView.vue')
  },
  {
    path: '/modelo/formulario',
    name: 'modelo-formulario-view',
    component: () => import( '../views/modeloView/ModeloFormView.vue'),
    children: [
      {
        path: '/modelo/formulario',
        name: 'modelo-formulario-editar-view',
        component: () => import( '../views/modeloView/ModeloFormView.vue')
      },
      {
        path: '/modelo/formulario',
        name: 'modelo-formulario-excluir-view',
        component: () => import('../views/modeloView/ModeloFormView.vue')
      }
    ]
  },






  {
    path: '/lista-veiculo',
    name: 'veiculo-lista-view',
    component: () => import('../views/veiculoView/VeiculoListaView.vue')
  },
  {
    path: '/lista-condutor',
    name: 'condutor-lista-view',
    component: () => import('../views/condutorView/CondutorListaView.vue')
  },
  {
    path: "/configuracao",
    name: "configuracoes",
    component: () => import('../views/configView/ConfiguracaoView.vue')
  },
  {
    path:'/pag-Central',
    name:'paginaCentral',
    component: () => import('../views/PgCentralView/PaginaCentralView.vue')
  },
  {
    path:'/movimentacao',
    name:'final movimentacao',
    component: () => import('../views/MovimentacaoView/MoviLista.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
