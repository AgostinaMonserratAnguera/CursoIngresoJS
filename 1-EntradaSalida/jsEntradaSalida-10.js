/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{//declaro variables
	let importe;
	let resultado;
//asigno y parseo
importe = parseInt(document.getElementById ("txtIdImporte").value);
//hago la operacion y la asigno a resultado
resultado = (importe-importe*25/100);
//paso resultado a la caja
document.getElementById ("txtIdResultado").value = resultado;

}
