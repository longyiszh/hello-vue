import Vue from 'vue'
import App from './App.vue'
export default (context: any) => {
    return Promise.resolve(new Vue({
        el: '#app',
        render: h => h(App)
    }))
}