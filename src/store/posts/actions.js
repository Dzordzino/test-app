import axios from "axios";

const postActions = {
  async fetchPosts({ commit }) {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      commit("setPosts", res.data);
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
  async fetchPostComments({ commit }, { postId }) {
    try {
      const res = await axios.get(
        `http://localhost:3000/posts/${postId}/comments`
      );
      // mocking user data for comments
      const commentsMocked = res.data.map((item) => {
        const id = Math.floor(Math.random() * 10) + 1;

        !item.userId && (item.userId = id);
        return item;
      });

      commit("setPostComments", { comments: commentsMocked, id: postId });
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
  async fetchPostUser({ commit }, { postId, userId }) {
    try {
      const res = await axios.get(`http://localhost:3000/users?id=${userId}`);
      commit("setPostUser", { user: res.data[0], id: postId });
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
  async postReplay({ commit, dispatch }, { id, comment }) {
    try {
      const res = await axios.post(
        `http://localhost:3000/posts/${id}/comments`,
        {
          body: comment,
          userId: 1,
        }
      );
      if (res.data) {
        commit("setNewComment", { id: id, comment: res.data });
        dispatch("closeModal");
      }
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
  async sendPost({ commit, dispatch }, { id, title, body }) {
    try {
      const res = await axios.post(`http://localhost:3000/posts/`, {
        title: title,
        body: body,
        userId: id,
      });
      if (res.data) {
        commit("setNewPost", res.data);
        dispatch("closeModal");
      }
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
  async deletePost({ commit }, { id }) {
    try {
      axios.delete(`http://localhost:3000/posts/${id}`);
      commit("deletePost", id);
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
  async editPost({ commit }, { id, title, body }) {
    try {
      await axios.put(`http://localhost:3000/posts/${id}`, {
        title: title,
        body: body,
        userId: 1,
      });
      commit("editPost", { id, title, body });
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
  async deleteComment({ commit }, { id, postId }) {
    try {
      axios.delete(`http://localhost:3000/comments/${id}`);
      commit("deleteComment", { id, postId });
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
  async editComment({ commit, dispatch }, { id, postId, body }) {
    try {
      await axios.patch(`http://localhost:3000/comments/${id}`, {
        body: body,
      });
      commit("editComment", { id, postId, body });
      dispatch("closeModal");
    } catch (e) {
      throw new Error("API Error occurred.");
    }
  },
};

export default postActions;
