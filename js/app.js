"use strict";

const vueData = {
  gdh: "高端黑 Gaoduanhei",
  caster: "Steve"
}

const appEntry = new Vue({
  el: "#appEntry",
  data: vueData,
  methods: {
    darnify: (target) => {
      // console.log(this); // window
      return `Boom!${target} has been blackend by ${vueData.caster}`;
    }
  }
});