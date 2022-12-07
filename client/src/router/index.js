import { createRouter, createWebHistory } from 'vue-router'
import DonationPage from '../views/DonationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/donate",
      name: "Donate",
      component: DonationPage
    }
  ]
})

export default router
