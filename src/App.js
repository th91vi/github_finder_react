import React, { useState, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
    const [alert, setAlert] = useState(null);

    const showAlert = (msg, type) => {
        setAlert({ msg: msg, type: type });

        setTimeout(() => setAlert( null ), 2500)
    }

        return (
            <GithubState>
                <Router>
                <div className="App">
                    <Navbar />
                    <div className='container'>
                        <Switch>

                            <Route exact path='/' render={ props => (
                                <Fragment>
                                    <Search
                                        setAlert={showAlert}
                                    />
                                    <Users />
                                </Fragment>
                            )} />

                            <Route exact path='/about' component={About} />

                            <Route exact path='/user/:login' component={User} />
                        </Switch>
                        <Alert alert={alert} />
                    </div>
                </div>
                </Router>
            </GithubState>
        );
}

export default App;
