import users from './mocks/userslist'
import cbMap from './callbacks/callacks'
import React from 'react'


const Users = () => {
    return (
        <div>
           {users.map(cbMap)} 
        </div>
    )
}

export default Users