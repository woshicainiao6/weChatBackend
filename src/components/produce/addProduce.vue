<template>
    <div>
        <div class="head">
            <t-button theme="primary" @click="goBack">
                <ChevronLeftIcon slot="icon"/>
                返回
            </t-button>
        </div>
        <div class="Form">
            <PoduceForm :produceData="produceData" :showStyle="showStyle"></PoduceForm>
        </div>
    </div>
</template>

<script>
import {
    ChevronLeftIcon
} from 'tdesign-icons-vue';
import PoduceForm from "@/components/produce/PoduceForm.vue";

export default {
    name: 'addProduce',
    components: {
        ChevronLeftIcon,
        PoduceForm,
    },
    data() {
        return {
            produceData: {},
            showStyle:"add"
        };
    },
    mounted() {
        // 可以在此处通过productId获取商品的详细信息
    },
    created() {

    },
    methods: {
        goBack() {
            this.$router.push('/produce');
        },
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
    height: 2000px;
}
</style>