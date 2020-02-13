function mostrar()
{
var edad = document.getElementById("edad").value;       //tomo la edad  
edad = parseInt(edad);

var civil = document.getElementById("estadoCivil").value;   //tomo estado civil

if(civil != "Soltero" && edad < 18)                         //Si el estado civil no es soltero  
{
    alert("Es muy pequeño para no ser soltero");            //Alerta
}

	


}//FIN DE LA FUNCIÓN