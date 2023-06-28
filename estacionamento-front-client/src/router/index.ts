import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
 /* {
    path: '/',
    name: 'home',
    component: HomeView
  },
  */
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
    path: '/veiculo/lista',
    name: 'veiculo-lista-view',
    component: () => import('../views/veiculoView/VeiculoListaView.vue')
  },
  {
    path: '/veiculo/formulario',
    name: 'veiculo-formulario-view',
    component: () => import( '../views/veiculoView/VeiculoFormView.vue'),
    children: [
      {
        path: '/veiculo/formulario',
        name: 'veiculo-formulario-editar-view',
        component: () => import( '../views/veiculoView/VeiculoFormView.vue')
      },
      {
        path: '/veiculo/formulario',
        name: 'veiculo-formulario-excluir-view',
        component: () => import('../views/veiculoView/VeiculoFormView.vue')
      }
    ]
  },

  {
    path: '/condutor/pag',
    name: 'condutor-lista-view',
    component: () => import('../views/condutorView/CondutorListaView.vue')
  },
  {
    path: '/condutor/formulario',
    name: 'condutor-formulario-view',
    component: () => import( '../views/condutorView/CondutorFormView.vue'),
    children: [
      {
        path: '/condutor/formulario',
        name: 'condutor-formulario-editar-view',
        component: () => import( '../views/condutorView/CondutorFormView.vue')
      },
      {
        path: '/condutor/formulario',
        name: 'condutor-formulario-excluir-view',
        component: () => import('../views/condutorView/CondutorFormView.vue')
      }
    ]
  },

  {
    path: "/configuracao/pagina",
    name: "configuracao-lista-view",
    component: () => import('../views/configView/ConfiguracaoListaView.vue')
  },
  {
    path: '/configuracao/formulario',
    name: 'configuracao-formulario-view',
    component: () => import( '../views/configView/ConfigFormView.vue'),
    children: [
      {
        path: '/configuracao/formulario',
        name: 'configuracao-formulario-editar-view',
        component: () => import( '../views/configView/ConfigFormView.vue')
      },
      {
        path: '/configuracao/formulario',
        name: 'configuracao-formulario-excluir-view',
        component: () => import('../views/configView/ConfigFormView.vue')
      }
    ]
  },


  {
    path:'/',
    name:'paginaCentral',
    component: () => import('../views/MovimentacaoView/PaginaCentralView.vue'),
  },
  {
    path:'/movimentacao/form',
    name:'movimentacao-cadastro',
    component: () => import('../views/MovimentacaoView/MoviFormView.vue'),
  
  children: [
    {
      path: '/cadastromovimentacao',
      name: 'movimentacao-formulario-editar-view',
      component: () => import(/* webpackChunkName: "about" */ '../views/MovimentacaoView/MoviFormView.vue')
    },
    {
      path: '/cadastromovimentacao',
      name: 'movimentacao-formulario-excluir-view',
      component: () => import(/* webpackChunkName: "about" */ '../views/MovimentacaoView/MoviFormView.vue')
    }
  ]
},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
