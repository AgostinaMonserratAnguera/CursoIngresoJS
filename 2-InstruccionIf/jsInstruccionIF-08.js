function mostrar()
{//declarar variable
let edad;
let estadoCivil;
//parseo y asigno
  edad = parseInt(document.getElementById("txtIdEdad").value);
  estadoCivil = document.getElementById("estadoCivil").value;
   if (edad>=18 && estadoCivil=="Soltero")
    {alert("Es soltero y no es menor");
}

	


}//FIN DE LA FUNCIÓN