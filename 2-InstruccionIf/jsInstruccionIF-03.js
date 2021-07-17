function mostrar()
{//declaro variable
let edad;
//parseo y asigno
  edad = parseInt(document.getElementById("txtIdEdad").value);
  if (edad>=18)
   {alert("Usted es mayor de edad");
}
  else
  {alert("Usted es menor de edad");
}

}//FIN DE LA FUNCIÓN