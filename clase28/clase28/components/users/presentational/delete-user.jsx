import React,{useState} from 'react'
import users from '../mocks/users'

const DeleteUser = ()=>{
    let [name,setName] = useState("")
    const chgUser = (e)=>{
        setName(e.target.value)
    }
    const dltUser = ()=>{
        let i = 0
        let userLength = users.length
        for(;i<userLength;i++){
            if(users[i].nombre == name){
                delete users[i]
            }
        }
    }
    return(
        <>
            <input onChange={(e)=>chgUser(e)} type="text" value={name}/>
            <input onClick={dltUser} type="submit"></input>
        </>
    )
}

export default DeleteUser