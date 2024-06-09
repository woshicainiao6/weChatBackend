<template>
    <div class="tdesign-demo__table">
        <div class="table">
            <t-table :data="computeData" :columns="columns" max-height="400px" height="300px" rowKey="property"
                     verticalAlign="top" lazyLoad>
                <!-- 插槽方式 自定义单元格：cell 的值为插槽名称，参数有：{col, colIndex, row, rowIndex}  -->
                <template #type-slot-name="{ col, row }"> {{ row[col.colKey] }}</template>
            </t-table>
        </div>
    </div>
</template>
<script lang="jsx">
import {ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon} from 'tdesign-icons-vue';
import formatDate from "@/util/formDtae"
export default {
    name: "TableView",
    components: {
        // ErrorCircleFilledIcon,
        // CheckCircleFilledIcon,
        // CloseCircleFilledIcon,
    },
    props: {
        OrderData: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            data: this.OrderData,
            columns: [
                {
                    colKey: 'applicantName',
                    title: '申请人',
                    // type-slot-name 会被用于自定义单元格的插槽名称
                    cell: 'type-slot-name',
                    width: 80,
                },
                {
                    title: '支付状态',
                    // 没有 cell 的情况下， platform 会被用作自定义单元格的插槽名称
                    colKey: 'orderStatus',
                    width: 120,
                    cell: (h, {row}) => {
                        const statusNameListMap = {
                            '已支付': {label: '支付成功', theme: 'success', icon: <CheckCircleFilledIcon/>},
                            '已取消': {label: '支付取消', theme: 'danger', icon: <CloseCircleFilledIcon/>},
                            '已超时': {label: '支付超时', theme: 'warning', icon: <ErrorCircleFilledIcon/>},
                        };
                        return (
                            <t-tag shape="round" theme={statusNameListMap[row['orderStatus']].theme}
                                   variant="light-outline">
                                {statusNameListMap[row['orderStatus']].icon}
                                {statusNameListMap[row['orderStatus']].label}
                            </t-tag>
                        );
                    },
                },
                {
                    colKey: 'orderId',
                    title: '订单号',
                    // 使用 cell 方法自定义单元格：
                    cell: (h, {col, row}) => <div>{row[col.colKey]}</div>,
                    width: 200
                },
                {
                    title: '身份证号',
                    colKey: 'applicantIdNumber',
                    // render 即可渲染表头，也可以渲染单元格。但 cell 只能渲染单元格，title 只能渲染表头
                },
                {
                    colKey: 'orderDate', title: '购买时间',
                    width: 210
                },
            ],
        };
    },
    methods: {

    },
    computed: {
        computeData() {
            return this.OrderData.map(item => {
                const newItem = {};
                for (const key in item) {
                    if (Object.hasOwnProperty.call(item, key)) {
                        newItem[key] = item[key] || "暂无信息";
                    }
                    if (key === "orderDate") {
                        newItem[key] = formatDate(item[key])
                    }
                }
                return newItem;
            });
        }
    },
    mounted() {
    }
};
</script>

<style scoped>
.link {
    color: #0052d9;
    text-decoration: none;
}

.table {
    height: 100px;
}
</style>
