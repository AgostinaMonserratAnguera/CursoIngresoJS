/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos=0;
let numeroIngresado;
let exceso;
let faltante;
const MIN=1;
const MAX=100;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto =Math.round(Math.random()*(MAX-MIN)+MIN);
	//alert(numeroSecreto);
}

function verificar()
{ numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
contadorIntentos = contadorIntentos+1;
document.getElementById("txtIdIntentos").value = contadorIntentos;
  if (numeroIngresado==numeroSecreto)
   { alert ("Usted es un ganador!! en tan solo " + contadorIntentos + "intentos");
   }
  else if (numeroIngresado<numeroSecreto)
   { faltante = numeroSecreto-numeroIngresado;
     alert("Falta " + faltante + "para llegar al numero secreto");}
  else
  {  exceso = numeroIngresado-numeroSecreto;
     alert("Se pasó " + exceso + " del numero secreto");}   
     
  }

	
	
