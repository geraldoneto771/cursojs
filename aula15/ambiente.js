let num = [5, 8, 2, 9, 3];

num.sort();
num.push(1);
console.log(num);
num.push(4, 6, 7);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O PRIMEIRO VALOR DO VETOR É ${num[0]}`);
console.log(num);
num.sort();
console.log(num);

let pos = num.indexOf(2);

if (pos == -1) {
    console.log('O valor não foi encontrado');
} else {
    console.log(`O valor 8 está na posição ${pos}`);
}
