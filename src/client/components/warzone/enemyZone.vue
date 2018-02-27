<template>
  <section class="factB">
    <p><span class="faction">BHouse</span></p>
    <p><span>{{ bHouse.status }}</span></p>
    <div class="actionBar">
      <h3>Actions</h3>
      <p><button @click="repair()">Repair</button></p>
      <p><button @click="fireSHouse()">fire tactical nuke to SHouse</button></p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  div.actionBar {
    width: 50%;
    margin: 0.5em auto;
    border: 1px solid crimson;
  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  import { busA } from '../../busA';

  @Component({
    props: {
      bHouse: {
        type: Object,
        required: true
      }
    }
  })
  export default class EnemyZone extends Vue {

    bHouse: any;

    repair() {
      this.bHouse.status = "active"
    }

    fireSHouse() {
      // directly emit event
      // this.$emit('bFire', "Boommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm~")
      // emit via a third vue instance (bus)
      busA.$emit('bFire', "Boommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm~");
    }

  }
</script>
