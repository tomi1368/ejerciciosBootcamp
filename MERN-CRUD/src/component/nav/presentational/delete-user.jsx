import React, { useState } from "react";
import axios from "axios";
import "./styles/delete-user.css"
const DeleteUser = ({ modifyUsers }) => {
  let [email, setEmail] = useState("");

  const chgEmail = (e) => {
    setEmail(e.target.value);
  };
  const dltUser = (e) => {
    {
      e.preventDefault();
    }
    axios
      .delete("http://localhost:4001/api/users/", {
          data:{
              email
          }
      })
      .then((res) => modifyUsers(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <form className="form">
      <input onChange={(e) => chgEmail(e)} type="text" value={email} />
      <input onClick={(e) => dltUser(e)} type="submit" value="ELiminar" />
    </form>
  );
};

export default DeleteUser;
