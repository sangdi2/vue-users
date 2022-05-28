import Vue from "vue";
import VueRouter from "vue-router";
import UserList from '../components/UserList.vue'

Vue.use(VueRouter)

const router=new VueRouter({
    routes:[
        {path:'/',redirect:'/userlist'},
        {path:'/userlist',component:UserList}
    ]
})
export default router