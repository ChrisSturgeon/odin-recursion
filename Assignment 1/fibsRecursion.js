function fibsRec(input, arr) {
  arr ? (arr = arr) : (arr = [0, 1]);
  if (arr.length === input) {
    return;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  fibsRec(input, arr);
  return arr;
}

console.log(fibsRec(100));
