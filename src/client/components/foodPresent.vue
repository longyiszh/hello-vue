<template>
  <section>

    <slot name="title"></slot>

    <h3>Food Table [slot]</h3>

    <slot></slot>

    <div class="bigTable">
      <slot name="table"></slot>
    </div>
    
    <div class="commentArea">
      <slot name="commentArea"></slot>
    </div>
    
  </section>
</template>

<style lang="scss" scoped>
  div.bigTable {
    border: 1px dashed indigo;
  }
  div.table {
    text-align: center;
    ul {
      display: inline-block;
      list-style-type: none;
      padding-left: 0px;
    }
    div.jjj {
      width: 200px; border: 1px solid cyan
    }
    div.bgm {
      width: 300px;
      border: 2px solid gold;
      background-color: #fafafa;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),
                  0 0 0 1px rgba(0,0,0,0.08);
      border-radius: 2px;
    }
    div.wc {
      width: 10em;
      border: 2px solid crimson;
      border-radius: 2px;
      margin: 1em;
    }
  }

  div.commentArea {
    border: 2px solid darkkhaki;
    background-color: #fafafa;

    table.commentTable {
      margin: 0px auto;
    }

  }
</style>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class FoodPresent extends Vue {

  }
</script>



