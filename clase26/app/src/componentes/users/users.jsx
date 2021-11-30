import users from './mocks/userslist'
import cbMap from './callbacks/callacks'
import React from 'react'
import { Routes,Route,Link } from 'react-router'
import DeleteUser from './presentational/delete_user'
import AddUser from './presentational/add_user'
import SearchUser from './presentational/search_user'

const Users = () => {
    return (
        <div>
           {users.map(cbMap)} 
        </div>
    )
}

export default Users