function checkForFactor(base, factor) {
   let thisFactor = false;
    if(base%factor === 0){
       thisFactor = true;
    }
    return thisFactor;
}