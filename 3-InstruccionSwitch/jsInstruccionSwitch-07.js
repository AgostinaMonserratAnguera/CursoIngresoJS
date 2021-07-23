function mostrar()
{//declaro variable
	let destinoIngresado;
 //asigno variable
	destinoIngresado = document.getElementById("txtIdDestino").value;
 //switch
	switch (destinoIngresado)
	 {case "Ushuaia":
			         alert("Usted esta en el Sur");
			         break;
	  case "Cataratas":
		             alert("Usted esta en el Norte");
			         break;
	  case "Mar del plata":
		             alert("Usted esta en el Este");
					 break;
	  case "Bariloche":
		             alert("Usted esta en el oeste");
	}

}//FIN DE LA FUNCIÓN