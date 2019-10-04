import { connect } from "react-redux";
import TitleList from "../components/TitleList";
import { fetchAllPostsFromApi } from '../actionCreators'

function mapStateToProps(state) {
  console.log("WHAT IM LOOKING FOR", state)
  return {
    titles: state.titles
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { fetchAllPostsFromApi }
);

export default connectedComponent(TitleList);