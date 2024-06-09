<template>
    <div>
        <BreadCrumb :page="breadcrumbData"></BreadCrumb>
        <operatView @search_event="searchEvent"></operatView>

        <div class="OrderTabel">
            <OrderTable v-if="dataReady" :allOrderData="allOrderData" :insuranceData="insuranceData"></OrderTable>
        </div>
    </div>
</template>

<script>
import OrderTable from "@/components/order/OrderTable.vue";
import BreadCrumb from "@/components/Breadcrumb/BreadCrumb.vue";
import {getAllOrder} from "@/api/order"
import {getAllProduce} from "@/api/produce"

import operatView from "@/components/UtileView/OperatView.vue";

export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {operatView, OrderTable, BreadCrumb},
    props: {},
    data() {
        // 这里存放数据
        return {
            breadcrumbData: [{
                name: '订单列表',
                url: "/order"
            }],
            searchWord: "",
            allOrderData: [],
            insuranceData:[],
            dataReady:false
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        async getAllOrderData() {
            await getAllOrder().then(res => {
                this.allOrderData = res.data.data
            })
            await getAllProduce().then(res=>{
                this.insuranceData=res.data.data
            })
            this.dataReady=true
        },
        searchEvent(val) {
            this.searchWord = val
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
        this.getAllOrderData()
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
    }
}
</script>

<style scoped>
.OrderTabel {
    width: fit-content;
    margin-left: 10px;
}
</style>
