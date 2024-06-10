<template>
    <div>
        <BreadCrumb :page="breadcrumbData"></BreadCrumb>
        <operatView @search_event="searchEvent" :operaEvent="operaEvent"></operatView>
        <div class="produceContainer">
            <t-list :split="true" size="large" style="width: 92%;">
                <t-list-item v-for="(item, index) in searchData" :key="index">
                    <t-list-item-meta :image="item.thumb" :title="item.content"
                                      :description="item.description"></t-list-item-meta>
                    <template #action>
          <span style="margin-right: 40px">
            <router-link :to="{ name: 'modifyProduce', params: { id: item.id } }" custom>
              <t-link theme="primary" hover="color" style="margin-left: 16px">修改信息</t-link>
            </router-link>
            <router-link :to="{ name: 'viewDetails', params: { id: item.id } }" custom>
              <t-link theme="primary" hover="color" style="margin-left: 16px">查看详情信息</t-link>
            </router-link>
              <t-link theme="primary" hover="color" style="margin-left: 16px"
                      @click="deleteInsuranceFn(item.id)">删除商品</t-link>
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
import {getAllProduce, deleteInsurance} from "@/api/produce"

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
            produceData: [],
            operaEvent: "addProduce"
        }
    },
    // 计算属性 类似于 data 概念
    computed: {
        searchData() {
            return this.produceData.filter(item => item.title.includes(this.searchWord))
        }
    },
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        searchEvent(val) {
            this.searchWord = val
        },
        getAllData() {
            getAllProduce().then(res => {
                this.produceData = res.data.data;
            })
        },
        deleteInsuranceFn(id) {
            deleteInsurance(id).then(res => {
                console.log(res.data);
                this.$message.success("删除成功");
                setTimeout(()=>{
                    location.reload();
                },1000)
            })
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
        this.getAllData()
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
        this.getAllData()
    }
}
</script>

<style scoped>
.produceContainer {
    margin-left: 10px;
}
</style>
