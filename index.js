// *cartesian product of two sets function
const cartesianProduct = (arr1, arr2) => {

    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }

    return result;
}



const a = [1, 2];
const b = [3, 4, 5];
console.log(cartesianProduct(a, b));

/* 
 * O(n^2) - quadratic time complexity (if both array length same)
 * O(mn) - depends on the array length
*/