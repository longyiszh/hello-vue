import index from "../components/index.vue";
import cdkWar from "../components/cdkWar.vue";
import foodPresentGiver from "../components/foodPresentGiver.vue";
import application from "../components/application.vue";
import pipe from "../components/pipe.vue";


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
  },
  {
    path: "/application",
    component: application
  },
  {
    path: "/pipe",
    component: pipe
  }
];