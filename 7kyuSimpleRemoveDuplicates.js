function solve(arr) {
   const last = arr.reduce((acc, n, i) => (acc[n] = i, acc), {});
   return arr.filter((n, i) => last[n] === i);
}