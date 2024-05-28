<template>
    <div class="breadcrumb">
        <template>
            <t-breadcrumb>
                <t-breadcrumb-item class="breadcrumb_item" v-for="(item,index) in page" :key="index"
                                   :to="{ path: item.url}">
                <template #icon>
                    <t-icon name="bookmark"/>
                </template>
                {{ item.name }}
                </t-breadcrumb-item>
            </t-breadcrumb>
        </template>
    </div>
</template>

<script>

export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {},
    props: {
        page: {
            type: Array,
            required: true,
        }
    },
    data() {
        // 这里存放数据
        return {}
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
        console.log(this.page)
    }
}
</script>

<style scoped>
.breadcrumb {
    width: 100%;
    background-color: white;
    height: 20px;
    padding: 10px;
}

</style>
