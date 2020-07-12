import React, { useReducer } from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types'

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers = async (text) => {
        setLoading();

        const usersResponse = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        const usersResult = await usersResponse.json();

        dispatch({
            type: SEARCH_USERS,
            payload: usersResult.items
        })
    }

    // Get Single User
    const getSingleUser = async (login) => {
        setLoading(true);

        const userResponse = await fetch(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        const userResult = await userResponse.json();

        dispatch({
            type: GET_USER,
            payload: userResult
        })
    }

    // Get Repos
    const getUserRepos = async (login) => {
        setLoading(true);

        const userResponse = await fetch(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        const userResult = await userResponse.json();

        dispatch({
            type: GET_REPOS,
            payload: userResult
        })
    }

    // Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                getSingleUser,
                clearUsers,
                getUserRepos
            }}
        >
            {props.children}
        </GithubContext.Provider>
    
}

export default GithubState;