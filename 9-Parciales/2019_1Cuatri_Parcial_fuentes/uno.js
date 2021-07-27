
function mostrar()
{//declaro variables
let lado;
let perimetro;
//pido por prompt el lado y lo parseo
	lado = prompt("Ingrese la medida para un lado de un triangulo equilatero");
	lado = parseFloat(lado);
//calculos
perimetro = lado*3;
//muestro por alert
	alert("El perimetro del triangulo equilatero es de: " + perimetro + " cm");

}
