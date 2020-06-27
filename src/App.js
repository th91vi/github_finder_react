import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import './App.css';

class App extends Component {
    state = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        alert: null,
    }

    searchUsers = async (text) => {
        this.setState({ loading: true })

        const usersResponse = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        const usersResult = await usersResponse.json();

        this.setState({ users: usersResult.items, loading: false })
    }

    getSingleUser = async (login) => {
        this.setState({ loading: true })

        const usersResponse = await fetch(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        const usersResult = await usersResponse.json();

        this.setState({ user: usersResult, loading: false })
    }

    getUserRepos = async (login) => {
        this.setState({ loading: true })

        const usersResponse = await fetch(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        const usersResult = await usersResponse.json();

        this.setState({ repos: usersResult, loading: false })
    }

    clearUsers = () => {
        this.setState({ users: [], loading: false});
    }

    setAlert = (msg, type) => {
        this.setState({ alert: { msg: msg, type: type } } );

        setTimeout(() => this.setState({ alert: null}), 2500)
    }

    render() {
        const { users, loading, user, repos } = this.state;

        return (
            <Router>
            <div className="App">
                <Navbar />
                <div className='container'>
                    <Switch>

                        <Route exact path='/' render={ props => (
                            <Fragment>
                                <Search
                                    searchUsers={this.searchUsers}
                                    clearUsers={this.clearUsers}
                                    showClear={users.length > 0 ? true : false}
                                    setAlert={this.setAlert}
                                />
                                <Users loading={loading} users={users} />
                            </Fragment>
                        )} />

                        <Route exact path='/about' component={About} />

                        <Route exact path='/user/:login' render={ props => (
                            <User
                                { ...props}
                                getSingleUser={this.getSingleUser}
                                getUserRepos={this.getUserRepos}
                                user={user}
                                repos={repos}
                                loading={loading}
                            />
                        )} />
                    </Switch>
                    <Alert alert={this.state.alert} />
                </div>
            </div>
            </Router>
        );
    }
}

export default App;
