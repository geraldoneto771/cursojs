function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!';
    } else {
        return 'Ímpar!';
    }
}
let res = parimpar(13);
console.log(`o resultado é ${res}`);