import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

// Global components

//Vue.component("cdk-war", cdkWar);

// Global custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = `#${Math.random().toString().slice(2, 8)}`;
  }
});

Vue.directive('wmode', {
  bind(el, binding, vnode) {
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
Vue.filter("go-up", (value) => {
  return value.toUpperCase();
});

Vue.filter("snip", (value) => {
  return `${value.slice(0, 100)}...`; 
});

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
