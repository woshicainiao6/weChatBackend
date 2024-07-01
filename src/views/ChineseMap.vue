<template>
    <div style="display: flex;">
        <div class="chinaMap" ref="chinaMap" style="width: 59%; height: 600px;"></div>
        <div class="table" style="width: 30%; height: 600px; overflow-y: auto;">
            <table>
                <thead>
                <tr>
                    <th>省份</th>
                    <th>数据</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in sortedData" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.value }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import * as echarts from "echarts";
import Vue from "vue"; // 确保你已经安装了 echarts
import chinaJson from "@/assets/china.json"; // 引入 china.json 文件
Vue.prototype.$echarts = echarts;

export default {
    name: 'ChinaGraph',
    props: {},
    data() {
        return {
            data: []
        };
    },
    computed: {
        sortedData() {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return this.data.sort((a, b) => b.value - a.value);
        }
    },
    methods: {
        initCharts() {
            echarts.registerMap('china', chinaJson); // 注册中国地图

            const provinces = [
                '北京', '天津', '上海', '重庆', '河北', '河南', '云南', '辽宁', '黑龙江',
                '湖南', '安徽', '山东', '新疆', '江苏', '浙江', '江西', '湖北', '广西',
                '甘肃', '山西', '内蒙古', '陕西', '吉林', '福建', '贵州', '广东', '青海',
                '西藏', '四川', '宁夏', '海南', '台湾', '香港', '澳门'
            ];

            this.data = provinces.map(province => ({
                name: province,
                value: Math.floor(Math.random() * 1000) // 随机生成0到999的值
            }));

            let mapcharts = this.$echarts.init(this.$refs.chinaMap);
            window.addEventListener("resize", () => {
                mapcharts.resize();
            });

            mapcharts.setOption({
                title: {
                    text: '订单分布图',
                    left: 'center',
                    textStyle: {
                        fontSize: 24,
                        color: '#000'
                    }
                },
                series: [{
                    type: 'map',
                    map: 'china',
                    layoutCenter: ['50%', '50%'],
                    layoutSize: '100%',
                    label: {
                        show: true,
                        color: '#ffffff',
                        fontSize: 10,
                    },
                    itemStyle: {
                        areaColor: '#eee',
                        borderColor: '#24dafe',
                    },
                    roam: true,
                    zoom: 1.2,
                    emphasis: {
                        label: {
                            color: '#fff',
                            fontSize: 12,
                            fontWeight: 'bold'
                        },
                        itemStyle: {
                            areaColor: 'none',
                            borderColor: '#77ebff',
                            borderWidth: 2
                        }
                    },
                    data: this.data
                }],
                visualMap: [{
                    type: 'piecewise',
                    show: true,
                    pieces: [
                        {min: 0, max: 249},
                        {min: 250, max: 499},
                        {min: 500, max: 749},
                        {min: 750},
                    ],
                    textStyle: {
                        color: '#828994'
                    },
                    itemWidth: 64,
                    itemHeight: 12,
                    top: "top",
                    right: "0",
                    inRange: {
                        borderRadius: 4,
                        color: [
                            '#84bbff',
                            '#70b4ff',
                            '#61a7ff',
                            '#4d90f2',
                        ]
                    },
                }],
                tooltip: {
                    trigger: 'item',
                    backgroundColor: "#fff",
                    borderWidth: 0,
                    formatter: '地区：{b}<br/>数据：{c}'
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    bottom: '0',
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
            });
        }
    },
    mounted() {
        this.initCharts();
    }
}
</script>

<style scoped>
.chinaMap {
    border: 2px solid rgb(10, 169, 203);
    margin-right: 10px;
}
table {
    border: 2px solid rgb(10, 169, 203);
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}
th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    font-weight: bold;
}
th {
    color: white;
    background-color: rgb(77, 144, 242);
}
</style>
