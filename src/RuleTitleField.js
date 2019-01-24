/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */

import React from 'react';


class RuleTitleField extends React.Component {
	render() {
		const {touched} = this.props;
		return (
			<div className="form-group">
				<label htmlFor="rule-title">Title</label>
				<input {...this.props.input} type="text" className="form-control" id="rule-title" placeholder="Title"/>
				{touched && this.props.meta.error && <span>this.props.meta.error</span>}
			</div>
		)

	}
}

export default RuleTitleField;
