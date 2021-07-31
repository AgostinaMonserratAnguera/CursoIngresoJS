function mostrar()
{
    let nombreAnimal;
    let peso=1;
    let temperatura;
    let respuesta="si";
    let cantidadDeTemperaturasPares=0;
    let nombreDelMasPesado;
    let temperaturaDelMasPesado;
    let cantidadDeAnimalesCeroGrados=0;
    let acumuladorPeso=0;
    let contadorPeso=0;
    let promPeso;
    let pesoMax=1;
    let pesoMin=1000;
    let pesoMaxBajoCero=1;
    let pesoMinBajoCero=1000;

    do
    {
        nombreAnimal = prompt("Ingrese el nombre de un animal del zoo");
        peso = parseInt(prompt("Ingrese el peso del animal, debe ser entre 1 y 1000"));
        while (peso<1 || peso>1000)
        {
            peso = parseInt(prompt("Reingrese el numero segun la consigna dada"));
        }
        temperatura = parseInt(prompt("Ingrese la temperatura del habitat (entre -30 y 30)"));
        while (temperatura<-30 || temperatura>30)
        {
            temperatura = prompt("Reingrese la temperatura segun la consigna dada");
        } 
        if (peso<pesoMin)
        {
                pesoMin = peso;                
        }
        if (peso>pesoMax)
        {
            pesoMax = peso;
            nombreDelMasPesado = nombreAnimal;
            temperaturaDelMasPesado = temperatura;
        }
        if (temperatura%2==0)
        {
            cantidadDeTemperaturasPares++;
        }
        if (temperatura<0)
        {
            if (peso<pesoMinBajoCero)
            {
                pesoMinBajoCero = peso;
            }
            if (peso>pesoMaxBajoCero)
            {
                pesoMaxBajoCero = peso;
               
            }
            cantidadDeAnimalesCeroGrados++;
        }
        contadorPeso++;
        acumuladorPeso = peso+acumuladorPeso;
        respuesta = prompt("Desea continuar? presionar 'si' o 'no'");
       } while (respuesta=="si");
       
       promPeso = acumuladorPeso/contadorPeso;

       document.write(
           "Cantidad de Temperaturas Pares=" + cantidadDeTemperaturasPares + "<br>" +
           "Nombre y temperatura del animal mas pesado=" + nombreDelMasPesado + " " + temperaturaDelMasPesado + "<br>" +
           "Cantidad de animales que viven a menos de 0 grados=" + cantidadDeAnimalesCeroGrados + "<br>" +
           "Promedio del peso de los animales=" + promPeso + "<br>" +
           "Peso Maximo y Peso minimo de los animales que viven a menos 0 grados=" + pesoMaxBajoCero + " " + pesoMinBajoCero);

       


}
