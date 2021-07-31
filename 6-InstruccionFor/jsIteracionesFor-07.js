function mostrar()
{
	let numero;
	let contadorDivisores=0;

		numero = parseInt(prompt("ingrese un numero"));

		for (let i=1; i<=numero; i++)
		{
			if ( numero%i==0)
			{
				contadorDivisores++;
				alert("Los numeros divisores son: " + i);
			}
		}
		document.write("La cantidad de divisores es: " + contadorDivisores);

}//FIN DE LA FUNCIÓN