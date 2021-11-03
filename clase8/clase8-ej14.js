let arr = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"]


let arr1 =arr.map(el=>{
    if (el == "laboris") { return el.toUpperCase()} else {return el}   
})

console.log(arr1)