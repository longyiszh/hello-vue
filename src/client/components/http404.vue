<template>
  <section>
    <hr>
    <h1>Opps! You are lost.</h1>
    <h1>Consider going back to <router-link to="/index">home page</router-link> </h1>
  </section>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class Http404 extends Vue {

  }
</script>

