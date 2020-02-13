function mostrar()
{
var edad = document.getElementById("edad").value; //tomo la edad  
edad = parseInt(edad);
if(edad >=18)                                     //si la edad es 18 o màs
{
    alert("Mayoría de edad confirmada");        //aviso
}
else{                                           //si no es el caso
    alert("No alcanza la mayoría de edad");        //aviso
}
}//FIN DE LA FUNCIÓN