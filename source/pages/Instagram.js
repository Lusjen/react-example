//Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

//Components
import Header from '../components/Header.js';
import Content from '../components/Content.js';
@hot(module)
export default class Instagram extends Component {
	render () {
		return (
			<>
				<Header />
				<Content />
			</>
		
		);
	}
};