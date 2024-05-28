<template>
    <div>
        <div>
            <div class="breadcrumb">
                <BreadCrumb :page="breadcrumbData"></BreadCrumb>
            </div>
            <div class="Mainbox">
                <div class="title">
                    <t-space :size="82" breakLine>
                        <div class="card">
                            <t-space align="center">
                                <t-icon name="chart" class="icon"/>
                                <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase"
                                             trendPlacement="right"/>
                            </t-space>
                        </div>
                        <div class="card">
                            <t-space align="center">
                                <t-icon name="chart" class="icon"/>
                                <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase"
                                             trendPlacement="right"/>
                            </t-space>
                        </div>
                        <div class="card">

                            <t-space align="center">
                                <t-icon name="internet" class="icon" style="border-radius: 50%"/>
                                <t-statistic title="Total Assets" :value="52.18" unit="%" trend="decrease"/>
                            </t-space>
                        </div>
                        <div class="card">

                            <t-space align="center">
                                <t-icon name="chart" class="icon"/>
                                <t-statistic title="Total Assets" :value="82.76" unit="%" trend="increase"
                                             trendPlacement="right"/>
                            </t-space>
                        </div>
                        <div class="card">
                            <t-space align="center">
                                <t-icon name="internet" class="icon" style="border-radius: 50%"/>
                                <t-statistic title="Total Assets" :value="52.18" unit="%" trend="decrease"/>
                            </t-space>
                        </div>
                    </t-space>

                </div>
                <div class="chartBox">
                    <div class="card LineChart">
                        <LineChart></LineChart>
                    </div>
                    <div class="card PieChart">
                        <PieChart></PieChart>
                    </div>
                    <div class="card BarChart">
                        <BarChart></BarChart>
                    </div>
                </div>
                <div class="card BusinessCard">
                    <p class="textTitle">项目成员</p>
                    <BusinessCard></BusinessCard>
                </div>
                <div class="footer">
                    <div class="TableView">
                        <TableView></TableView>
                    </div>
                    <div class="card radarChart">
                        <radarChart></radarChart>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import LineChart from "@/components/DashBoard/LineChart.vue";
import PieChart from "@/components/DashBoard/PieChart.vue";
import BarChart from "@/components/DashBoard/BarChart.vue";
import BusinessCard from "@/components/DashBoard/BusinessCard.vue";
import TableView from "@/components/DashBoard/TableView.vue";
import radarChart from "@/components/DashBoard/RadarChart.vue";
import BreadCrumb from "@/components/Breadcrumb/BreadCrumb.vue";

export default {
    name: "DashBoard",
    components: {
        LineChart,
        PieChart,
        BarChart,
        BusinessCard,
        TableView, radarChart, BreadCrumb
    },
    props: {},

    data() {
        // 这里存放数据
        return {
            breadcrumbData:[{
                name:'仪表盘',
                url:"/DashBoard"
            }]
        }
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
.Mainbox{
    margin-left: 20px;
}
.icon {
    font-size: 32px;
    color: var(--td-brand-color);
    background: var(--td-brand-color-light);
    border-radius: var(--td-radius-medium);
    padding: 12px;
}

.title {
    display: flex;
    /*justify-content: center;*/
    margin-top: 20px;
}

.card {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    width: fit-content;
}

.grayCard {
    background-color: #ebeff2;
    border: 0px solid black;
    border-radius: 10px;
    padding: 10px;
    width: fit-content;
}

.card.LineChart {
    margin-top: 10px;
    width: fit-content;
    height: fit-content;
    margin-right: 26px;
}

.card.PieChart {
    margin-top: 10px;
    width: fit-content;
    height: fit-content;
    margin-right: 26px;

}

.card.BarChart {
    margin-top: 10px;
    width: fit-content;
    height: fit-content;
    margin-right: 26px;

}

.chartBox {
    display: flex;
}

.BusinessCard {
    margin-top: 10px;
}

.footer {
    margin-top: 10px;
    display: flex;
    height: 800px;

}

.TableView {
    width: 800px;

}

.textTitle {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
}

.radarChart {
    height: fit-content;
    margin-left: 15px;
}
</style>

