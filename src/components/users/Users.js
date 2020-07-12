import React, { useContext } from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import GitHubContext from '../../context/github/githubContext'

const Users = () => {
    const githubContext = useContext(GitHubContext)

    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="grid-2 grid-3">
                {users.map(user => (
                    <UserItem key={user.id} userProp={user}/>
                ))}
            </div>
        )
    }
}

export default Users
