<template>
    <div>

        <div class="gird cardBox">
            <div class="BusiCard">
                <div class="avatar">
                    <template>
                        <t-avatar size="60px" image="https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/张路通.jpg"/>
                    </template>

                </div>
                <div class="info">
                    <div class="infoName">张路通</div>
                    <div class="infoEmail">zhanglutong6518@163.com</div>
                    <div class="infoTag">
                        <p>古希腊掌管WEB开发的神</p>
                    </div>
                </div>
                <div class="tags">
                    <div class="infoTag">
                        <t-tag theme="primary">项目经理</t-tag>
                    </div>
                    <div class="infoTag">
                        <t-tag theme="success">需求分析</t-tag>
                    </div>
                </div>
            </div>
            <div class="BusiCard">
                <div class="avatar">
                    <template>
                        <t-avatar size="60px" image="https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/谢宁馨.jpg"/>
                    </template>

                </div>
                <div class="info">
                    <div class="infoName">谢宁馨</div>
                    <div class="infoEmail">zhanglutong6518@163.com</div>
                    <div class="infoTag">
                        <p>古希腊掌管WEB开发的神</p>
                    </div>
                </div>
                <div class="tags">
                    <div class="infoTag">
                        <t-tag theme="primary">项目经理</t-tag>
                    </div>
                    <div class="infoTag">
                        <t-tag theme="success">需求分析</t-tag>
                    </div>
                </div>
            </div>
            <div class="BusiCard">
                <div class="avatar">
                    <template>
                        <t-avatar size="60px" image="https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/孙子强.jpg"/>
                    </template>

                </div>
                <div class="info">
                    <div class="infoName">孙子强</div>
                    <div class="infoEmail">zhanglutong6518@163.com</div>
                    <div class="infoTag">
                        <p>古希腊掌管WEB开发的神</p>
                    </div>
                </div>
                <div class="tags">
                    <div class="infoTag">
                        <t-tag theme="primary">项目经理</t-tag>
                    </div>
                    <div class="infoTag">
                        <t-tag theme="success">需求分析</t-tag>
                    </div>
                </div>
            </div>
            <div class="BusiCard">
                <div class="avatar">
                    <template>
                        <t-avatar size="60px" image="https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/于睿昊.jpg"/>
                    </template>

                </div>
                <div class="info">
                    <div class="infoName">余睿昊</div>
                    <div class="infoEmail">zhanglutong6518@163.com</div>
                    <div class="infoTag">
                        <p>古希腊掌管WEB开发的神</p>
                    </div>
                </div>
                <div class="tags">
                    <div class="infoTag">
                        <t-tag theme="primary">项目经理</t-tag>
                    </div>
                    <div class="infoTag">
                        <t-tag theme="success">需求分析</t-tag>
                    </div>
                </div>
            </div>
            <div class="BusiCard">
                <div class="avatar">
                    <template>
                        <t-avatar size="60px" image="https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/张志栋.jpg"/>
                    </template>

                </div>
                <div class="info">
                    <div class="infoName">张志栋</div>
                    <div class="infoEmail">zhanglutong6518@163.com</div>
                    <div class="infoTag">
                        <p>古希腊掌管WEB开发的神</p>
                    </div>
                </div>
                <div class="tags">
                    <div class="infoTag">
                        <t-tag theme="primary">项目经理</t-tag>
                    </div>
                    <div class="infoTag">
                        <t-tag theme="success">需求分析</t-tag>
                    </div>
                </div>
            </div>
            <div class="BusiCard">
                <div class="avatar">
                    <template>
                        <t-avatar size="60px" image="https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/赵雨萱.jpg"/>
                    </template>

                </div>
                <div class="info">
                    <div class="infoName">赵雨萱</div>
                    <div class="infoEmail">zhanglutong6518@163.com</div>
                    <div class="infoTag">
                        <p>古希腊掌管WEB开发的神</p>
                    </div>
                </div>
                <div class="tags">
                    <div class="infoTag">
                        <t-tag theme="primary">项目经理</t-tag>
                    </div>
                    <div class="infoTag">
                        <t-tag theme="success">需求分析</t-tag>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    // import 引入的组件需要注入到对象中才能使用
    name: "BusinessCard",
    components: {},
    props: {},
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
    }
}
</script>

<style scoped>
.gird {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.BusiCard {
    display: flex;
    width: 431px;
    height: 110px;
    background-color: #ebeff2;
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 10px;
}
.BusiCard:hover{
    background-color: #939393;
    cursor: pointer;
}
.avatar {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

.info {
    flex: 2.2;
}

.tags {
    flex: 1;
    align-self: center;
}

.infoName {
    color: black;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
}

.infoEmail {
    color: rgba(38, 38, 38, 0.6);
    margin-top: 5px;
}

.infoTag {
    margin-top: 10px;
}
</style>
