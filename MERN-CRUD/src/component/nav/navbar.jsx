import React from 'react'
import { NavLink,Link,Routes,Route } from 'react-router-dom'
import "./styles/nav.css"
const Navbar = ()=>{
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
        <section>
            <Routes>
                <Route index path="/" element></Route>
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