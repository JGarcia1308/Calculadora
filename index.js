let Mousetrap = require("mousetrap");

//#region botones
document.getElementById("boton1").onclick = clickUno;
document.getElementById("boton2").onclick = clickDos;
document.getElementById("boton3").onclick = clickTres;
document.getElementById("boton4").onclick = clickCuatro;
document.getElementById("boton5").onclick = clickCinco;
document.getElementById("boton6").onclick = clickSeis;
document.getElementById("boton7").onclick = clickSiete;
document.getElementById("boton8").onclick = clickOcho;
document.getElementById("boton9").onclick = clickNueve;
document.getElementById("boton0").onclick = clickCero;
//Operaciones
document.getElementById("suma").onclick = Suma;
document.getElementById("resta").onclick = Resta;
document.getElementById("multi").onclick = Multiplica;
document.getElementById("division").onclick = Division;
document.getElementById("botonPunto").onclick = Punto;
document.getElementById("borrar").onclick = Retroceso;
document.getElementById("botonCE").onclick = Reiniciar;
//#endregion
let histo = document.getElementById("historial");

let actualEl = document.getElementById("numeroActual");
let resultadoEl = document.getElementById("resultado");

let actual =0;
let decimal = 0.0;
let resultado = 0;
let punto = false;
let ultimaOp = "";

//#region Keybindings
Mousetrap.bind("1",clickUno);
Mousetrap.bind("2",clickDos);
Mousetrap.bind("3",clickTres);
Mousetrap.bind("4",clickCuatro);
Mousetrap.bind("5",clickCinco);
Mousetrap.bind("6",clickSeis);
Mousetrap.bind("7",clickSiete);
Mousetrap.bind("8",clickOcho);
Mousetrap.bind("9",clickNueve);
Mousetrap.bind("0",clickCero);
Mousetrap.bind("/",Division);
Mousetrap.bind("*",Multiplica);
Mousetrap.bind("-",Resta);
Mousetrap.bind("+",Suma);
//#endregion

//#region Botones Numericos
function Cero() {
    if(actualEl.innerHTML == "0"){        
        actualEl.innerHTML = "";
    }
}

function Reiniciar() {
    actual = 0;
    resultado = 0;
    actualEl.innerHTML=0;
    resultadoEl.innerHTML=0;
    histo.innerHTML="";
}

function Historial(h, op) {
    histo.innerHTML += h +" "+ op;
}

function Punto() {
    if(punto == false){
        actual += 0.00;
        actualEl.innerHTML += "."
        punto = true; 
    }
}

function Retroceso() {
    actual -= actual;
    actualEl.innerHTML = actual.toString();
}

function clickUno(){
    Cero();
    actual += 1
    actualEl.innerHTML += "1";    
}
function clickDos() {
    Cero();
    actual += 2
    actualEl.innerHTML += "2";
}
function clickTres() {
    Cero();
    actual += 3
    actualEl.innerHTML += "3";
}
function clickCuatro() {
    Cero();
    actual += 4
    actualEl.innerHTML += "4";
}
function clickCinco() {
    Cero();
    actual += 5
    actualEl.innerHTML += "5";
}
function clickSeis() {
    Cero();
    actual += 6
    actualEl.innerHTML += "6";
}
function clickSiete() {
    Cero();
    actual += 7
    actualEl.innerHTML += "7";
}
function clickOcho() {
    Cero();
    actual += 8
    actualEl.innerHTML += "8";
}
function clickNueve() {
    Cero();
    actual += 9
    actualEl.innerHTML += "9";
}
function clickCero() {
    Cero();
    actual += 0
    actualEl.innerHTML += "0";
}
//#endregion

//#region Funciones
function Suma() {
    if(actual != ""){
        resultado += parseInt(actual);
        Historial(actual, "+");
        actual = "";
        actualEl.innerHTML = "0";
        resultadoEl.innerHTML = resultado;       
        punto = false;
    }
}

function Resta() {
    if (actual != "") {
        resultado -= parseInt(actual);
        Historial(actual,"-");
        actual = "";
        actualEl.innerHTML = "0";
        resultadoEl.innerHTML = resultado;       
        punto=false;
    }
}

function Multiplica() {
    if (actual != "") {
        resultado *= parseInt(actual);
        Historial(actual,"*");
        actual = "";
        actualEl.innerHTML = "0";
        resultadoEl.innerHTML = resultado;        
        punto=false;
    }
}

function Division() {
    if (actual != "") {
        resultado /= parseInt(actual);
        Historial(actual,"/");
        actual = "";
        actualEl.innerHTML = "0";
        resultadoEl.innerHTML = resultado;        
        punto=false;
    }
}
//#endregion