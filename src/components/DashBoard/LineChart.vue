<template>
    <div id="lineChart">

    </div>
</template>

<script>

import * as echarts from "echarts";

export default {
    // import 引入的组件需要注入到对象中才能使用
    name: "LineChart",
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
        showLineChart() {
            var chartDom = document.getElementById('lineChart');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: 'line'
                    }
                ],
                grid: { // 让图表占满容器
                    top: "20px",
                    left: "30px",
                    right: "20px",
                    bottom: "35px"
                }
            };
            option && myChart.setOption(option);
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        }

    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
        this.showLineChart();
    }
}
</script>

<style scoped>
#lineChart {
    width: 410px;
    height: 200px;
}

</style>
