function well(x) {
   let goodIdeasNumber = 0;
   for (let i = 0; i < x.length; i++){
      if (x[i] === 'good'){
         goodIdeasNumber++;
      }
   }
   if (goodIdeasNumber === 1 || goodIdeasNumber === 2){
      return 'Publish!';
   } else if (goodIdeasNumber === 0){
      return 'Fail!';
   } else {
      return 'I smell a series!';
   }
}