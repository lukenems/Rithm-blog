import {
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from "./actionTypes.js";

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post
  };
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    payload: post
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: id
  };
}

export function addComment(data) {
  return {
    type: ADD_COMMENT,
    payload: data
  };
}

export function deleteComment(id) {
    return {
      type: DELETE_COMMENT,
      payload: id
    };
  }
