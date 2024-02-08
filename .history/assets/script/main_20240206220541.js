var SumaDeCalificaciones = [70, 80, 60, 50, 40, 55];
function notasJuarez( calificacion_imput){
var suma = 0;
calificacion_imput.forEach(calificacion_final => {
    suma = suma + calificacion_final;
});
var promedio = suma / calificacion_imput.length;
return promedio;
}
console.log(promedio);