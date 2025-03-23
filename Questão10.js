function mediaArray(arr) {
    if (arr.length === 0) return 0;
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma / arr.length;
}

console.log(mediaArray([126, 44, 117, 33]));