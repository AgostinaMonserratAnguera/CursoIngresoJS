function mostrar()
{//declaro variables
    let nombreUno;
    let nombreDos;
    let pesoUno;
    let pesoDos;
    let sumaPesos;
    let promedioPesos;

//pido por prompt
nombreUno = prompt("Ingrese su nombre");
nombreDos = prompt("Ingrese el nombre de su pareja");
pesoUno = prompt("Ingrese su peso");
pesoDos = prompt("Ingrese el peso de su pareja");
pesoUno = parseFloat(pesoUno);
pesoDos = parseFloat(pesoDos);
//calculos
sumaPesos = pesoUno+pesoDos;
promedioPesos = sumaPesos/2;
//mostrar por alert
alert("Ustedes se llaman " + nombreUno + " y " + nombreDos + " y pesan " + pesoUno + " y " + pesoDos + " kilos, que sumados son " + sumaPesos + " y el promedio de peso " + promedioPesos );
  
}
