import React, { Component } from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: linear-gradient(180deg, #4864e6, #4bd6f2);
	border-radius: 4px;
	height: auto;
	margin: 8px;
	padding: 16px;
	width: 75%;
`;

const Login = styled.h2`
	font-size: 30px;
	color: white;
	width: 75%;
`;

const Img = styled.img`
height: auto:
width: 200px
`;

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
						<UserCard>
							<Login> {user.login}</Login>
							<Img src={user.avatar_url} alt="profile pic" />
							<a> {user.html_url}</a>
						</UserCard>
					);
				})}
			</div>
		);
	}
}

export default GitUser;
