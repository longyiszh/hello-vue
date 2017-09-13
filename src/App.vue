<template>
  <div class="root" v-wmode:report="{width: 'narrow'}">

    <main class="title">

      <nav class="appNav">
        <h3>app nav</h3>
        <ul>
          <li><router-link to="/index">index</router-link></li>
          <li><router-link to="/cdkwar">cdkwar</router-link></li>
          <li><router-link to="/warzone">warZone</router-link></li>
          <li><router-link to="/foodpresent">foodpresent</router-link></li>
          <li><router-link to="/application">application</router-link></li>
          <li><router-link to="/pipe">pipe</router-link></li>
          <li><router-link to="/mixin">mixin</router-link></li>
        </ul>
      </nav>

      <div class="router">
        <router-view></router-view>
      </div>

    </main>
  </div>
  <!-- 只能写一个div，没有第二个 -->
</template>

<script>


export default {


  data() {
    return {
      title: 'hello-vue'
    }
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

</style>
