import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/Layout1',
      name: 'Layout1',
      component: ()=>import("../views/layout/Layout-1")
    },
    {
      path: '/Layout2',
      name: 'Layout2',
      component: ()=>import("../views/layout/Layout-2")
    },
    {
      path: '/Container1',
      name: 'Container1',
      component: ()=>import("../views/container/Container-1")
    },
    {
      path: '/Container2',
      name: 'Container2',
      component: ()=>import("../views/container/Container-2")
    },
    {
      path: '/Button1',
      name: 'Button1',
      component: ()=>import("../views/button/Button-1")
    },
    {
      path: '/Button2',
      name: 'Button2',
      component: ()=>import("../views/button/Button-2")
    },
    {
      path: '/Line',
      name: 'Line',
      component: ()=>import("../views/line/Line")
    },
    {
      path: '/Radio1',
      name: 'Radio1',
      component: ()=>import("../views/form/Radio-1")
    },
    {
      path: '/Radio2',
      name: 'Radio2',
      component: ()=>import("../views/form/Radio-2")
    },
    {
      path: '/CheckBox1',
      name: 'CheckBox1',
      component: ()=>import("../views/form/CheckBox-1")
    },
    {
      path: '/CheckBox2',
      name: 'CheckBox2',
      component: ()=>import("../views/form/CheckBox-2")
    },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
