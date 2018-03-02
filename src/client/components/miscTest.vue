<template>
  <section>
    <h1>Misc Tests</h1>
    <div>
      <h2>Mixin Test [mixin] - See your console and search for "hahaha"</h2>
      <button @click="hahaha()"> Click me and then find your hahaha</button>
    </div>
    <div>
      <h2>Rx Test</h2>
      <span>timeElapsed: {{ timeElapsed }}s</span>
      <p>Online data</p>
      <span>See console</span>
    </div>
    <div>
      <img src="../assets/logo.png" alt="logo" class="fluid">
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">

  import Component, { mixins } from 'vue-class-component';
  import { Observable } from "rxjs/Observable";
  import 'rxjs/add/observable/interval';
  import 'rxjs/add/operator/filter';


  import {Haha} from '../mixins/haha';

  import {DataService} from '../mixins/data.service';

  let baseHtml = "https://jsonplaceholder.typicode.com";


  @Component
  export default class MiscTest extends mixins(Haha, DataService) {

    timeElapsed: number = 0;

    async getOnlineData() {
      let onlineData = await this.getData(`${baseHtml}/posts`); // returns promise
      onlineData
      .subscribe((next) => {
        console.log(next);
      });
    }

    mounted() {
      this.getOnlineData();
    }

    subscriptions() {
      return {
        timeElapsed: Observable.interval(1000)
          .filter((value) => {
            return value % 5 === 0;
        }),

        //OnlineData: this.getRawData(`${baseHtml}/posts`) // < - now working beacuse of the chaotic life-cycle hooks
      }
    }

  }
</script>