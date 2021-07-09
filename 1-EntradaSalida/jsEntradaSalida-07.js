/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//declaro variable
	let numeroUno;
	let numeroDos;
	//asigno variable
	numeroUno = document.getElementById ("txtIdNumeroUno").value;
	numeroDos= document.getElementById ("txtIdNumeroDos").value;
	//parsear
	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);
	//sumar en el alert
	alert("La suma es igual a "+(numeroUno+numeroDos));	
}

function restar()
{//declaro variable
	let numeroUno;
	let numeroDos;
	//asigno variable
	numeroUno = document.getElementById ("txtIdNumeroUno").value;
	numeroDos= document.getElementById ("txtIdNumeroDos").value;
	//parsear
	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);
	//restar en el alert
	alert("La resta es igual a "+(numeroUno-numeroDos));	
	
}

function multiplicar()
{ //declaro variable
	let numeroUno;
	let numeroDos;
	//asigno variable
	numeroUno = document.getElementById ("txtIdNumeroUno").value;
	numeroDos= document.getElementById ("txtIdNumeroDos").value;
	//parsear
	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);
	//multiplicar en el alert
	alert("La multiplicación es igual a "+(numeroUno*numeroDos));	
	
}

function dividir()
{//declaro variable
	let numeroUno;
	let numeroDos;
	//asigno variable
	numeroUno = document.getElementById ("txtIdNumeroUno").value;
	numeroDos= document.getElementById ("txtIdNumeroDos").value;
	//parsear
	numeroUno = parseFloat(numeroUno);
	numeroDos = parseFloat(numeroDos);
	//dividir en el alert
	alert("La división es igual a "+(numeroUno/numeroDos));	
	
}

