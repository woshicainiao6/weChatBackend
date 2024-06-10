<template>
    <div>
        <div class="utilContainer">
            <div class="search">
                <div style="justify-self: center;align-self: center">搜索关键字：</div>
                <t-input v-model="searchWord" @change="search()" style="width: 200px" placeholder="请输入关键字">
                    <template #suffixIcon>
                        <search-icon :style="{ cursor: 'pointer' }"/>
                    </template>
                </t-input>
            </div>
            <div class="addItem">
                <t-button theme="primary" @click="addEvent()">
                    <add-icon slot="icon"/>
                    新增
                </t-button>
            </div>
        </div>
    </div>
</template>

<script>
import {SearchIcon, AddIcon} from 'tdesign-icons-vue';

export default {
    // import 引入的组件需要注入到对象中才能使用
    name: "OperatView",
    components: {SearchIcon, AddIcon},
    props: {
        operaEvent:{
            type:String,
            required:true,
        }
    },
    data() {
        // 这里存放数据
        return {
            searchWord: "",
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {
    },
    // 方法集合
    methods: {
        search() {
            this.$emit("search_event", this.searchWord)
        },
        addEvent(){
            console.log(this.operaEvent)
            this.$router.push("/addProduce")
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
.utilContainer {
    width: 92%;
    height: fit-content;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    background-color: white;
    display: flex;
}

.search {
    display: flex;
    height: fit-content;
}

.addItem {
    margin-left: 20px;
}
</style>
