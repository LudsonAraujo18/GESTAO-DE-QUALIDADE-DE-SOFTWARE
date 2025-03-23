function somarArray(arr) {
    let soma = 0;
    arr.forEach((n) => {
        soma += n;
    });
    return soma;
}

console.log(somarArray([5, 10, 15, 20, 25]));