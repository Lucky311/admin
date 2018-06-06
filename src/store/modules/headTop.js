import Vue from "vue"
import indexHeader from "@/services/json/indexHeader"

export default {
    // namespaced:true,
    state:{
        headerTop:{
            topNav:[],
            bannerData:[],
            newData:[],
            newActivity:[],
            oldActivity:[],
            Activitying:[]
        }
    },
    getters:{
        topNav:state=>state.headerTop.topNav,
        bannerData:state=>state.headerTop.bannerData,
        newData:state=>state.headerTop.newData,
        newActivity:state=>state.headerTop.newActivity,
        oldActivity:state=>state.headerTop.oldActivity,
        Activitying:state=>state.headerTop.Activitying,
        
        
        
    },
    mutations:{
        setHeaderData(state,{headerTop}){
            state.headerTop.topNav = headerTop.topNav
            state.headerTop.bannerData = headerTop.bannerData
            state.headerTop.newData = headerTop.newData  
            state.headerTop.newActivity = headerTop.newActivity   
            state.headerTop.oldActivity = headerTop.oldActivity
            state.headerTop.Activitying = headerTop.Activitying            
                        
        }
    },
    actions:{
        getHeaderData({commit},payload){
            const headerData = indexHeader
            // console.log(headerData.bannerData)
            commit("setHeaderData",{headerTop:headerData})
        }
        
    }
}
