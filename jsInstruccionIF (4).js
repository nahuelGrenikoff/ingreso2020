function mostrar()
{
var edad = document.getElementById("edad").value; //tomo la edad  
edad = parseInt(edad);
if(edad >= 13 && edad <=17)                         //si la edad es entre 13 y 17 años inclusive
{
    alert("Lamento decirte que sos un adolescente");        //Aviso
}



}//FIN DE LA FUNCIÓN