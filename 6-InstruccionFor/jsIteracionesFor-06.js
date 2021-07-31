function mostrar()
{
	let numero;
	let cantidadDePares=0;

	numero = parseInt(prompt("Ingrese un numero"));
	
	for (let i=1; i<=numero; i++ )
	{
		if (i%2==0)
		{
			cantidadDePares++;
			alert("Numero par: " + i);
		}
	}
	document.write("Cantidad de pares: " + cantidadDePares);



}//FIN DE LA FUNCIÓN