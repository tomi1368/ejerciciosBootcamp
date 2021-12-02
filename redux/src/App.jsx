import { createStore } from "redux";
import { useState } from "react";
import users from "./mocks/users"
import dispaches from "./dispaches/dispaches"
import funcRedux from "./funcReduxs/funcReduces"
/* tengo que agarrar usuarios y agregar uno nuevo */
const reducer = (state = users.users, action) => {
  let {type,data} = action
  switch (type) {
    case "CREATE-USER":
       return funcRedux.addUser(data,state);
    case "MODIFY-USER":
      return funcRedux.modifyUser(data,state)
    case "DELETE-USER":
       return funcRedux.deleteUser(data,state);
    default:
      return state;
  }
};
let store = createStore(reducer);
store.subscribe(()=> console.log(store.getState()))
function App() {
  let [user,setUser] = useState({nombre:"",email:""})
  let {nombre,email} = user
  const mdfUser = (e)=>{
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <>
      <input onChange={(e)=>mdfUser(e)} type="text" name="nombre" value={nombre} />
      <input onChange={(e)=>mdfUser(e)} type="text" name="email" value={email}/>
      <button onClick={()=>store.dispatch(dispaches.createUser(user))}>Añadir</button>
      <button onClick={()=>store.dispatch(dispaches.deleteUser(user))}>Borrar</button>
      <button onClick={()=>store.dispatch(dispaches.modifyUser(user))}>Modificar</button>
    </>
  );
}

/* const MostrarEstado = ({estadoRedux}) => {
  return (<h2>{estadoRedux}</h2>)
}; */


export default App;


