import {connect} from 'react-redux';
import LikeBtn from './LikeBtn';

import {updateDisLike, updateLike} from './actions/rules'


function mapStateToProps(state) {
};

function mapDispatchToProps(dispatch) {
	return {
		increment: (ruleId, dislikes) => {
			console.log("incrimente likes");
			if (!dislikes) {
				dispatch(updateLike(ruleId))

			} else {
				dispatch(updateDisLike(ruleId))
			}
			/*dispatch({
				type: 'INCREMENT_LIKE',
				ruleId: ruleId,
				dislikes: dislikes
			});*/
		}
	}
};

const LikeBtnContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(LikeBtn);

export default LikeBtnContainer;
