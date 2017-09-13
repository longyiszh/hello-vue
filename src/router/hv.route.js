import index from "../components/index.vue";
import cdkWar from "../components/cdkWar.vue";
import foodPresentGiver from "../components/foodPresentGiver.vue";


export const hvRoute = [
  {
    path: "/index",
    component: index
  },
  {
    path: "/cdkwar",
    component: cdkWar
  },
  {
    path: "/foodpresent",
    component: foodPresentGiver
  }
];