
function mostrar()
{
    var num1 = prompt("Ingrese la altura del rectángulo");
    var num2 = prompt("Ingrese el largo del rectángulo");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var resultado = num1*2+num2*2;
    alert("El perímetro del rectángulo será: " + resultado);
}
