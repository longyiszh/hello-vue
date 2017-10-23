<template>
  <section>
    <h1>Misc Tests</h1>
    <div>
      <h2>Mixin Test [mixin] - See your console and search for "hahaha"</h2>
      <button @click="hahaha()"> Click me and then find your hahaha</button>
      <button @click="getOnlineData()"> Click me to get online data</button>
    </div>
    <div>
      <h2>Rx Test</h2>
      <span>timeElapsed: {{ timeElapsed }}s</span>
    </div>
  </section>
</template>

<script>

  import { Observable } from "rxjs/Observable";
  import 'rxjs/add/observable/interval';
  import 'rxjs/add/operator/filter'

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
        })
      }
    },
    created() {

    },
    methods: {
      getOnlineData: async function() {
        let data = await this.getRawData(`${baseHtml}/posts`);
        console.log(data);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
