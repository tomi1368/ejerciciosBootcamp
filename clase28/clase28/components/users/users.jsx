import react from "react"
import {Route,Routes,Link} from "react-router-dom"
//Presentationals
import CreateUser from "./presentational/create-user"
import DeleteUser from "./presentational/delete-user"
/* import SearchUser from "./presentational/search-user" */
import UserList from "./presentational/list_users"


const Users = ()=>{
    return(
        <div>
          <ol>
            <li>
             <Link to="/">users</Link>
            </li>
            <li>
             <Link to="/add">add user</Link>
            </li>
            <li>
             <Link to="/delete">delete user</Link>
            </li>
           </ol> 
           <section>
               <Routes>
                   <Route index path="/" element={<UserList/>}/>
                   <Route path="/add" element={<CreateUser/>}/>
                   <Route path="/delete" element={<DeleteUser/>}/>
               </Routes>
           </section>
        </div>
    )
}

export default Users