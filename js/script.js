function suma(a,b){
    return a + b
}

function resta(a,b){
    return a - b
}

function multiplicacion(a,b){
    return a * b
}
function division (a,b){
    if (b == 0) return "undefined"
    return a / b
}

function operar(operador, num1, num2){
    if (operador == "+") {
        return suma(num1,num2)
    } else if (operador == "-"){
        return resta(num1, num2)
    } else if (operador == "x"){
        return multiplicacion(num1, num2)
    } else if (operador == "/"){
        return division(num1, num2)
    };
}

const btnIgual = document.querySelector(".operadorIgual");
btnIgual.addEventListener("click", () => {
    const resultado = document.querySelector(".resultado");
    const operacion = document.querySelector(".operacion");
    if (resultado.textContent == "") {
        operacion.textContent += 0;
    } else {
        operacion.textContent += resultado.textContent;
    }
    const arrayOperadores = operacion.textContent.split(" ");
    console.log(arrayOperadores);
    resultado.textContent = operar(arrayOperadores[1], +arrayOperadores[0], +arrayOperadores[2]);
});

const btnLimpiar = document.querySelector("input");
btnLimpiar.addEventListener("click", () => {
    const resultado = document.querySelector(".resultado");
    const operacion = document.querySelector(".operacion");
    resultado.textContent = "";
    operacion.textContent = "";
    contSuma = false;
});


// Tomar todas las querys de las clases boton y operadores para añadirles un listener con el evento click
// BOTONES NUMEROS
const botones = document.querySelectorAll(".num");
const arrayBotones = Array.from(botones);

for (let index = 0; index < arrayBotones.length; index++) {
    const btnNumero = arrayBotones[index];
    btnNumero.addEventListener("click", () => {
        const num = btnNumero.textContent;
        const resultado = document.querySelector(".resultado");
        resultado.textContent += num;
    });
}

// BOTONES OPERADORES

const operadores = document.querySelectorAll(".operador");
const arrayOperadores = Array.from(operadores);

let contOperador = false;

for (let index = 0; index < arrayOperadores.length; index++) {
    const btnOperador = arrayOperadores[index];
    btnOperador.addEventListener("click", () => {
        const resultado = document.querySelector(".resultado");
        const operacion = document.querySelector(".operacion");
        if (contOperador == false){
            operacion.textContent += `${resultado.textContent} ${btnOperador.textContent} `;
            resultado.textContent = "";
            contOperador = true;
        } else {
            operacion.textContent = `${resultado.textContent} ${btnOperador.textContent} `;
            resultado.textContent = "";
        }
    });
}

// Arreglar el valor que se asigna al igual cuando se ha ingresado 1 o ningun valor.





// Mostrar una alerta cuando se intente dividir por 0







