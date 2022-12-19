let valores = [8, 1, 7, 4, 2, 9];

// For tradicional
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `);
}

console.log('--------------------------------');
valores.sort();

// For simplicado para vetores e objetos
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `);
}
