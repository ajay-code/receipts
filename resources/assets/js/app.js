import Paginate from 'vuejs-paginate'
import Notifications from 'vue-notification'

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');
Vue.use(Notifications);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const Dashboard = () => System.import('./components/common/Dashboard/Dashboard.vue');
const ReceiptForm = () => System.import('./components/ReceiptForm.vue');
const Receipts = () => System.import('./components/receipts/Receipts.vue');
const ReceiptsByDate = () => System.import('./components/receipts/ReceiptsByDate.vue');
const DeletedReceipts = () => System.import('./components/admin/receipts/DeletedReceipts.vue');
const EditReceipt = () => System.import('./components/receipts/EditReceipt.vue');
const NetAmount = () => System.import('./components/global/NetAmount.vue');

// Admin Components
const AdminUsers = () => System.import('./components/admin/users/Users.vue');
const AdminUserReceipts = () => System.import('./components/admin/receipts/UserReceipts.vue');

Vue.component('dashboard', Dashboard);
Vue.component('receipt-form', ReceiptForm);
Vue.component('loader', require('./components/global/Loader.vue'));
Vue.component('alert', require('./components/global/Alert.vue'));
Vue.component('paginate', Paginate)
Vue.component('receipts', Receipts);
Vue.component('receipts-bydate', ReceiptsByDate);
Vue.component('deleted-receipts', DeletedReceipts);
Vue.component('admin-users', AdminUsers);
Vue.component('admin-users-receipts', AdminUserReceipts);
Vue.component('edit-receipt', EditReceipt);
Vue.component('net-amount', NetAmount);


const app = new Vue({
    el: '#app',
    filter: {
        dateFilter: function (value) {
            console.log(value)
            return value.format('LL');
        },
        monthFilter:function (value) {
            return value.format('MMMM YYYY');
        },
        yearFilter: function (value) {
            return value.format('YYYY');
        }
    }
});

require('./custom-scripts');

require('./user');