<template>
    <div>
        <div class="head">
            <t-button theme="primary" @click="goBack">
                <ChevronLeftIcon slot="icon"/>
                返回
            </t-button>
        </div>
        <div class="Form">
            <userInfo v-if="isDataLoaded" :showStyle="showStyle" :userData="userData"></userInfo>
        </div>
    </div>
</template>

<script>

import {ChevronLeftIcon} from "tdesign-icons-vue";
import {getUserById} from "@/api/user/"
import userInfo from "@/components/user/UserInfo.vue";
export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {ChevronLeftIcon,userInfo},
    props: {},
    data() {
        // 这里存放数据
        return {
            isDataLoaded: false,
            userId:this.$route.params.id,
            userData:{},
            showStyle:"view"
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
        async getUserById(id){
            await getUserById(id).then(res=>{
                this.userData=res.data.data
                this.isDataLoaded=true
                console.log(res.data)
            })
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
        this.getUserById(this.$route.params.id)
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
    }
}
</script>

<style scoped>
</style>
