<template>
    <div>
        <div id="radarChart">

        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
    // import 引入的组件需要注入到对象中才能使用
    name: "radarChart",
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
        showRadarChart() {
            var chartDom = document.getElementById('radarChart');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
                title: {
                },
                legend: {},
                radar: [
                    {
                        indicator: [
                            {text: '汽车'},
                            {text: '人寿'},
                            {text: '健康'},
                            {text: '儿童'},
                            {text: '意外'}
                        ],
                        center: ['25%', '50%'],
                        radius: 120,
                        startAngle: 90,
                        splitNumber: 4,
                        shape: 'circle',
                        axisName: {
                            formatter: '【{value}】',
                            color: '#428BD4'
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                                shadowColor: 'rgba(0, 0, 0, 0.2)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(211, 253, 250, 0.8)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(211, 253, 250, 0.8)'
                            }
                        }
                    },
                    {
                        indicator: [
                            {text: '汽车', max: 150},
                            {text: '人寿', max: 150},
                            {text: '健康', max: 150},
                            {text: '儿童', max: 120},
                            {text: '意外', max: 108},
                            {text: '养老', max: 72}
                        ],
                        center: ['75%', '50%'],
                        radius: 120,
                        axisName: {
                            color: '#fff',
                            backgroundColor: '#666',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    }
                ],
                series: [
                    {
                        type: 'radar',
                        emphasis: {
                            lineStyle: {
                                width: 4
                            }
                        },
                        data: [
                            {
                                value: [100, 8, 0.4, -80, 2000],
                                name: '人寿保险'
                            },
                            {
                                value: [60, 5, 0.3, -100, 1500],
                                name: '健康保险',
                                areaStyle: {
                                    color: 'rgba(255, 228, 52, 0.6)'
                                }
                            }
                        ]
                    },
                    {
                        type: 'radar',
                        radarIndex: 1,
                        data: [
                            {
                                value: [120, 118, 130, 100, 99, 70],
                                name: '儿童保险',
                                symbol: 'rect',
                                symbolSize: 12,
                                lineStyle: {
                                    type: 'dashed'
                                },
                                label: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value;
                                    }
                                }
                            },
                            {
                                value: [100, 93, 50, 90, 70, 60],
                                name: '车辆保险',
                                areaStyle: {
                                    color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                                        {
                                            color: 'rgba(255, 145, 124, 0.1)',
                                            offset: 0
                                        },
                                        {
                                            color: 'rgba(255, 145, 124, 0.9)',
                                            offset: 1
                                        }
                                    ])
                                }
                            }
                        ]
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
        this.showRadarChart();
    }
}
</script>

<style scoped>
#radarChart{
    width: 510px;
    height: 300px;
}
</style>
