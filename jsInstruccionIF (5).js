function mostrar()
{
var edad = document.getElementById("edad").value;  //tomo la edad  
edad = parseInt(edad);
if(!(edad >= 13 && edad <=17))                     //si la edad no está entre 13 y 17 años inclusive
{
    alert("No sos adolescente al menos");          //Aviso
}

}//FIN DE LA FUNCIÓN