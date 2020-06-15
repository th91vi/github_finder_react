import React, { Component } from 'react'

class UserItem extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         id: 'id',
    //         login: 'octocat',
    //         avatar_url: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4',
    //         html_url: 'https://github.com/octocat'
    //     }
    // }
    // state = {
    //     id: 'id',
    //     login: 'octocat',
    //     avatar_url: 'https://avatars1.githubusercontent.com/u/583231?s=400&v=4',
    //     html_url: 'https://github.com/octocat'
    // };

    render() {

        // const { login, avatar_url, html_url } = this.state;
        const { login, avatar_url, html_url } = this.props.user;

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
}

export default UserItem;