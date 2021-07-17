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
let precioTotal;
let precioDescuento;
let marca;


//asigno y parseo
  cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
  marca = document.getElementById("Marca").value;
 
//operacion
  precioTotal = cantidadLamparas*PRECIO_UNITARIO_LAMP;
  if (cantidadLamparas>=6)
   {
      precioDescuento = precioTotal-precioTotal*50/100;
      document.getElementById("txtIdprecioDescuento").value = precioDescuento;  
    }

  if (cantidadLamparas==5)
    { if (marca=="ArgentinaLuz")
       { precioDescuento = precioTotal-precioTotal*40/100;
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;  
       }
     else 
       {
        precioDescuento = precioTotal-precioTotal*30/100;
        document.getElementById("txtIdprecioDescuento").value = precioDescuento;  
       }
    }
}
