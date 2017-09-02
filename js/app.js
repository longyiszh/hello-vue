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
  y: 0,
  kEventMsg: ''
};

const computedProData = {
  dog: 0,
  cat: 0,
  fish: 0,

  hound: 0,
  leopard: 0,
  shark: 0

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

const eventBinding = new Vue({
  el: "#eventBinding",
  data: eventData,
  methods: {
    change: (dk, op, delta) => {
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
    },
    bombardFailure: (target) => {
      alert(`${target} has prevented from your bombarding.`);
    },
    bombardUnsuccessful: (target) => {
      alert(`Your bombarding to ${target}'s home page is unsuccessful, so you are going there manually.`);
    },
    logInputContent: () => {
      alert(`You just input ${eventData.kEventMsg}`);
    }
  }
});

const computedPro = new Vue({
  el: "#computedPro",
  data: computedProData,
  methods: {
    // modNum: (target, num) => {
    //   computedProData[target] += num;
    // },
    calcDog: () => {
      console.log("dog computed");
      return computedProData.dog;
    },
    calcCat: () => {
      console.log("cat computed");
      return computedProData.cat - computedProData.dog;
    },
    calcFish: () => {
      console.log("fish computed");
      return computedProData.fish - (computedProData.cat - computedProData.dog);
    }
  },
  computed: {
    calcHound: () => {
      console.log("hound computed");
      return computedProData.hound - (computedProData.leopard - computedProData.shark);
    },
    calcLeopard: () => {
      console.log("leopard computed");
      return computedProData.leopard - computedProData.shark;
    },
    calcShark: () => {
      console.log("shark computed");
      return computedProData.shark;
    }
  }
});