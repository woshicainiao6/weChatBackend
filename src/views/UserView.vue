<template>
    <div>
        <BreadCrumb :page="breadcrumbData"></BreadCrumb>
        <operatView @search_event="searchEvent"></operatView>
        <div class="userTable">
            <UserTable :userData="userData"></UserTable>
        </div>
    </div>
</template>

<script>
import UserTable from "@/components/user/UserTable.vue";
import BreadCrumb from "@/components/Breadcrumb/BreadCrumb.vue";
import OperatView from "@/components/UtileView/OperatView.vue";
import {getAllUser} from "@/api/user";


export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {
        UserTable, BreadCrumb, OperatView
    },
    props: {},
    data() {
        // 这里存放数据
        return {
            breadcrumbData: [{
                name: '用户列表',
                url: "/user"
            }],
            searchWord: "",
            userData:[],

        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        getAllUserFn(){
            getAllUser().then(res=>{
                // console.log(res.data.data)
                this.userData=res.data.data
            })
        },
        searchEvent(val) {
            this.searchWord = val
            // console.log(val)
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
        this.getAllUserFn()
    }
}
</script>

<style scoped>
.userTable {
    width: fit-content;
    margin-left: 10px;
}
</style>
