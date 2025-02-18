function randomizeNumbers(amount) {
    const numbersArray = [];
    for(let i = 0; i < amount; i++) {
        let randomValue = Math.floor( Math.random() * 38);

        while(numbersArray.includes(randomValue)) {
            randomValue = Math.floor( Math.random() * 38)
        }
        numbersArray.push(randomValue)
    }
    return numbersArray;
}

export { randomizeNumbers };