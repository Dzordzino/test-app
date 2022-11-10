import postActions from "./actions";
import postGetters from "./getters";
import postMutations from "./mutations";

const Posts = {
  state: () => ({
    posts: [],
  }),
  mutations: postMutations,
  actions: postActions,
  getters: postGetters,
};

export default Posts;
