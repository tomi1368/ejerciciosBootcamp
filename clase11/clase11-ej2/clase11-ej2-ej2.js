const compararCon100 = (num1,num2)=>{
    let valorAcomparar = 100
    if (num1 == valorAcomparar || num2 == valorAcomparar) return true
    return num1 + num2 == valorAcomparar
}



console.log(compararCon100(-100,-32))