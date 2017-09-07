<template>
  <div>
    <h2>[v-for] [v-if] [event-binding]</h2>
    <table class="warTable">
      <thead>
        <tr>
          <td>
            <span>#</span>
          </td>
          <td>
            <span>CDKey</span>
          </td>
          <td>
            <span>Number</span>
          </td>
          <td>
            <span>Operation</span>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="(faction, index)" v-for="(faction, index) of cdkwar">
          <td>
              <span>{{ index+1 }}</span>
          </td> 
          <td>
            <span style="text-transform: uppercase;">{{ faction.cdk }}</span>
          </td> 
          <td>
            <span>{{ faction.num }}</span>
          </td>
          <td>
            <div>
              <!-- note that template will not get rendered by vue -->
              <template v-if="faction.name === 'Billy'">
                  <button @click.once="change(faction.name, '+', 1)" v-on:dblclick="change(faction.name, '+', 2000)">+</button>
                  <button @click="change(faction.name, '-', 1)" v-on:dblclick="change(faction.name, '-', 2000)">-</button>
                  <a v-on:click.prevent="bombardPHP(faction.name, faction.bFactor)" v-bind:href="faction.php" target="_blank">轰炸主页</a>
              </template>
              <template v-else-if="faction.name === 'Mile'">
                  <button @click="change(faction.name, '+', 1)" v-on:dblclick.once="change(faction.name, '+', 3000)">+</button>
                  <button @click="change(faction.name, '-', 1)" v-on:dblclick="change(faction.name, '-', 300)">-</button>
                  <a v-on:click.prevent="bombardPHP(faction.name, faction.bFactor)" v-bind:href="faction.php" target="_blank">轰炸主页</a>
              </template>
              <template v-else-if="faction.name === 'Steve'">
                  <button @click="change(faction.name, '+', 1)" v-on:dblclick="change(faction.name, '+', 2000)">+</button>
                  <button @click="change(faction.name, '-', 1)" v-on:dblclick.once="change(faction.name, '-', 2000)">-</button>
                  <a v-on:click="bombardPHP(faction.name, faction.bFactor)" v-bind:href="faction.php" target="_blank">轰炸主页</a>
              </template>
              <template v-else>
                  <h1>BOOM!</h1>
              </template>
            </div>
          </td> 
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

const data = {
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
  data: () => { return data},
  methods: {
    
    searchFaction: (factName) => {
      for (let fact of this.default.data().cdkwar) {
        if (factName === fact.name) {
          return fact;
        }
      }
      return null;
    },

    change: (name, op, delta) => {
      let fact = this.default.methods.searchFaction(name);
      if (fact) {
        if (op === "+") {
          fact.num += delta;
        }
        else if (op === "-") {
          fact.num -= delta;
        }
      } else {
        console.error("Invalid faction name");
      }
    },

    bombardPHP: (target, factor) => {
      if (factor <= 1) {
        alert(`${target} has prevented your bombarding.`);
      } else {
        alert(`Your bombarding to ${target}'s home page is unsuccessful, so you are going there manually.`);
      }
    }

  }
  
}
</script>

<style lang="scss" scoped>
@import "assets/scss/color";

table.warTable {
  background-color: $red-50;
  border: 0px;
  margin: 0px auto;
  tr {
    border: 0px;
  }
  tr:nth-of-type(odd) {
    border: 0px;
    background-color: $red;
  }
  td {
    border: 0px;
  }
}

</style>

