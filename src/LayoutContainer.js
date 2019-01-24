import {connect} from 'react-redux';
import { fetchRules} from './actions/rules';
import Layout from './Layout';



function mapDispatchToProps(dispatch) {
	return {
		loadRules: () => {
			console.log("fetchRules function");
			dispatch(fetchRules());
		}
	}
};

const LayoutContainer = connect(
	null,
	mapDispatchToProps,
)(Layout);

export default LayoutContainer;
