<template>
    <div>
        <BreadCrumb :page="breadcrumbData"></BreadCrumb>
        <operatView @search_event="searchEvent"></operatView>
        <div class="produceContainer">
            <t-list :split="true" size="large" style="width: 92%">
                <t-list-item v-for="(item,index) in produceData" :key="index">
                    <t-list-item-meta :image="imageUrl" title="商品标题"
                                      description="列表内容列表内容"></t-list-item-meta>
                    <template #action>
          <span style="margin-right: 40px">
            <t-link theme="primary" hover="color" style="margin-left: 16px">修改信息</t-link>
            <t-link theme="primary" hover="color" style="margin-left: 16px">查看详情信息</t-link>
            <t-link theme="primary" hover="color" style="margin-left: 16px">删除商品</t-link>
          </span>
                    </template>
                </t-list-item>
            </t-list>
        </div>

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
            imageUrl: 'https://tdesign.gtimg.com/site/avatar.jpg',
            produceData:[{
                name:"商品1",
                desc:"商品简介",
                img:"商品内容"
            }],
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        searchEvent(val) {
            this.searchWord = val
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
.produceContainer {
    margin-left: 10px;
}
</style>
