<template>
    <div class="factB">
      <p><span class="faction">BHouse</span></p>
      <p><span>{{ bHouse.status }}</span></p>
      <div class="actionBar">
        <h3>Actions</h3>
        <p><button @click="repair()">Repair</button></p>
        <p><button @click="fireSHouse()">fire tactical nuke to SHouse</button></p>
      </div>
    </div>
</template>

<script>



export default {
  props: {
    bHouse: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    repair() {
      this.bHouse.status = "active"
    },
    fireSHouse() {
      this.$emit('bFire', "Boommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm~")
    }
  }
}
</script>

<style lang="scss">


</style>
