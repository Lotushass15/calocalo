import { createRouter, createWebHistory } from 'vue-router'
import TopPage from "@/components/TopPage"
import SubPage from "@/components/SubPage"
import SubPage01 from "@/components/SubPage01"

const routes = [
  {path: '/', component: TopPage},
  {path: '/page', component: SubPage},
  {path: '/page01', component: SubPage01},
  {path: '/home', redirect: "/"}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;