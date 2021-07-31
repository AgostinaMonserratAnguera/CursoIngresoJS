function mostrar()
{//declaro variables
    let pais;
    let cantidadDias;
    let precioPorDias;
    let porcentajeFormaDePago;
    let precioFinal;
    let formaDePago;
    const PRECIO_DIA=100;
    const PORC_AME=50/100;
    const PORC_AFR=60/100;
    const PORC_EUR=20/100;
    const PORC_OTRO_CONT=20/100;

    pais = document.getElementById("Marca").value;
    cantidadDias = prompt("Ingrese cantidad de dias");
    formaDePago = prompt("Ingrese forma de pago: debito, mercado pago o efectivo");
    cantidadDias = parseInt(cantidadDias);
    precioPorDias = cantidadDias*PRECIO_DIA;


    switch (pais) 
    {
        case "América":
            switch (formaDePago) 
            {
                case "debito":
                    porcentajeFormaDePago = 10/100; 
                    break;
                default:
                    porcentajeFormaDePago=0;
                    break;
            }
            precioFinal = precioPorDias-precioPorDias*(porcentajeFormaDePago+PORC_AME);
            break;
        case "África":
            switch (formaDePago) 
            {
                case "mercado pago":
                    porcentajeFormaDePago = 15/100; 
                    break;
                default:
                    porcentajeFormaDePago=0;
                    break;
            }
            precioFinal = precioPorDias-precioPorDias*(porcentajeFormaDePago+PORC_AFR);
            break;
        case "Europa":
            switch (formaDePago) 
            {
                case "debito":
                    porcentajeFormaDePago = 15/100; 
                    break;
                case "mercado pago":
                    porcentajeFormaDePago = 10/100; 
                    break;
                default:
                    porcentajeFormaDePago = 5/100;
                    break;       
            }
            precioFinal = precioPorDias-precioPorDias*PORC_EUR+precioPorDias*porcentajeFormaDePago;
            break;
        default:
            precioFinal = precioPorDias+precioPorDias*20/100;
            break;
    }
    alert("El importe final a abonar es: " + precioFinal + " $.");

    


}
