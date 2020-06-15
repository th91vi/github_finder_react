import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css';

class App extends Component {
    state = {
        users: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true })

        const usersResponse = await fetch('https://api.github.com/users')
        const usersResult = await usersResponse.json();

        this.setState({ users: usersResult, loading: false })
    }

    render() {

        return (
            <div className="App">
                <Navbar />
                <div className='container'>
                    <Users loading={this.state.loading} users={this.state.users} />
                </div>
            </div>
        );
    }
}

export default App;
