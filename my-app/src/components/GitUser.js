import React, { Component } from 'react';

class GitUser extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('render running');

		return (
			<div>
				{this.props.followers.map((user) => {
					return (
						<div>
							<h2> {user.login}</h2>
							<img src={user.avatar_url} alt="profile pic" />
							<a> {user.html_url}</a>
						</div>
					);
				})}
			</div>
		);
	}
}

export default GitUser;
