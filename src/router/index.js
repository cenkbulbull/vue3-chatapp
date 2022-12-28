import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChatOda from "../views/ChatOda.vue"
import {auth} from "../firebase/config"

const authKontrol=(to,from,next)=>{
  const kullanici=auth.currentUser

  if (!kullanici) {
    next({name:"Home"})
  }
  else{
    next()
  }
}

const chatKontrol=(to,from,next)=>{
  const kullanici=auth.currentUser

  if (kullanici) {
    next({name:"ChatOda"})
  }
  else{
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter:chatKontrol
  },
  {
    path: '/chat',
    name: 'ChatOda',
    component: ChatOda,
    beforeEnter:authKontrol
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
