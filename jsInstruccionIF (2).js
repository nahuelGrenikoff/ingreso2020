function mostrar()
{
var edad       
edad = document.getElementById("edad").value;   //tomo la edad  
edad = parseInt(edad);
if(edad >= 18)
{          //Si le edad es mayor a 18
    alert("Mayorìa de edad confirmada");       //muestro aviso
}


}//FIN DE LA FUNCIÓN