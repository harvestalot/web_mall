<template>
    <div class="content">
        <Button type="primary" @click="login">登录</Button>
        <a href="./index.html">首页</a>
        <a-button type="primary" @click="info">我是登录页面的Ant按钮</a-button>
        <section></section>
    </div>
</template>

<script>
import  storage from '../../assets/js/storage.js'
    export default {
        computed: {

        },
        data(){
            return {
            }
        },
        mounted(){
        },
        methods:{
            login: () => {
                storage.local_storage.clear();
            },
            info(){
                this.$message.info('我是全局提示框')
            }
        }
    }
</script>

<style>

</style>
