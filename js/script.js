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

const operaciones = "-+x/";

const btnIgual = document.querySelector(".operadorIgual");
btnIgual.addEventListener("click", () => {
    const resultado = document.querySelector(".resultado");
    const operacion = document.querySelector(".operacion");
    const stringValidador = operacion.textContent.split("")
                                     .filter((letra) => operaciones
                                     .includes(letra))
                                     .join("");
    if (stringValidador != "") {
        // Esta condicion evalua que cuando no haya ningun valor en resultado y operacion, el contenido de operacion sea 0
        if (resultado.textContent === "" && operacion.textContent === "") {
            resultado.textContent = 0;
        } else if (operacion.textContent != "" && resultado.textContent == ""){
            operacion.textContent += 0;
        }
        const arrayProv = operacion.textContent.split(" ");
        if (arrayProv.length == 2) {
            operacion.textContent = operar(arrayProv[1], arrayProv[0], arrayProv[2]);
        }
        operacion.textContent += resultado.textContent;
        const arrayOperadores = operacion.textContent.split(" ").map((valor) => {
            if (valor == "") {
                valor = "0";
            }
            return valor;
        });
        resultado.textContent = operar(arrayOperadores[1], +arrayOperadores[0], +arrayOperadores[2]);
    }
});

// 1 + (operacion)
//     (resultado)
    
// 1 + 0 (operacion)
// 1     (resultado)


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
            contOperador = true;
        } else {
            operacion.textContent = `${resultado.textContent} ${btnOperador.textContent} `;
        }
        resultado.textContent = "";
    });
}

// Arreglar el valor que se asigna al igual cuando se ha ingresado 1 o ningun valor.



// Mostrar una alerta cuando se intente dividir por 0







