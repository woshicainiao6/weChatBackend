<template>
    <div>
        <div class="OrderTabel">
            <OrderTable></OrderTable>
        </div>
    </div>
</template>

<script>
import OrderTable from "@/components/order/OrderTable.vue";

export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {OrderTable},
    props: {},
    data() {
        // 这里存放数据
        return {
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {},
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
    }
}
</script>

<style scoped>
.OrderTabel{
    width: fit-content;
}
</style>
