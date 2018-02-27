<template>
  <section id="app">
    
    <div class="root">
      <nav class="appNav">
        <ul>
          <li><router-link to="/index">index</router-link></li>
          <li><router-link to="/cdkwar">cdkwar</router-link></li>
          <li><router-link to="/warzone">warZone</router-link></li>
          <li><router-link to="/foodpresent">foodpresent</router-link></li>
          <li><router-link to="/application">application</router-link></li>
          <li><router-link to="/pipe/list">pipe</router-link></li>
          <li><router-link to="/misc">miscTests</router-link></li>
        </ul>
      </nav>
      <main class="title" v-wmode:report="{width: 'narrow'}">

        <div class="router">
          <router-view></router-view>
        </div>

      </main>
    </div>
  </section>
  <!-- 只能写一个section，没有第二个 -->
</template>

<style lang="scss" scoped>
  main.title {
    text-align: center;
    margin: 0px auto;
  }

  nav.appNav {
    background-color: #24292e;
    height: 4em;
    padding: 0.125em;
    ul {
      list-style-type: none;
      li {
        display: inline;
        margin: 1em 2em;
        a {
          padding: 0.6em 0.5em;
          font-size: 1.5em;
          color: #eeeeee;
          text-decoration: none;
        }
        a.router-link-exact-active {
          color: white;
          background-color: #455a64;
        }
      }
    }
  }

</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({
    name: 'app'
  })
  export default class App extends Vue {

  }
</script>