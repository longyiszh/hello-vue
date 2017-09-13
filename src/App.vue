<template>
  <div class="root" v-wmode:report="{width: 'narrow'}">

    <main class="title">

      <nav class="appNav">
        <h3>app nav</h3>
        <ul>
          <li><router-link to="/index">index</router-link></li>
          <li><router-link to="/cdkwar">cdkwar</router-link></li>
          <li><router-link to="/foodpresent">foodpresent</router-link></li>
          <li><router-link to="/application">application</router-link></li>
          <li><router-link to="/pipe">pipe</router-link></li>
          <li><router-link to="/mixin">mixin</router-link></li>
        </ul>
      </nav>

      <div class="router">
        <router-view></router-view>
      </div>

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
      <hr>
    </main>
  </div>
  <!-- 只能写一个div，没有第二个 -->
</template>

<script>

import enemyZone from './components/enemyZone.vue';
import enemyZone2 from './components/enemyZone2.vue';

import { busA } from './busA';



const warZone = {
  currentChecking: "enemy-zone",
  sHouse: {
    status: "active"
  },
  bHouse: {
    status: "active"
  }
};

export default {
  components: {
    "enemy-zone": enemyZone,
    "enemy-zone2": enemyZone2
  },
  created() {
    busA.$on("bFire", (data) => {
      warZone.sHouse.status = data;
    });
  },
  data() {
    return {
      title: 'hello-vue',
      warZone: warZone
    }
  },

  
  methods: {

    changeWarZone: (zoneName) => {
      warZone.currentChecking = zoneName;
    },

    // findGuest: (guestName) => {
    //   for (let guest of foodP.guests) {
    //     if (guest.name === guestName) {
    //       return guest;
    //     }
    //   }
    //   return null;
    // },


  }
}
</script>

<style lang="scss">

div.root {
  margin: 0px auto;
}

main.title {
  text-align: center;
}

nav.appNav {
  ul {
    list-style-type: none;
    li {
      display: inline;
    }
  }
}

section.warzone {
    border: 1px dashed #5e5e5e;
    text-align: center;
}

section.warzone h1.vs {
    font-size: 3em;
    font-weight: bolder;
}

section.warzone span.faction {
    font-weight: bolder;
}

section.warzone div.actionBar {
    width: 50%;
    margin: 0.5em auto;
    border: 1px solid crimson;
}

</style>
