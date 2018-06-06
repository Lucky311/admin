import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Home'
import Login from '@/pages/Login'
import Activitying from '@/pages/Activitying'
import AdvanceAct from '@/pages/AdvanceAct'
// import AdvanceAct from '@/pages/AdvanceAct'
import PreviousAct from '@/pages/PreviousAct'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:"/login",
      name:"Login",
      component:Login,
    },
    {
      path:"/activitying",
      name: 'Activitying',
      component:Activitying
    },
    {
      path:"/advanceact",
      name: 'AdvanceAct',
      component:AdvanceAct
    },
    {
      path:"/previousact",
      name: 'PreviousAct',
      component:PreviousAct
    },
    {
      path:"*",
      redirect:"/"
    }
  ]
})
