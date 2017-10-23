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
  </section>
</template>

<script>

  import { Observable } from "rxjs/Observable";
  import 'rxjs/add/observable/interval';
  import 'rxjs/add/operator/filter';


  import haha from '../mixins/haha';

  import data from '../services/data';

  let baseHtml = "https://jsonplaceholder.typicode.com";

  export default {
    mixins: [haha, data],
    subscriptions() {
      return {
        timeElapsed: Observable.interval(1000)
          .filter((value) => {
            return value % 5 === 0
        }),

        //OnlineData: this.getRawData(`${baseHtml}/posts`) // < - now working beacuse of the chaotic life-cycle hooks
      }
    },
    created() {

    },
    mounted() {
      this.getOnlineData();
    },
    methods: {
      getOnlineData: async function() {
        let onlineData = await this.getRawData(`${baseHtml}/posts`); // returns promise
        onlineData
        .subscribe((next) => {
          console.log(next);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
