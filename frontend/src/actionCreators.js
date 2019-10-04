import axios from 'axios';

const API_URL = 'http://localhost:5000/api'

function fetchPost(post) {
  return {
    type: 'FETCH_POST',
    payload: post
  };
}

function fetchPosts(posts) {
  return {
    type: 'FETCH_POSTS',
    payload: posts
  };
}


function addPost(post) {
  return {
    type: 'ADD_POST',
    payload: post
  }
}

function handleError(err) {
  return {
    type: 'ERROR',
    payload: err
  };
}


export function fetchPostFromApi(id) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${API_URL}/posts/${id}`);
      console.log('inside of the fetchPostFromAPI call', response)
      dispatch(fetchPost(response.data))
    } catch (err) {
      dispatch(handleError(err));
    }
  }
}

export function fetchAllPostsFromApi() {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${API_URL}/posts/`);
      console.log('inside of the fetchAllPostsFromAPI call', response)
      dispatch(fetchPosts(response.data))
    } catch (err) {
      dispatch(handleError(err));
    }
  }
}

export function addPostToApi(data) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.post(`${API_URL}/posts`, data);
      console.log('inside of the addPostToApi call', response)
      dispatch(addPost(response.data))
    } catch (err) {
      dispatch(handleError(err));
    }
  }
}