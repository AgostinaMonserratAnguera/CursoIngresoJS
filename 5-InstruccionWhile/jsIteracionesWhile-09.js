/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//inicializar variables
	banderaDelPrimero=0;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		if (numeroIngresado<numeroMinimo || banderaDelPrimero==0)
		{
			numeroMinimo = numeroIngresado;	
		}
		if (numeroIngresado>numeroMaximo || banderaDelPrimero==0)
		{
			numeroMaximo = numeroIngresado;
			banderaDelPrimero=1;
		}

		respuesta=prompt("desea continuar? presione 'si' o 'no'");
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN