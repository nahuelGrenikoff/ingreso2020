function mostrar()
{
var num1 = Math.floor(Math.random() * (1 - 10)) +10;	//Genero el número RANDOM entre 1 y 10 

if(num1 < 4)
{
	alert(num1 +" Vamos la próxima");
}
else if(num1 >=4 && num1 <= 8)
{
	alert(num1 +" APROBÓ");
}
else
{
	alert(num1 + " EXCELENTE");
}

}//FIN DE LA FUNCIÓN