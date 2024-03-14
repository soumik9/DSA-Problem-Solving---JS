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

```

Solution:

```bash

```

## example

Problem defination:

```bash

```

Solution:

```bash

```