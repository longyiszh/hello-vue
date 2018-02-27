// global styles
import './styles.scss';

import './typings/declarations';

import Vue from 'vue';
import App from './App.vue';

import * as VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';
import VueRouter from "vue-router";

import { appRoute } from "./app.route";

Vue.use(VueRouter);
Vue.use(VueRx, {
  Observable: Observable
});

const router = new VueRouter({
  routes: appRoute
});

// Global components

//Vue.component("cdk-war", cdkWar);

// Global custom directives
Vue.directive('wmode', {
  bind(el: any, binding: any, vnode: any) {
    let val = binding.value;
    if (val.width === 'full') {
      el.style.width = '100%';
    } else if (val.width === 'narrow') {
      el.style.width = '70%';
    }
    // arguments
    if (binding.arg === "report") {
      console.log(binding);
    }
  }
});

// Global filters

Vue.filter("snip", (value: string) => {
  return `${value.slice(0, 100)}...`; 
});

const v = new Vue({
  el: '#app',
  render: (h: any) => h(App),
  router: router
})
