<template>
    <div>
        <BreadCrumb :page="breadcrumbData"></BreadCrumb>
        <operatView @search_event="searchEvent"></operatView>
    </div>
</template>

<script>
import operatView from "@/components/UtileView/OperatView.vue";
import BreadCrumb from "@/components/Breadcrumb/BreadCrumb.vue";

export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {operatView, BreadCrumb},
    props: {},
    data() {
        // 这里存放数据
        return {
            breadcrumbData: [{
                name: '商品列表',
                url: "/produce"
            }],
            searchWord: "",
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        searchEvent(val) {
            this.searchWord=val
            console.log(val)
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
    }
}
</script>

<style scoped>
</style>
