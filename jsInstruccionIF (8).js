function mostrar()
{
var edad = document.getElementById("edad").value;       //tomo la edad  
edad = parseInt(edad);

var civil = document.getElementById("estadoCivil").value;   //tomo estado civil

if(civil == "Soltero" && edad >= 18)                        //Si es soltero y mayor de edad
{
    alert("Es soltero y no es menor");                      //Alerta
}




}//FIN DE LA FUNCIÓN