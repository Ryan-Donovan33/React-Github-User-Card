import React, { Component } from 'react';
import './App.css';
import GitUser from './components/GitUser';

class App extends Component {
	constructor() {
		super();
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		fetch('https://api.github.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ users: users.data }))
			.catch((err) => console.log('No Users!', err));
		console.log('componentDidMount running');
	}

	fetchUsers = (e) => {
		e.preventDefault();

		fetch('https://api.github.com/users/Ryan-Donovan33/followers')
			.then((res) => res.json())
			.then((users) => this.setState({ users: users.data.followers }))
			.catch((err) => console.log('No followers', err));
	};

	render() {
		console.log(this.state.users);
		return (
			<div className="App">
				<header className="App-header" />
				<GitUser />
			</div>
		);
	}
}

export default App;
