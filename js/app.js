"use strict";

const vueData = {
  gdh: "高端黑 Gaoduanhei",
  caster: "Steve",
  site: "http://www.linruotian.com",
  html: "<a href='http://www.linruotian.com'>Collect BDK</a>"
};

const eventData = {
  bdk: 0,
  mdk: 0,
  sdk: 0,

  x: 0,
  y: 0
};

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

const eventBinding = new Vue({
  el: "#eventBinding",
  data: eventData,
  methods: {
    change: (dk, op, delta=1) => {
      if (op === "+") {
        eventData[dk]++;
      }
      else if (op === "-") {
        eventData[dk]--;
      }
    },
    updateXY: (e) => {
      eventData.x = e.offsetX,
      eventData.y = e.offsetY
    }
  }
});