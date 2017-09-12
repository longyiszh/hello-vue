<template>
  <section class="pipe">
    <div>
      <h2>Pipes [vue filters]</h2>
      <h3>{{ ppapData.title| goUp }}</h3>
      <p>{{ ppapData.descr| snip }}</p>
    </div>
    <div class="gpanGames">
      <h2>Gpan Games [filters on v-for] (need to use computed prop)</h2>

      <label>Search by Name</label>
      <input type="text" name="searchByName" placeholder="searchByName" v-model="gpanSearch.byName">

      <label>Search games with rate not below %</label>
      <input type="text" name="searchByRateGt" placeholder="Rate Greater than %" v-model="gpanSearch.byRate">

      <article v-for="game of filteredGames">
        <div class="picHolder">
          <span class="gameTitle">{{ game.nameDisplay }}</span>
        </div>
        <div class="contentHolder">
          <div class="basicInfo">rate: {{ game.rate*100 }}%</div>
          <div class="descr">{{ game.descr }}</div>
        </div>
      </article>

      <article v-if="filteredGames.length <= 0">
        <p> nothing found</p>
      </article>

    </div>
  </section>
</template>

<script>

const ppapData = {
  title: "I have a pen! I have an apple!",
  descr: "Infectiously-catchy earworm 'PPAP' (short for Pen-Pineapple-Apple-Pen) was performed by DJ Piko-Taro, a fictional character played by Japanese entertainer Kazuhiko Kosaka."
}

const gpanGames = [
  {
    name: "dota2",
    nameDisplay: "刀塔2",
    descr: "每一天全球有数百万玩家化为一百余名Dota英雄展开大战。不论是游戏时间刚满10小时还是1000小时，比赛中总能找到新鲜感。定期的更新则保证游戏性、功能和英雄都能持续发展，Dota 2已真正地焕发了生命。",
    rate: 0.88
  },
  {
    name: "PLAYERUNKNOWN_S_BATTLEGROUNDS",
    nameDisplay: "绝地求生：大逃杀",
    descr: "绝地求生是大逃杀类型的游戏，每一局游戏将有100名玩家参与，他们将被投放在绝地岛的上空，游戏开始跳伞时所有人都一无所有。为了抢今晚的鸡大家会拼个你死我活。",
    rate: 0.72
  },
  {
    name: "ARK:Survival_Evolved",
    nameDisplay: "方舟：生存进化",
    descr: "由虚幻4引擎打造的一款多人在线生存竞技网游，在一个超高自由度的开放世界里，可以体验采集、制造、打猎、收获、建造、研究以及驯服恐龙等超多自由内容，感受酷热白昼、冰冷夜晚的动态天气系统以及饥饿口渴等现实中的生存挑战，还要面对其它生存者的威胁，合作生存还是竞技厮杀，由你决定！",
    rate: 0.56
  },
  {
    name: "Tom_Clancys_Rainbow_Six_Siege",
    nameDisplay: "彩虹六号：围攻",
    descr: "《彩虹六号：围攻》是育碧蒙特利尔工作室旗下即将推出的知名第一人称射击模拟系列游戏的最新作品，专为新一代游戏机和主机开发，属于《彩虹六号》系列。该作灵感来源于现实世界中的反恐行动，《彩虹六号：围攻》诚邀玩家掌控破坏的艺术，游戏核心是对激烈的近距离对抗，高杀伤力，战术，团队合作和爆破行动。《彩虹六号：围攻》的多人模式继承系列前作的精髓，为激烈的交火和战略交锋创造了新场所。",
    rate: 0.80
  },
  {
    name: "Warframe",
    nameDisplay: "星际战甲",
    descr: "Warframe 是一款在不断变化的科幻世界中的多人合作免费在线动作游戏。和你的同伴一起加入遍布太阳系的玩家与敌人对抗游戏，驾驭 Warframe单独作战或者一起对抗威胁整个世界的敌人。",
    rate: 0.91
  },
  {
    name: "Grand_Theft_Auto_V",
    nameDisplay: "侠盗猎车手 5",
    descr: "Elevate your criminal empire with GTA Online: Smuggler’s Run. Manage a new smuggling business from customizable Hangar properties and store your collection of new planes and choppers. Featuring seven new aircraft, two new cars, Motor Wars Adversary Mode and much more.",
    rate: 0.67
  },
  {
    name: "Sid_Meiers_Civilization_V",
    nameDisplay: "文明 5",
    descr: "创建、探索、并下载新的玩家自制地图、场景、界面，等等！",
    rate: 0.94
  },
  {
    name: "Fallout_4",
    nameDisplay: "辐射 4",
    descr: "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming.",
    rate: 0.15
  },
  {
    name: "Terraria",
    nameDisplay: "泰拉瑞亚",
    descr: "挖掘，战斗，探索，建造！在这个动感十足的冒险游戏里没有什么是不可能的。",
    rate: 0.95
  },
  {
    name: "The_Witcher_3_Wild_Hunt",
    nameDisplay: "巫师 3：狂猎",
    descr: "The Witcher is a story-driven, next-generation open world role-playing game, set in a visually stunning fantasy universe, full of meaningful choices and impactful consequences. In The Witcher, you play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy.",
    rate: 0.96
  },
  {
    name: "Hearts_of_Iron_IV",
    nameDisplay: "钢铁雄心 4",
    descr: "Victory is at your fingertips! Your ability to lead your nation is your supreme weapon, the strategy game Hearts of Iron IV lets you take command of any nation in World War II; the most engaging conflict in world history.",
    rate: 0.79
  },
  {
    name: "Age_of_Empires_II_HD",
    nameDisplay: "帝国时代 2 高清版",
    descr: "《帝国时代二》经过高清重制, 拥有了新的游戏属性, 还附带了贸易卡片, 更强的AI电脑, 玩家作坊, 多人联机, 内置Steam链接和其他更多的内容!",
    rate: 0.93
  }
];

const gpanSearch = {
  byName: "",
  byRate: 0.00
}


export default {
  data() {
    return {
      ppapData: ppapData,
      gpanGames: gpanGames,
      gpanSearch: gpanSearch
    }
  },
  filters: {
    // 写到这里的filter都是local的，不能被其他组件使用
    goUp(value) {
      return value.toUpperCase(); 
    }
  },
  methods: {},
  computed: {
    filteredGames() {
      return this.gpanGames
      .filter((game) => {
        return game.nameDisplay.match(this.gpanSearch.byName)
      })
      .filter((game) => {
        return game.rate >= (gpanSearch.byRate/100);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  section.pipe {
    text-align: initial;
    margin-bottom: 5em;
  }
  div.gpanGames {
    input[type="text"],input[type="password"] {
        display: block;
        width: 30%;
        padding: 8px;
    }
    article {
      display: flex;
      background-color: #eeeeee;
      margin: 1em;
    }

    div.picHolder {
      display: block;
      width: 40%;
      margin-right: 2em;
      text-align: center;
      span.gameTitle {
        position: relative;
        top: 50%;
      }
    }
    div.contentHolder {
      display: block;
      width: 50%;
    }
  }
</style>
