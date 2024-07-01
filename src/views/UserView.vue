<template>
    <div>
        <BreadCrumb :page="breadcrumbData"></BreadCrumb>
        <operatView @search_event="searchEvent" :operaEvent="operaEvent"></operatView>
        <div class="userTable">
            <UserTable :userData="searchData"></UserTable>
        </div>
    </div>
</template>

<script>
import UserTable from "@/components/user/UserTable.vue";
import BreadCrumb from "@/components/Breadcrumb/BreadCrumb.vue";
import OperatView from "@/components/UtileView/OperatView.vue";
import { getAllUser } from "@/api/user";

export default {
    components: {
        UserTable, BreadCrumb, OperatView
    },
    data() {
        return {
            breadcrumbData: [{
                name: '用户列表',
                url: "/user"
            }],
            searchWord: "",
            userData: [],
            operaEvent: "addUser"
        }
    },
    computed: {
        searchData() {
            if (!this.searchWord) {
                return this.userData;
            }
            const searchWordLower = this.searchWord.toLowerCase();
            return this.userData.filter(item => {
                const username = item.username ? item.username.toLowerCase() : '';
                const realName = item.realName ? item.realName.toLowerCase() : '';
                return username.includes(searchWordLower) || realName.includes(searchWordLower);
            });
        }
    },
    methods: {
        getAllUserFn() {
            getAllUser().then(res => {
                this.userData = res.data.data;
            });
        },
        searchEvent(val) {
            this.searchWord = val;
        }
    },
    mounted() {
        this.getAllUserFn();
    }
}
</script>

<style scoped>
.userTable {
    width: fit-content;
    margin-left: 10px;
}
</style>
