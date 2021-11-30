import React, { useState } from "react";
import axios from "axios";

const ChangeUser = () => {
  let [usuario, setUsuario] = useState({});
  let {nombre,email,password} = usuario

  const chngUser = (e)=>{
      setUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      })
  }
  const mdfUser = (e)=>{
    {e.preventDefault()}
    axios.put("http://localhost:4001/api/users/",usuario)
    .then(res=>console.log("hola"))
    .catch(err=>console.log("hola2"))
  }
  return (
    <>
    <h2>Modificar usuario</h2>
    <form className="form">
      <input
        onChange={(e) => chngUser(e)}
        type="text"
        name="nombre"
        value={nombre}
      />
      <input
        onChange={(e) => chngUser(e)}
        type="text"
        name="email"
        value={email}
      />
      <input
        onChange={(e) => chngUser(e)}
        type="text"
        name="password"
        value={password}
      />
      <input onClick={(e) => mdfUser(e)} type="submit" value="Modificar"/>
    </form>
    </>
  );
  
};

export default ChangeUser