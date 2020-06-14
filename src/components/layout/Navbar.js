import React, { Component } from 'react'
import Proptypes from 'prop-types'

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder React',
        icon: 'fab fa-github'
    }

    static propTypes = {
        title: Proptypes.string.isRequired,
        icon: Proptypes.string.isRequired
    }

    render(){
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={this.props.icon}></i> {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar;