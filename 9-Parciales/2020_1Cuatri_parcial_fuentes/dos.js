/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
function mostrar()
{
  //declaro variables
  let tipo;
  let cantidadBolsas;
  let precioBolsa;
  const MAS_DIEZ_BOLSAS=15/100;
  const MAS_TREINTA_BOLSAS=25/100;
  let acumBruto=0;
  let acumCantidad=0;
  let totalDescuento = "No posee descuento";
  let tipoMasBolsa;
  let tipoMasCaro;
  let bolsaArena;
  let bolsaCal;
  let bolsaCemento;
  let precioArena;
  let precioCemento;
  let precioCal;
  let respuesta="si";

  //hago un bucle
    while (respuesta=="si")
    {
      //pido valores y valido
      tipo = prompt("Ingrese tipo de producto: 'arena', 'cemento' o 'cal'");
        while ( tipo!="arena" && tipo!="cemento" && tipo!="cal")
        {
          tipo = prompt("Ingrese tipo de producto: 'arena', 'cemento' o 'cal'");
        }
      cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas"));
        while(isNaN(cantidadBolsas))
        {
          cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas"));
        }  
      precioBolsa = parseFloat(prompt("Ingrese precio por bolsa (debe ser mayor a 0)"));
        while ( precioBolsa<=0)
        {
          precioBolsa = parseFloat(prompt("Ingrese precio por bolsa (debe ser mayor a 0)"));
        }
    
      switch (tipo)
      {
        case "arena":
          bolsaArena = cantidadBolsas;
          precioArena = precioBolsa;
          break;
        case "cemento":
          bolsaCemento = cantidadBolsas;
          precioCemento = precioBolsa;
          break;
        case "cal":
          bolsaCal = cantidadBolsas;
          precioCal = precioBolsa;    
      }
       acumBruto = acumBruto+precioBolsa*cantidadBolsas;
       acumCantidad += cantidadBolsas;

       respuesta = prompt("Desea continuar?'si' o 'no'"); 
    }

     if (bolsaArena>bolsaCal && bolsaArena>bolsaCemento)
      {
        tipoMasBolsa = "arena";
      }
      else if (bolsaCal>bolsaCemento)
      {
        tipoMasBolsa = "cal";
      }
      else
      {
        tipoMasBolsa = "cemento";
      }
      
      if (precioArena>precioCal && precioArena>precioCemento)
      {
        tipoMasCaro = "arena";
      }
      else if (precioCal>precioCemento)
      {
        tipoMasCaro = "cal";
      }
      else
      {
        tipoMasCaro = "cemento";
      }
    
    if (acumCantidad>30)
    {
      totalDescuento = acumBruto-acumBruto*MAS_TREINTA_BOLSAS;
      totalDescuento = "El total a pagar con descuento es de: " + totalDescuento;
    }
    else if (acumCantidad>10)
    {
      totalDescuento = acumBruto-acumBruto*MAS_DIEZ_BOLSAS;
      totalDescuento = "El total a pagar con descuento es de: " + totalDescuento;
    }
    
    
    document.write(
      "El importe total a pagar en bruto sin descuento es de: " + acumBruto + "<br>" +
      totalDescuento + "<br>" + "El tipo con mas cantidad de bolsas es: " + tipoMasBolsa + "<br>" + 
      "El tipo mas caro es: " + tipoMasCaro
    );
    
    
    
}
