import react ,{useState}from "react";
import users from "../mocks/users";

const usuario = {nombre:"",edad:0}


const CreateUser = ()=>{
    let [user,setUser] = useState(usuario)
    let {nombre,edad} = user
    const chngUser = (e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    const pushUser = ()=>{
        users.push(user)
    }
    
    return( 
    <>
        <label htmlFor="name"></label>
        <input onChange={(e)=>chngUser(e)} type="text" name="nombre" value={nombre} />
        <input onChange={(e)=>chngUser(e)} type="number" name="edad" value={edad}/>
        <input type="submit" onClick={pushUser}/>
    </>
    )
}

export default CreateUser