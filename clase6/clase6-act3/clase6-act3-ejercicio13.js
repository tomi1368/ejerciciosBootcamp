let valores = Array.from(Array(20).keys()).map(el=> el + 1 ),
numsPares = valores.filter(el=> el % 2 == 0)

alert(numsPares)
