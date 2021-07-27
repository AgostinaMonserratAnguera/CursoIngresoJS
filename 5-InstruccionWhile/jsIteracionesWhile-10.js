/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let acumuladorNegativos;
	let acumuladorPositivos;
	let contadorPositivos;
	let contradorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioNegativos;
	let promedioPositivos;
	let diferenciaPositivosNegativos;

	respuesta="si";
	contadorCeros=0;
	contadorPares=0;
	contadorPositivos=0;
	contradorNegativos=0;
	acumuladorNegativos=0;
	acumuladorPositivos=0;

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero; puede ser positivo o negativo");
		numeroIngresado = parseInt(numeroIngresado);
		//suma de positivos; y pares
		if (numeroIngresado>0)
		{
			acumuladorPositivos = acumuladorPositivos+numeroIngresado;
			contadorPositivos = contadorPositivos+1;
			if (numeroIngresado%2==0) 
			{
				contadorPares = contadorPares+1;
			}	
		}	
		else if (numeroIngresado<0) //negativos
		{
			acumuladorNegativos = acumuladorNegativos+numeroIngresado;
			contradorNegativos = contradorNegativos+1;
			if (numeroIngresado%2==0) 
			{
				contadorPares = contadorPares+1;
			}	
		
			else //ceros
			{
				contadorCeros =contadorCeros+1;
			}
		}
		respuesta=prompt("desea continuar? presione 'si' o 'no'");
	}//fin del while
	promedioPositivos = acumuladorPositivos/contadorPositivos;
	promedioNegativos = acumuladorNegativos/contradorNegativos;
	diferenciaPositivosNegativos = acumuladorPositivos-acumuladorNegativos;

	document.write("la cantidad de negativos es :"+contradorNegativos);
	document.write("<br>la cantidad de positivos es :"+contadorPositivos);
	document.write("<br>la cantidad de pares es :"+contadorPares);
	document.write("<br>la cantidad de ceros es :"+contadorCeros);
	document.write("<br>la suma de negativos es :"+acumuladorNegativos);
	document.write("<br>la suma de positivos es :"+acumuladorPositivos);
	document.write("<br>el promedio de negativos es :"+promedioNegativos);
	document.write("<br>el promedio de positivos es :"+promedioPositivos);
	document.write("<br>la diferencia entre positivos y negativos es :"+diferenciaPositivosNegativos);
	

}//FIN DE LA FUNCIÓN