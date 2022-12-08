import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import NotFound from '../views/404.vue'
import DetailPage from '../views/DetailPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import FavoritePage from '../views/FavoritePage.vue'
import Adoption from '../views/Adoption.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage
    },
    {
      path: "/favorites",
      name: "FavoritePage",
      component: FavoritePage
    },
    {
      path: "/cats",
      name: "DetailPage",
      component: DetailPage
    },
    {
      path: "/adopt",
      name: "Adoption",
      component: Adoption
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFound
    },
  ]
})


export default router
