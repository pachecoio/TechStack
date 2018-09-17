import { connect } from "react-redux";
import {LibraryList} from "./LibraryList";

const mapStateToProps = (state) => {
    // console.log(state);
    return state;
};

export default (connect(mapStateToProps))(LibraryList);
