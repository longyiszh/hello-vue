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
        <h3>(event-bus, life-cycle-hook)</h3>

        <enemy-zone v-bind:bHouse="warZone.bHouse"></enemy-zone> 
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

      <section>
        <div class="actionBar">
          <button @click="changeIndex(-1)" v-bind:disabled="foodP.currentIndex <= 0"> &lt; </button>
          <span><b>{{ foodP.guests[foodP.currentIndex].name }}</b>'s Show time</span>
          <button @click="changeIndex(+1)" v-bind:disabled="foodP.currentIndex >= foodP.guests.length - 1"> &gt; </button>
        </div>

        <food-present v-if="foodP.currentIndex == 0">
          <h2 slot="title"> Jianjiaojiao's favorite Food presentation </h2>
          <h3> [2017-09-09 15:11:36] Bi~~~ hacked by 饼干猫 </h3>
          <div slot="table" class="table">
            <ul>
              <li v-bind:key="food" v-for="food of foodP.guests[0].food">
                <div class="jjj">
                  {{ food }}
                </div>
              </li>
            </ul>
          </div>
          <div slot="commentArea">
            <blockquote>不准留言！谁说话我叮谁！</blockquote>
          </div>
        </food-present>

        <food-present v-if="foodP.currentIndex == 1">
          <h2 slot="title"> 饼干猫's most frequent chosen food </h2>
          <h3> [2017-09-09 15:12:15] Bi~~~ hacked by jianjiaojiao </h3>
          <h3> [2017-09-09 15:12:16] Bi~~~ hacked by 饼干猫 </h3>
          <h3> [2017-09-09 15:12:20] Bi~~~ hacked by jianjiaojiao </h3>
          <h3> ... </h3>
          <h3> [2017-09-09 15:13:03] Bi~~~ hacked by jianjiaojiao </h3>
          <h3> [2017-09-09 15:13:04] Bi~~~ hacked by jianjiaojiao </h3>
          <h3> [2017-09-09 15:13:08] Bi~~~ hacked by 饼干猫 </h3>
          <h3> [2017-09-09 15:13:08] Bi~~~ hacked by 饼干猫 </h3>
          <h3> [2017-09-09 15:13:08] <span style="color: red">locked</span> by 饼干猫 </h3>
          <div slot="table" class="table">
            <ul>
              <li v-bind:key="food" v-for="food of foodP.guests[1].food">
                <div class="bgm">
                  {{ food }}
                </div>
              </li>
            </ul>
          </div>
          <div slot="commentArea">
            <h3>Meowwwwwwwwwwwwwwwww！</h3>
            <blockquote>Meowwwwwwwwwwwwwwwww！</blockquote>
            <blockquote>喵喵喵！</blockquote>
          </div>
        </food-present>

        <food-present v-if="foodP.currentIndex == 2">
          <h2 slot="title"> wc最喜欢吃： </h2>
          <h3> [2017-09-09 15:12:15] <span style="color: red">[ERR] 饼干猫被jianjiaojiao叮烂了！</span> </h3>
          <div slot="table" class="table">
            <ul>
              <li v-bind:key="food" v-for="food of foodP.guests[2].food">
                <div class="wc">
                  {{ food }}
                </div>
              </li>
            </ul>
          </div>
          <div slot="commentArea">
            <div>
              <table class="commentTable">
                <thead>
                  <tr>
                    <td>Date</td>
                    <td>Name</td>
                    <td>Content</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-bind:key="comment" v-for="comment of foodP.pushedComments">
                    <td>{{ comment.date }}</td>
                    <td>{{ comment.username }}</td>
                    <td>{{ comment.comment }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <footer>
              <form>
                <input type="text" placeHolder="名字" name="userName" v-model="foodP.userName" required>
                <input type="text" placeHolder="吐槽" name="comment" v-model="foodP.comment" required>
                <button @click.prevent="submitContent()">Submit</button>
              </form>
            </footer>
          </div>
        </food-present>

      <h1>slot 总结一下！</h1>
      <p>有slot的组件相当于一个框架，由其他开发人员往slot里面扔自定义的html</p>
      <p>slot 由name名字来区分，如果没有在slot上写名字，那么就是饼干猫hack的地方。</p>
      <p>数据及函数操作由父组件负责，样式由slot那个组件负责</p>
      

      </section>

    </main>
  </div>
  <!-- 只能写一个div，没有第二个 -->
</template>

<script>
import cdkWar from './components/cdkWar.vue';
import enemyZone from './components/enemyZone.vue';
import foodPresent from './components/foodPresent.vue'

import { busA } from './busA';


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

const foodP = {
  currentIndex: 0,
  guests: [
    {
      name: "jianjiaojiao",
      food: ["cotton", "ruaruaChong", "jjjFood"]
    },
    {
      name: "BingGanMao",
      food: ["皇家猫粮", "雪域小馒头", "进口奥利奥"]
    },
    {
      name: "wc",
      food: ["pepper", "salad", "burger"]
    }
  ],
  userName: "",
  comment: "怒戳楼上！",
  pushedComments: [
    {
      username: "jianjiaojiao",
      date: new Date("2017-09-09"),
      comment: "原来你喜欢吃我叮剩下的啊～"
    }
  ]
}

export default {
  components: {
    "cdk-war": cdkWar,
    "enemy-zone": enemyZone,
    "food-present" : foodPresent
  },
  created() {
    busA.$on("bFire", (data) => {
      warZone.sHouse.status = data;
    });
  },
  data() {
    return {
      title: 'hello-vue',
      cdkWarData: cdkWarData,
      warZone: warZone,
      foodP: foodP
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
    },

    // findGuest: (guestName) => {
    //   for (let guest of foodP.guests) {
    //     if (guest.name === guestName) {
    //       return guest;
    //     }
    //   }
    //   return null;
    // },
    changeIndex: (num) => {
      let indexAfter = foodP.currentIndex + num;
      if (indexAfter >= 0 && indexAfter < foodP.guests.length) {
        foodP.currentIndex += num;
      }
    },
    submitContent: () => {
      if (foodP.userName.length > 0 && foodP.comment.length > 0) {
        foodP.pushedComments.push({
          username: foodP.userName,
          date: new Date(),
          comment: foodP.comment
        });
      }
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
