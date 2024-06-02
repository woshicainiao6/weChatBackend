<template>
    <div>
        <BreadCrumb :page="breadcrumbData"></BreadCrumb>
        <operatView @search_event="searchEvent"></operatView>

        <div class="OrderTabel">
            <OrderTable :allOrderData="allOrderData"></OrderTable>
        </div>
    </div>
</template>

<script>
import OrderTable from "@/components/order/OrderTable.vue";
import BreadCrumb from "@/components/Breadcrumb/BreadCrumb.vue";
import {getAllOrder} from "@/api/order"
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
            allOrderData: []
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        getAllOrderData() {
            getAllOrder().then(res => {
                this.allOrderData = res.data.data
            })
        },
        searchEvent(val) {
            this.searchWord = val
            console.log(val)
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
