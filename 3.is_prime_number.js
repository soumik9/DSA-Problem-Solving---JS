// *is prime of a number function
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

isPrime(2);
isPrime(1);
isPrime(5);
isPrime(13);

/* 
 * Big O = O(n)
 * Linear time complexity 
*/