function max(numbers) {
    if (numbers.length < 1) {
        return undefined;
    } else if (numbers.length === 1) {
        if (isNaN(numbers[0])) {
            return undefined;
        } else {
            return numbers[0];
        }

    } else {
        let result = 0;
        let comparatorOfNotNumbers = 0;

        numbers.forEach(element => {
            if (!isNaN(element)) {
                if (element > result) {
                    result = element;
                }
            } else {
                comparatorOfNotNumbers++;
            }

        });

        if (comparatorOfNotNumbers === numbers.length) {
            return undefined;
        } else {
            return result;
        }
    }
}


console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined