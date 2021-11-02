let valor1 = parseInt(prompt("Ingrese primer valor")),
  valor2 = parseInt(prompt("Ingrese segundo valor")),
  valor3 = parseInt(prompt("Ingrese tercer valor"));
  
  (
    isNaN(valor1) || isNaN(valor2) || isNaN(valor3)
  )
    ? console.log("Error de tipo")
    : console.log(`El resultado de la resta es ${valor1 - valor2 - valor3 }`);
