import axios from "axios";

const memberActions = {
  async fetchMembers({ commit }) {
    try {
      const res = await axios.get("http://localhost:3000/users");
      commit("setMembers", res.data);
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
};

export default memberActions;
