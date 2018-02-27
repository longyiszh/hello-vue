import index from "./components/index.vue";
import cdkWar from "./components/cdkWar.vue";

import foodPresentGiver from "./components/foodPresentGiver.vue";
import application from "./components/application.vue";
import pipe from "./components/pipe.vue";
import gameDetail from "./components/gameDetail.vue";
import miscTest from "./components/miscTest.vue";
import http404 from "./components/http404.vue";

// module lazy-loading
const warzone = () => import(/* webpackChunkName: "group-warzone" */ "./components/warzone/warzone.vue");

export const appRoute = [
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
    component: warzone
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
    path: "/misc",
    component: miscTest
  },
  {
    path: "**",
    component: http404
  }
];