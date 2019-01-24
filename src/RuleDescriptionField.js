/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */

import React from 'react';


class RuleDescriptionField extends React.Component {
	render() {
		return (
			<div className="panel panel-primary">
				<div className="panel-body">
					<div className="form-group">
						<label htmlFor="rule-desc">Description</label>
						<textarea className="form-control" id="rule-desc" placeholder="Description"/>
					</div>
				</div>
			</div>


		)

	}
}

export default RuleDescriptionField;
