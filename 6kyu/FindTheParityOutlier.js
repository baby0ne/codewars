function findOutlier(integers){
    let oddCounter = 0;

    for(let i = 0; i < 3; i++){
        if(integers[i] % 2 === 0) ++oddCounter;
    }

    if(oddCounter > 1){
        for(let i = 0; i < integers.length; i++){
            if(integers[i] % 2 !== 0) return integers[i];
        }
    } else {
        for(let i = 0; i < integers.length; i++){
            if(integers[i] % 2 === 0) return integers[i];
        }
    }
}