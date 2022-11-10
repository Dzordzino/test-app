const postMutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setPostComments(state, payload) {
    state.posts.find((post) => post.id === payload.id).comments =
      payload.comments;
  },
  setPostUser(state, payload) {
    state.posts.find((post) => post.id === payload.id).user =
      payload.user.username;
  },
  setNewComment(state, payload) {
    state.posts
      .find((post) => Number(post.id) === Number(payload.id))
      .comments.push(payload.comment);
  },
  setNewPost(state, post) {
    state.posts.push(post);
  },
  deletePost(state, postId) {
    const index = state.posts.indexOf(
      state.posts.find((post) => post.id === postId)
    );
    state.posts.splice(index, 1);
  },
  editPost(state, { id, title, body }) {
    const index = state.posts.indexOf(
      state.posts.find((post) => post.id === id)
    );
    state.posts[index].title = title;
    state.posts[index].body = body;
  },
  deleteComment(state, { id, postId }) {
    const commentPost = state.posts[postId - 1];
    const index = commentPost.comments.indexOf(
      commentPost.comments.find((comment) => comment.id === id)
    );
    state.posts[postId - 1].comments.splice(index, 1);
  },
  editComment(state, { id, postId, body }) {
    const commentPost = state.posts.find(
      (post) => Number(post.id) === Number(postId)
    );
    const index = commentPost.comments.indexOf(
      commentPost.comments.find((comment) => comment.id === id)
    );
    commentPost.comments[index].body = body;
  },
};

export default postMutations;
