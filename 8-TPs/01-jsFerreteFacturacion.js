/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{//declaro variables y constantes
let precioUno;
let precioDos;
let precioTres;
let resultado;
//asigno y parseo
precioUno = parseFloat (document.getElementById("txtIdPrecioUno").value);
precioDos = parseFloat (document.getElementById("txtIdPrecioDos").value);
precioTres = parseFloat (document.getElementById("txtIdPrecioTres").value);
//operacion suma
resultado = precioUno+precioDos+precioTres;
//mostrar por alert concatenando
alert ("La suma de los tres precios es " + resultado);
}
function Promedio () 
{//declaro variables y constantes
let precioUno;
let precioDos;
let precioTres;
let suma;
let resultado;
const PROMEDIO = 3;
//asigno y parseo
precioUno = parseFloat (document.getElementById("txtIdPrecioUno").value);
precioDos = parseFloat (document.getElementById("txtIdPrecioDos").value);
precioTres = parseFloat (document.getElementById("txtIdPrecioTres").value);
//operacion promedio
suma
resultado = (precioUno+precioDos+precioTres)/PROMEDIO;
//muestro por alert concatenando
alert ("El promedio de los tres precios es " + resultado);
	
}
function PrecioFinal () 
{//declaro variables y constantes
let precioUno;
let precioDos;
let precioTres;
let resultado;
const IVA = 21/100;
//asigno y parseo
precioUno = parseFloat (document.getElementById("txtIdPrecioUno").value);
precioDos = parseFloat (document.getElementById("txtIdPrecioDos").value);
precioTres = parseFloat (document.getElementById("txtIdPrecioTres").value);
//operacion suma mas el 21%
resultado = (precioUno+precioDos+precioTres)*IVA;
//muestro por alert concatenando
alert ("La suma de los tres precios más Iva del 21% es " + resultado);
	
}