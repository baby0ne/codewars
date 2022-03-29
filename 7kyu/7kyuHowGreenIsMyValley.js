function makeValley(arr) {
   const newArray = [...arr.sort((a, b) => b - a)];

   for (let i = 0, j = 0; j < arr.length / 2; i += 2, j++) {
      arr[j] = newArray[i];
      if (newArray[i + 1] !== undefined) arr[arr.length - (j + 1)] = newArray[i + 1];
   }

   return arr;
}