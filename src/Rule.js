/**
 * Display a single rule.
 * Rule to display is set with the key `rule` on
 * the component props.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LikeBtnContainer from './LikeBtnContainer';
import './Rule.css';
import {Link} from 'react-router-dom';


class Rule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folded: !props.rule.description,
    };
    this.toggleFolded = this.toggleFolded.bind(this);
  }

  // Update folded state.
  // - If folded is currently `true`, turn it to `false`.
  // - If folded is currently `false`, turn it to `true`.
  toggleFolded() {
    this.setState({
      folded: !this.state.folded,
    });
  }

  render() {
    const {id, likes, dislikes, description, tags, title} = this.props.rule;
    const tagsMaps = tags.map(tag => <span key={tag} className="badge">{tag}</span>);
    const folded = this.state.folded;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading" role="presentation" onClick={this.toggleFolded}>
          {title}<i className={classNames('pull-right', 'glyphicon', { 'glyphicon-chevron-down': !folded, 'glyphicon-chevron-up': folded })} />
        </div>
        <div className={classNames('panel-body', { hidden: folded })}><p>{description}</p></div>
        <div className="panel-footer">
          <div className="btn-toolbar">
            {tagsMaps}
            <div className="btn-group btn-group-xs pull-right">
              <Link to={`/edit/${id}`} className="btn btn-primary" title="Update">
                <i className="glyphicon glyphicon-pencil" />
              </Link>
            </div>
            <div className="btn-group btn-group-xs pull-right">
              <LikeBtnContainer type="up" id={id} dislikes={false} counter={likes} />
              <LikeBtnContainer type="down" id={id} dislikes={true} counter={dislikes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Rule.propTypes = {
  rule: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Rule;
