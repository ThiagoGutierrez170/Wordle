const palabras = [
    "PLUMA", "JABON", "TIGRE", "LIMON", "FILAS", "CIELO", "MANGO", "MUNDO",
    "RELOJ", "MESAS", "VIDRO", "CIELO", "CAUSA", "MUSLO", "GIRAS", "DARDO",
    "PALMA", "SALTO", "PLAZA", "DIENT", "CARNE", "HOJAS", "PIEZA", "CIELO",
    "MUSLO", "GIGAS", "CAPAS", "CAMEL", "SABLE", "HONDA", "BANDA", "VIRAL",
    "MAPAS", "HIGOS", "GIGAS", "LEJIA", "JABAL", "MANOS", "TORRE", "CRUDO",
    "GASTO", "GOLPE", "COBRA", "TALON", "TIGRE", "REJAS", "HURTO", "ZOCAL",
    "RADIO", "CONDE", "MANTA", "ZAPAT", "RAMAS", "MUROS", "CAMPO", "LIBRO",
    "VISTA", "LUMAS", "PLANO", "MAYOR", "DUCHA", "MORIR", "TRONO", "VARON",
    "SABOR", "REINA", "RADIO", "AEREO", "CORTE", "CORON", "ROBAR", "DINOS",
    "GATOS", "ARENA", "PLATA", "NARAN", "TIPOS", "RIMAS", "VIRUS", "FILAS",
    "MUEST", "GUANT", "GORRO", "MANGO", "RISAS", "TOMAS", "PECHO", "LUCHA",
    "SONDA", "CLASE", "RADIO", "TEJAS", "ENEMA", "MOTIN", "VIDRO", "ALIAR"
  ];
const indiceAleatorio = Math.floor(Math.random() * palabras.length);
let intentos = 6;
let palabra = palabras[indiceAleatorio];
let i=0;

function crearVector(texto){
    let vecPalabra=[];
    for (let i=0;i<5;i++){
    
    // Obtener el primer carácter de la cadena
    let primerCaracter = texto.charAt(0);
    
    // Remover el primer carácter de la cadena
    texto = texto.slice(1);
    
    // Agregar el primer carácter al array
    vecPalabra.push(primerCaracter);
    }
    return vecPalabra;
}
//aqui puede añadir el reseteo de la palabra para prevenir trampas 
/*
window.addEventListener('load', init);
*/
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); //Operacion para poner el String a latras mayusculas 
    return intento;
}
function teclado(letra){
    let teclado = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        ["Z", "X", "C", "V", "B", "N", "M", "", "", ""]
    ];  
    let head="";
    let color="";
    cabeza="<table style='border-collapse: collapse;'>";
    for (let f = 0; f < 3; f++) {
        head=head+"<tr>";
        let body="";
        for (let c = 0; c < 10; c++) {
            body=body+"<td style='border: 1px solid black;"+
            "padding: 10px;background-color: ";
            color="cadetblue";
            for(let d=0;d<10;d++){
                if (letra[d]==teclado[f][c]){
                    color="green";
                }
            }
            body=body+color+";'>"+teclado[f][c]+"</td>";
        }
        head=head+body+"</tr>";
    }
    console.log(letra);
    head=cabeza+head+"</table>";
    document.getElementById("teclado").innerHTML=head;
}
let body1="";
function comparar(palabra1,palabra2){
    let var1=[];
    let var2=[];

    var1=crearVector(palabra1);
    var2=crearVector(palabra2); 
    
   let aciertos=0;
   let posicion=[];
   let letra=[];
   for (let indice=0;indice<5;indice++){
        if (var1[indice]==var2[indice]){
            aciertos++;
        }
   }
   for (indice1=0; indice1<5; indice1++){
        for (let indice2=0;indice2<5;indice2++){
            if (var1[indice1]==var2[indice2]){
                posicion.push(indice2);
                letra.push(var2[indice2]);
            }
        }
    }
    body1=body1+"<table style='border-collapse: collapse,margin:12px;justify-content: center;font-size: 24px;'>"+"<tr>";
    for (let g=0;g<5;g++){
        body1=body1+"<td style='border: 1px solid black;"+
        "padding: 10px;background-color: ";
        color="cadetblue";
        for(let d=0;d<10;d++){
            if (letra[d]==var2[g]){
                color="yellow";
            }
        }
        if (var1[g]==var2[g]){
            color="green";
        }
        body1=body1+color+";'>"+var2[g]+"</td>";
    }
    body1=body1+"</tr></table>";
    //teclado(letra);
    return document.getElementById("pista").innerHTML=body1;
}

function intentar(){
    const input = document.getElementById('guess-input');
    if (input.reportValidity()) {
        if (i < 5) {
            i++;
            let intento = leerIntento();
            let texto1 = palabra;
            let texto2 = intento;
            comparar(texto1, texto2);
            if (palabra == intento) {
                document.getElementById("alerta").innerHTML = "<h2 style='display: inline-block;margin-top: 50px;color: #a8e7e7;padding: 10px;background-color: #378037;border-radius: 15px;'>GANASTE! 😎</h2>";
                button.textContent = "Nuevo Intento";
                button.removeEventListener('click', intentar);
                button.addEventListener('click', nuevoIntento);
            } else {
                document.getElementById("alerta").innerHTML = "<h2 style='display: inline-block;margin-top: 50px;color: #a8e7e7;padding: 10px;background-color: #d13511;border-radius: 15px;'>INCORRECTO</h2>";
            }
        } else {
            document.getElementById("alerta").innerHTML = "<h2>SIN INTENTOS 😢</h2>";
            button.textContent = "Nuevo Intento";
            button.removeEventListener('click', intentar);
            button.addEventListener('click', nuevoIntento);
        }
    }
}

function nuevoIntento(){
    location.reload();
}

document.getElementById('guess-button').addEventListener('click', e =>{
    const input = document.getElementById('guess-input');
   if(input.checkValidity()){
       console.log("Datos validos");
    }
    else{
       console.log("Datos no validos");
    }
  });

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);   
