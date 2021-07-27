/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/ 
   


//declaro variables
   /*var numeroPositivo;
    var contadorPares;
    var contadorDivisibles;
    var numeroPrimo;
    var contadorPrimos;
    var par;
    var divisible;
//inicializo
    numeroPositivo>0
    /*contadorPares=numeroPositivo;
    contadorDivisibles=numeroPositivo;
    contadorPrimos=numeroPositivo;*/
//pedir numero
  


   
    
function NumerosPares()
{
    let contadorPares;
    let numeroPositivo; 
        numeroPositivo = document.getElementById("txtIdNumero").value;
        numeroPositivo = parseInt(numeroPositivo);
        contadorPares=0;
        
        while (numeroPositivo>0) 
        {
            if (numeroPositivo%2==0)
            {
                contadorPares++;             
            }
            numeroPositivo = numeroPositivo-1;
        }   
        alert("Cantidad de numeros pares:" + contadorPares); 
}    
function NumerosImpares()
{
    let contadorImpares;
    let numeroPositivo; 
    numeroPositivo = document.getElementById("txtIdNumero").value;
    numeroPositivo = parseInt(numeroPositivo);
    contadorImpares=0;
    
    while (numeroPositivo>0) 
    {
        if (numeroPositivo%2!=0)
        {
            contadorImpares++;             
        }
        numeroPositivo = numeroPositivo-1;
    }   
    alert("Cantidad de numeros impares:" + contadorImpares);


}      
function NumerosDivisibles() 
{   
    let contadorDivisibles;
        numeroPositivo = document.getElementById("txtIdNumero").value;
        numeroPositivo = parseInt(numeroPositivo);
        contadorDivisibles=0;
        numeroDivisible=1
        
        while (numeroPositivo>0) 
        {
            while (numeroDivisible<100)
            {    if(numeroDivisible%numeroPositivo==0)
                 {
          
                     contadorDivisibles++;
                 }
                 numeroDivisible = numeroDivisible+1;
            }
            numeroPositivo=0;
        }    
        alert("Cantidad de numeros divisibles por " + numeroPositivo + ":" + contadorDivisibles);
} 
        
function VerificarSiEsPrimo() 
{  
    let numeroPrimo;
    let contadorDivisbles;
    let divisor;
        numeroPrimo = "El numero ingresado no es primo";
        numeroPositivo = document.getElementById("txtIdNumero").value;
        numeroPositivo = parseInt(numeroPositivo);
        contadorDivisbles=0;
        divisor=1;

        
        while (numeroPositivo<0)
        {
            while (divisor<numeroPositivo+1)
            {
                if (numeroPositivo%divisor==0)
                 {
                     contadorDivisbles++;                   
                 }
                 divisor++;
            }
            if (contadorDivisbles<3)
            {
                numeroPrimo = "El numero que ingreso es primo";
            }
            numeroPositivo = numeroPositivo-1;
        }
        alert(numeroPrimo);
}

  function NumerosPrimos() 
{
   let contadorPrimos;
        numeroPositivo = document.getElementById("txtIdNumero").value;
        numeroPositivo = parseInt(numeroPositivo);
        contadorPrimos=0;
      

        while (numeroPositivo>0)
        {
            while (divisor<numeroPositivo+1)
            {
                if (numeroPositivo%divisor==0)
                 {
                     contadorDivisbles++;                   
                 }
                 divisor++;
            }
             if (contadorDivisbles<3)
            {
               contadorPrimos = contadorPrimos+numeroPositivo;
            }
            numeroPositivo = numeroPositivo-1;

        }
           
        alert("La cantidad de numeros primos es: " + contadorPrimos);
}
    
 	
