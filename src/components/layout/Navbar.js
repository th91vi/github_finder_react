import React from 'react'
import Proptypes from 'prop-types'

// export class Navbar extends Component {
// const Navbar = (props) => {
const Navbar = ({ icon, title }) => { // Aqui estamos fazendo destructuring das defaultProps
        // static defaultProps = {
        //     title: 'Github Finder React',
        //     icon: 'fab fa-github'
        // }
    
        // static propTypes = {
        //     title: Proptypes.string.isRequired,
        //     icon: Proptypes.string.isRequired
        // }

    // render(){
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon}></i> {title}
                </h1>
            </nav>
        )
    // }
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