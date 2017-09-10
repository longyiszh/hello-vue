import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

// Global components

//Vue.component("cdk-war", cdkWar);

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
