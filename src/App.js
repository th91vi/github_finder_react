import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Github React Finder</h1>
            </div>
        );
        // return (
        //     <>
        //         <h1>Github React Finder</h1>
        //     </>
        // );

        // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Github React Finder'));
        // return createElement('div', {className:'App'}, createElement('h1', null, 'Github React Finder'));
    }
}

export default App;
