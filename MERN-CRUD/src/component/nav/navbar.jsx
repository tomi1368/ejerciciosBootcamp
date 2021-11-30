//npm imports
import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
//Presentational
import ShowUsers from "./presentational/show-users";
import CreateUser from "./presentational/create-user";
import DeleteUser from "./presentational/delete-user";
import ChangeUser from "./presentational/modify-user";
import SearchUser from "./presentational/search-user";
import "./styles/nav.css";
const Navbar = () => {
  let [usuarios, setUsuarios] = useState([
    { nombre: " ", email: " ", password: " " },
  ]);

  return (
    <>
      <nav className="nav-bar">
        <NavLink to="/">
          <div className="nav-img">
            <img
              src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
              alt=""
            />
          </div>
        </NavLink>
        <ul className="nav-links">
          <NavLink to="/create">Create</NavLink>
          <NavLink to="/delete">Delete</NavLink>
          <NavLink to="/modify">Modify</NavLink>
          <NavLink to="/search">Search</NavLink>
        </ul>
      </nav>
      <section className="all-views">
        <Routes>
          <Route
            index
            path="/"
            element={<ShowUsers modifyUsers={setUsuarios}></ShowUsers>}
          ></Route>
          <Route
            index
            path="/create"
            element={<CreateUser modifyUsers={setUsuarios}></CreateUser>}
          ></Route>
          <Route index path="/delete" element={<DeleteUser />}></Route>
          <Route index path="/modify" element={<ChangeUser />}>
            {" "}
          </Route>
          <Route
            index
            path="/search"
            element={<SearchUser></SearchUser>}
          ></Route>
        </Routes>
      </section>
    </>
  );
};

export default Navbar;
