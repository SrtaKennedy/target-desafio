// Define os interruptores e lâmpadas
const interruptores = [false, false, false];
const lampadas = [false, false, false];

// liga o primeiro interruptor
interruptores[0] = true;

// liga o segundo interruptor
interruptores[1] = true;

// Agora, veja qual lampada está acesa
for (let i = 0; i < interruptores.length; i++) {
    if (interruptores[i]) {
        console.log(`O interruptor ${i + 1} controla a lâmpada ${i + 1}.`);
    }
}