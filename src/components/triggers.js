/** @format */

import React, { Component } from 'react';
import Counter from './counter';

class Triggers extends Component {
	state = {
		triggers: [
			{ id: 'Burocracy:', value: 0 },
			{ id: 'Stupidity:     ', value: 0 },
			{ id: 'Astrology:     ', value: 0 },
		],
	};
	render() {
		return (
			<div>
				<span className='counters'>
					{this.state.triggers.map((trigger) => (
						<Counter
							key={trigger.id}
							label={trigger.id}
						/>
					))}
				</span>
			</div>
		);
	}
}

export default Triggers;

