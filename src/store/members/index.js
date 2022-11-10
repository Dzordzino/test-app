import memberActions from "./actions";
import memberGetters from "./getters";
import memberMutations from "./mutations";

const Members = {
  state: () => ({
    members: [],
    user: {},
  }),
  mutations: memberMutations,
  actions: memberActions,
  getters: memberGetters,
};

export default Members;
