let arr = ["lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris"]

let result = arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
  })

console.log(result)