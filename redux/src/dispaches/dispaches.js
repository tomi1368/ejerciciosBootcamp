const createUser = ({nombre,email})=>{
    return {
        type:"CREATE-USER",
        data: {
            nombre,
            email
        }
    }
}

const modifyUser = ({nombre,email})=>{
    console.log(nombre,email)
    return {
        type:"MODIFY-USER",
        data: {
            nombre,
            email
        }
    }
}

const deleteUser = ({nombre,email})=>{
    return {
        type:"DELETE-USER",
        data: {
            nombre,
            email
        }
    }
}


export default {
    createUser,
    modifyUser,
    deleteUser
}