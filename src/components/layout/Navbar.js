import React from 'react'
import Proptypes from 'prop-types'

const Navbar = ({ icon, title }) => { // Aqui estamos fazendo destructuring das defaultProps
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon}></i> {title}
                </h1>
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