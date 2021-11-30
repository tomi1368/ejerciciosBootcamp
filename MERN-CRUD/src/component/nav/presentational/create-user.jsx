import axios from "axios";
import React, { useState } from "react";
import("./styles/create-user.css");
const initialUser = { nombre: " ", email: "", password: " " };
const CreateUser = ({ modifyUsers }) => {
  const [usuario, setUsuario] = useState(initialUser);
  let { nombre, email, password } = usuario;
  const chngUser = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const addUser = (e) => {
    {
      e.preventDefault();
    }
    console.log(usuario);
    axios
      .post("http://localhost:4001/api/users/", usuario)
      .then((res) => {
        modifyUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
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
      <input onClick={(e) => addUser(e)} type="submit" />
    </form>
  );
};

export default CreateUser;
