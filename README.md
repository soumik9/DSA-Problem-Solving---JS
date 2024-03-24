## 1. Fibonacci Sequence

Problem defination:

```bash
Give a number 'n', find the first 'n' elements of the fibonacci sequence.

In mathmatics, the fibonacci sequence is a sequence in which each number is the sum of the two 
preceding ones The first two numbers in the sequence are 0 and 1.

fibonacci(2) = [0, 1]

fibonacci(3) = [0, 1, 1]
`NB: here third number is sum of first 2 number`

fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

[x] Big O = O(n)
[x] Linear time complexity 
```

Solution:

```bash
function fibonacci(n) {
    const fibon = [0, 1];

    // *solution --------  1
    for (let i = 2; i < n; i++) {
        fibon[i] = fibon[i - 1] + fibon[i - 2];
    }

    // *solution --------  2
    for (let i = 0; i < (n - 2); i++) {
        const length = fibon.length;
        fibon.push(fibon[length - 1] + fibon[length - 2]);
    }
    return fibon;
}
```

## 2. Factorial of a number

Problem defination:

```bash
Give an integer 'n', find the factorial of that integer.

In mathmatics, the factorial of a non-negative integer 'n', denoted n!, is the product of all 
positive integers less than or equal to 'n'.

Factorial of zero is 1.

Example, 
[x] factorial(4) = 4*3*2*1 = 24
[x] factorial(5) = 5*4*3*2*1 = 120

[x] Big O = O(n)
[x] Linear time complexity 
```

Solution:

```bash
const factorial = (n) => {
    let result = 1;

    // ! By starting the loop with i = 2, you skip the unnecessary multiplication by 1, since any number multiplied by 1 remains unchanged.

    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}
```

## 3. Prime number

Problem defination:

```bash
Give a natural number 'n', determine if the number is prime or not?

A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

Example, 
[x] isPrime(5) =  true (1*5 or 5*1)
[x] isPrime(4) =  false (1*4 or 2*2 or 4*1)

[x] Big O = O(n)
[x] Linear time complexity 
```

Solution:

```bash
const isPrime = (n) => {

    let res = true;

    if (n < 2) {
        res = false;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            res = false;
            break;
        }
    }

    if (res) {
        console.log(n, "is a prime number.");
    }
    else {
        console.log(n, "is not a prime number.");
    }
}
```

## 4. Power of Two

Problem defination:

```bash
Give a positive number 'n', determine if the number is a power of 2 or not?

An integer is a power of two if there exists an integer 'x' such that n === 2^x.

For a number, if reminder is 0 in every step and 'n' comes down to 1 then the number is power of two.

Example, 
[x] isPowerOfTwo(1) =  true (2^0)
[x] isPowerOfTwo(2) =  true (2^1)
[x] isPowerOfTwo(5) =  false


[x]  Big O = O(logn)
[x]  input size reduced by half 
```

Solution:

```bash
const isPowerOfTwo = (n) => {

    if (n < 1) return false;

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2
    }

    return true;
}
```

## 5. Recursive Fibonnaci sequence

Recursion is when a function calls it self.

Characterstics, 
[x] Simplify the problem.

[x] break into smaller versions of the same problem.

[x] need a base case which is a condition to terminate the recursion. Otherwise, result will be
infinity which will crash the program.

[x] Simplify the problem but not always perfomance is faster solution.

Problem defination:

```bash
Give a number 'n', find the n^th element of the fibonacci sequence.

fibonacci(2) = [0, 1]

fibonacci(3) = [0, 1, 1]
`NB: here third number is sum of first 2 number`

Example, 
[x] recursiveFibonacci(0) = 0
[x] recursiveFibonacci(1) = 1
[x] recursiveFibonacci(6) = 8

[x] O(n) - Iterative
[x] O (2^n) - recursive which is not a good solution for fibonacci 
```

Solution:

```bash
const recursiveFibonacci = (n) => {

    if (n < 2) {
        return n;
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
```

## 6. Recursive Factorial of a number

Problem defination:

```bash
Give an integer 'n', fina the factorial of the integer. denoted !n which are non-nevetive integers.

Factorial of zero is 1.

n! = n * (n-1)!

Example, 
[x] factorial(4) = 4*3*2*1 = 24
[x] factorial(5) = 5*4*3*2*1 = 120

[x] Big O = O(n)
[x] recursive Linear time complexity 
```

Solution:

```bash
const recursiveFactorialNumber = (n) => {

    if (n === 0) {
        return 1;
    }

    return n * recursiveFactorialNumber(n - 1);
}
```

## 7. Linear Search

Problem defination:

```bash
Give an array of 'n' elements and a target element 't', find the index of 't' in the array.
Return -1 if the target element is not found.

arr = [-5, 2, 10, 4, 6]

* if t = 10, output should be 2
* if t = 20, output should be -1

[x] Big O = O(n)
[x] Linear time complexity 
```

Solution:

```bash
const linearSearch = (arr, target) => {

    let indexOfTarget = -1;

    // *solution --------  1
    // arr.map((item, index) => {
    //     if (item === target) {
    //         indexOfTarget = index;
    //     }
    // })

    // *solution --------  2
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return indexOfTarget;

}
```

## 8. Binary Searh

Problem defination:

```bash
Give an sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
Return -1 if the target element is not found.

arr = [-5, 2, 10, 4, 6]

* if t = 10, output should be 2
* if t = 20, output should be -1

[x] Big O = O(logn)
```

Solution:

```bash
const binarySearch = (arr, target) => {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex;
        }

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}
```

## 9. Recursive Binary Search

Problem defination:

```bash
Give an sorted array of 'n' elements and a target element 't', find the index of 't' in the array.
Return -1 if the target element is not found.

arr = [-5, 2, 10, 4, 6]

* if t = 10, output should be 2
* if t = 20, output should be -1

[x] Big O = O(logn)
```

Solution:

```bash
const recursiveBinarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
}

const search = (arr, target, leftIndex, rightIndex) => {

    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex;
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, 0, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}
```

## 5. example

Problem defination:

```bash

```

Solution:

```bash

```