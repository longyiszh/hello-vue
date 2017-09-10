<template>
  <section class="application">
    <h2>Application Form [v-model]</h2>
    <div>
      <form>
        <main class="input">
          <div class="username">
            <label> Username </label>
            <input type="text" placeholder="name" maxlength="100" required v-model.lazy="appData.username">
            <!-- v-model也可以加修饰符，比如.lazy，输入完成后才赋值 -->
          </div>
          <div class="password">
            <label> Password </label>
            <input type="password" placeholder="password" maxlength="100" v-model="appData.password" required>
          </div>
          <div class="interest">
            <label> Choose Your interests </label>

            <div class="intChk" v-for="interest of appData.providedInterests">
              <!-- 把多个checkbox上的v-model设置为同一个数组，即可将它们的value交由vue管理 -->
              <input type="checkbox" :name="interest.name" :value="interest.value" v-model="appData.chosenInterests">
              <label> {{ interest.valueShown }} </label>
            </div> 
            
          </div>
        </main>

        <section class="preview">
          <div class="username">
            <label> Your username will be: </label>
            {{ appData.username }}
          </div>
          <div class="password">
            <p>Your password <b>{{ appData.password }}</b> has already been compromised</p> 
          </div>
          <div class="interest">
            <label> Your interests are </label>
            <ul>
              <li v-for="interest of appData.chosenInterests">{{ interest }}</li>
            </ul>
          </div>
        </section>

        <footer class="actionBar">
          <button @click.prevent="postAppData">Submit</button>
        </footer>
      </form>
    </div>
  </section>
</template>

<script>

const appData = {
  username: "",
  password: "",
  providedInterests: [
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
  ],
  chosenInterests: []
}

export default {
  data() {
    return {
      appData: appData
    };
  },
  methods: {
    postAppData: () => {
      console.log(appData);
    }
  }
}
</script>

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

