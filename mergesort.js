function split(array) {
  //splits an array in to two separate arrays
  const mid = Math.floor(array.length / 2);
  const first = array.slice(0, mid);
  const second = array.slice(mid, array.length);

  return [first, second];
}

function merge(arr1, arr2) {
  var finalArr = [];
  let arr1pt = 0;
  let arr2pt = 0;

  while (arr1pt < arr1.length || arr2pt < arr2.length) {
    if (arr2pt >= arr2.length || arr1[arr1pt] <= arr2[arr2pt]) {
      finalArr.push(arr1[arr1pt]);
      arr1pt++;
    } else {
      finalArr.push(arr2[arr2pt]);
      arr2pt++;
    }
  }
  return finalArr;
}

function mergeSort(array){
    if (array.length <= 1) return array;
    
    [left,right] = split(array);
    return merge(mergeSort(left),mergeSort(right));
}
