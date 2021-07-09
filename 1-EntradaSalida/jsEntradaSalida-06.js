/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declarar la variable
	let numerouno;
	let numerodos;
	//guardar el numero que se escribe en la caja de texto en la variable, asignacion
	numerouno = document.getElementById("txtIdNumeroUno").value;
	numerodos = document.getElementById("txtIdNumeroDos").value;
	//convierto el string en number, asignacion
	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);
	//los sumo, asigno
    
	//mostra en alert
	alert("la suma es "+(numerouno+numerodos));
}

