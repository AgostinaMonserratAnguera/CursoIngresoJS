/*En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", 
"casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
	//declaro variables
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let nombreMasTemp;
	let cantidadMayores=0;
	let cantidadHomV=0;
	let cantidadTerc=0;
	let contadorHomS=0;
	let acumEdadHomS=0;
	let respuesta="si";
	let tempMas=0;
	let flagTem=0;
	let promEdadHomS="No hay hombres solteros";

	while (respuesta=="si")
	{
		nombre = prompt("Ingrese nombre");
		edad = parseInt(prompt("Ingrese edad"));
		sexo = prompt("Ingrese sexo: 'f' o 'm'");
			while (sexo!="f" && sexo!="m")
			{
				sexo = prompt("Ingrese sexo: 'f' o 'm'");
			}
		estadoCivil = prompt("Ingrese estado civil: 'soltero', 'casado' o 'viudo'");
			while (estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
			{
				estadoCivil = prompt("Ingrese estado civil: 'soltero', 'casado' o 'viudo'");
			}
		temperatura = parseInt(prompt("Ingrese temperatura"));
		
		if (temperatura>tempMas || flagTem==0)
		{	
			tempMas = temperatura;
			nombreMasTemp = nombre;
			flag=1;
		}
		switch (estadoCivil) 
		{
			case "soltero":
				if (sexo=="m")
				{
					contadorHomS++;
					if (edad>=18)
					{
						cantidadMayores++;
						acumEdadHomS += edad;
					}
				}					
				break;
			case "viudo":
				
				if (sexo=="m")
				{
					cantidadHomV++;
				}
				break;
			case "casado":
				break;
		}
		if (edad>60 && temperatura>38)
		{
			cantidadTerc++;
		}
		respuesta = prompt("Desea continuar?'si' o'no'");
	}
	promEdadHomS = acumEdadHomS/contadorHomS;
	
	document.write(
		"El nombre de la persona con mas temperatura es: " + nombreMasTemp + "<br>" + 
		"Cantidad de mayores de edad que estan viudos: " + cantidadMayores + "<br>" + 
		"La cantidad de hombres que hay solteros o viudos es: " + contadorHomS + " y " + cantidadHomV + "<br>" + 
		"Cantidad de personas de la tercera edad( mas de 60 años) y que tienen mas de 38 de temperatura: " + cantidadTerc + "<br>" +
		"El promedio de edad entre los hombres solteros es de: " + promEdadHomS);

}
