import { createStore } from "vuex";
import Members from "./members";
import Posts from "./posts";
import UI from "./ui";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    members: Members,
    posts: Posts,
    ui: UI,
  },
});
