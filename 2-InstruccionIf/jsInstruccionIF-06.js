function mostrar()
{//declaro variable
let edad;

//asigno y parseo
  edad = parseInt(document.getElementById("txtIdEdad").value);
  if (edad>=18)
   {alert("Mayor de edad");
	  
  }
  if (edad>=13 && edad<=17)
   {alert("Adolescente");
	  
  }
  else 
  {alert("Niño");
}

}//FIN DE LA FUNCIÓN