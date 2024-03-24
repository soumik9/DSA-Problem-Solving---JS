// *linear search function
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

const a = [-5, 2, 10, 4, 6];

console.log(linearSearch(a, 10), `search of 10`);
console.log(linearSearch(a, 5), `search of 5`);
console.log(linearSearch(a, 6), `search of 6`);

/* 
 * O(n) - Linear
*/