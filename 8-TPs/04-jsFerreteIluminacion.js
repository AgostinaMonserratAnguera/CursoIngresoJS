/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{//declaro variables y constantes
const PRECIO_UNITARIO_LAMP=35;
let cantidadLamparas;
let precioSinDescuento;
let precioConDescuento;
let marca;
const PORCEN_INGRESOS_BRUTOS=10/100;
let precioFinal;
let ingresosBrutos;
let porcentaje;

//asigno y parseo
  cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
  marca = document.getElementById("Marca").value;


//operacion
  precioSinDescuento = cantidadLamparas*PRECIO_UNITARIO_LAMP;
   switch (cantidadLamparas)
   { case 1:
     case 2:
            porcentaje=0;
            break;
     case 5:
           switch (marca)
           { case "ArgentinaLuz":
                                porcentaje=40/100;
                                break;
             default:
                       porcentaje=30/100;
                       break;
           }
            break;
     case 4:
           switch (marca) 
           { case "ArgentinaLuz":
             case "FelipeLamparas":
                                   porcentaje=25/100;
                                  break;
            default:
                    porcentaje=20/100;
                    break;
          }
            break;
  case 3:
        switch (marca)
         {case "ArgentinaLuz": 
                             porcentaje=15/100;
                             break;
          case "FelipeLamparas":
                               porcentaje=10/100
                               break;
        default:
                porcentaje=5/100;
                break;
         } 
       break;
  default:
          porcentaje=50/100;
          break;
  }
    precioConDescuento = precioSinDescuento-precioSinDescuento*porcentaje;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
 
    if (precioConDescuento>120)
   { ingresosBrutos = precioConDescuento*PORCEN_INGRESOS_BRUTOS;
     precioFinal = precioConDescuento+ingresosBrutos;
    alert("Usted pago " + ingresosBrutos + " de IIBB.");
    document.getElementById('txtIdprecioDescuento').value = precioFinal;
    
  }
}
