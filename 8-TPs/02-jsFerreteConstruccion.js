/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{//declarar variables
    let largodelterreno;
    let anchodelterreno;
//asigno y parseo
largodelterreno = parseFloat (document.getElementById ("txtIdLargo").value);
anchodelterreno = parseFloat (document.getElementById ("txtIdAncho").value);
//muestro operacion ((suma de largo y ancho) *2 y posterior multip por 3) por alert
alert ("La cantidad de alambre a comprar para el rectangulo es de " + (((largodelterreno+anchodelterreno)*2)*3));

}
function Circulo () 
{//declaro la variable
    let radiodelterreno;
//asignoy parseo
radiodelterreno = parseFloat (document.getElementById ("txtIdRadio").value);
//muestro operacion ((3,14*(radio*2))*3)
alert ("la cantidad de alambre a comprar para el circulo es " + (((3.14*(radiodelterreno*2))*3)));
	
}
function Materiales () 
{//declaro variables
    let largodelterreno;
    let anchodelterreno;
    let superficiedelterreno;
    let bolsasdecemento;
    let bolsadecal;
//asigno y parseo
largodelterreno = parseFloat (document.getElementById ("txtIdLargo").value);
anchodelterreno = parseFloat (document.getElementById ("txtIdAncho").value);
superficiedelterreno = largodelterreno*anchodelterreno;
//operaciones y muestro
alert ("Para hacer un contra piso de 1m x1 m la cantidad de bolsas de cemento necesarias es " + (superficiedelterreno*2) + " y la cantidad de bolsas de cal necesarias es " + (superficiedelterreno*3));

	
}