function incrementer(nums) {
   for (let i = 0; i < nums.length; i++){
      nums[i] += (i+1); 
      if (nums[i] > 9){
         nums[i] = nums[i]%10;
      }
   }
   return nums;
}