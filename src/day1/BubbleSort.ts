export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}

/* each iteration of bubble sort produces the largest element at the end of the array 
[1,3,7,4,2] N checks
[1,3,4,2,7] N - 1
[1,3,2,4,7] N - 2
[1,2,3,4,7] ... N - N + 1

n(n + 1) / 2 => O(n^2 + n) => O(n^2)

 
*/
