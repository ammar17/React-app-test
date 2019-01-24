// action classique (Renvoie un objet)
export function loadRules(rules) {
	return {
		type: 'RULES_LOADED',
		rules
	}
}

// Action asynchronne (renvoie une fonction)
/*export const fetchRules = () => (dispatch) => {
	fetch('/rest/rules/')
	.then(response => response.json())
	.then(json => dispatch(loadRules(json)))
	.catch(err => {
		console.log('rules.js::-L13 err:', err);
	})
};*/

// Action asynchronne (renvoie une fonction)
export const fetchRules = () => async (dispatch) => {
	try {
		const resRules = await fetch('/rest/rules/');
		const json = await resRules.json();
		dispatch(loadRules(json));
	} catch (error) {
		console.log('rules.js::-L13 err:', error);
	}
};

// Action asynchronne (renvoie une fonction)
export const updateLike = (id) => async (dispatch) => {
	try {
		const resRulesId = await fetch(`/rest/rules/${id}/likes`);
		//const json = await resRulesId.json();
		dispatch(dispatch({
			type: 'INCREMENT_LIKE',
			ruleId: id,
			dislikes: false
		}));
	} catch (error) {
		console.log('rules.js::-L13 err:', error);
	}
};

// Action asynchronne (renvoie une fonction)
export const updateDisLike = (id) => async (dispatch) => {
	try {
		const resRulesId = await fetch(`/rest/rules/${id}/likes`);
		//const json = await resRulesId.json();
		dispatch(dispatch({
			type: 'INCREMENT_LIKE',
			ruleId: id,
			dislikes: true
		}));
	} catch (error) {
		console.log('rules.js::-L13 err:', error);
	}
};


// Action asynchronne (renvoie une fonction)
export const addRule = rule => dispatch => {
	try {
		fetch(`/rest/rules/`,
			{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				body: JSON.stringify(rule)
			})
		.then(()=>{
			dispatch(loadRules());
			console.log('addRule ok')
		})
		.catch(function (res) {
			console.log('addRule', res)
		})
	} catch (error) {
		console.log('rules.js::-L68', error);
	}
};

// Action asynchronne (renvoie une fonction)
export const updateRule = rule => dispatch => {
		try {
		fetch(`/rest/rules/${rule.id}/`,
			{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "PUT",
				body: JSON.stringify(rule)
			})
		.then(()=>{
			dispatch(loadRules());
			console.log('updateRule ok')
		})
		.catch(function (res) {
			console.log('updateRule')
		})
	} catch (error) {
		console.log('updateRule.js::-L68', error);
	}
};
