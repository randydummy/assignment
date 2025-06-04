function categorizeArray(arr) {
    const result = {
        evens: [],
        odds: [],
        chars: []
    };

    for (let item of arr) {
        if (typeof item === "string" && item.length === 1 && isNaN(item)) {
            result.chars.push(item);
        } else {
            const num = Number(item);
            if (!isNaN(num)) {
                if (num % 2 === 0) {
                    result.evens.push(num);
                } else {
                    result.odds.push(num);
                }
            }
        }
    }

    result.evens.sort((a, b) => a - b);
    result.odds.sort((a, b) => a - b);
    result.chars.sort();

    return result;
}

// Example usage:
let someArray = [3.0, 'a', 7, 'x', '20', 'd', 4, 'f', 8];
console.log(categorizeArray(someArray));
// Output: { evens: [4, 8, 20], odds: [3, 7], chars: ['a', 'd', 'f', 'x'] }
