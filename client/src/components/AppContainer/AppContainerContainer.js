import {connect} from "react-redux";
import AppContainer from "./";

const mapStateToProps = (state, ownProps) => {

    return { userId: state.auth.userId }
}

const AppContainerContainer = connect(mapStateToProps)(AppContainer);

export default AppContainerContainer;