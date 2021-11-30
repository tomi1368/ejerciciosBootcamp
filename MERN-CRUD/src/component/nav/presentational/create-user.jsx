import axios from "axios";
import React, { useState} from "react";

const initialUser = { nombre: "", email: "", password: "" };
const CreateUser = () => {
  const [usuario, setUsuario] = useState({ initialUser });
  let { nombre, email, password } = usuario;
  const chngUser = (e)=>{
      setUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      })
  }
  const addUser = ()=>{
      axios.post("http://localhost:4001/api/users/",{
          usuario
      })
      .then(res=>{res.data})
      .catch(err=>console.log(err))
  }
  return (
    <>
      <input onChange={(e)=>chngUser(e)} type="text" name="nombre" value={nombre} />
      <input onChange={(e)=>chngUser(e)} type="text" name="email" value={email} />
      <input onChange={(e)=>chngUser(e)} type="text" name="password" value={password} />
      <input onClick={addUser} type="submit" />
    </>
  );
};

export default CreateUser