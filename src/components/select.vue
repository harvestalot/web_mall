<template>
    <div>
        <a-form-item
        label="选择"
                    
        >
            <a-select v-decorator="[
                    'nselect',
                    {rules: [{ required: true, message: 'Please input your nickname' }]}
                    ]" @change="optionChange">
                <a-select-option v-for="item in selectData" :key="item.id" :value="item.name" >{{ item.name }}</a-select-option>
            </a-select>
        </a-form-item>
    </div>
</template>

<script>
export default {
    name:"CSelect",
    props:{
        selectData: Array,
    },
    data(){
        return{
            // selectData: this.selectData
        }
    },
    mounted(){
        console.log(this)
    },
    methods: {
        optionChange(value, option){
            this.$emit('childrenChange', value )
        }
    }
}

</script>
<style scoped>
</style>