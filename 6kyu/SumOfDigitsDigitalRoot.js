function digitalRoot(n) {
    let stringN = String(n);
    let sum = 0;

    for (let i = 0; i < stringN.length; i++) {
        sum += Number(stringN[i]);
    }

    return String(sum).length > 1 ? digitalRoot(sum) : sum;
}