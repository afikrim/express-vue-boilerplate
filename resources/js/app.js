/* eslint-disable */
require('./bootstrap');

window.Vue = require('vue').default;

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('hello-world', require('./components/HelloWorld.vue').default);

const app = new Vue({
  el: '#app',
});