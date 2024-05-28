<template>
    <div>
        <div id="BarChart">

        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    // import 引入的组件需要注入到对象中才能使用
    name: "BarChart",
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
        showBarChart() {
            var chartDom = document.getElementById('BarChart');
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
                grid: { // 让图表占满容器
                    top: "20px",
                    left: "30px",
                    right: "20px",
                    bottom: "35px"
                },
                series: [
                    {
                        data: [
                            120,
                            {
                                value: 200,
                                itemStyle: {
                                    color: '#a90000'
                                }
                            },
                            150,
                            80,
                            70,
                            110,
                            130
                        ],
                        type: 'bar'
                    }
                ]
            };
            option && myChart.setOption(option);
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
        this.showBarChart()
    }
}
</script>

<style scoped>
#BarChart {
    width: 410px;
    height: 200px;
}
</style>
