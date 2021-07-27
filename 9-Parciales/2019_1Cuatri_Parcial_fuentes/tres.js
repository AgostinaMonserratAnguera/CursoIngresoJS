function mostrar()
{//declaro variables
    let precio;
    let descuento;
    let precioConDescuento;

    precio = prompt("Ingrese precio");
    precio = parseFloat(precio);
    descuento = prompt("Ingrese descuento a aplicar");
    descuento = parseInt(descuento);

    precioConDescuento = precio-precio*descuento/100;

    document.getElementById("elPrecioFinal").value = precioConDescuento + " $";

}
