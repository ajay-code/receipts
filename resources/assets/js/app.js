import Paginate from 'vuejs-paginate'
import Notifications from 'vue-notification'

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
Vue.use(Notifications);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const Dashboard = () => System.import('./components/common/Dashboard/Dashboard.vue');
const Settings = () => System.import('./components/common/settings/Settings.vue');
const ReceiptForm = () => System.import('./components/receipts/ReceiptForm.vue');
const Receipts = () => System.import('./components/receipts/Receipts.vue');
const DeletedReceipts = () => System.import('./components/admin/receipts/DeletedReceipts.vue');
const DataTable = () => System.import('./components/DataTable.vue');
const EditReceipt = () => System.import('./components/receipts/EditReceipt.vue');

// Admin Components
const AdminUsers = () => System.import('./components/admin/users/Users.vue');
const AdminUserReceipts = () => System.import('./components/admin/receipts/UserReceipts.vue');

Vue.component('dashboard', Dashboard);
Vue.component('settings', Settings);
Vue.component('receipt-form', ReceiptForm);
Vue.component('loader', require('./components/global/Loader.vue'));
Vue.component('alert', require('./components/global/Alert.vue'));
Vue.component('paginate', Paginate)
Vue.component('receipts', Receipts);
Vue.component('deleted-receipts', DeletedReceipts);
Vue.component('admin-users', AdminUsers);
Vue.component('users-receipts', AdminUserReceipts);
Vue.component('edit-receipt', EditReceipt);
Vue.component('data-table', DataTable);


const app = new Vue({
    el: '#app',
});

require('./vueRoutes');

require('./custom-scripts');
require('./user');