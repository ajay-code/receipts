
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const AdminReceipts = () =>  System.import('./components/admin/receipts/Receipts.vue');
const AdminUsers = () =>  System.import('./components/admin/users/Users.vue');
const AdminUserReceipts = () =>  System.import('./components/admin/receipts/UserReceipts.vue');
const AdminReceiptsByDate = () =>  System.import('./components/admin/receipts/ReceiptsByDate.vue');

Vue.component('loader', require('vue-spinner/src/MoonLoader.vue'));
Vue.component('alert', require('./components/global/Alert.vue'));
Vue.component('admin-receipts', AdminReceipts);
Vue.component('admin-users', AdminUsers);
Vue.component('admin-users-receipts', AdminUserReceipts);
Vue.component('admin-receipts-bydate', AdminReceiptsByDate);



const app = new Vue({
    el: '#app'
});

require('./custom-scripts');

