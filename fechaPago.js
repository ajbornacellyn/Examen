

/**
 * Devuelve la fecha de pago de quincena, el día hábil más cercano al día 15 o 30 ingresado por el usuario, 
 * dando prioridad al anterior en caso de empate.
 * 
 * @param {Date} fechaIni Fecha inicial ingresada por el usuario.
 * @return {Date} Fecha de pago de quincena.
 */
 function fechaPago(fechaIni) {
    // Obtenemos el día de la semana de la fecha inicial
    let diaSemana = fechaIni.getDay();

    const diasFestivos = [
        new Date(2022, 0, 1),  // 1 de enero (Año Nuevo)
        new Date(2022, 0, 6),  // 6 de enero (Reyes Magos)
        new Date(2022, 2, 18), // 18 de marzo (Día Nacional de México)
        new Date(2022, 4, 1),  // 1 de mayo (Día del Trabajo)
        new Date(2022, 8, 16), // 16 de septiembre (Independencia de México)
        new Date(2022, 10, 20), // 20 de noviembre (Revolución Mexicana)
        new Date(2022, 11, 25) // 25 de diciembre (Navidad)
      ];
  
    // Calculamos la diferencia en días entre la fecha inicial y el día 15 o 30
    let diferencia = (fechaIni.getDate() <= 15) ? 15 - fechaIni.getDate() : 30 - fechaIni.getDate();
  
    // Sumamos esa diferencia a la fecha inicial para obtener la fecha teóricamente correcta
    let fecha = new Date(fechaIni.getTime() + diferencia * 24 * 60 * 60 * 1000);
  
    // Si ese día es sábado o domingo o es festivo, buscamos el día hábil más cercano
    while (fecha.getDay() === 0 || fecha.getDay() === 6 || diasFestivos.includes(fecha.getTime())) {
      // Retrocedemos un día
      fecha = new Date(fecha.getTime() - 24 * 60 * 60 * 1000);
    }
  
    return fecha;
  }

console.log(fechaPago(new Date(2022, 1, 30)));
  // en formato dd/mm/aaaa 
console.log(fechaPago(new Date(2022, 1, 30)).toLocaleDateString('es-CO'));