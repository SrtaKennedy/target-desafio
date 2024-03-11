function inverterString(inputString) {
    let stringInvertida = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        stringInvertida += inputString[i];
    }
    return stringInvertida;
}

// como usar:
let minhaString = 'Hello, World!';
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida);