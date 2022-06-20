let respuesta = prompt(
    "¿Qué ser camina con cuatro patas al alba, dos patas al mediodía y tres patas al atardecer?")

while (respuesta != 3) {
    if (respuesta == "El Hombre" || respuesta == "el hombre" || /* backdoor */ respuesta == 5) {
        break
    }
    alert(`parece que ${respuesta} no es lo correcto`);
    alert("vuelve a intentarlo")
    respuesta = prompt(
        "¿Qué ser camina con cuatro patas al alba, dos patas al mediodía y tres patas al atardecer?")
}

alert(`Asi es!, la respuesta es ${respuesta}`)
alert("BIENVENIDO")