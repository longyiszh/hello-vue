<template>
  <section class="application">
    <h2>Application Form [v-model]</h2>
    <div>
      <form>
        <main class="input">
          <div class="username">
            <label> Username </label>
            <input type="text" placeholder="name" maxlength="100" required v-model.lazy="username">
            <!-- v-model也可以加修饰符，比如.lazy，输入完成后才赋值 -->
          </div>
          <div class="password">
            <label> Password </label>
            <input type="password" placeholder="password" maxlength="100" v-model="password" required>
          </div>
          <div class="interest">
            <label> Choose your interests </label>

            <div class="intChk" v-for="(interest, index) of providedInterests" :key="index">
              <!-- 把多个checkbox上的v-model设置为同一个数组，即可将它们的value交由vue管理 -->
              <input type="checkbox" :name="interest.name" :value="interest.value" v-model="chosenInterests">
              <label> {{ interest.valueShown }} </label>
            </div> 
            
          </div>

          <div class="faction">
            <label> Select your faction </label>

            <select name="fact" v-model="chosenFaction">
              <option v-for="(fact, index) of providedFactions" :value="fact.name" :key="index">{{ fact.nameDisplay }}</option>
            </select>

          </div>
        </main>

        <section class="preview">
          <div class="username">
            <label> Your username will be: </label>
            {{ username }}
          </div>
          <div class="password">
            <p>Your password <b>{{ password }}</b> has already been compromised</p> 
          </div>
          <div class="interest">
            <label> Your interests are </label>
            <ul>
              <li v-for="(interest, index) of chosenInterests" :key="index">{{ interest }}</li>
            </ul>
          </div>
          <div class="faction">
            <label> You will be joining <b>{{ chosenFaction }}</b> </label>
          </div>
        </section>

        <footer class="actionBar">
          <button @click.prevent="postAppData()">Submit</button>
          <button @click.prevent="getExternalData()">Get Ext Data</button>
          <button @click.prevent="getExternalDataFromAFile()">Get Ext Data From A File</button>
        </footer>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section.application {
    margin: 20px auto;
    text-align: initial;
    max-width: 80%;
    * {
      box-sizing: border-box;
    }
  }

  label {
      display: block;
      margin: 20px 0 10px;
  }
  input[type="text"],input[type="password"] {
      display: block;
      width: 50%;
      padding: 8px;
  }

  main.input {
    margin: 0px auto;
    div.intChk {
      display: inline-block;
      * {
        display: inline-block;
      }
      label {
        margin-right: 2rem;
      }
      input[type="checkbox"] {
        margin-right: 0.5rem;
      }
    }
  }

  section.preview {
    padding: 10px 20px;
    border: 2px dotted #ccc;
    margin: 30px 0;
    background-color: #fafafa
  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class Application extends Vue {

    username: string = "";

    password: string = "";

    providedInterests: any[] = [
      {
        name: "haveMeals",
        value: "吃饭",
        valueShown: "吃饭"
      },
      {
        name: "ruaMao",
        value: "rua猫",
        valueShown: "rua猫"
      },
      {
        name: "playGames",
        value: "打游戏",
        valueShown: "打游戏"
      },
      {
        name: "drink",
        value: "喝酒",
        valueShown: "喝酒"
      },
      {
        name: "daGou",
        value: "打狗",
        valueShown: "打狗"
      },
      {
        name: "goofAround",
        value: "闲逛",
        valueShown: "闲逛"
      },
      {
        name: "qiMaMa",
        value: "气妈妈",
        valueShown: "气妈妈"
      }
    ];

    chosenInterests: any[] = [];

    providedFactions: any[] = [
      {
        name: "单身狗",
        nameDisplay: "单身狗"
      },
      {
        name: "月光喵",
        nameDisplay: "月光喵"
      },
      {
        name: "程序猿",
        nameDisplay: "程序猿"
      },
      {
        name: "权限汪",
        nameDisplay: "权限汪"
      },
      {
        name: "死肥豺",
        nameDisplay: "死肥豺"
      },
      {
        name: "CN马",
        nameDisplay: "CN马"
      },
      {
        name: "尖角交",
        nameDisplay: "尖角交"
      }
    ];

    chosenFaction: string = "";

    async postAppData() {
      // let baseHtml = "https://jsonplaceholder.typicode.com";
      // let response = await this.$http.post(`${baseHtml}/posts`, {
      //   title: "application form from hello-vue",
      //   id: 998, //dummy
      //   userId: 998, //dummy
      //   body: this.providedInterests
      // });
      // if (response.status == 200 || 201) {
      //   alert("appData successfully sent");
      // } else {
      //   alert(`Opps! Looks like something's not right. We got ${response.status} from the rear-end. See console for more info.`);
      //   console.log(response);
      // }
    }

    async getExternalData() {
      // let baseHtml = "https://jsonplaceholder.typicode.com";
      // let response = await this.$http.get(`${baseHtml}/posts`);
      // let _10Entries = response.body.slice(0, 10);
      // console.log(_10Entries);
    }

    async getExternalDataFromAFile() {
      // let baseHtml = "assets/data";
      // let response = await this.$http.get(`/static/data/json`);
      // console.log(response);
    }



  }
</script>



