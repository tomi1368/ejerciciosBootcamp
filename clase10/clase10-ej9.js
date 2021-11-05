const cut = str=>{

    if (str.length >= 6){
        return str.slice(0,3).concat(str.slice(-3))
    } else{
        return "no contiene los caracteres necesarios"
    }
}

console.log(cut("TomasRodriguez"))