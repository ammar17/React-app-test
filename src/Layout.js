/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */

import React from 'react';
import Header from "./Header";
import RuleListContainer from "./RuleListContainer";
import {Route} from 'react-router-dom';
import RuleForm from "./RuleForm";
import RuleFormContainer from "./RuleFormContainer";
import LayoutContainer from "./LayoutContainer";
import PropTypes from "prop-types";


class Layout extends React.Component {
	componentDidMount() {
		this.props.loadRules();
	}

	render() {
		return (
			<div>
				<Header/>
				<div className="container-fluid">
					<div className="container">
						<Route exact path="/" component={RuleListContainer}/>
						<Route exact path="/edit" component={RuleFormContainer}/>
						<Route exact path="/edit/:id" component={RuleFormContainer}/>
					</div>
				</div>
			</div>
		);
	}
}

Layout.propTypes = {
	loadRules: PropTypes.func.isRequired,
};

Layout.defaultProps = {
	loadRules:() =>{
		console.log('default loadRules function');
	}
};

export default Layout;
