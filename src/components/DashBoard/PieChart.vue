<template>
    <div>
        <div id="PieChart">

        </div>
    </div>
</template>

<script>
import * as echarts from "echarts";

export default {
    // import 引入的组件需要注入到对象中才能使用
    name: "PieChart",
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
    methods: {
        showPieChart() {
            var chartDom = document.getElementById('PieChart');
            var myChart = echarts.init(chartDom);
            var option;

// This example requires ECharts v5.5.0 or later
            option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '70%'],
                        // adjust the start and end angle
                        startAngle: 180,
                        endAngle: 360,
                        data: [
                            {value: 1048, name: 'Search Engine'},
                            {value: 735, name: 'Direct'},
                            {value: 580, name: 'Email'},
                            {value: 484, name: 'Union Ads'},
                            {value: 300, name: 'Video Ads'}
                        ]
                    }
                ],
            };
            option && myChart.setOption(option);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
        this.showPieChart()
    }
}
</script>

<style scoped>
#PieChart {
    width: 410px;
    height: 200px;
}
</style>
