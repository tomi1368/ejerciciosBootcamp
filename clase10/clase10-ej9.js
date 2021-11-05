const cut = str=>{
    if (str.length >= 6){
        return str.slice(str.length-3,str.length)
    } else{
        return "no contiene los caracteres necesarios"
    }
}

