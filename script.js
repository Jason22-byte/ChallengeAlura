const normalText = document.querySelector(".txt_area");
const mensaje = document.querySelector(".mensaje");

function btnEncrypt(){
    const encryptString = encriptarTexto(normalText.value);
    mensaje.value = encryptString;
    normalText.value = "";
    mensaje.style.backgroundImage = "none";
}

function btndecrypt() {
    const encryptString = desencriptarTexto(normalText.value);
    mensaje.value = encryptString;
    normalText.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnCopying() {
    mensaje.select();
    document.execCommand('copy');
    mensaje.value = "";
}

function encriptarTexto(normalString) {
    let matrizKeys = [["e","enter"], ["i","i"],["a","ai"],["o","ober"],["u","ufat"]];
    normalString = normalString.toLowerCase();
    for (let i = 0; i < matrizKeys.length; i++) {
        if(normalString.includes(matrizKeys[i][0])){
            normalString = normalString.replaceAll(matrizKeys[i][0],matrizKeys[i][1])
        }
        
    }
    return normalString;
}

function desencriptarTexto(encryptString) {
    let matrizKeys = [["e","enter"], ["i","i"],["a","ai"],["o","ober"],["u","ufat"]];
    encryptString = encryptString.toLowerCase();
    for (let i = 0; i < matrizKeys.length; i++) {
        if(encryptString.includes(matrizKeys[i][1])){
            encryptString = encryptString.replaceAll(matrizKeys[i][1],matrizKeys[i][0])
        }
        
    }
    return encryptString;
}