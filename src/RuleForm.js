/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */

import React from 'react';
import RuleDescriptionField from "./RuleDescriptionField";
import RuleTitleField from "./RuleTitleField";
import {Field} from 'redux-form'
import PropTypes from "prop-types"; // ES6


const validateTitle = (title) => {
	if (!title) {
		return 'Le titre est obligatoite'
	} else {
		if (title.length > 50) {
			return 'Le titre doit etre < 50 caractères'
		}
	}
	return undefined
};


class RuleForm extends React.Component {
	render() {
		const {handleSubmit, pristine, invalid, updateRule, addRule, isCreateForm} = this.props;
		const submit = isCreateForm ? addRule : updateRule;
		return (
			<div className="panel panel-primary">
				<div className="panel-body">
					<form onSubmit={handleSubmit(submit)}>
						<Field name="title" component={RuleTitleField} validate={validateTitle}/>
						<Field name="description" component={RuleDescriptionField}/>
						<button type="submit" className="btn btn-primary pull-right" disabled={pristine || invalid}>Submit</button>
					</form>
				</div>
			</div>
		)

	}
}

RuleForm.propTypes = {
	updateRule: PropTypes.func,
	addRule: PropTypes.func,
	isCreateForm: PropTypes.bool
};

RuleForm.defaultProps = {
	updateRule: () =>{},
	addRule: () =>{},
	isCreateForm: () =>{},
};
export default RuleForm;
