/**
 * Display list of rules.
 * The rules are provided under the key `rules` in
 * the component props.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";

class Header extends React.Component {
	render() {
		const {pathname} = this.props.location;
		return (
			<nav className="navbar navbar-default" role="navigation">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link to="/" className="navbar-brand brand">Developers rules</Link>
				</div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<li className={pathname === '/index' ? "active" : ''}>
							<Link to="/">Home</Link>
						</li>
						<li className={pathname === '/edit' ? "active" : ''}>
							<Link to="/edit">New</Link>
						</li>
					</ul>
				</div>
			</nav>

		)

	}
}

export default withRouter(Header);
