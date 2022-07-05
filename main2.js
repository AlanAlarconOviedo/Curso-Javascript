// FUNCIONES DE ORDEN SUPERIOR:

/*
function mayorQue (n) {

    return (m) => m > n
}

let mayorQueDiez = mayorQue (10)

console.log(mayorQueDiez (12))  // true
console.log(mayorQueDiez (6))    // false
*/



//Ejemplo de funcion de orden superior 


function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(suma(10,5)) //  15
console.log(resta(10,8)) // 2





//RECIBIR FUNCIONES COMO PARAMETRO

// RECIBIR UN ARREGLO = ARR  Y UNA FUNCION = FN 
function porCadaUno (arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}




// EJEMPLO DE COMO APLICAR

const numeros =  [1, 2, 3, 4]

porCadaUno (numeros, console.log)
