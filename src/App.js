import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

class App extends Component {
    render() {

        return (
            <div className="App">
                <Navbar />
                {/* <Navbar title='Github Finder React' icon='fab fa-github'/> */}
            </div>
        );
    }
}

export default App;
