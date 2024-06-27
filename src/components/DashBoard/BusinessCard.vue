<template>
    <div class="grid cardBox">
        <div v-for="member in teamMembers" :key="member.name" class="BusiCard">
            <div class="avatar">
                <t-avatar size="60px" :image="member.avatarUrl"/>
            </div>
            <div class="info">
                <div class="infoName">{{ member.name }}</div>
                <div class="infoEmail">{{ member.email }}</div>
                <div class="description">
                    <p>{{ member.description }}</p>
                </div>
            </div>
            <div class="tags">
                <div v-for="role in member.roles" :key="role" class="infoTag">
                    <t-tag :theme="roleThemes[role]">{{ role }}</t-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BusinessCard",
    data() {
        return {
            teamMembers: [
                {
                    name: "张路通",
                    email: "zhanglutong6518@163.com",
                    avatarUrl: "https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/张路通.jpg",
                    description: "管理项目如指挥交响乐，开发代码像写诗。",
                    roles: ["项目经理", "开发工程师"]
                },
                {
                    name: "谢宁馨",
                    email: "1196443710@qq.com",
                    avatarUrl: "https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/谢宁馨.jpg",
                    description: "找需求像寻宝，部署项目比种花还轻松。",
                    roles: ["需求分析师", "部署工程师"]
                },
                {
                    name: "孙子强",
                    email: "1693880017@qq.com",
                    avatarUrl: "https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/孙子强.jpg",
                    description: "设计界面如绘画大师，搭建架构像堆积木。",
                    roles: ["界面设计师", "架构师"]
                },
                {
                    name: "余睿昊",
                    email: "2158605221@qq.com",
                    avatarUrl: "https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/于睿昊.jpg",
                    description: "分析需求如破谜题，测试系统像打怪升级。",
                    roles: ["需求分析师", "测试工程师"]
                },
                {
                    name: "张志栋",
                    email: "1071906317@qq.com",
                    avatarUrl: "https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/张志栋.jpg",
                    description: "设计数据库如雕刻艺术品，开发软件如写诗。",
                    roles: ["数据库工程师", "软件工程师"]
                },
                {
                    name: "赵雨萱",
                    email: "370225394@qq.com",
                    avatarUrl: "https://mp-c8d80741-4542-43cf-88e7-ecab5d7d5eb7.cdn.bspapp.com/后端图片/赵雨萱.jpg",
                    description: "调研需求像捞锦鲤，测试部署忙如小蜜蜂。",
                    roles: ["需求分析师", "测试工程师"]
                }]
            ,
            roleThemes: {
                "项目经理": "primary",
                "开发工程师": "success",
                "需求分析师": "primary",
                "部署工程师": "success",
                "界面设计师": "primary",
                "架构师": "success",
                "测试工程师": "success",
                "数据库工程师": "primary",
                "软件工程师": "success",
            },
        };
    },
};
</script>

<style scoped>
.grid {
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

.BusiCard:hover {
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

.description {
    margin-top: -8px;
}

.infoTag {
    margin-top: 10px;
}
</style>
