import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];
