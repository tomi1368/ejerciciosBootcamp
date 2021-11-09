const substract = str =>{
    let pos = str.indexOf("+")
    let num1 = parseInt(str.slice(0,pos))
    let num2 = parseInt(str.slice(pos + 1,str.length))
    return num1 + num2
}

