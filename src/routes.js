import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

import CollarUse from './views/Review/CollarUse.vue'
import SubscriptionReview from './views/Review/SubscriptionReview.vue'
import PurchaseReview from './views/Review/PurchaseReview.vue'

import StaffSetting from './views/Setting/StaffSetting.vue'
import InstitutionalInformation from './views/Setting/InstitutionalInformation.vue'
import InstitutionalManagement from './views/Setting/InstitutionalManagement.vue'
import ApprovalSettings from './views/Setting/ApprovalSettings.vue'
import SystemSettings from './views/Setting/SystemSettings.vue'
import AddGroup from './views/Setting/AddGroup.vue'

import SharedLibrary from './views/SharedLibrary/SharedLibrary.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '审核',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/CollarUse', component: CollarUse, name: '领用审核' },
            // { path: '/table', component: Table, name: '领用审核' },
            { path: '/SubscriptionReview', component: SubscriptionReview, name: '申购审核' },
            { path: '/PurchaseReview', component: PurchaseReview, name: '采购审核' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '共享库',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/SharedLibrary', component: SharedLibrary, name: '共享库' },
            { path: '/page5', component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'ilab-审批设置',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/SharedLibrary', component: SharedLibrary, name: '共享库申请流程' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Page6, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '设置',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/StaffSetting', component: StaffSetting, name: '人员设置' },
            { path: '/InstitutionalInformation', component:InstitutionalInformation, name: '机构信息' },
            { path: '/InstitutionalManagement', component: InstitutionalManagement, name: '子机构管理' },
            { path: '/ApprovalSettings', component: ApprovalSettings, name: '审批设置' },
            { path: '/SystemSettings', component: SystemSettings, name: '系统设置' },
            { path: '/AddGroup', component: AddGroup, name: '添加集团' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;