<template>
    <div>
        <t-form :data="formData" :rules="rules" ref="form" @submit="onSubmit">
            <t-form-item label="订单ID" name="orderId">
                <t-input :style="{width: inputWidth}" v-model="formData.orderId" disabled></t-input>
            </t-form-item>
            <t-form-item label="购买用户ID" name="userID">
                <t-input :style="{width: inputWidth}" v-model="formData.userId"
                         placeholder="请输入用户ID" :disabled="isDisable"></t-input>
            </t-form-item>
            <t-form-item label="购买保险ID" name="InsuranceID">
                <t-input :style="{width: inputWidth}" v-model="formData.insuranceId"
                         placeholder="请输入购买保险ID" :disabled="isDisable"></t-input>
            </t-form-item>
            <t-form-item label="投保人姓名" name="applicantName">
                <t-input :style="{width: inputWidth}" v-model="formData.applicantName"
                         placeholder="投保人姓名" :disabled="isDisable"></t-input>
            </t-form-item>
            <t-form-item label="投保人证件号" name="applicantIdNumber">
                <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.applicantIdNumber"
                         placeholder="请输入投保人身份证号"></t-input>
            </t-form-item>
            <t-form-item label="投保人手机号" name="applicantPhone">
                <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.realName"
                         placeholder="请输入真实姓名"></t-input>
            </t-form-item>
            <t-form-item label="被投保人姓名" name="insuredName">
                <t-input :style="{width: inputWidth}" v-model="formData.insuredName"
                         placeholder="被投保人姓名" :disabled="isDisable"></t-input>
            </t-form-item>
            <t-form-item label="被投保人证件号" name="insuredIdNumber">
                <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.insuredIdNumber"
                         placeholder="请输入投保人身份证号"></t-input>
            </t-form-item>
            <t-form-item label="关系" name="relationship">
                <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.relationship"
                         placeholder="请输入投保人和被投保人之间的关系"></t-input>
            </t-form-item>
            <t-form-item
                    label="订单时间"
                    name="endDate"
            >
                <t-date-picker v-model="formData.orderDate" :disabled="isDisable"></t-date-picker>
            </t-form-item>
            <t-form-item
                    label="订单截止时间"
                    name="endDate"
            >
                <t-date-picker v-model="formData.endTime" :disabled="isDisable"></t-date-picker>
            </t-form-item>
            <t-form-item label="订单状态" name="orderStatus">
                <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.orderStatus"
                         placeholder="订单状态"></t-input>
            </t-form-item>
            <t-form-item style="margin-left: 100px" v-if="this.showStyle!=='view'">
                <t-space size="10px" v-if="showStyle==='modify'">
                    <t-button theme="primary" type="submit">确定修改</t-button>
                    <t-button theme="default" variant="base">重置修改</t-button>
                </t-space>
                <t-space size="10px" v-else-if="showStyle==='add'">
                    <t-button theme="primary" type="submit">添加</t-button>
                    <t-button theme="default" variant="base" @click="onReset">重置</t-button>
                </t-space>
            </t-form-item>
        </t-form>
    </div>
</template>

<script>

import {addOrder} from "@/api/order";

export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {},
    props: {
        orderData: {
            type: Array,
            required: true,
        }, showStyle: {
            type: String,
            required: true,
        }
    },
    data() {
        // 这里存放数据
        return {
            inputWidth: "400px",
            formData: this.orderData,
        }
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {
        onReset() {
            this.formData = {}
            this.$message.success('重置成功');
        },
        onSubmit({validateResult, firstError}) {
            if (validateResult === true) {
                if (this.showStyle === "add") {
                    this.addOrder()
                    this.$message.success('添加成功');
                } else {
                    this.modifyInsuracneFn(this.formData)
                    this.$message.success('提交成功');
                }
                this.$router.push("/order")
                setTimeout(() => {
                    location.reload();
                }, 1000)
            } else {
                console.log('Errors: ', validateResult);
                this.$message.warning(firstError);
            }
        },
        addOrder() {
            this.formData.orderId = new Date().toISOString().substring(0, 25).replace(/[-:.]/g, '') + this.formData.userId
            addOrder(this.formData).then(res => {
                console.log(res.data)
            })
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
        this.isDisable = this.showStyle === "view";
        console.log(this.orderData)
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
    }
}
</script>

<style scoped>
</style>
