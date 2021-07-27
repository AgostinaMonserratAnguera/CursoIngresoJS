/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	while (respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero, puede ser positivo o negativo");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado>0)
		{
			sumaPositivos = sumaPositivos+numeroIngresado;	
		}
		else if (numeroIngresado<0) 
		{
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;	
		}
		respuesta = prompt("Desea continuar? presione 'si' o 'no'");
	}


	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN