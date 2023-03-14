function maxIndex(numbers) {
    if (numbers.length < 1) {
        return -1;
    } else {
        let resultIndex = 0;
        let lastHigher = 0;
        let iteratorOfNotNumbers = 0;

        numbers.forEach((element, index) => {
            if (!isNaN(element)) {
                if (element > lastHigher) {
                    lastHigher = element;
                    resultIndex = index;
                }
            } else {
                iteratorOfNotNumbers++;
            }
        });

        if (iteratorOfNotNumbers === numbers.length) {
            return -1;
        } else {
            return resultIndex;
        }
    }
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1