<template>
  <section class="warzone">
    <h2>WarZone [component interaction - props & vue-custom-event]</h2>
    <h3>(event-bus, life-cycle-hook, dynamic-component)</h3>

    <div>
      <button @click="changeWarZone('enemy-zone')">CheckZone1</button>
      <button @click="changeWarZone('enemy-zone2')">CheckZone2</button>
    </div>

    <!-- 用keep-alive是为了保留阵营的数据，否则切换到另一组件后再切换回来，原来的内容会重置 -->
    <keep-alive>
      <component v-bind:is="warZone.currentChecking" v-bind:bHouse="warZone.bHouse"> </component>
    </keep-alive>
    
    <!-- <enemy-zone v-bind:bHouse="warZone.bHouse"></enemy-zone>  -->
    <!--  v-on:bFire="warZone.sHouse.status=$event" is used when enemyZone directly fires that event -->

    <h1 class="vs">VS</h1>
    <div class="factS">
      <p><span class="faction">SHouse</span></p>
      <p><span>{{ warZone.sHouse.status }}</span></p>
      <div class="actionBar">
        <h3>Actions</h3>
        <p><button @click="repair()">Repair</button></p>
        <p><button @click="fireBHouse()">fire XMP to BHouse</button></p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section.warzone {
    border: 1px dashed #5e5e5e;
    text-align: center;
  }

  h1.vs {
    font-size: 3em;
    font-weight: bolder;
  }

  span.faction {
    font-weight: bolder;
  }

  div.actionBar {
    width: 50%;
    margin: 0.5em auto;
    border: 1px solid crimson;
  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  import enemyZone from './enemyZone.vue';
  import enemyZone2 from './enemyZone2.vue';

  import { busA } from '../../busA';

  @Component({
    components: {
      "enemy-zone": enemyZone,
      "enemy-zone2": enemyZone2
    }
  })
  export default class Warzone extends Vue {

    warZone = {
      currentChecking: "enemy-zone",
      sHouse: {
        status: "active"
      },
      bHouse: {
        status: "active"
      }
    };

    changeWarZone = (zoneName: string) => {
      this.warZone.currentChecking = zoneName;
    };

    repair = () => {
      this.warZone.sHouse.status = "active";
    };

    fireBHouse = () => {
      this.warZone.bHouse.status = "bz~ bzz~ Boom!";
    };

    created() {
      busA.$on("bFire", (data: string) => {
        this.warZone.sHouse.status = data;
      });
    }

  }
</script>

