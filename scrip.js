


const inputTexto = document.querySelector(".input-texto");

const mensaje = document.querySelector(".mensaje");

const copiar = document.querySelector(".copiar");

function btnEncriptar(){

    const textoEncriptado = encriptar(inputTexto.value)

    mensaje.value = textoEncriptado;

    mensaje.style.backgroundImage = "none";
   
    inputTexto.value = "";
    ocultar.style.display = "none"

}


function encriptar(stringEncriptada){

let matrixCode = [["e", "enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

stringEncriptada = stringEncriptada.toLowerCase();

for( let i= 0; i < matrixCode.length; i++){

    if(stringEncriptada.includes(matrixCode[i][0])){

        stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1])
    }

}
return stringEncriptada;

}

function btnDesencriptar(){

    const textoEncriptado = desencriptar(inputTexto.value)

    mensaje.value = textoEncriptado

    mensaje.style.backgroundImage = "none";
   
    inputTexto.value = ""
    ocultar.style.display = "none"
    
}


function desencriptar(stringDesencriptar){

let matrixCode = [["e", "enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];

stringDesencriptar = stringDesencriptar.toLowerCase();

for( let i= 0; i < matrixCode.length; i++){

    if(stringDesencriptar.includes(matrixCode[i][1])){

        stringDesencriptar = stringDesencriptar.replaceAll(matrixCode[i][1], matrixCode[i][0])
    }

}
return stringDesencriptar;

}

function btnCopiar(){

   const textoCopiado = copiarTexto(mensaje.value)
   mensaje.value = "";
   mensaje.style.display = "block"
   ocultar.style.display = "none"

   
}

function copiarTexto(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    alert("mensaje copiado");
   

}


