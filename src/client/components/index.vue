<template>
  <section>
    <header class="title">
      <h1>{{ title }}</h1>
      <p>Helping wcxaaa learn vue</p>
      <small>{{ sayHello("wcxaaa") }}</small>
    </header>
  </section>
</template>

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

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class Index extends Vue {
    title: string = 'hello-vue';

    sayHello = (target: string) => {
      return `Welcome ${target} to dig your vue (grave)!`
    }
  }
</script>


