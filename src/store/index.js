import Vue from 'vue'
import Vuex from 'vuex'
import  Home from './modules/home'
import  headTop from './modules/headTop'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        Home,headTop
    }
  })

export default store