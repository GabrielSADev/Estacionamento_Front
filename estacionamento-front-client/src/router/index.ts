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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/listar-marca',
    name: 'marca-lista-view',
  component: () => import('../views/marcaView/MarcaListaView.vue')
  },
  {
    path: '/lista-modelo',
    name: 'modelo-lista-view',
    component: () => import('../views/modeloView/ModeloListaView.vue')
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
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
