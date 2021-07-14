/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{//declarar variables
	let dividendo;
	let divisor;
	//asigno
	dividendo = document.getElementById ("txtIdNumeroDividendo").value;
	divisor = document.getElementById ("txtIdNumeroDivisor").value;
	//parseo
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);
	//hago la operacion en alert

       alert("El resto es " + (dividendo%divisor));
}
