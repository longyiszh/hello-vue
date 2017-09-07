<template>
  <div>
    <header>
      <h1 class="title">{{ title }}</h1>
    </header>
    <main class="title">
      <p>Helping wcxaaa learn vue</p>
      <small>{{ sayHello("wcxaaa") }}</small>
      <cdk-war v-bind:cdkwar="cdkWarData.cdkwar"></cdk-war>
    </main>
  </div>
  <!-- 只能写一个div，没有第二个 -->
</template>

<script>
import cdkWar from './components/cdkWar.vue';

const cdkWarData = {
  cdkwar: [
    {
      name: 'Billy',
      cdk: 'bdk',
      num: 0,
      php: 'http://www.linruotian.com',
      bFactor: 0.888
    },
    {
      name: 'Mile',
      cdk: 'mdk',
      num: 0,
      php: 'http://www.mile.com',
      bFactor: 0.999
    },
    {
      name: 'Steve',
      cdk: 'sdk',
      num: 0,
      php: 'http://www.wcnexus.com',
      bFactor: 1.001
    }
  ]
};


export default {
  components: {
    "cdk-war": cdkWar
  },
  data () {
    return {
      title: 'hello-vue',
      cdkWarData: cdkWarData
    }
  },
  methods: {
    sayHello: (target) => {
      return `Welcome ${target} to dig your vue (grave)!`
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/color";

h1.title {
  text-align: center;
}

main.title {
  text-align: center;
  small {
    font-weight: bolder;
    color: $red;
  }
}

</style>
