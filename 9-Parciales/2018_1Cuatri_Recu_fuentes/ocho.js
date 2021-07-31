function mostrar()
{
    let numero;
    let letra;
    let cantidadDePares=0;
    let cantidadDeImpares=0;
    let cantidadDeCeros=0;
    let cantidadDePositivos=0;
    let positivos;
    let negativos;
    let acumuladorPositivos=0;
    let acumuladorNegativos=0;
    let promPositivos;
    let flag = 0;
    let max=100;
    let min=-100;
    let letraMin;
    let letraMax;
    let respuesta="si";
    

    do 
    {
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        letra = prompt("Ingrese un numero");
    
        while (numero>-100 || numero<100)
        {
            if (numero%2==0)
            {
                cantidadDePares++;
            }        
             else if (numero%2!=0) 
            {
                 cantidadDeImpares++;
            }
            else
            {
                cantidadDeCeros++;
            }
            if (numero>0)
            {
                positivos = numero;
                cantidadDePositivos++;
                acumuladorPositivos = positivos+acumuladorPositivos;
            }
            else if (numero<0)
            {
                negativos = numero;
                acumuladorNegativos = negativos+acumuladorNegativos;
            }
            if (numero<min)
            {
                min = numero;
                letraMin = letra;
            }
            if (numero>max)
            {
                max = numero;
                letraMax = letra;
            }
            respuesta = prompt("Desea continuar?presiones 'si' o 'no'");
        }
    }while (respuesta=="si");
    promPositivos = acumuladorPositivos/cantidadDePositivos;
    document.write(
        "Cantidad de numeros Pares=" + cantidadDePares + "<br>" +
       "Cantidad de numeros Impares=" + cantidadDeImpares + "<br>" +
       "Cantidad de ceros=" + cantidadDeCeros +  "<br>" +
       "Promedio de numeros positivos=" + promPositivos + "<br>" + 
       "Suma de numeros negativos=" + acumuladorNegativos + "<br>" +
       "Numero y letra del maximo=" + max + " " + letraMax + "<br>" +
       "Numero y letra del minimo=" + min + " " + letraMin);

   





}
