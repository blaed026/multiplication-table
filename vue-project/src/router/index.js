import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home.vue'
import MultiplicationTable from '../views/MultiplicationTable.vue'
import AboutMe from "@/views/AboutMe.vue";
import AllItems from "@/views/portfolio/AllItems.vue";
import PortfolioItemDetails from "@/views/portfolio/PortfolioItemDetails.vue";


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
    },
    {
      path: '/examples/portfolio',
      children: [
        {
          path: '',
          name: 'PortfolioLandingPage',
          component: AllItems
        },
        {
          path: ':portfolioId',
          name: 'PortfolioItemDetails',
          component: PortfolioItemDetails,
        }
      ]
    }
  ]
})

export default router
