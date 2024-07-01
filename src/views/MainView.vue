<template>
    <div>
        <div class="tdesign-demo-item--layout">
            <t-layout>
                <t-header>
                    <t-head-menu value="item1" height="120px">
                        <img
                                slot="logo"
                                class="logo"
                                src="../assets/logo.png"
                                alt="logo"
                                width="50"
                        />
                        <!--                        <t-menu-item value="item1">已选内容</t-menu-item>-->

                        <template #operations>
                            <a href="javascript:;">
                                <icon class="t-menu__operations-icon" name="search"/>
                            </a>
                            <a href="javascript:;">
                                <icon class="t-menu__operations-icon" name="notification-filled"/>
                            </a>
                            <a href="/">
                                <icon class="t-menu__operations-icon" name="home"/>
                            </a>
                        </template>
                    </t-head-menu>
                </t-header>
                <t-layout>
                    <t-aside class="aside" :style="{ width:asideWidth,'height':'620px' }">
                        <t-menu theme="light" v-model="nowPage" defaultValue="dashboard" :width="['150px', '80px']"
                                :collapsed="collapsed">
                            <router-link to="/DashBoard" class="custom-link">
                                <t-menu-item value="dashboard">
                                    <icon slot="icon" name="dashboard"/>
                                    仪表盘
                                </t-menu-item>
                            </router-link>
                            <RouterLink to="/produce" class="custom-link">
                                <t-menu-item value="resource">
                                    <icon slot="icon" name="server"/>
                                    商品列表
                                </t-menu-item>
                            </RouterLink>
                            <RouterLink to="/user" class="custom-link">
                                <t-menu-item value="root">
                                    <icon slot="icon" name="root-list"/>
                                    用户列表
                                </t-menu-item>
                            </RouterLink>
                            <RouterLink to="/order" class="custom-link">
                                <t-menu-item value="control-platform">
                                    <icon slot="icon" name="control-platform"/>
                                    订单详情
                                </t-menu-item>
                            </RouterLink>
                            <RouterLink to="/ChineseMap" class="custom-link">

                                <t-menu-item value="precise-monitor">
                                    <icon slot="icon" name="precise-monitor"/>
                                    精准监控
                                </t-menu-item>
                            </RouterLink>
                            <RouterLink to="/test" class="custom-link">

                                <t-menu-item value="mail">
                                    <icon slot="icon" name="mail"/>
                                    消息区
                                </t-menu-item>
                            </RouterLink>
                            <RouterLink to="/test" class="custom-link">

                                <t-menu-item value="user-circle">
                                    <icon slot="icon" name="user-circle"/>
                                    个人中心
                                </t-menu-item>
                            </RouterLink>
                            <RouterLink to="/test" class="custom-link">

                                <t-menu-item value="play-circle">
                                    <icon slot="icon" name="play-circle"/>
                                    视频区
                                </t-menu-item>
                            </RouterLink>
                            <RouterLink to="/test" class="custom-link">

                                <t-menu-item value="edit1">
                                    <icon slot="icon" name="edit-1"/>
                                    资源编辑
                                </t-menu-item>
                            </RouterLink>
                            <template #operations>
                                <t-button variant="text" shape="square">
                                    <t-button variant="text" shape="square" @click.native="changeCollapsed">
                                        <icon name="view-list"/>
                                    </t-button>
                                </t-button>
                            </template>
                        </t-menu>
                    </t-aside>
                    <t-layout style="padding: 0;margin: 0">
                        <t-content >
                            <div class="content">
                                <router-view></router-view>
                            </div>
                        </t-content>
                    </t-layout>
                </t-layout>
            </t-layout>
        </div>
    </div>
</template>

<script>
import {Icon} from 'tdesign-icons-vue';
// import dashBoard from "@/views/DashBoard.vue";
// import router from "@/router";

export default {
    // import 引入的组件需要注入到对象中才能使用
    name: "MainView",
    components: {
        Icon
    },
    props: {},
    data() {
        // 这里存放数据
        return {
            nowPage: "",
            asideWidth: "150px",
            collapsed: false,
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {
        nowPage(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    // 方法集合
    methods: {
        getDefaultPage() {
            switch (this.$route.path) {
                case '/DashBoard':
                    return 'dashboard';
                case '/produce':
                    return 'resource';
                case '/user':
                    return 'root';
                case '/order':
                    return 'control-platform';
                case '/ChineseMap':
                    return 'precise-monitor'
                default:
                    return 'dashboard'; // Set a default value
            }
        },
        changeCollapsed() {
            this.collapsed = !this.collapsed;
            if (this.collapsed) {
                this.asideWidth = "80px"
            } else {
                this.asideWidth = "150px"

            }
        },
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
        this.nowPage = this.getDefaultPage();
    }
}
</script>

<style scoped>
.custom-link {
    text-decoration: none;
}

.content {
    position: fixed;
    max-height: 1120px;
    overflow: auto;
    margin-left: 0;
    width: 100%;
}
</style>
