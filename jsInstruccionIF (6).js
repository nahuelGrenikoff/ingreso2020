function mostrar()
{
var edad = document.getElementById("edad").value; //tomo la edad  
edad = parseInt(edad);
if(edad < 13)                           //si tiene menos de 13 años
{
    alert("Niño");                      //Aviso
}
else if(edad >=13 && edad <=17)         //si tiene entre 13 y 17 años
{
    alert("Adolescente");               //Aviso
}
else                                    //Si no se dan los casos anteriores
{
    alert("Adulto");                    ///Aviso
}



}//FIN DE LA FUNCIÓN