/**
 * Display a like (or dislike) button.
 * This button is initialized with a type (set on component props):
 * - If type is "up", then a click on this button will increment counter.
 * - If type is "down", then a click on this button will decrement counter.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LikeBtn extends React.Component {
  constructor(props) {
    super(props);

       this.handleIncrement = this.handleIncrement.bind(this);
  }

  // Increment counter.
	handleIncrement() {
        const {id, dislikes} = this.props;
		this.props.increment(id, dislikes);
  }

  render() {
    const isUp = this.props.type === 'up';
    const title = isUp ? '+1' : '-1';
    const css = {
      'glyphicon-thumbs-up': isUp,
      'glyphicon-thumbs-down': !isUp,
    };

    return (
      <button className="btn btn-default" title={title} onClick={this.handleIncrement}>
        {this.props.counter} <i className={classNames('glyphicon', css)} />
      </button>
    );
  }
}

LikeBtn.defaultProps = {
	id: 1,
	type:'up'
};

LikeBtn.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
	increment: PropTypes.func,
	title: PropTypes.string,
	id: PropTypes.number,
};

export default LikeBtn;
