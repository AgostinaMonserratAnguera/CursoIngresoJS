function mostrar()
{
	let numero;

		for (;;)
	{	
		numero = parseInt(prompt("Ingrese un numero"));
		if (numero==9)
		{
			break;
		}
		alert("Usted ingreso: " + numero);
	}

}//FIN DE LA FUNCIÓN