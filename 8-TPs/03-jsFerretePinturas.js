/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{//declarar las variables
    let temperaturaenFahrenheit;
    let temperaturaenCentigrados;
 //asigno y parseo
 temperaturaenFahrenheit =  parseFloat (document.getElementById ("txtIdTemperatura").value);  
//asignacion y operacion
temperaturaenCentigrados = (temperaturaenFahrenheit-32)*5/9;
//muestro
alert (temperaturaenFahrenheit + " Fahrenheit son " + temperaturaenCentigrados + " centigrados");
	
}

function CentigradosFahrenheit () 
{//declarar las variables
    let temperaturaenFahrenheit;
    let temperaturaenCentigrados;
 //asigno y parseo
 temperaturaenCentigrados =  parseFloat (document.getElementById ("txtIdTemperatura").value);  
//asignacion y operacion
temperaturaenFahrenheit = (temperaturaenCentigrados*9/5+32);
//muestro
alert (temperaturaenCentigrados + " Centigrados son " + temperaturaenFahrenheit + " fahrenheit");
	
}
