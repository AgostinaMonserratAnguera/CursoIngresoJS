
function mostrar()
{
    let tipoDeProducto;
    let precioDelProducto;
    let cantidadUnidades;
    let marca;
    let fabricante;
    let fabricanteAlcoholBarato;
    let contadorBarbijo=0;
    let contadorJabon=0;
    let contadorAlcoholBarato=0;
    let contadorAlcohol=0;
    let acumuladorBarbijo=0;
    let acumuladorJabon=0;
    let acumuladorAlcohol=0;
    let promTipo;
    let precioMaxAlcohol=100;
    let precioMinAlcohol=300;
    let tipoMas;

    for (let i=0; i<5; i++)
    {
        tipoDeProducto = prompt("Ingrese tipo de producto: 'barbijo', 'jabon' o 'alcohol'");       
        
            while ( tipoDeProducto!="barbijo" && tipoDeProducto!="jabon" && tipoDeProducto!="alcohol")
            {
                 tipoDeProducto = prompt("Reingrese el producto segun la consigna dada");
            }
        precioDelProducto = parseFloat(prompt("Ingrese el precio entre 100 y 300"));
        
            while (precioDelProducto<100 || precioDelProducto>300 || isNaN(precio)) 
            {
                 precioDelProducto = parseFloat(prompt("Reingrese el precio del producto segun la consigna dada"));
            }
        cantidadUnidades = parseInt(prompt("Ingrese cantidad de unidades no puede ser 0 o negativo y no debe superar a las 1000 unidades"));
            while (cantidadUnidades<1 || cantidadUnidades>1000 || isNaN(cantidadUnidades))
            {
                cantidadUnidades = parseInt(prompt("Reingrese la cantidad de unidades respetando la consigna dada"));
            }
        marca = prompt("Ingrese marca del producto");
        fabricante = prompt("ingrese fabricante del prodcuto");

        switch (tipoDeProducto) 
        {
            case "barbijo":
                
                contadorBarbijo++;
                acumuladorBarbijo = cantidadUnidades+acumuladorBarbijo;
                break;
        
            case "alcohol":
                if (precioDelProducto<precioMinAlcohol)
                {
                    precioMinAlcohol =  precioDelProducto;
                    contadorAlcoholBarato++;
                    fabricanteAlcoholBarato = fabricante;
                }
                contadorAlcohol++;
                acumuladorAlcohol = cantidadUnidades+acumuladorAlcohol;
                break;
            case "jabon":   
                contadorJabon++;
                acumuladorJabon = cantidadUnidades+acumuladorJabon;
                break;
             
        }
      if (acumuladorAlcohol>acumuladorBarbijo && acumuladorAlcohol>acumuladorJabon)
      {
        tipoMas = "alcohol";
        promTipo = acumuladorAlcohol/contadorAlcohol;
      }
      else if (acumuladorBarbijo>acumuladorJabon)
      {
          tipoMas = "barbijo";
          promTipo = acumuladorBarbijo/contadorBarbijo;
      }  
      else
      {
          tipoMas = "jabon";
          promTipo = acumuladorJabon/contadorJabon;
      }

   
    }

   document.write(
        "Cantidad de unidades y fabricante del alchol mas barato=" + contadorAlcoholBarato + " y " + fabricanteAlcoholBarato + "<br>" + 
        "Tipo con mas unidades y promedio= " + tipoMas + " y " + promTipo + "<br>" + 
        "Suma de jabones=" + acumuladorJabon);



}
