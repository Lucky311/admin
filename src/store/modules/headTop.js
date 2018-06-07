import Vue from "vue"
import indexHeader from "@/services/json/indexHeader"

export default {
    // namespaced:true,
    state:{
        headerTop:{
            topNav:[],
            bannerData:[],
            bannerData1:[],
            newData:[],
            newActivity:[],
            oldActivity:[],
            Activitying:[],
            PreviousAct:[]
        }
    },
    getters:{
        topNav:state=>state.headerTop.topNav,
        bannerData:state=>state.headerTop.bannerData,
        newData:state=>state.headerTop.newData,
        newActivity:state=>state.headerTop.newActivity,
        oldActivity:state=>state.headerTop.oldActivity,
        Activitying:state=>state.headerTop.Activitying,
        bannerData1:state=>state.headerTop.bannerData1,
        PreviousAct:state=>state.headerTop.PreviousAct,
        
    },
    mutations:{
        setHeaderData(state,{headerTop}){
            state.headerTop.topNav = headerTop.topNav
            state.headerTop.bannerData = headerTop.bannerData
            state.headerTop.newData = headerTop.newData  
            state.headerTop.newActivity = headerTop.newActivity   
            state.headerTop.oldActivity = headerTop.oldActivity
            state.headerTop.Activitying = headerTop.Activitying            
            state.headerTop.bannerData1 = headerTop.bannerData1
            state.headerTop.PreviousAct = headerTop.PreviousAct                  
                              
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
