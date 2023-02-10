import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/course",
      name: "scourse",
      component: () => import("../views/CourseView.vue"),
    },
    {
      path: "/AddDrop",
      name: "AddDrop",
      component: () => import("../views/AddDropView.vue"),
    },
  ],
});

export default router;
