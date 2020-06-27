import React from 'react'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => { // Aqui estamos fazendo destructuring das defaultProps
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon}></i> {title}
                </h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        )
}

Navbar.defaultProps = {
    title: 'Github Finder React',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: Proptypes.string.isRequired,
    icon: Proptypes.string.isRequired
}


export default Navbar;