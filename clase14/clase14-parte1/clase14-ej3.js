const type = arr => arr.map(el => change(el))


const change = elem=> typeof(elem) === "number" ? elem : parseInt(elem)
