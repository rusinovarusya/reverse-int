module.exports = function reverse (n) {
    if (n < 0) n *= (-1);
    let arr = String(n).split('').reverse();
    return Number(arr.join(''));
}
