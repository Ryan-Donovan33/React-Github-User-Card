import React, { Component } from 'react';
import './App.css';
import GitUser from './components/GitUser';
import axios from 'axios';
import styled from 'styled-components';

const View = styled.div`
display: flex:
flex-direction: column;
align-content: center;
`;

class App extends Component {
	constructor() {
		super();
		this.state = {
			usersData: {},
			followersData: []
		};
	}

	componentDidMount() {
		axios('https://api.github.com/users/Ryan-Donovan33')
			.then((users) => this.setState({ usersData: users.data }))
			.catch((err) => console.log('No Users!', err));
		console.log('componentDidMount running');

		axios('https://api.github.com/users/Ryan-Donovan33/followers')
			.then((users) => this.setState({ followersData: users.data }))
			.catch((err) => console.log('No followers', err));
	}

	render() {
		console.log(this.state.usersData);
		console.log(this.state.followersData);
		return (
			<View>
				<div>
					<h2> {this.state.usersData.login}</h2>
					<p>{this.state.usersData.name} </p>
					<img src={this.state.usersData.avatar_url} alt="profile pic" />
				</div>
				<GitUser followers={this.state.followersData} />
			</View>
		);
	}
}

export default App;
