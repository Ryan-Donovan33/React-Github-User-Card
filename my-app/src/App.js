import React, { Component } from 'react';
import './App.css';
import GitUser from './components/GitUser';
import axios from 'axios';

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
		console.log(this.state.users);
		return (
			<div className="App">
				<header className="App-header" />
				<GitUser />
				<h2> {this.state.usersData.login}</h2>
				<p>{this.state.usersData.name} </p>
				<img src={this.state.usersData.avatar} alt="profile pic" />
				<div />
			</div>
		);
	}
}

export default App;
