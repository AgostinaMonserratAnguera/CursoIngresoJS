function mostrar()
{
	//tomo el mes
	let mesDelAño;
	mesDelAño =document.getElementById("txtIdMes").value;
	
	switch(mesDelAño)
	{case "Enero":
	 case "Febrero":
     case "Marzo":
	 case "Abril":
	 case "Mayo":
	 case "Junio":
		        alert("Falta para el invierno");
				break;
	 case "Julio":
     case "Agosto":
		        alert("Abrigate que hace frio.");
			    break;
	 case "Septiembre":
	 case "Octubre":
     case "Noviembre":
	 case "Diciembre":
		        alert("Ya pasamos el frio, ahora calor!!");
				break;
			        }




}//FIN DE LA FUNCIÓN