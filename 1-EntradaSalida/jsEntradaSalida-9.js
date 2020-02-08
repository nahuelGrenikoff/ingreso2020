/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe = document.getElementById("sueldo").value;
    var sueldo

    importe =parseInt(importe);     // 100 - importe

    importe = importe * 1.15;

    document.getElementById("resultado").value = importe;	
}