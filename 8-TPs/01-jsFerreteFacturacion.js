/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{//declaro variables
let preciouno;
let preciodos;
let preciotres;
//asigno y parseo
preciouno = parseFloat (document.getElementById("txtIdPrecioUno").value);
preciodos = parseFloat (document.getElementById("txtIdPrecioDos").value);
preciotres = parseFloat (document.getElementById("txtIdPrecioTres").value);
//mostrar operacion
alert ("La suma de los tres precios es " + (preciouno+preciodos+preciotres));
}
function Promedio () 
{//declaro variables
let preciouno;
let preciodos;
let preciotres;
//asigno y parseo
preciouno = parseFloat (document.getElementById("txtIdPrecioUno").value);
preciodos = parseFloat (document.getElementById("txtIdPrecioDos").value);
preciotres = parseFloat (document.getElementById("txtIdPrecioTres").value);
//mostrar operacion
alert ("El promedio de los tres precios es " + ((preciouno+preciodos+preciotres)/3));
	
}
function PrecioFinal () 
{//declaro variables
let preciouno;
let preciodos;
let preciotres;
//asigno y parseo
preciouno = parseFloat (document.getElementById("txtIdPrecioUno").value);
preciodos = parseFloat (document.getElementById("txtIdPrecioDos").value);
preciotres = parseFloat (document.getElementById("txtIdPrecioTres").value);
//mostrar operacion
alert ("La suma de los tres precios más Iva del 21% es " + (preciouno+preciodos+preciotres+((preciouno+preciodos+preciotres)*21/100)));
	
}