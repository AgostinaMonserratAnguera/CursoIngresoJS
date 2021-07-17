function mostrar()
{//declaro variable
let edad;
let estadoCivil;
//parseo y asigno
edad = parseInt(document.getElementById("txtIdEdad").value);
estadoCivil = document.getElementById("estadoCivil").value;

  if (edad<18 && estadoCivil!="Soltero") 
  {
   alert("Es muy pequeño para NO ser soltero");	  
  }
	


}//FIN DE LA FUNCIÓN