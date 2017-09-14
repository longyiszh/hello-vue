import index from "../components/index.vue";
import cdkWar from "../components/cdkWar.vue";
import ourSide from "../components/ourSide.vue";
import foodPresentGiver from "../components/foodPresentGiver.vue";
import application from "../components/application.vue";
import pipe from "../components/pipe.vue";
import gameDetail from "../components/gameDetail.vue";
import mixinTest from "../components/mixinTest.vue";
import http404 from "../components/http404.vue";


export const hvRoute = [
  {
    path: "/",
    redirect: '/index'
  },
  {
    path: "/index",
    component: index
  },
  {
    path: "/cdkwar",
    component: cdkWar
  },
  {
    path: "/warzone",
    component: ourSide
  },
  {
    path: "/foodpresent",
    component: foodPresentGiver
  },
  {
    path: "/application",
    component: application
  },
  {
    path: "/pipe/list",
    component: pipe
  },
  {
    path: "/pipe/name/:name",
    component: gameDetail
  },
  {
    path: "/mixin",
    component: mixinTest
  },
  {
    path: "**",
    component: http404
  }
];