<template>
    <div id="app">
        <MainView></MainView>
        <!--        <router-view></router-view>-->
    </div>
</template>
<script>
import MainView from "@/views/MainView.vue";

export default {
    components: {
        MainView
    },
}
</script>
<style>
#app {
    padding: 0;
    margin: 0;
}
</style>
