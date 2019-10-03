import { connect } from "react-redux";
import TitleList from "../components/TitleList";

function mapStateToProps(state) {

  return {
    titles: state.titles
  };
}

const connectedComponent = connect(
  mapStateToProps
);

export default connectedComponent(TitleList);