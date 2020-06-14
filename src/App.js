import React, { Component } from 'react';
import './App.css';

class App extends Component {
    // userName = () => { return 'John Pessoa' };

    render() {
        const userName = 'John Person';
        const loading = false;
        const showName = true;

        // if (loading) {
        //     return <h2>Loading...</h2>
        // }

        return (
            <div className="App">
                <h1>Github React Finder</h1>
                <ul>
                {loading ? <h4>Loading...</h4> : <li>User: {showName && userName }</li>}
                </ul>
            </div>
        );
    }
}

export default App;
