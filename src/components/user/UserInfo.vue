<template>
    <div>
        <t-form :data="formData" :rules="rules" ref="form" @submit="onSubmit">
            <t-row style="margin-bottom: 25px">
                <t-col :flex="2">
                    <div>
                        <t-form-item label="用户ID" name="id">
                            <t-input :style="{width: inputWidth}" v-model="formData.user_id" disabled></t-input>
                        </t-form-item>
                        <t-form-item label="用户名" name="name">
                            <t-input :style="{width: inputWidth}" v-model="formData.username"
                                     placeholder="请输入用户名" :disabled="isDisable"></t-input>
                        </t-form-item>
                        <t-form-item label="密码" name="passWord">
                            <t-input :style="{width: inputWidth}" v-model="formData.password"
                                     placeholder="请输入密码" type="password" :disabled="isDisable"></t-input>
                        </t-form-item>
                        <t-form-item label="性别" name="gender">
                            <t-input :style="{width: inputWidth}" v-model="formData.gender"
                                     placeholder="用户性别" :disabled="isDisable"></t-input>
                        </t-form-item>
                        <t-form-item label="身份证号" name="IdNumber">
                            <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.idNumber"
                                     placeholder="请输入身份证号"></t-input>
                        </t-form-item>
                        <t-form-item label="真实名称" name="realname">
                            <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.realName"
                                     placeholder="请输入真实姓名"></t-input>
                        </t-form-item>
                        <t-form-item label="手机号" name="phoneNumber">
                            <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.phone_number"
                                     placeholder="请输入手机号"></t-input>
                        </t-form-item>

                        <t-form-item label="邮箱" name="email">
                            <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.email"
                                     placeholder="请输入邮箱"></t-input>
                        </t-form-item>
                    </div>
                </t-col>
                <t-col :flex="3">
                    <div>
                        <template>
                            <t-image :src="formData.avatarUrl" fit="fill"
                                     :style="{ width: '220px', height: '200px' }"/>
                        </template>
                    </div>
                </t-col>
            </t-row>
            <t-form-item label="地址" name="address">
                <t-input :style="{width: '150px'}" :disabled="isDisable" v-model="formData.address_province"
                         placeholder="请输入省份"></t-input>
                -
                <t-input :style="{width: '150px'}" :disabled="isDisable" v-model="formData.address_city"
                         placeholder="请输入城市"></t-input>
                -
                <t-input :style="{width: '150px'}" :disabled="isDisable" v-model="formData.address_county"
                         placeholder="请输入县/区"></t-input>
                -
                <t-input :style="{width: '150px'}" :disabled="isDisable" v-model="formData.address_specific"
                         placeholder="请输入详细地区"></t-input>
            </t-form-item>
            <t-form-item label="连续登录天数" name="continuousDays">
                <t-input :style="{width: inputWidth}" placeholder="连续登录天数" disabled
                         v-model="formData.continuousDays"></t-input>
            </t-form-item>
            <t-form-item label="用户金币数" name="golds">
                <t-input :style="{width: inputWidth}" placeholder="用户金币数" disabled
                         v-model="formData.golds"></t-input>
            </t-form-item>
            <t-form-item
                    label="注册时间"
                    name="endDate"
            >
                <t-date-picker v-model="formData.registration_date" disabled></t-date-picker>
            </t-form-item>
            <t-form-item
                    label="最后登录时间"
                    name="endDate"
            >
                <t-date-picker v-model="formData.lastSignInDate" disabled></t-date-picker>
            </t-form-item>
            <t-form-item label="搜索历史" help="用户历史搜索记录" name="description">
                <t-textarea v-model="formData.historySearch" disabled
                            placeholder="用户历史搜索记录"></t-textarea>
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

import {addUser} from "@/api/user";

export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {},
    props: {
        userData: {
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
            formData: this.userData,
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
                    this.addUser()
                    this.$message.success('添加成功');
                } else {
                    this.modifyInsuracneFn(this.formData)
                    this.$message.success('提交成功');
                }
                this.$router.push("/user")
                setTimeout(() => {
                    location.reload();
                }, 1000)
            } else {
                console.log('Errors: ', validateResult);
                this.$message.warning(firstError);
            }
        },
        addUser() {
            addUser(this.formData).then(res => {
                console.log(res.data)
            })
        }
    },
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created() {
        this.isDisable = this.showStyle === "view";
        console.log(this.userData)
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted() {
    }
}
</script>

<style scoped>
</style>
