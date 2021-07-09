/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{//declaro variables
	let sueldo;
	let resultado;
//asigno y parseo
sueldo = parseInt(document.getElementById ("txtIdSueldo").value);
//hago la operacion y la asigno a resultado
resultado = (sueldo+sueldo*10/100);
//paso resultado a la caja
document.getElementById ("txtIdResultado").value = resultado;


}
