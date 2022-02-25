const cannonsReady = (gunners) => {
   let lengthGunners = 0;
   let count = 0;
   for (var key in gunners) {
      ++lengthGunners;
      gunners[key] === 'aye' ? count++ : count;
   }

   return count === lengthGunners ? 'Fire!' : 'Shiver me timbers!'; 
}