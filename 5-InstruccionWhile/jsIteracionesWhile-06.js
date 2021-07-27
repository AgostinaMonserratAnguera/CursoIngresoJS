function mostrar()
{
	let contador=0;
	let acumulador=0;
	let numeroIngresado;
	
	while (contador<5)
	{ contador = contador+1;
	  numeroIngresado = parseInt(prompt("Ingrese 5 numeros "))
	  acumulador = acumulador+numeroIngresado;
	}
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;
}//FIN DE LA FUNCIÓN