function mostrar()
{//declaro variables
let edad;
//asigno y parseo
edad = parseInt(document.getElementById("txtIdEdad").value);
  if (edad<13 || edad>17)
   {alert("Usted no es adolescente");
  }

}//FIN DE LA FUNCIÓN