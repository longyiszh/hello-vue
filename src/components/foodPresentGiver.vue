<template>
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
          <h2>[custom directives]</h2>
          <table class="commentTable">
            <thead>
              <tr>
                <td>Date</td>
                <td>Name</td>
                <td>Content</td>
              </tr>
            </thead>
            <tbody>
              <tr v-rainbow class="comment" v-for="comment of foodP.pushedComments">
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
</template>

<script>

import foodPresent from './foodPresent.vue';

const foodP = {
  currentIndex: 0,
  guests: [
    {
      name: "jianjiaojiao",
      food: ["cotton", "ruaruaChong", "劣质饲料"]
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
    "food-present" : foodPresent
  },
  data() {
    return {
      foodP: foodP
    }
  },
  methods: {
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
  },
  directives: {
    // 写到这里的directives都是local的，不能被其他组件使用
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = `#${Math.random().toString().slice(2, 8)}`;
      }
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>
