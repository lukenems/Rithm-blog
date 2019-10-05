import { connect } from "react-redux";
import TitleList from "../components/TitleList";
import { fetchAllPostsFromApi } from '../actionCreators'

function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { fetchAllPostsFromApi }
);

export default connectedComponent(TitleList);