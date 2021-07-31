function mostrar()
{
	let numero;
	let contadorDivisores=0;

	numero = parseInt(prompt("Ingrese un numero"));

	for ( let i=1; i<=numero; i++)
	{
		if ( numero%i==0)
		{
			contadorDivisores++;
		}
	}
	if (contadorDivisores==2)
	{
		alert(numero + " Es numero primo");
	}
	else
	{
		alert(numero + " No es numero primo");
	}


}//FIN DE LA FUNCIÓN