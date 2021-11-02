let valor1 = parseInt(prompt("Ingrese primer valor")),
valor2 = parseInt(prompt("Ingrese segundo valor"))

(isNaN(valor1) || isNaN(valor2)) ? console.log("Error de tipo") : console.log(`El resultado de la suma es ${valor1 + valor2}`)
