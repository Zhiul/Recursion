function mergeSort(array) {
  if (array.length <= 1) return array;
  if (array.length === 2) return merge([array[0]], [array[1]]);

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  function merge(left, right) {
    const array = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      left[leftIndex] > right[rightIndex]
        ? array.push(right[rightIndex++])
        : array.push(left[leftIndex++]);
    }

    while (leftIndex < left.length) array.push(left[leftIndex++]);
    while (rightIndex < right.length) array.push(right[rightIndex++]);

    return array;
  }

  return merge(left, right);
}
