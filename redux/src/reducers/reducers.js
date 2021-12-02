import funcRedux from "../funcReduxs/funcReduces"
import users from "../mocks/users"

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


export default reducer