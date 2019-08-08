<template>
    <div id="pdfDom">
         <!-- <img src="http://192.168.1.220:8888/group1/M00/00/3D/wKgB3F0RiOOALhF1AACD3q7jYjg233.jpg"> -->
        <!-- <div style="width:500px;height:300px;background:url('http://192.168.1.220:8888/group1/M00/00/3D/wKgB3F0RiOOALhF1AACD3q7jYjg233.jpg') 50% 50% no-repeat;"></div> -->
        <nav class="nav">
            <a href="#" class="nav-item is-active" active-color="orange">Home</a>
            <a href="#" class="nav-item" active-color="green">About</a>
            <a href="#" class="nav-item" active-color="blue">Testimonials</a>
            <a href="#" class="nav-item" active-color="red">Blog</a>
            <a href="#" class="nav-item" active-color="rebeccapurple">Contact</a>
            <span class="nav-indicator"></span>
        </nav>
        <a-menu
            v-model="current"
            mode="horizontal"
        >
            <a-menu-item key="mail">
                <a-icon type="mail" />集装箱运力
            </a-menu-item>
            <a-menu-item key="app" disabled>
                <a-icon type="appstore" />无权限模块
            </a-menu-item>
            <a-sub-menu>
                <span slot="title" class="submenu-title-wrapper"><a-icon type="setting" />用户</span>
                <a-menu-item key="1"><a href="./home_page.html">用户中心</a></a-menu-item>
                <a-menu-item key="2">订单中心</a-menu-item>
            </a-sub-menu>
        </a-menu>
        <Button type="primary" >测试BTN</Button>
        <a href="./login.html">登录</a>
        <a-button type="primary" @click="info">我是Ant按钮</a-button>
        <section>{{ hotLine }}</section>
        <icon-svg icon-class="Triangle" />
        <icon-svg icon-class="top" />
        <section class="container_list">
            <a-form :form="form">
                <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="起运地"
                >
                    <div class="city"> 
                        <a-input 
                    v-decorator="[
                    'username',
                    {rules: [{ required: true, message: '请输入用户名' }, verify_rule.username]}
                    ]" class="c999" data-toggle="city-picker" placeholder="请选择省/市" data-simple="true" data-level="city" id="start_location" />
                    </div>
                </a-form-item>
                <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="用户名"
                >
                <a-input
                    v-decorator="[
                    'username',
                    {rules: [{ required: true, message: '请输入用户名' }, verify_rule.username]}
                    ]"
                    name='username'
                    placeholder="Please input your name"
                />
                </a-form-item>
                <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="密码"
                >
                <a-input
                    v-decorator="[
                    'password',
                    {rules: [{ required: true, message: '请输入密码' }, verify_rule.password]}
                    ]"
                    placeholder="请输入密码"
                />
                </a-form-item>
                <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="确认密码"
                >
                <a-input
                    v-decorator="[
                    'confirmPassword',
                    {rules: [{ required: true, message: 'Please input your nickname' }]}
                    ]"
                    name='confirmPassword'
                    placeholder="请再次输入密码"
                />
                </a-form-item>
                <a-form-item
                :label-col="formTailLayout.labelCol"
                :wrapper-col="formTailLayout.wrapperCol"
                >
                <a-checkbox
                    :checked="checkNick"
                    @change="handleChange"
                >
                    Nickname is required
                </a-checkbox>
                </a-form-item>
                <a-form-item
                :label-col="formTailLayout.labelCol"
                :wrapper-col="formTailLayout.wrapperCol"
                >
                <a-button
                    type="primary"
                    @click="check"
                >
                    Check
                </a-button>
                </a-form-item>
                <a-form-item
                label="选择"
                :label-col="formTailLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                >
                    <a-select v-decorator="['select']">
                        <a-select-option value="jack">Jack</a-select-option>
                        <a-select-option value="lucy">Lucy</a-select-option>
                        <a-select-option value="disabled" disabled>Disabled</a-select-option>
                        <a-select-option value="Yiminghe">yiminghe</a-select-option>
                    </a-select>
                </a-form-item>
                <c-select  v-bind:select-data="selectData" @childrenChange="getChildrenValue"/>
            </a-form>
        </section>
        <!-- 导出数据 -->
        <ExportData :tHeaderFather="tHeaderFather"
                    :isForBidden="isForBiddenExportData"
                    :ExportListsFather="ExportListsFather"
                    :filterArrayLists="filterArrayLists"
                    :ExportFileName="ExportFileName"></ExportData>
                    
        <a-button type="primary" @click="getPdf()">导出PDF</a-button >
    </div>
</template>

<script>

import { formatDateTime } from '../../main.js';
import storage from '../../assets/js/storage.js'
import verify_rule from '../../assets/js/verify_rule.js'
import CSelect from '@/components/select.vue';
import ExportData from '@/components/Export.vue';

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
export default {
    name: 'App',
    components:{
        'c-select': CSelect,
        ExportData,
    },
    data(){
        return{
            verify_rule: {},
            current: ['mail'],
            hotLine: {},
            container_list:[],
            username:"",
            checkNick: false,
            formItemLayout,
            formTailLayout,
            form: this.$form.createForm(this),
            selectData:[
                {id:"",name:"全部"},
                { id:0, name:"小米"},
                { id:1, name:"小花"},
                { id:2, name:"小姜"},
                { id:3, name:"小枣"},
            ],
            isForBiddenExportData:false,
            tHeaderFather:['序号','姓名','的分','价钱'],
            ExportListsFather:[
                {id:"",name:"全部",score:100,price:8900},
                { id:0, name:"小米",score:100,price:8900},
                { id:1, name:"小花",score:100,price:8900},
                { id:2, name:"小姜",score:100,price:8900},
                { id:3, name:"小枣",score:100,price:8900},
            ],
            filterArrayLists:['id','name','score','price'],
            ExportFileName:'测试导出数据',
            htmlTitle: '页面导出PDF'
        }
    },
    computed: {
        newName() {
            return storage.local_storage.cityData;
        }
    },
    watch: {
        demo(val) {
            console.log(val);
        }
    },
    mounted(){
        document.getElementsByTagName("title")[0].innerHtml = "我要变身"
        this.verify_rule = verify_rule;
        console.log(this.$cookies)
        this.form.setFieldsValue({
            password:"sdfsf00000"
        })
        this.http.get(this.ports.homePage.hotLine, res => {
            this.hotLine = res.data;
            storage.session_storage.set('cityData',this.hotLine)
            storage.local_storage.set('cityData',this.hotLine)
            if (res.success) {
                // 返回正确的处理
            } else {
                // 返回错误的处理 
            }
        })
        this.http.get(this.ports.homePage.posts, res => {
            console.log(res)
        })
        this.http.get(this.ports.homePage.container_list+ '/10/1', res => {
            if (res.status) {
                // 返回正确的处理
                this.container_list = res.data;
            } else {
                // 返回错误的处理 
            }
        })
        // console.log(formatDateTime(new Date()));
        const indicator = document.querySelector('.nav-indicator');
        const items = document.querySelectorAll('.nav-item');

        function handleIndicator(el) {
        items.forEach(item => {
            item.classList.remove('is-active');
            item.removeAttribute('style');
        });

        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
        indicator.style.backgroundColor = el.getAttribute('active-color');

        el.classList.add('is-active');
        el.style.color = el.getAttribute('active-color');
        }


        items.forEach((item, index) => {
            item.addEventListener('click', e => {handleIndicator(e.target);});
            item.classList.contains('is-active') && handleIndicator(item);
        });
    },
    methods: {
        info(){
            this.$message.info('我是全局提示框')
        },
        verify_username(rule, value, callback){
            if(value && !/^[a-zA-Z][a-zA-Z0-9_]+$/.test(value)){
                callback('用户名仅支持4-21位字母、数字组合')
            }
            callback()
        },
        check  () {
            this.form.validateFields( (err,value) => {
                    if (!err) {
                        console.info(value);
                    }
                },
            );
        },
        handleChange  (e) {
            this.checkNick = e.target.checked;
            this.$nextTick(() => {
                this.form.validateFields(['nickname'], { force: true });
            });
        },
        getChildrenValue(data){
            console.log(data)
        }
    }
}
</script>

<style scoped>
    /* @import url("https://fonts.googleapis.com/css?family=DM+Sans:500,700&display=swap"); */
    * {
    box-sizing: border-box;
    }

body {
  text-align: center;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  /* background-color: #232323; */
  overflow: hidden;
}

.nav {
  display: inline-flex;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 40px;
  box-shadow: 0 10px 40px rgba(159, 162, 177, 0.8);
}

.nav-item {
  color: #83818c;
  padding: 20px;
  text-decoration: none;
  transition: .3s;
  margin: 0 6px;
  z-index: 1;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  position: relative;
}
.nav-item:before {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #dfe2ea;
  border-radius: 8px 8px 0 0;
  opacity: 0;
  transition: .3s;
}

.nav-item:not(.is-active):hover:before {
  opacity: 1;
  bottom: 0;
}

.nav-item:not(.is-active):hover {
  color: #333;
}

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  transition: .4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px 8px 0 0;
  background-color: #3ba0f3;
}
.city{
    position: relative;
}
</style>
