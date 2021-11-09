const random = ()=>{
    let num = prompt("Adivina del 1 al 10"),
    numRandom = Math.floor(Math.random()*10)
    if (num === numRandom ) return "acertaste"
    else random()
}

random()