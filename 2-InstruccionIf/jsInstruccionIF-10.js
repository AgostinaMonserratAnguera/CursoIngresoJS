function mostrar()
{//declaro variables
let notaExamen;
let minimo=1;
let maximo=10;

  notaExamen = Math.round(Math.random()*(maximo-minimo)+minimo);
  if (notaExamen>=9)
   {alert("EXCELENTE");
   }
  else if (notaExamen>4)
  {
	alert("APROBÓ");  
  }
  else 
  {alert("Vamos, la proxima se puede");
}

}//FIN DE LA FUNCIÓN