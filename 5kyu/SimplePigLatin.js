function pigIt(str) {
    const arr = str.split(' ')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0].match(/[a-z]/i))
            arr[i] = arr[i].substring(1, arr[i].length) +  arr[i][0] + 'ay'
    }

    return arr.join(' ')
}