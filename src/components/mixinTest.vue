<template>
  <section>
    <h2>Mixin Test [mixin] - See your console and search for "hahaha"</h2>
    <button @click="hahaha()"> Click me and then find your hahaha</button>
  </section>
</template>

<script>
import haha from '../mixins/haha';

export default {
  mixins: [haha]
}
</script>

<style lang="scss" scoped>

</style>
