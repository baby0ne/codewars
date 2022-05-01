function chain(input, fs) {
   let startValue = input;

   for(let i = 0; i < fs.length; i++) {
      startValue = fs[i](startValue);
   }

   return startValue;
}


