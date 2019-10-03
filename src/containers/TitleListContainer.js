import { connect } from "react-redux";
import TitleList from "../components/TitleList";

function mapStateToProps(state) {
  let postKeys = Object.keys(state.posts);
  let allPosts = postKeys.map(key => {
    return state.posts[key]
  });

  return {
    posts: allPosts
  };
}

const connectedComponent = connect(
  mapStateToProps
);

export default connectedComponent(TitleList);