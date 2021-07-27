function mostrar()
{//declaro variables
    let numeroUno;
    let numeroDos;
    let resta;
    let suma;

    numeroUno = prompt("Ingrese un numero");
    numeroUno = parseFloat(numeroUno);
    numeroDos = prompt("Ingrese otro numero mas");
    numeroDos = parseFloat(numeroDos);

    if (numeroUno==numeroDos)
    {
        alert("los numeros son " + numeroUno + " y " + numeroDos);
    }
    if (numeroUno>numeroDos)
    {
        resta = numeroUno-numeroDos;
        if (resta>10)
        {
            alert("la resta es " + resta + " y superó el 10");
        }
    }
    else if (numeroUno<numeroDos)
    {
        suma = numeroUno+numeroDos;
    }

}
