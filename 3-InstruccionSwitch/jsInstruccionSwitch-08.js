function mostrar()
{
let destinoIngresado;

	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch (destinoIngresado)
	  {
		case "Bariloche":
		case "Ushuaia":
			          alert("En este destino hace frio");
					  break;
	
		default:
			        alert("En este destino hace calor");
			         break;
	}

}//FIN DE LA FUNCIÓN