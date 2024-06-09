<template>
    <div>
        <div>
            <div class="breadcrumb">
                <BreadCrumb :page="breadcrumbData"></BreadCrumb>
            </div>
            <div class="Mainbox">
                <div class="title">
                    <t-space :size="100" breakLine>
                        <div class="card">
                            <t-space align="center">
                                <t-icon name="chart" class="icon"/>
                                <t-statistic title="总订单数" :value="allData[1]['orderData'].length" unit="单"
                                             :animation="{valueFrom: 0,duration: 2000,}"
                                             :animation-start="start"
                                             trend="increase"
                                             trendPlacement="right"/>
                            </t-space>
                        </div>
                        <div class="card">
                            <t-space align="center">
                                <t-icon name="chart" class="icon"/>
                                <t-statistic title="总用户数" :value="allData[0]['userData'].length" unit="人"
                                             :animation="{valueFrom: 0,duration: 2000,}"
                                             :animation-start="start"
                                             trend="increase"
                                             trendPlacement="right"/>
                            </t-space>
                        </div>
                        <div class="card">

                            <t-space align="center">
                                <t-icon name="internet" class="icon" style="border-radius: 50%"/>
                                <t-statistic title="日销售增长" :value="52.18" unit="%"
                                             :animation="{valueFrom: 0,duration: 2000,}"
                                             :animation-start="start"
                                             trend="decrease"/>
                            </t-space>
                        </div>
                        <div class="card">

                            <t-space align="center">
                                <t-icon name="chart" class="icon"/>
                                <t-statistic title="月销售增长" :value="82.76" unit="%"
                                             :animation="{valueFrom: 0,duration: 2000,}"
                                             :animation-start="start"
                                             trend="increase"
                                             trendPlacement="right"/>
                            </t-space>
                        </div>
                        <div class="card">
                            <t-space align="center">
                                <t-icon name="internet" class="icon" style="border-radius: 50%"/>
                                <t-statistic title="年销售增长" :value="52.18" unit="%"
                                             :animation="{valueFrom: 0,duration: 2000,}"
                                             :animation-start="start"
                                             trend="decrease"/>
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
                        <TableView :OrderData="allData[1]['orderData']"></TableView>
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
import {getAllUser} from "@/api/user"
import {getAllOrder} from "@/api/order"

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
            breadcrumbData: [{
                name: '仪表盘',
                url: "/DashBoard"
            }],
            allData: [],
            start:false,
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        async getAllData() {
            await getAllUser().then(res => {
                this.allData.push({'userData': res.data.data})
            });
            await getAllOrder().then(res => {
                this.allData.push({'orderData': res.data.data})
            })
            console.log(this.allData)
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
        this.getAllData();
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
        this.start=true
    }
}
</script>

<style scoped>
.Mainbox {
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

