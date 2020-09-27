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
    {
      path: '/Input1',
      name: 'Input1',
      component: ()=>import("../views/form/Input-1")
    },
    {
      path: '/Rate',
      name: 'Rate',
      component: ()=>import("../views/unit/Rate")
    },
    {

      path: '/ColorPicker',
      name: 'ColorPicker',
      component: ()=>import("../views/unit/ColorPicker")
    },
    {
      path: '/Message',
      name: 'Message',
      component: ()=>import("../views/notice/Message")
    },
    {
      path: '/Notification',
      name: 'Notification',
      component: ()=>import("../views/notice/Notification")
    },
    {
      path: '/Carousel',
      name: 'Carousel',
      component: ()=>import("../views/carousel/Carousel")
    },
    {
      path: '/Table1',
      name: 'Table1',
      component: ()=>import("../views/table/Table-1")
    },
    {
      path: '/Table2',
      name: 'Table2',
      component: ()=>import("../views/table/Table-2")
    },
    {
      path: '/Table3',
      name: 'Table3',
      component: ()=>import("../views/table/Table-3")
    },
    {
      path: '/Table4',
      name: 'Table4',
      component: ()=>import("../views/table/Table-4")
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: ()=>import("../views/progress/Progress")
    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: ()=>import("../views/dialog/Dialog")
    },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
