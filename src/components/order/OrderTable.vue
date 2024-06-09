<template>
  <!-- 父元素宽度不能超过 100% -->
    <div class="tdesign-demo-block-column tdesign-demo__table" style="width: 100%">

        <div class="buttons">
        </div>
        <t-table
                rowKey="index"
                :data="computeData"
                :footData="[{}]"
                :columns="columns"
                :table-layout="tableLayout"
                table-content-width='1350px'
                style="margin-top: 10px"
                height="500px"
                :fixedRows="fixedTopAndBottomRows ? [2, 2] : undefined"
                :scroll="virtualScroll ? { type: 'virtual' } : undefined"
                :stripe="stripe"
                bordered
                lazyLoad
        >
            <template #operation="{ row }">
                <t-link theme="primary" hover="color" @click="rehandleClickOp(row)">
                    查看详情
                </t-link>
            </template>
        </t-table>
    </div>
</template>
<script lang="jsx">

export default {
    name: "OrderTable",
    props: {
        allOrderData: {
            type: Array,
            required: true,
        }, insuranceData: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            virtualScroll: false,
            fixedTopAndBottomRows: false,
            stripe: false,
            tableLayout: 'fixed',
            data: this.allOrderData,
            length: this.allOrderData.length,
            columns: [{
                colKey: 'userId',
                title: '购买人编号',
                width: '100',
                foot: `共${length}条`,
                fixed: 'left',
            },
                {
                    colKey: 'orderId',
                    title: '订单编号',
                    width: 140,
                },
                {
                    colKey: 'insuranceId',
                    title: '商品名称',
                    width: '100',
                    foot: '-',
                },
                {
                    colKey: 'orderDate',
                    title: '订单时间',
                    width: '150',
                    foot: '-',
                },
                {
                    colKey: 'orderStatus',
                    title: '订单状态',
                    width: '100',
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
                    foot: '-',
                },
                {
                    colKey: 'applicantName',
                    title: '购买人姓名',
                    width: '120',
                    foot: '-',
                },
                {
                    colKey: 'operation',
                    title: '操作',
                    width: '150',
                    foot: '-',
                    fixed: 'right',
                },],
        };
    },
    watch: {},
    computed: {
        // 生成处理了空属性的列配置
        computeData() {
            return this.allOrderData.map(item => {
                const newItem = {};
                for (const key in item) {
                    if (Object.hasOwnProperty.call(item, key)) {
                        newItem[key] = item[key] || "用户暂未填写";
                    }
                    if (key === "orderDate") {
                        newItem[key] = this.formatDate(item[key])
                    }
                    if (key === 'insuranceId') {
                        newItem[key] =this.getInsuranceTitle(newItem[key])
                    }
                }
                return newItem;
            });
        }
    },
    methods: {
        formatDate(dateTimeString) {
            const date = new Date(dateTimeString);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hour = String(date.getHours()).padStart(2, '0');
            const min = String(date.getMinutes()).padStart(2, '0');
            return `${year}年${month}月${day}日${hour}时${min}分`;
        },
        rehandleClickOp(context) {
            console.log(context);
        },
        getInsuranceTitle(id) {
            return this.insuranceData.filter(item=>item.id===id)[0]['title']
        }
    },
    mounted() {

    }
};
</script>

<style scoped>
.link {
    cursor: pointer;
}
</style>
