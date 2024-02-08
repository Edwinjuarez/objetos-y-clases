var SumaDeCalificaciones = [70, 80, 70, 70, 80, 60];
function notasJuarez( calificacion_imput){
var suma = 0;
calificacion_imput.forEach(calificacion_final => {
    suma = suma + calificacion_final;
});
var promedio = suma / calificacion_imput.length;
if(promedio >= 70 ){
return "aprobado";
}else {
    return "reprobado";
}
}
console.log(notasJuarez(SumaDeCalificaciones));