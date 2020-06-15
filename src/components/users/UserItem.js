import React from 'react'
import PropTypes from 'prop-types'

// class UserItem extends Component {
const UserItem = ({ userProp: { login, avatar_url, html_url }}) => { // Aqui estamos fazendo destructuring da prop user, vimda de Users

        // const { login, avatar_url, html_url } = this.props.user;
        // const { login, avatar_url, html_url } = props.user;

        return (
            <div className='card text-center'>
                <img src={avatar_url} className='round-img' style={{ width: "60px" }} alt={login} />
                <h3>{login}</h3>

            <div>
                <a href={html_url} className='btn btn-dark btn-sm my-1'>View profile</a>
            </div>

            </div>
        )
}

// Definindo o tupo da prop passada
UserItem.propTypes = {
    userProp: PropTypes.object.isRequired,
}

export default UserItem;