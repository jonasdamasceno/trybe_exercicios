const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

function pairsSum () {
    return numbers.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc += curr;
        }
        return acc;
    });
}
pairsSum(numbers);
console.log(pairsSum(numbers));