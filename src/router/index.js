import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FemininoView from '../views/FemininoView'
import MasculinoView from '../views/MasculinoView'
import SelecoesView from '../views/SelecoesView'
import PaginaDoProdutoView from '../views/PaginaDoProdutoView'
import ProductApiView from '../views/ProductApiView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Feminino',
    name: 'Feminino',
    component: FemininoView
  },
  {
    path: '/Masculino',
    name: 'Masculino',
    component: MasculinoView
  },
  {
    path: '/Selecoes',
    name: 'Selecoes',
    component: SelecoesView
  },
  {
    path: '/PaginaDoProduto/:id',
    name: 'PaginaDoProduto',
    component: PaginaDoProdutoView
  },
  {
    path: '/ProductApiView/',
    name: 'ProductApiView',
    component: ProductApiView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
