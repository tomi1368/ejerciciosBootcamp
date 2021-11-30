import React from 'react'
import PropTypes from 'prop-types'
export function Foo({data,hola}) { //Me devuelve un array con los elementos de atributos  
    console.log(data,hola)
    return (
        <div>
        </div>
    )
}

export function Foo2({name,email,pass}){ //Las propiedades se mandan entre componentes
    return(
        <>
           <p>{name}</p>
           <p>{email}</p>
           <p>{pass}</p>
        </>
    )
}

Foo2.propTypes={
    name:PropTypes.string.isRequired, //Le digo que es tipo string y que es requerido
    email:PropTypes.string.isRequired,
    pass:PropTypes.string.isRequired
}

export function Foo3({role}){
    return(
        <>
            {(()=>{ //para hacer el condicional hace una funcion anonima autoejecutable
                if (role == "dev"){
                    return <h1>{role}</h1>
                }
                else{
                    return <h1>Fraca</h1>
                }
            })()
        }
        </>
    )
}