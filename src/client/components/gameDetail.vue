<template>
  <section>
    <h1>{{ game.nameDisplay }}</h1>
    <p class="focus">name retireved from url: {{ name }}</p>
    <h2>Rate: {{ game.rate*100 }}%</h2>
    <p>{{ game.descr }}</p>
  </section> 
</template>

<style lang="scss" scoped>
  p.focus {
    font-size: 3em;
    border: 0.5em dotted teal;
  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class GameDetail extends Vue {

    name:string = "Loading...";
    game: any = {};

    // games will get retrieved from an http request in real cases
    gpanGameRetrieved = [
      {
        name: "PLAYERUNKNOWN_S_BATTLEGROUNDS",
        nameDisplay: "绝地求生：大逃杀[名字不一定对的上因为是模拟数据没做请求]",
        descr: "绝地求生是大逃杀类型的游戏，每一局游戏将有100名玩家参与，他们将被投放在绝地岛的上空，游戏开始跳伞时所有人都一无所有。为了抢今晚的鸡大家会拼个你死我活。",
        rate: 0.72
      }
    ];

    created() {
      // first retrieve the game via an http request in practice.
      this.name = this.$route.params.name;
      this.game = this.gpanGameRetrieved[0];
    }


  }
</script>