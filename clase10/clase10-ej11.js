const lessDistPos = (num1,num2)=> ((100 - num1) > (100-num2)) ? num2 : num1

const lessDistNeg = (num1,num2) => ((100 - Math.abs(num1)) > (100- Math.abs(num2))) ? num1 : num2

const m = (num1,num2)=>{
    if (num1 === num2) return "son el mismo num"
    else if (Math.sign(num1) === -1 && Math.sign(num2) === -1) return lessDistNeg(num1,num2)
    else if(Math.sign(num1) === -1) return num2
    else if(Math.sign(num2) === -1) return num1
    else return lessDistPos(num1,num2)
}
