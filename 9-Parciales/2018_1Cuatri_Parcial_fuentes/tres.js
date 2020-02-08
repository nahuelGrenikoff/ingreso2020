function mostrar()
{
    var precio = prompt("Ingrese el precio de lista");
    var porcentaje = prompt("Ingrese el porcentaje de descuento");

    var resultado = precio-(precio/100*porcentaje);
    document.getElementById("elPrecioFinal").value = resultado;
}
