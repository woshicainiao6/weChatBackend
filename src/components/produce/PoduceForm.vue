<template>
  <!--  scrollToFirstError="smooth" -->
    <t-form :data="formData" :rules="rules" ref="form" @submit="onSubmit">
        <t-row style="margin-bottom: 25px">
            <t-col :flex="2">
                <div>
                    <t-form-item label="商品id" name="id">
                        <t-input :style="{width: inputWidth}" v-model="formData.id" disabled></t-input>
                    </t-form-item>
                    <t-form-item label="保险标题" name="title">
                        <t-input :style="{width: inputWidth}" v-model="formData.title"
                                 placeholder="请输入保险标题"></t-input>
                    </t-form-item>
                    <t-form-item label="产品价格" name="price">
                        <t-input :style="{width: inputWidth}" v-model="formData.price" type="number" suffix="元"
                                 placeholder="请输入保险的价格"></t-input>
                    </t-form-item>
                    <t-form-item label="保险保额" name="sumInsured">
                        <t-input :style="{width: inputWidth}" v-model="formData.sumInsured" type="number" suffix="元"
                                 placeholder="请输入保险的保额"></t-input>
                    </t-form-item>
                    <t-form-item label="保险标签" name="tag">
                        <t-input :style="{width: inputWidth}" v-model="formData.tag"
                                 placeholder="请输入保险的标签"></t-input>
                    </t-form-item>
                    <t-form-item label="保险推荐范围" name="recommend">
                        <t-input :style="{width: inputWidth}" v-model="formData.recommend"
                                 placeholder="请输入保险推荐范围"></t-input>
                    </t-form-item>
                </div>
            </t-col>
            <t-col :flex="3">
                <div>
                    <template>
                        <t-image :src="formData.thumb" fit="fill"
                                 :style="{ width: '220px', height: '200px' }"/>
                    </template>

                </div>
            </t-col>
        </t-row>
        <t-form-item
                label="保险截止时间"
                name="endDate"
                :rules="[
        { required: true, message: '此项必填' },
        { date: { delimiters: ['/', '-', '.'] }, message: '日期格式有误' },
      ]"
        >
            <t-date-picker v-model="formData.endDate"></t-date-picker>
        </t-form-item>
        <t-form-item label="保险简介" help="请简单介绍一下保险的内容" name="description">
            <t-textarea v-model="formData.description" placeholder="请简单介绍一下保险的内容"></t-textarea>
        </t-form-item>
        <t-form-item label="保险详细介绍" help="请详细介绍一下保险的内容" name="info">
            <t-textarea v-model="formData.info" placeholder="请详细介绍一下保险的内容"></t-textarea>
        </t-form-item>
        <t-form-item style="margin-left: 100px">
            <t-space size="10px">
                <t-button theme="primary" type="submit">确定修改</t-button>
                <t-button theme="default" variant="base" @click="onReset">重置修改</t-button>
            </t-space>
        </t-form-item>
    </t-form>
</template>
<script>
import {getInsuranceById,modifyInsurance} from "@/api/produce";

export default {
    name: "produceForm",
    props: {
        produceData: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            inputWidth: "400px",
            formData: {},
            rules: {
                account: [
                    {
                        required: true,
                        message: '姓名必填',
                        type: 'error',
                        trigger: 'blur',
                    },
                    // trigger 默认为 'change'
                    {required: true, message: '姓名必填', type: 'error'},
                    {whitespace: true, message: '姓名不能为空'},
                    {
                        min: 2,
                        message: '至少需要两个字符，一个中文等于两个字符',
                        type: 'warning',
                        trigger: 'blur',
                    },
                    {
                        max: 10,
                        message: '姓名字符长度超出',
                        type: 'warning',
                        trigger: 'blur',
                    },
                ],
                description: [
                    {
                        validator: (val) => val.length >= 5,
                        message: '至少 5 个字，中文长度等于英文长度',
                        type: 'warning',
                    },
                    {
                        validator: (val) => val.length < 20,
                        message: '不能超过 20 个字，中文长度等于英文长度',
                        type: 'warning',
                    },
                ],
                age: [{required: true, message: '年龄必填', type: 'error'}],
                region: [{required: true, message: '籍贯必填', type: 'error'}],

                password: [
                    {required: true, message: '密码必填', type: 'error'},
                    {len: 8, message: '请输入 8 位密码', type: 'warning'},
                    {pattern: /[A-Z]+/, message: '密码必须包含大写字母', type: 'warning'},
                ],
                college: [{required: true, message: '此项必填'}],
                email: [
                    {required: true, message: '邮箱必填'},
                    {email: {ignore_max_length: true}, message: '请输入正确的邮箱地址'},
                ],
                gender: [{required: true, message: '性别必填'}],
                course: [
                    {required: true, message: '课程必填'},
                    {validator: (val) => val.length <= 2, message: '最多选择 2 门课程', type: 'warning'},
                ],
                hobby: [{required: true, message: '爱好必填', type: 'error'}],
                'content.url': [
                    {required: true, message: '个人网站必填'},
                    {
                        url: {
                            protocols: ['http', 'https', 'ftp'],
                            require_protocol: true,
                        },
                        message: '请输入正确的个人主页',
                    },
                ],
            },
        };
    }, mounted() {
    }, created() {
        this.formData=this.produceData
    },
    methods: {
        onReset() {
            this.getInsuranceByIdFn(this.formData.id)
            this.$message.success('重置成功');
            console.log('formData', this.formData);
        },
        onSubmit({validateResult, firstError}) {
            if (validateResult === true) {
                this.modifyInsuracneFn(this.formData)
                this.$message.success('提交成功');
            } else {
                console.log('Errors: ', validateResult);
                this.$message.warning(firstError);
            }
        },
        async getInsuranceByIdFn(id) {
            await getInsuranceById(id).then(res => {
                this.formData = res.data.data;
                this.isDataLoaded=true;
            })
        },
        modifyInsuracneFn(insurance){
            modifyInsurance(insurance).then(res=>{
                console.log(res.data)
            })
        },
        handleClear() {
            this.$refs.form.clearValidate();
        },
    },
};
</script>

<style scoped>
.demo-select-base {
    width: 300px;
}
</style>
