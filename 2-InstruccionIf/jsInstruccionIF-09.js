function mostrar()
{//declaro contadores
let number;
let maximo=10;
let minimo=1;


	//Genero el número RANDOM entre 1 y 10 
 number = Math.round(Math.random()*(maximo-minimo)+minimo);
alert(number);
}//FIN DE LA FUNCIÓN