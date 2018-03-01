// global styles
import './styles.scss';

import './typings/declarations';

import Vue from 'vue';
import App from './App.vue';

import * as VueRx from 'vue-rx';
import { Observable } from 'rxjs/Observable';

import { createApp } from './entry';
import { appRouter } from "./app.router";



Vue.use(VueRx, {
  Observable: Observable
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

// const VueApp = Vue.extend(App);
// const app = new VueApp({
//   el: '#app',
//   render: (h: any) => h(App),
//   router: router
// });

const app = createApp();