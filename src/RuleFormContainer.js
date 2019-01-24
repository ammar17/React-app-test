import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import RuleForm from './RuleForm';
import {compose} from 'redux'
import {addRule, updateRule} from "./actions/rules";

function mapStateToProps(state, props) {
	const {id} = props.match.params;
	const rule = state.rules.find(rule => rule.id == id);
	return {
		rule: rule,
		initialValues: rule,
		isCreateForm: !rule
	}
};

function mapDispatchToProps(dispatch) {
	return {
		addRule: (value) => {
			dispatch(addRule(value))
		},
		updateRule: (value) => {
			dispatch(updateRule(value))
		}
	}

}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({form: 'ruleFormContainer'})
)(RuleForm);
