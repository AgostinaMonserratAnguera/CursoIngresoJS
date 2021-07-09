/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro la variable
	let nombre;
	//asigno, guardo el nombre del usuario en la variable
	nombre = prompt ("Su nombre");
	//copio el nombre que tengo en la variable en la caja de texto de la pagina html
	document.getElementById ("txtIdNombre").value = nombre;

    //no es necesario mostrar por alert porque ya esta cargado en la caja de texto
}

