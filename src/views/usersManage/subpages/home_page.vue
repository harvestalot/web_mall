<template>
    <div>
        <a-button type="primary" @click="info">我是管理中心首页</a-button>
        <div class="img" v-lazy-container="{ selector: 'img' }" v-for="(item, index) in container_data" :key="item.id">
            <img :data-src="img_base_url+item.photo_url" :data-error="item.photo_url">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                img_base_url:'http://192.168.1.220:8888',
                container_data:[],
            }
        },
        mounted(){
            this.http.get('/container/getHotContainerList', res => {
                if (res.status) {
                    this.container_data = res.data;
                } else {
                    // 返回错误的处理 
                }
            })
        },
        methods:{
            info(){
                this.$message.info('我是全局提示框')
            }
        }
    }
</script>

<style scoped>
    .img{
        width:500px;
        height: 500px;
    }
    .img img{
        width: 100%;
        height: 100%;

    }
</style>

