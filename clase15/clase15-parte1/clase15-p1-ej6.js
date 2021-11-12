const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const red = data.reduce((prev,curr)=> prev.concat(curr),[])


const reda = data.reduce((prev,curr)=> [...prev,...curr])

console.log(reda)