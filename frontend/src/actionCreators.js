import axios from 'axios';

const API_URL = 'http://localhost:5000/api'

function fetchPost(post) {
  return {
    type: 'FETCH_POST',
    payload: post
  };
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
      let post = await axios.get(`${API_URL}/posts/1`);
      console.log('inside of the fetchPost API call', post)
      dispatch(fetchPost(post.data))
    } catch (err) {
      dispatch(handleError(err));
    }
  }
}