import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:userName",
    name: "User",
    component: UserProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
