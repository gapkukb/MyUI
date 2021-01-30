import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
      keywords: "首页的keywords",
      description: "首页的description"
    }
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "about",
      keywords: "子页的keywords",
      description: "子页的/*  */description"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
const keywordsMeta = document.getElementById("keywords") as HTMLMetaElement;
const descriptionsMeta = document.getElementById(
  "description"
) as HTMLMetaElement;
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  keywordsMeta.content = to.meta.keywords;
  descriptionsMeta.content = to.meta.description;
  next();
});
export default router;
