"use strict";

const vueData = {
  gdh: "高端黑 Gaoduanhei",
  caster: "Steve",
  site: "http://www.linruotian.com",
  html: "<a href='http://www.linruotian.com'>Collect BDK</a>",
  boomed: false
};

const eventData = {

  cdkwar: [
    {
      name: 'Billy',
      cdk: 'bdk',
      num: 0,
      php: 'http://www.linruotian.com',
      bFactor: 0.888
    },
    {
      name: 'Mile',
      cdk: 'mdk',
      num: 0,
      php: 'http://www.mile.com',
      bFactor: 0.999
    },
    {
      name: 'Steve',
      cdk: 'sdk',
      num: 0,
      php: 'http://www.wcnexus.com',
      bFactor: 1.001
    }
  ],

  x: 0,
  y: 0,
  kEventMsg: ''
};

const ebMethods = {
  searchFaction: (factName) => {
    for (let fact of eventData.cdkwar) {
      if (factName === fact.name) {
        return fact;
      }
    }
    return null;
  },
  change: (name, op, delta) => {
    let fact = ebMethods.searchFaction(name);
    if (fact) {
      if (op === "+") {
        fact.num += delta;
      }
      else if (op === "-") {
        fact.num -= delta;
      }
    } else {
      console.error("Invalid faction name");
    }

  },
  updateXY: (e) => {
    eventData.x = e.offsetX,
    eventData.y = e.offsetY
  },
  bombardPHP: (target, factor) => {
    if (factor <= 1) {
      alert(`${target} has prevented your bombarding.`);
    } else {
      alert(`Your bombarding to ${target}'s home page is unsuccessful, so you are going there manually.`);
    }
  },
  // bombardFailure: (target) => {
  //   alert(`${target} has prevented from your bombarding.`);
  // },
  // bombardUnsuccessful: (target) => {
  //   alert(`Your bombarding to ${target}'s home page is unsuccessful, so you are going there manually.`);
  // },
  logInputContent: () => {
    alert(`You just input ${eventData.kEventMsg}`);
  }
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
    },
    sayThanks: () => {
      alert("谢谢你的支持！Mua~");
    }
  },
  computed: {
    booming: () => {
      return {
        boom: vueData.boomed
      }
    }
  }
});

const eventBinding = new Vue({
  el: "#eventBinding",
  data: eventData,
  methods: ebMethods
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