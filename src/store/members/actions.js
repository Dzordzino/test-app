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
  async login({ commit, dispatch }, { username, password }) {
    try {
      commit("loginUser", { username, password });
      sessionStorage.setItem("user", username);
      dispatch("closeModal");
      return true;
    } catch (e) {
      return e;
    }
  },
  async signup({ commit, dispatch }, user) {
    try {
      const res = await axios.post(`http://localhost:3000/users/`, user);
      if (res.data) {
        sessionStorage.setItem("user", user.username);
        commit("signupUser", res.data);
        dispatch("closeModal");
      }
      return true;
    } catch (e) {
      return e;
    }
  },
  async followUser({ commit }, { follow, id }) {
    try {
      const res = await axios.patch(`http://localhost:3000/users/${id}`, {
        following: follow,
      });
      if (res.data) {
        commit("followUser", res.data);
      }
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
};

export default memberActions;
