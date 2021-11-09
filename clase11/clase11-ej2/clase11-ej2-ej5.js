const seeDate = ()=> {
  let actualDay = knowDay(new Date().getUTCDay())
  let actualHour = new Date().getHours()
  let actualMin = new Date().getMinutes()
  if (actualHour < 10) actualHour = `0${actualHour}`
  if (actualMin < 10) actualMin = `0${actualMin}`
  return `
    Hoy es: ${actualDay}
    Hora actual: ${actualHour}:${actualMin}
  `
}

const knowDay = day => ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"][day]


