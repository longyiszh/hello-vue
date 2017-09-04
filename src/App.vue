<template>
  <div>
    <header>
      <h1 class="title">{{ title }}</h1>
    </header>
    <main class="title">
      <p>Helping wcxaaa learn vue</p>
      <small>{{ sayHello("wcxaaa") }}</small>
      <cdk-war></cdk-war>
    </main>
  </div>
  <!-- 只能写一个div，没有第二个 -->
</template>

<script>
export default {
  title: 'hello-vue',
  data () {
    return {
      title: 'hello-vue'
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
