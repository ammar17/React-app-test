import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store/store';
import LayoutContainer from "./LayoutContainer";

const domElement = document.getElementById('root');
const reactElement = (
	<BrowserRouter>
		<Provider store={store}>
			<Route path="/" component={LayoutContainer}/>
		</Provider>
	</BrowserRouter>

);
ReactDOM.render(reactElement, domElement);
