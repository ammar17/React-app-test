/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Rule from './Rule';

class RuleList extends React.Component {
	componentDidMount() {
		this.props.loadRules();
	}

	render() {
		if(this.props.rules.lenght === 0) return(<h1> No Rules :) </h1>)
		const elements = this.props.rules.map(rule => <Rule key={rule.id} rule={rule} />);
		return (
			<div>{elements}</div>
		);
	}
}

RuleList.propTypes = {
	rules: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
	})).isRequired,
	loadRules: PropTypes.func.isRequired,
};

RuleList.defaultProps = {
	rules: [{id:1, title:"toto"}],
	loadRules:() =>{
	console.log('default loadRules function')
	}
};

export default RuleList;
