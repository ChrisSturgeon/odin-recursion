function fibs(stop) {
  let arr = [0, 1];
  for (let i = 2; i < stop; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

console.log(fibs(8));
