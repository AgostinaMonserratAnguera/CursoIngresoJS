/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
  let numeroIngresado;
	
	do 
	{numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);
	 document.getElementById("txtIdNumero").value = numeroIngresado;  ;}
	 while(numeroIngresado<0 ||numeroIngresado>10);
	
}//FIN DE LA FUNCIÓN