function sum(numbers) {
    if (!numbers.length) {
        return 0;
    } else if (numbers.length === 1) {
        return numbers[0];
    } else {
        let result = 0;
        numbers.forEach((element) => {
            if (!isNaN(element)) {
                result += element
            }
        });
        return result;
    }
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0