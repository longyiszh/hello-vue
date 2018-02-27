import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class Haha extends Vue {
  hahaha() {
    console.log(`[Mixin Test] hahaha`);
  }
}