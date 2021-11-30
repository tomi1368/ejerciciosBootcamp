import { useState, useEffect } from "react";
import axios from "axios";
import cbMap from "../callbacks/cbMap";
import "./styles/show-users.css"
const ShowUsers = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4001/api/users/")
      .then((res) => {
        setUsuarios(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="home">
      <ul className="users-list">{usuarios.map(cbMap)}</ul>
    </section>
  );
};

export default ShowUsers