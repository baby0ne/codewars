const isValidWalk = (walk) => {
    let startPosition = 0;

    for (let i = 0; i < walk.length && walk.length === 10; i++) {
        switch (walk[i]) {
            case 'n':
                startPosition += 2;
                break;
            case 's':
                startPosition -= 2;
                break;
            case 'w':
                startPosition += 1;
                break;
            case 'e':
                startPosition -= 1;
                break;
        }
    }

    return walk.length === 10 && startPosition === 0;
}