/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//daclarar las dos variables
	let nombre;
	let edad;
	//asignarle el valor de la caja de texto a la variable
	nombre = document.getElementById ("txtIdNombre").value;
	edad = document.getElementById ("txtIdEdad").value;

     //concatenarlas dentro del alert para mostralo
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");
}

