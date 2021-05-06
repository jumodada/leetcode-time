function quicksort(array,begin,end) {
    if(typeof begin ==='undefined') begin = 0
    if(typeof end ==='undefined') end = array.length-1
    if (end <= begin) return;
    let pivot = partition(array, begin, end);
    quicksort(array, begin, pivot - 1);
    quicksort(array, pivot + 1, end);
}

function partition(a,begin,end) {
    let pivot = end,count = begin
    for(let i =begin;i<end;i++){
        if(a[i]<a[pivot]){
            let temp = a[count]
            a[count] = a[i]
            a[i] = temp
            count++
        }
    }
    let temp = a[count]
    a[count] = a[pivot]
    a[pivot] = temp
    return count
}

const arr = [2,1,4,5,6,3,4,56,1,3,54]

quicksort(arr)

console.log(arr)

