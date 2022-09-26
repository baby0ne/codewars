var countBits = function(n) {
    const bits = Number(n).toString(2);
    let counter = 0;

    for(let i = 0; i < bits.length; i++ ){
        if(bits[i] === '1') counter++;
    }

    return counter;
};