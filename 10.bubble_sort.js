// *bubble sort ascending function
const bubbleSort = (arr) => {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
}

const a = [-6, 20, 8, -2, 4];
bubbleSort(a);
console.log(a);

/* 
 * O(n^2) - Quadratic time complexity
*/