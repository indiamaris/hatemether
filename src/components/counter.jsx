/** @format */

import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
	state = {
		count: 0,
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div className='contenedor'>
				<div className='contenedor1'>
					<span>{this.props.label}</span>
				</div>

				<div className='contenedor2'>
					<div className='contador'>{this.formatCount()}</div>
				</div>

				<div className='contenedor3'>
					<div>
						<button
							className='btn-dg'
							onClick={this.handleIncrement}>
							Increment Hate
						</button>
					</div>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;

