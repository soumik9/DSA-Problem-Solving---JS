// *quick sort ascending function
const quickSort = arr => {
    if (arr.length < 2) return arr
    const pivot = arr[arr.length - 1]
    const left = []
    const right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) left.push(arr[i])
        if (arr[i] > pivot) right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const a = [8, 20, -2, 4, -6];
console.log(quickSort(a));

/* 
 * O(n^2) - Quadratic time complexity - worst case
 * O(nlogn) - avarage case
*/