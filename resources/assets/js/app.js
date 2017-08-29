
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

// Vue.component('example', require('./components/Example.vue'));
Vue.component('receipt-form', require('./components/ReceiptForm.vue'));
Vue.component('loader', require('vue-spinner/src/MoonLoader.vue'));
Vue.component('alert', require('./components/global/Alert.vue'));
Vue.component('receipts', require('./components/receipts/Receipts.vue'));
Vue.component('receipts-bydate', require('./components/receipts/ReceiptsByDate.vue'));



const app = new Vue({
    el: '#app'
});

require('./custom-scripts');

require('./user');
