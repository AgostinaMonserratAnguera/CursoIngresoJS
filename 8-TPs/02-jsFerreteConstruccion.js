/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{//declarar variables
    let largoDelterreno;
    let anchoDelterreno;
    let perimetro;
    let totalAlambre;
//asigno y parseo
largoDelterreno = parseFloat (document.getElementById ("txtIdLargo").value);
anchoDelterreno = parseFloat (document.getElementById ("txtIdAncho").value);
//operaciones
perimetro = (largoDelterreno+anchoDelterreno)*2;
totalAlambre = perimetro*3;
//muestro con alert
alert ("La cantidad de alambre a comprar para el rectangulo es de " + totalAlambre);

}
function Circulo () 
{//declaro la variable
    let radioDelterreno;
    let perimetroDelcirculo;
    let totalAlambre;
    const PI = 3.14;

//asignoy parseo
radioDelterreno = parseFloat (document.getElementById ("txtIdRadio").value);
//operaciones
perimetroDelcirculo = PI*radioDelterreno*2;
totalAlambre = perimetroDelcirculo*3;
//muestro con alert concatenando
alert ("la cantidad de alambre a comprar para el circulo es " + totalAlambre);
	
}
function Materiales () 
{//declaro variables
    let largoDelterreno;
    let anchoDelterreno;
    let superficieDelterreno;
    let bolsasDecemento;
    let bolsasDecal;
    const CANT_BOL_CEM_POR_1_MTS = 2;
    const CANT_BOL_CAL_POR_1_MTS = 3;
//asigno y parseo
largoDelterreno = parseInt (document.getElementById ("txtIdLargo").value);
anchoDelterreno = parseInt (document.getElementById ("txtIdAncho").value);
//operaciones
superficieDelterreno = largoDelterreno*anchoDelterreno;
bolsasDecemento = superficieDelterreno*CANT_BOL_CEM_POR_1_MTS;
bolsasDecal = superficieDelterreno*CANT_BOL_CAL_POR_1_MTS;

//mostrar con alert concatenando
alert ("Para hacer un contra piso de 1m x1 m la cantidad de bolsas de cemento necesarias es " + bolsasDecemento + " y la cantidad de bolsas de cal necesarias es " + bolsasDecal);

	
}