
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Notifications from 'vue-notification'
window.Vue = require('vue');
Vue.use(Notifications);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const ReceiptForm = () =>  System.import('./components/ReceiptForm.vue');
const Receipts = () =>  System.import('./components/receipts/Receipts.vue');
const ReceiptsByDate = () =>  System.import('./components/receipts/ReceiptsByDate.vue');

Vue.component('receipt-form', ReceiptForm);
Vue.component('loader', require('vue-spinner/src/MoonLoader.vue'));
Vue.component('alert', require('./components/global/Alert.vue'));
Vue.component('receipts', Receipts);
Vue.component('receipts-bydate', ReceiptsByDate);


const app = new Vue({
    el: '#app'
});

require('./custom-scripts');

require('./user');
