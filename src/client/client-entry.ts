import Vue from 'vue';
import App from './apptest.vue';

const VueApp = Vue.extend(App);
const app = new VueApp({
  el: '.app'
});