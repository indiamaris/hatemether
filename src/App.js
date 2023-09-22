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
							'What' is pissing you off today?
						</div>
						<div className='substitles'>
							How much is 'what' pissing you off today?
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

