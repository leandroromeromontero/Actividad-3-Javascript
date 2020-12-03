// Script para adivinanza
// Maximo 4 intentos, se le da pistas en intentos 2 y 3
// Avisar al usuario si fallo o gano, y en cada intento avisar la cantidad de intentos que le quedan.


var intento = 0; // contador de intentos, maximo 
var respuesta = "radiofarmaco"; // respuesta de la adivinanza
var respuesta2 = "radiofármaco";
var input; // string de input del usuario para comparar

input = document.forms["Respuesta"]["rsp"].value;

function validar()
{
    input = document.forms["Respuesta"]["rsp"].value;

    if (intento === 1)
    {
        alert("Primera Pista: una parte de mi nombre se debe a un descubrimiento de una gran cientifica llamada Marie Curie.")
    }

    else if (intento === 2)
    {
        alert("Segunda Pista: Otra parte de mi nombre suena parecido a la palabra farmacia ")
    }

    if (input === respuesta || input === respuesta2)
    {
        alert("Ganaste!");
        return true;
    } else if (input != respuesta || input != respuesta2)

    {
        intento++;

        if (intento > 4)
        {
            alert(" GAME OVER...Te quedaste sin intentos :( ")
            return false;
        }

        alert("Incorrecto te quedan " + (4 - intento) + " intentos!");
    }

}
