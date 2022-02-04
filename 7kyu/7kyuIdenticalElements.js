function duplicateElements(m, n) {
   let bool = false;
   for (let i = 0; i < m.length; i++){
      for(let j = 0; j < n.length; j++){
         if (n[j] === m[i]){
            bool = true;
         }
      }
   }
   return bool;
}