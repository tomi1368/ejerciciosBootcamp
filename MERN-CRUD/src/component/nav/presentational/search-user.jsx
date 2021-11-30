import axios from "axios";
import React, { useState } from "react";

const SearchUser = () => {
  let [name, setName] = useState("");
  let [error, setError] = useState(true);
  let [data, setData] = useState({});
  const searchUser = (e) => {
    {
      e.preventDefault();
    }
    axios
      .get(`http://localhost:4001/api/users/${name}`)
      .then((res) => {
        let response = res.data;
        console.log(response)
        if (response.error === false) {
          let { nombre, email } = response.data;
          setError(false);
          setData({ nombre, email });
          console.log(data)
        } else {
          setError(true);
          setData({});
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        value={name}
      ></input>
      <input
        onClick={(e) => searchUser(e)}
        type="submit"
        value="Buscar"
      ></input>
      { error ? <h2>Not Found</h2> : <Results info={data}></Results> }
    </form>
  );
};

const Results = ({info}) => {
  let { nombre, email } = info;
  return <h3>{`${nombre};;${email}`}</h3>;
};

export default SearchUser;
