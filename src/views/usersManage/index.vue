<template>
    <div>
        <div>我是头部</div>
        <a href="./index.html">回到首页</a>
        <a-breadcrumb :routes="this.$router.history.current.meta.breadcrumb">
            <template slot="itemRender" slot-scope="{route, params, routes, paths}">
                <span v-if="routes.indexOf(route) === routes.length - 1">
                    {{route.name}}
                </span>
                <router-link v-else :to="`/${route.path}`">
                    {{route.name}}
                </router-link>
            </template>
        </a-breadcrumb>
        <router-view/>
        <div>我是底部</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){
            console.log(this.$router.history.current.meta.breadcrumb)
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>

