import { useState } from "react";
import dispaches from "./dispaches/dispaches"
import {useDispatch, useSelector} from "react-redux"
/* tengo que agarrar usuarios y agregar uno nuevo */

function App() {
  let [user,setUser] = useState({nombre:"",email:""})
  let {nombre,email} = user
  const users = useSelector(state => state) //Agarro la parte de la store que quiero suscribirme
  const dispatch = useDispatch() //En vez de usar store.dispach uso dispatch
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
      <button onClick={()=>dispatch(dispaches.createUser(user))}>Añadir</button>
      <button onClick={()=>dispatch(dispaches.deleteUser(user))}>Borrar</button>
      <button onClick={()=>dispatch(dispaches.modifyUser(user))}>Modificar</button>
      {users.map((el,i)=><li key={i}>{`${el.nombre},${el.email}`}</li>)}
    </>
  );
}

const MostrarEstado = ({estadoRedux}) => {
  return (<h2>{JSON.stringify(estadoRedux)}</h2>)
};

export default App;


