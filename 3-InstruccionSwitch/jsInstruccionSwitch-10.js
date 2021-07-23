function mostrar()
{//declaro variables
let estacionIngresada;
let destinoIngresado;
//asigno
  estacionIngresada = document.getElementById("txtIdEstacion").value;
  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (estacionIngresada)
   {  case "Invierno":
		              if (destinoIngresado=="Bariloche")
					   {  alert("Se viaja");
					   }
					  else
					   {  alert("No se viaja");
					   }
		              break;
	  case "Verano":
		             if (destinoIngresado=="Mar del plata" && destinoIngresado=="Cataratas")
					  {   alert("Se viaja");
					  }
					 else
					  {   alert("No se viaja");
					  }
					 break;
	  case "Primavera":
		             if (destinoIngresado=="Bariloche")
					  {   alert("No se viaja");
					  }
					 else
					  {   alert("Se viaja");
					  }
					  break;
	  default:
		       alert("No se viaja");
			   break;
	      
  }
  

}//FIN DE LA FUNCIÓN