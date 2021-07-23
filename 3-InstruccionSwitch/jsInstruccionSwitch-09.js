function mostrar()
{//declaro variables y constante
let estacionIngresada;
let destinoIngresado;
let precioFinal;
let porcentajeAumento=0;
let porcentajeDescuento=0;
const PRECIO_BASE=15000;
//asigno
  estacionIngresada = document.getElementById("txtIdEstacion").value;
  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (estacionIngresada)
	{case "Invierno":
	                  if (destinoIngresado=="Bariloche")
					   {     porcentajeDescuento=20/100;
					   }
					   else if (destinoIngresado=="Mar del plata")
						   {  porcentajeDescuento=20/100;
						
						   }
						  else
						   {porcentajeDescuento=10/100;
						   }
						 
					 break;
	 case "Verano":
		             if (destinoIngresado=="Bariloche")
					  {      porcentajeDescuento=20/100
					  } 
					 else if (destinoIngreso=="Mar del plata")
					    {  porcentajeAumento=20/100;
						}
					   else
					    {   porcentajeAumento=10/100;
						}
					  
					  	
					break;
	 case "Otoño":
	 case "Primavera":
		              if (destinoIngresado!="Cordoba") 
					   { porcentajeAumento=10/100;
					   }
					   
					   break;
									   
    }
	if (porcentajeDescuento!=0)
	 { precioFinal = PRECIO_BASE-PRECIO_BASE*porcentajeDescuento }
	else if (porcentajeAumento!=0)
	 {precioFinal = PRECIO_BASE+PRECIO_BASE*porcentajeAumento}
	 else
	 {precioFinal = PRECIO_BASE} 

	 alert("Usted debe abonar " + precioFinal + "$");
    
}//FIN DE LA FUNCIÓN