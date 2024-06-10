<template>
    <div>
        <div class="head">
            <t-button theme="primary" @click="goBack">
                <ChevronLeftIcon slot="icon"/>
                返回
            </t-button>
        </div>
        <div class="Form">
            <userInfo  :showStyle="showStyle" :userData="userData"></userInfo>
        </div>
    </div>
</template>

<script>

import {ChevronLeftIcon} from "tdesign-icons-vue";
import userInfo from "@/components/user/UserInfo.vue";
export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {ChevronLeftIcon,userInfo},
    props: {},
    data() {
        // 这里存放数据
        return {
            userId:this.$route.params.id,
            userData:{},
            showStyle:"add"
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        goBack(){
            this.$router.push("/user")
        },
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
