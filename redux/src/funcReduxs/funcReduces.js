const addUser = (data, users) => {
  let { nombre, email } = data;
  return [...users,{nombre,email}];
};

const modifyUser = (data,users)=>{
    let mapped = users.map((el) => (el.nombre === data.nombre) ? data : el);
    return mapped
}

const deleteUser = (data,users)=>{
    let filtered = users.filter(el => el.nombre != data.nombre);
    return filtered
}



export default {
  addUser,
  modifyUser,
  deleteUser
};
