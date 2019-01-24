import {applyMiddleware, combineReducers, createStore} from 'redux';
import {reducer as formRucucer} from 'redux-form';
import rulesReducer from '../reducers/rules';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	rules: rulesReducer,
	form: formRucucer
});

const store = createStore(
	reducers,
	applyMiddleware(
		thunkMiddleware,
	)
);
export default store;
