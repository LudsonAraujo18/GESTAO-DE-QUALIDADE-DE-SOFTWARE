function contarOcorrencias(str, char) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            contador++;
        }
    }
    return contador;
}

console.log(contarOcorrencias("paralelepipedo", "e"));