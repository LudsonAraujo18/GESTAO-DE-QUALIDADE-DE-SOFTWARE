function palindromo(str) {
    const strFormatada = str.replace(/\s/g, "").toLowerCase();
    return strFormatada === strFormatada.split("").reverse().join("");
}

console.log(palindromo("Socorram me subi no onibus em Marrocos"));