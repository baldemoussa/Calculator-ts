export function addition(num1: number, num2: number): number {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 + num2;
}

export function subtraction(num1: number, num2: number): number {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 - num2;
}

export function multiplication(num1: number, num2: number): number {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 * num2;
}

export function division(num1: number, num2: number): number | null {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num2 === 0 ? null : num1 / num2;
}

export function calculate (num1: number | number[]): number {
    if (Array.isArray(num1)) {
        return num1.reduce((acc, curr) => acc + curr, 0);
    } else {
        return num1*num1;
    }
}

export function applyRule (num1: number, rule: (x: number) => number): number {
    return rule(num1);
}

//test
console.log(`1. addition(5, 3): ${addition(5, 3)}`);
console.log(`2. subtraction(5, 3): ${subtraction(5, 3)}`);
console.log(`3. multiplication(5, 3): ${multiplication(5, 3)}`);
console.log(`4. division(5, 3): ${division(5, 3)}`);
console.log(`5. calculate([1, 2, 3, 4, 5]): ${calculate([1, 2, 3, 4, 5])}`);
console.log(`6. applyRule(5, calculate): ${applyRule(5, calculate)}`);
