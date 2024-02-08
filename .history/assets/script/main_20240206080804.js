var notasFinales = [50, 60, 80, 90, 100, 90];
function notas_alumno (calificacion_input) {
    var suma = 0;
    calificacion_input.forEach(calificacionSemestre => {
        suma = suma + calificacionSemestre.length;
    });
    var resumen = suma / notasFinales;
    return resumen;
}
console.log(suma);