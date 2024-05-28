<template>
    <div>
        测试
    </div>
</template>

<script>
// import {Icon} from 'tdesign-icons-vue';
import router from "@/router";
export default {
    name: "TestView",
    components: {
        // Icon
    },
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
    methods: {
        changeHandler(res){
            console.log(res)
            router.push('/test')
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
