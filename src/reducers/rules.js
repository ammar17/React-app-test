// il faut tjrs une valeurs par défaut

const initialState = [];

function rulesReducer(state = initialState, action) {
	switch (action.type) {
		case 'RULES_LOADED':
			return action.rules;
		case 'INCREMENT_LIKE':
			const {ruleId, dislikes} = action;
			const ruleIndex = state.findIndex(r => r.id === ruleId);
			const rule = state[ruleIndex];
			let newRule;
			if (dislikes) {
				// Créer une rule mise à jour
				newRule = {
					...rule,
					dislikes: rule.dislikes + 1
				};
			} else {
				// Créer une rule mise à jour
				newRule = {
					...rule,
					likes: rule.likes + 1
				};
			}
			// Créer une nouvelle liste des rules
			const newState = [...state];
			newState[ruleIndex] = newRule;
			console.log('rules.js::rulesReducer-L18 newState', newState);
			return newState;
		default:
			return state
	}
}

export default rulesReducer;