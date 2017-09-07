<template>
  <div>
    <header>
      <h1 class="title">{{ title }}</h1>
    </header>
    <main class="title">
      <p>Helping wcxaaa learn vue</p>
      <small>{{ sayHello("wcxaaa") }}</small>
      <cdk-war v-bind:cdkwar="cdkWarData.cdkwar"></cdk-war>
      
    <section class="warzone">
      <h2>WarZone [component interaction - props & vue-custom-event]</h2>
      <enemy-zone v-bind:bHouse="warZone.bHouse" v-on:bFire="warZone.sHouse.status=$event"></enemy-zone>
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

    </main>
  </div>
  <!-- 只能写一个div，没有第二个 -->
</template>

<script>
import cdkWar from './components/cdkWar.vue';
import enemyZone from './components/enemyZone.vue'

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

const warZone = {
  sHouse: {
    status: "active"
  },
  bHouse: {
    status: "active"
  }
};


export default {
  components: {
    "cdk-war": cdkWar,
    "enemy-zone": enemyZone
  },
  data () {
    return {
      title: 'hello-vue',
      cdkWarData: cdkWarData,
      warZone: warZone
    }
  },
  methods: {
    sayHello: (target) => {
      return `Welcome ${target} to dig your vue (grave)!`
    },
    repair: () => {
      warZone.sHouse.status = "active";
    },
    fireBHouse: () => {
      warZone.bHouse.status = "bz~ bzz~ Boom!";
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
