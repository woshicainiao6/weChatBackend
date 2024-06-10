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
                                 placeholder="请输入保险标题" :disabled="isDisable"></t-input>
                    </t-form-item>
                    <t-form-item label="产品价格" name="price">
                        <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.price"
                                 type="number" suffix="元"
                                 placeholder="请输入保险的价格"></t-input>
                    </t-form-item>
                    <t-form-item label="保险保额" name="sumInsured">
                        <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.sumInsured"
                                 type="number" suffix="元"
                                 placeholder="请输入保险的保额"></t-input>
                    </t-form-item>
                    <t-form-item label="保险标签" name="tag">
                        <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.tag"
                                 placeholder="请输入保险的标签"></t-input>
                    </t-form-item>
                    <t-form-item label="保险推荐范围" name="recommend">
                        <t-input :style="{width: inputWidth}" :disabled="isDisable" v-model="formData.recommend"
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
            <t-date-picker v-model="formData.endDate" :disabled="isDisable"></t-date-picker>
        </t-form-item>
        <t-form-item label="保险简介" help="请简单介绍一下保险的内容" name="description">
            <t-textarea v-model="formData.description" :disabled="isDisable"
                        placeholder="请简单介绍一下保险的内容"></t-textarea>
        </t-form-item>
        <t-form-item label="保险详细介绍" help="请详细介绍一下保险的内容" name="info">
            <t-textarea v-model="formData.info" :disabled="isDisable"
                        placeholder="请详细介绍一下保险的内容"></t-textarea>
        </t-form-item>
        <t-form-item style="margin-left: 100px" v-if="this.showStyle!=='view'">
            <t-space size="10px" v-if="showStyle==='modify'">
                <t-button theme="primary" type="submit">确定修改</t-button>
                <t-button theme="default" variant="base" @click="onReset">重置修改</t-button>
            </t-space>
            <t-space size="10px" v-else-if="showStyle==='add'">
                <t-button theme="primary" type="submit">添加</t-button>
                <t-button theme="default" variant="base" @click="onReset">重置</t-button>
            </t-space>
        </t-form-item>
    </t-form>
</template>
<script>
import {getInsuranceById, modifyInsurance, addInsurance} from "@/api/produce";

export default {
    name: "produceForm",
    props: {
        produceData: {
            type: Array,
            required: true,
        }, showStyle: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            inputWidth: "400px",
            formData: {},
            isDisable: false,
        };
    }, mounted() {
    }, created() {
        this.formData = this.produceData
        console.log(this.showStyle)
        if (this.showStyle === "view") {
            this.isDisable = true
        } else if (this.showStyle === "modify") {
            this.isDisable = false
        } else {
            this.formData = {}
        }
    },
    methods: {
        onReset() {
            this.getInsuranceByIdFn(this.formData.id)
            this.$message.success('重置成功');
            console.log('formData', this.formData);
        },
        onSubmit({validateResult, firstError}) {
            if (validateResult === true) {
                if (this.showStyle === "add") {
                    this.addProduce()
                    this.$message.success('添加成功');
                } else {
                    this.modifyInsuracneFn(this.formData)
                    this.$message.success('提交成功');
                }
                this.$router.push("/produce")
                setTimeout(()=>{
                    location.reload();
                },1000)
            } else {
                console.log('Errors: ', validateResult);
                this.$message.warning(firstError);
            }
        },
        addProduce() {
            addInsurance(this.formData).then(res => {
                console.log(res.data)
            })
        }
        ,
        async getInsuranceByIdFn(id) {
            await getInsuranceById(id).then(res => {
                this.formData = res.data.data;
                this.isDataLoaded = true;
            })
        },
        modifyInsuracneFn(insurance) {
            modifyInsurance(insurance).then(res => {
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
