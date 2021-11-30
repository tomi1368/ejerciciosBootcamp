import React from 'react'
import users from '../mocks/users'
import mapCb from '../callbacks/cbMap'

const UserList = ()=>{
    return(
        <ul>
            {users.map(mapCb)}
        </ul>
    )
}

export default UserList