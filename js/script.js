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

let primerNum;
let operador;
let segundoNum;

function operar(operador, num1, num2){
    if (operador == "+") {
        return suma(num1,num2)
    } else if (operador == "-"){
        return resta(num1, num2)
    } else if (operador == "*"){
        return multiplicacion(num1, num2)
    } else if (operador == "/"){
        return division(num1, num2)
    };
}

const btnUno = document.querySelector(".num1");
btnUno.addEventListener("click", ()=>{
    const num = btnUno.textContent;
    const resultado = document.querySelector(".resultado");
    resultado.textContent += num;
});


let contSuma = false;
const btnSuma = document.querySelector(".operadorSuma");
btnSuma.addEventListener("click", () => {
    const resultado = document.querySelector(".resultado");
    const operacion = document.querySelector(".operacion");
    if (contSuma == false){
        operacion.textContent += `${resultado.textContent} + `;
        resultado.textContent = "";
        contSuma = true;
    } else {
        operacion.textContent = `${resultado.textContent} + `;
        resultado.textContent = "";
    }
});

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


