const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btncriptografar(){
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = " ";
}

function btndescriptografar(){
    const textoDecriptado = descriptografar (textArea.value);
    mensagem.value = textoDecriptado;
    textArea.value = " ";
}

function copiar() {
    var copiado = document.getElementById("texto-copiar").value;
    navigator.clipboard.writeText(copiado);
    //console.log(copiado);
    alert("Texto copiado!");
}

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function criptografar(stringcriptografada) {

    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o" , "ober"] ,["u" , "ufat"]];
    stringcriptografada = stringcriptografada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringcriptografada.includes(matrizCodigo[i] [0])); {
            stringcriptografada = stringcriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringcriptografada;
}

function descriptografar(stringdescriptografada) {

    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a", "ai"] , ["o" , "ober"] ,["u" , "ufat"]]
    stringdescriptografada = stringdescriptografada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringdescriptografada.includes(matrizCodigo[i] [1])){
            stringdescriptografada = stringdescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringdescriptografada;
}