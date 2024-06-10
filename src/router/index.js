import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/views/MainView.vue"
import TestView from "@/views/TestView.vue";
import DashBoard from "@/views/DashBoard.vue";
import OrderView from "@/views/OrderView.vue";
import UserView from "@/views/UserView.vue";
import ProductView from "@/views/ProductView.vue";
import ModifyProduce from "@/components/produce/ModifyProduce.vue";
import ViewDetails from "@/components/produce/ViewDetails.vue";
import addProduce from "@/components/produce/addProduce.vue";
import ViewUser from "@/components/user/ViewUser.vue";
import AddUser from "@/components/user/addUser.vue";
Vue.use(VueRouter)

const routes = [{
    path: '/', component: DashBoard
}, {
    path: '/MainView', component: MainView
}, {
    path: '/DashBoard', component: DashBoard
}, {
    path: "/test", component: TestView
}, {
    path: "/test", component: TestView
}, {
    path: "/order", component: OrderView
}, {
    path: '/produce', component: ProductView
}, {
    path: '/modifyProduce/:id', name: 'modifyProduce', component: ModifyProduce
}, {
    path: '/viewDetails/:id', name: 'viewDetails', component: ViewDetails
}, {
    path: '/addProduce', name: 'addProduce', component: addProduce
}, {
    path: "/modifyProduce", component: UserView
}, {
    path: "/user", component: UserView
},{
    path: '/ViewUser/:id', name: 'ViewUser', component: ViewUser
},{
    path: '/addUser', name: 'AddUser', component: AddUser
}


]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    routes
})

export default router
