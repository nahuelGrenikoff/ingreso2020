/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe = document.getElementById("importe").value;
    var sueldo

    importe =parseInt(importe);     // 100 - importe

    importe = importe * 0.75;

    document.getElementById("resultado").value = importe;	
}