/** @format */

import React, { Component } from 'react';
import './App.css';
import Triggers from './components/triggers';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='bodiao'>
					<div className='titles'>Pissimether</div>
					<div className='subx'>
						<div className='substitles'>
							This is not a competition!
						</div>
						<div className='substitles'>
							But if so, which of these would be irritating you
							the most?
						</div>
					</div>
					<div>
						<Triggers />{' '}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;

