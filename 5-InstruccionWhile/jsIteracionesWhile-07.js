/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador=0;
	let acumulador=0;
	let numeroIngresado;
	let respuesta="si";

	while (respuesta=="si") 
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador+1;
		acumulador = numeroIngresado+acumulador;
		respuesta = prompt("Desea continuar? presione 'si' o 'no'");	
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;




}//FIN DE LA FUNCIÓN