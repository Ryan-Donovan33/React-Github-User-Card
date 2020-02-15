import React, { Component } from 'react';

class GitUser extends Component {
	constructor() {
		super();
		this.state = {
			user: []
		};
	}

	render() {
		console.log('render running');

		return (
			<div>
				<h1>Github Users!</h1>
			</div>
		);
	}
}

export default GitUser;
