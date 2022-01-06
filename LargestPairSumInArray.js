var task = [3, 5, 4]

var maxValues = [task[0]];

for (let a = 0; a < task.length; a++) {
   if (task[a] > maxValues[maxValues.length - 1]) {
      maxValues.push(task[a]);
      continue;
   }

   if (task[a] > maxValues[maxValues.length - 2]) {
      maxValues[maxValues.length - 2] = task[a];
   }
}

 return maxValues[maxValues.length - 1] + maxValues[maxValues.length - 2];