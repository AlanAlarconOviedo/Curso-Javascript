// DESAFIO PRIMER ENTRGABLE

// CORE




// incorporacion de Array (la idea es tener un array de objetos
// para que en funcion del ataque que selecciona el jugador se despliegue una pregunta diferente)

const PREGUNTAS_S = [{
        sNum: 1,
        sPregunta: "5 + 5 = ?",
        sRespuesta: "10"
    },
    {
        sNum: 2,
        sPregunta: "10 - 2 = ?",
        sRespuesta: "8"
    },
    {
        sNum: 3,
        sPregunta: "25 - 5 = ?",
        sRespuesta: "20",
    }
]
const PREGUNTAS_A = [{
        aNum: 1,
        aPregunta: "Estando roto es más útil que sin romperse. ¿Qué es?",
        aRespuesta: "El huevo"
    },
    {
        num: 2,
        pregunta: "Hay algo que, aunque te pertenezca, la gente siempre lo utiliza más que tú. ¿Qué es?",
        respuesta: "Tu nombre."
    },
    {
        num: 3,
        pregunta: "Estoy en todo pese a estar en nada. ¿Qué soy?",
        respuesta: "La letra D",
    }

]


//Esta parte solo es un ejercicio de como puedo usar los emtodos en los arrays para cumplir con la entrega XD

const TODAS_LASPREGUNTAS = PREGUNTAS_A.forEach((element, i) => {
    console.log(`${element} es la pregunta ${i}`)
});





// Esta parte es el simulador del juego

function reglas() {
    alert("welcome guerrero, Estas a punto de iniciar una batalla con Κοάλεμος");
    let player = prompt("¿Cual es tu nombre guerrero?");
    alert(`Un placer conocerte ${player}, veras... necesito que termines con Κοάλεμος para que yo pueda hacer mi entrega en CODERHOUSE`);
    alert("Asi que te mostrare como hacerlo");
    alert("El juego es muy simple, tienes que derrotar a Κοάλεμος usando el poder de sophia");
    alert("Κοάλεμος tiene una vida de 100 puntos");
    alert("Tu tienes 3 opciones de ataque")
    alert(`Tu primer ataque es un ataque fisico que quita 10 puntos de vida. para usarlo tendras que escribir "A"
    Tu segundo ataque es un hechizo que quita 20 puntos de vida y para usarlo escribiras "B".
    Tambien tienes 1 potenciador, con el que podras fortificar tu ataque.
    Con el potenciador "S", invocaras un compañero que multiplicara tu daño x3.
    `);
    let inicio = prompt("¿Lista para empezar?")

    while (true) {
        if (inicio == "si" || inicio == "yes") {
            break
        }
        alert("¿seguro que no quieres continuar?");
        inicio = prompt("Entraste en un espacio infinito por cobarde... ¿Listo para empezar?");
    }
}

function juego() {

    let respuestaA = ""
    let respuestaB = ""
    let respuestaS = ""

    alert("vale comenzemos...");


    let ataquewarrior = prompt(`Carga tu ataque, recuerda...
Tu primer ataque es un ataque fisico que quita 10 puntos de vida. para usarlo tendras que escribir "A"
    Tu segundo ataque es un hechizo que quita 20 puntos de vida y para usarlo escribiras "B".
    Tambien tienes 1 potenciador, con el que podras fortificar tu ataque.
    Con el potenciador "S", invocaras un compañero que multiplicara tu daño x3.`);

    while (ataquewarrior !== "S") {
        if (ataquewarrior == "B" || ataquewarrior == "A") {
            break
        }
        ataquewarrior = prompt("Escoje un ataque...")
    };

    switch (ataquewarrior) {
        case "A":
            respuestaA = prompt("¿Esta cosa se devora a todas las cosas; Pájaros, bestias, árboles, flores; Carcome el hierro, muerde el acero; Muele duras piedras y las reduce a harina; Mata al rey, arruina la ciudad, Y derriba a la montaña.");
            while (respuestaA !== "El tiempo") {

                respuestaA = prompt("Vuelve a intentarlo..¿Esta cosa se devora a todas las cosas; Pájaros, bestias, árboles, flores; Carcome el hierro, muerde el acero; Muele duras piedras y las reduce a harina; Mata al rey, arruina la ciudad, Y derriba a la montaña.");
            }
            if (respuestaA == "El tiempo") {
                alert("Felicidades!, ahora el Boss estaba muy cansado, solo en esta ocasión lo has destruido con un solo ataque por el poder del guión, eres digno de entrar");
            }
            break;
        case "B":
            respuestaB = prompt("2-x = x-8, ¿Cual es el valor de x?");
            while (respuestaB !== "5") {
                respuestaB = prompt("lee sobre ecuaciones diferenciales... 2-x = x-8")
            }
            if (respuestaB == "5") {
                alert("Felicidades!, ahora el Boss estaba muy cansado, solo en esta ocasión lo has destruido con un solo ataque por el poder del guión, eres digno de entrar");
            }
            break;
        case "S":
            respuestaS = prompt("Estás escapando de un laberinto, y tienes tres puertas delante. La puerta (1) de la izquierda lleva a un ardiente infierno. La puerta del centro (2) a un brutal asesino. Y la puerta (3) de la derecha a un león que no ha comido en tres meses. ¿Qué puerta escoges?");
            while (respuestaS !== "3") {
                respuestaS = prompt("Escoje entre la puerta (1), (2) o (3)")
            }
            if (respuestaS == "3") {
                alert("Felicidades!, ahora el Boss estaba muy cansado, solo en esta ocasión lo has destruido con un solo ataque por el poder del guión, eres digno de entrar");
            }
            break;

    }

}

//if (ataquewarrior == "Tu nombre") {lifeBoss - 10}


// for (lifeBoss = 100; lifeBoss <= 0; )


reglas()
juego()