import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FemininoView from '../views/FemininoView'
import MasculinoView from '../views/MasculinoView'
import SelecoesView from '../views/SelecoesView'
import PaginaDoProdutoView from '../views/PaginaDoProdutoView'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
