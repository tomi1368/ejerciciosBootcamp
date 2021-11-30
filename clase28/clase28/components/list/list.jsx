import users from "./mocks/users"
import react from "react"
import mapCb from "./callbacks/cb_map"
const List = ()=>{
    return(
        users.map(mapCb)
    )
}

export default List