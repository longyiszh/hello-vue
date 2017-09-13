<template>
  <section>
    <header class="title">
      <h1>{{ title }}</h1>
      <p>Helping wcxaaa learn vue</p>
      <small>{{ sayHello("wcxaaa") }}</small>
    </header>
  </section>
</template>

<script>
export default {
  data() {
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

<style lang="scss" scoped>
@import "../assets/scss/color";

header.title {
  text-align: center;
  small {
    font-weight: bolder;
    color: $red;
  }
}

</style>


