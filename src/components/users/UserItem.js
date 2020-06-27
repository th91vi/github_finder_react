import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const UserItem = ({ userProp: { login, avatar_url }}) => { // Aqui estamos fazendo destructuring da prop user, vinda de Users

        return (
            <div className='card text-center'>
                <img src={avatar_url} className='round-img' style={{ width: "60px" }} alt={login} />
                <h3>{login}</h3>

                <div>
                    <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>View profile</Link>
                    {/* <a href={html_url} className='btn btn-dark btn-sm my-1'>View profile</a> */}
                </div>

            </div>
        )
}

// Definindo o tupo da prop passada
UserItem.propTypes = {
    userProp: PropTypes.object.isRequired,
}

export default UserItem;