// 2)

function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;

    while (b <= numero) {
        if (b === numero) {
            return numero; //pertence à sequência;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }

    return numero; // não pertence à sequência;
}

// Exemplo de uso com número previamente definido no código
let numeroVerificar = 21; // Substitui pelo número desejado
let resultado = verificaFibonacci(numeroVerificar);
console.log(resultado);