function persistence(num, counter = 0) {
    const stringNum = String(num)

    let calc = 1

    for(let i = 0; i < stringNum.length; i++){
        calc = calc * stringNum[i]
    }

    return stringNum.length === 1 ? counter : persistence(calc, ++counter)
}