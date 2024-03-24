// *quick sort ascending function
const quickSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = numberToInsert;
    }
}

const a = [-6, 20, 8, -2, 4];
quickSort(a);
console.log(a);

/* 
 * O(n^2) - Quadratic time complexity
*/