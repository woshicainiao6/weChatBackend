<template>
    <div>
        <div class="head">
            <t-button theme="primary" @click="goBack">
                <ChevronLeftIcon slot="icon"/>
                返回
            </t-button>
        </div>
        <div class="Form">
            <PoduceForm v-if="isDataLoaded" :produceData="produceData" :showStyle="showStyle"></PoduceForm>
        </div>
    </div>
</template>

<script>
import {
    ChevronLeftIcon
} from 'tdesign-icons-vue';
import PoduceForm from "@/components/produce/PoduceForm.vue";
import {getInsuranceById} from "@/api/produce"


export default {
    name: 'ModifyProduce',
    components: {
        ChevronLeftIcon,
        PoduceForm,
    },
    data() {
        return {
            produceData: {},
            productId: this.$route.params.id,
            isDataLoaded: false,
            showStyle:"modify"
        };
    },
    mounted() {
        // 可以在此处通过productId获取商品的详细信息
    },
    created() {
        this.getInsuranceByIdFn(this.$route.params.id)
    },
    methods: {
        goBack() {
            this.$router.push('/produce');
        },
        async getInsuranceByIdFn(id) {
            await getInsuranceById(id).then(res => {
                this.produceData = res.data.data;
                this.isDataLoaded=true;
            })
        }
    }
};
</script>
<style>
.head {
    width: 100%;
    height: 40px;
    background-color: white;
}

.Form {
    background-color: white;
    height: fit-content;
}
</style>