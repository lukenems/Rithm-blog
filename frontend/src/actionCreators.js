import axios from "axios";

const API_URL = "http://localhost:5000/api";

function fetchPost(post) {
  return {
    type: "FETCH_POST",
    payload: post
  };
}

function fetchPosts(posts) {
  return {
    type: "FETCH_POSTS",
    payload: posts
  };
}

function addPost(post) {
  return {
    type: "ADD_POST",
    payload: post
  };
}

function editPost(data) {
  return {
    type: "EDIT_POST",
    payload: data
  };
}

function deletePost(id, message) {
  return {
    type: "DELETE_POST",
    payload: { id, message }
  };
}

function handleError(err) {
  return {
    type: "ERROR",
    payload: err
  };
}

function addCommentToPost(postId, comment) {
  return {
    type: "ADD_COMMENT",
    payload: { postId, comment }
  };
}

export function fetchPostFromApi(id) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${API_URL}/posts/${id}`);
      dispatch(fetchPost(response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

export function fetchAllPostsFromApi() {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${API_URL}/posts/`);
      dispatch(fetchPosts(response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

export function addPostToApi(data) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.post(`${API_URL}/posts`, data);
      dispatch(addPost(response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

export function editPostAtApi(data) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.put(`${API_URL}/posts/${data.id}`, data);
      dispatch(editPost(response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

export function deletePostAtApi(id) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.delete(`${API_URL}/posts/${id}`);
      dispatch(deletePost(+id, response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}

export function addCommentToPostAtApi(postId, data) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.post(`${API_URL}/posts/${postId}/comments`, {
        text: data
      });
      dispatch(addCommentToPost(postId, response.data));
    } catch (err) {
      dispatch(handleError(err));
    }
  };
}
