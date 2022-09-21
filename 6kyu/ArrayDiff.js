function arrayDiff(a, b) {
    if(b.length === 0) return a;

    let resultArr = [];

    for(let i = 0; i < b.length; i++){
        resultArr = a.filter(el => el !== b[i]);
        a = resultArr;
    }

    return resultArr;
}