import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from "@/views/MainView.vue"
import TestView from "@/views/TestView.vue";
import DashBoard from "@/views/DashBoard.vue";
import OrderView from "@/views/OrderView.vue";
import UserView from "@/views/UserView.vue";
import ProductView from "@/views/ProductView.vue";

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
    path: "/produce", component: ProductView
}, {
    path: "/user", component: UserView
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
