

const getData = async()=>{
    try{ //antes de ejecutar la siguiente linea de codigo espere la respuesta
        let res = await fetch("https://tomiperro138.herokuapp.com/users",{mode:"no-cors"}) //Guardo la respuesta
        let resconver = await res.json() //espero a convertir la respuesta
        console.log(resconver)
    }catch(e){
        console.log(e)
    }
}


getData()