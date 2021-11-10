
const hola = nums=>{
   let numsDigits = [...nums+''].map(n=>Number(n)) //Hace como un split y luego a cada elemento lo hace number
   let reducer = (anterior,posterior)=> anterior + posterior
   return numsDigits.reduce(reducer)
}
/*  */
console.log(hola(2332))
