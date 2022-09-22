function spinWords(string){
    let arr1 = string.split(' ');

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i].length > 4){
            let arr2 = arr1[i].split('').reverse();
            arr1[i] = arr2.join('');
        }
    }

    return arr1.join(' ');
}