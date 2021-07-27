/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	
	while (claveIngresada != "utn750")
	{ claveIngresada = prompt("La clave es incorrecta, ingrese el número clave nuevamente.");
     }
	  alert("Clave correcta");
}//FIN DE LA FUNCIÓN
