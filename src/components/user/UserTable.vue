<template>
  <!-- 父元素宽度不能超过 100% -->
    <div class="tdesign-demo-block-column tdesign-demo__table" style="width: 100%">


        <!-- 如果希望表格列宽自适应，设置 `table-layout: auto` 即可。需同时设置 table-content-width -->
        <!-- fixedRows: [2, 2] 表示冻结表格的头两行和尾两行 -->
        <!-- footData 可以是多行，均支持固定在底部 -->
        <t-table
                rowKey="index"
                :data="computeData"
                :footData="[{}]"
                :columns="updatedColumns"
                :table-layout="tableLayout"
                table-content-width='1350px'
                style="margin-top: 10px"
                height="fix—content"
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
// import {ErrorCircleFilledIcon, CheckCircleFilledIcon, CloseCircleFilledIcon} from 'tdesign-icons-vue';
export default {
    name: "UserTable",
    props: {
        userData: {
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
            data: this.userData,
            length: 0,
            columns: [
                {
                    colKey: 'user_id',
                    title: '用户ID',
                    width: 70,
                    foot: `共0条`,
                    fixed: 'left',
                },
                {
                    colKey: 'username',
                    title: '申请人',
                    width: '100',
                    fixed: 'left',
                },
                {
                    colKey: 'phone_number',
                    title: '手机号',
                    width: 120,
                },
                {
                    colKey: 'realName',
                    title: '真是姓名',
                    width: '120',
                    foot: '-',
                },
                {
                    colKey: 'idNumber',
                    title: '身份证号',
                    width: '180',
                    foot: '-',
                },
                {
                    colKey: 'historySearch',
                    title: '用户喜好',
                    width: '180',
                    foot: '-',
                },
                {
                    colKey: 'registration_date',
                    title: '注册日期',
                    width: '170',
                    foot: '-',
                },
                {
                    colKey: 'operation',
                    title: '操作',
                    width: '150',
                    foot: '-',
                    fixed: 'right',
                },
            ],
        };
    },
    computed: {
        userCount() {
            return this.userData.length;
        },
        updatedColumns() {
            return this.columns.map(column => {
                if (column.colKey === 'user_id') {
                    return {
                        ...column,
                        foot: `共${this.userCount}条`
                    };
                }
                return column;
            });
        },
        computeData() {
            return this.userData.map(item => {
                const newItem = {};
                for (const key in item) {
                    if (Object.hasOwnProperty.call(item, key)) {
                        newItem[key] = item[key] || "用户暂未填写";
                    }
                    if (key === "registration_date") {
                        newItem[key] = this.formatDate(item[key])
                    }
                }
                return newItem;
            });
        }
    },
    watch: {},
    methods: {
        rehandleClickOp(context) {
            this.$router.push(`/ViewUser/${context['user_id']}`)
        },
        formatDate(dateTimeString) {
            const date = new Date(dateTimeString);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hour = String(date.getHours()).padStart(2, '0');
            const min = String(date.getMinutes()).padStart(2, '0');
            return `${year}年${month}月${day}日${hour}时${min}分`;
        },
    },
    mounted() {
        console.log()
        console.log(this.userData)
    },
    created() {
        this.length = this.userData.length
    }
};
</script>

<style scoped>
.link {
    cursor: pointer;
}
</style>
