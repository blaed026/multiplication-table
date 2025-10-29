import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import MultiplicationTable from '../views/MultiplicationTable.vue'
import AboutMe from "@/views/AboutMe.vue";
import AllItems from "@/views/portfolio/AllItems.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/multiplication-table',
      name: 'MultiplicationTable',
      component: MultiplicationTable
    },

    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    },

    {
      path: '/examples/portfolio',
      name: 'Portfolio',
      component: AllItems
    }

  ],
})

export default router
