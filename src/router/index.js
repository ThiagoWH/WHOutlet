import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import FemininoView from '../views/FemininoView'
import MasculinoView from '../views/MasculinoView'
import SelecoesView from '../views/SelecoesView'
import PaginaDoProdutoView from '../views/PaginaDoProdutoView'
import PaginaDeSucessoView from '../views/PaginaDeSucessoView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
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
    path: '/PaginaDoProduto',
    name: 'PaginaDoProduto',
    component: PaginaDoProdutoView
  },
  {
    path: '/PaginaDeSucesso',
    name: 'PaginaDeSucesso',
    component: PaginaDeSucessoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
