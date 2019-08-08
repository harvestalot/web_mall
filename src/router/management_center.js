// 管理中心

// import homePage from '@/views/usersManage/index.vue'
const homePage = () => import('@/views/usersManage/subpages/home_page.vue');

export default [
    {
        path: '/',
        component:homePage,
        meta: {
            title:'管理中心首页',
            breadcrumb:[
                { name: '管理中心', path: '' },
                { name: '用户中心', path: '' }
            ]
        }
    }
]