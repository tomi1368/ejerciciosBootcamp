import React,{useState} from 'react'
import { NavLink,Routes,Route } from 'react-router-dom'
import ShowUsers from "./presentational/show-users"
import "./styles/nav.css"
const Navbar = ()=>{
    const [users, setUsers] = useState([])
    return( 
    <>
        <nav className="nav-bar">
            <NavLink to="/">
                <div className="nav-img">
                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="" />
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
                <Route index path="/" element={<ShowUsers></ShowUsers>}></Route>
                <Route index path="/create" element></Route>
                <Route index path="/delete" element></Route>
                <Route index path="/modify" element> </Route>
                <Route index path="/search" element></Route>
            </Routes>
        </section>
    </>
    )
}

export default Navbar