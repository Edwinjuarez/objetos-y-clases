var notasFinales = [50, 60, 80, 90, 100, 90];
function calificaciones (calificacion_input) {
    var suma = 0;
    calificacion_input.forEach(calificacionSemestre => {
        suma = suma + calificacionSemestre;
    });
    var resumen = suma / calificacion_input.length;
   if (resumen > 70 ) {
    return "aprobado";
   } else {
    return "reprobado";
   }
   
}
console.log(calificaciones(notasFinales));