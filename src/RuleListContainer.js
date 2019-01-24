import {connect} from 'react-redux';
import { fetchRules} from './actions/rules';
import RuleList from './RuleList';


function mapStateToProps(state) {
	return {
		rules: state.rules
	}
};

function mapDispatchToProps(dispatch) {
	return {
		loadRules: () => {
			dispatch(fetchRules());
		}
	}
};

const RuleListContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(RuleList);

export default RuleListContainer;
